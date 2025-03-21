
# FastAPI Backend for The Predictor ML Pipeline (with MongoDB)

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from io import BytesIO
from typing import List

from ml_pipeline import preprocess_data, predict_risk, predict_recovery, forecast_injury, cluster_athletes
from mongodb_utils import store_data_to_mongodb

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_data(file: UploadFile = File(...)):
    try:
        if file.filename.endswith(".csv"):
            df = pd.read_csv(BytesIO(await file.read()))
        elif file.filename.endswith(".xlsx"):
            df = pd.read_excel(BytesIO(await file.read()))
        else:
            return {"message": "Unsupported file format."}

        preprocessed_df = preprocess_data(df)
        risk_preds = predict_risk(preprocessed_df)
        recovery_preds = predict_recovery(preprocessed_df)
        forecast = forecast_injury(preprocessed_df)
        clusters = cluster_athletes(preprocessed_df)

        preprocessed_df['Risk_Level'] = risk_preds
        preprocessed_df['Recovery_Time(days)'] = recovery_preds
        preprocessed_df['Injury_Forecast'] = forecast
        preprocessed_df['Athlete_Cluster'] = clusters

        preprocessed_df.to_csv("processed_output.csv", index=False)

        # Store in MongoDB
        store_data_to_mongodb(preprocessed_df, file.filename)

        return {"message": "File processed and stored successfully!", "status": "success"}

    except Exception as e:
        return {"message": f"Processing failed: {str(e)}", "status": "error"}
