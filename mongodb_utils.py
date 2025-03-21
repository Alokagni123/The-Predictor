
from pymongo import MongoClient
from datetime import datetime

# Connect to MongoDB (Replace with your MongoDB URI)
client = MongoClient("mongodb://localhost:27017")
db = client["the_predictor"]
collection = db["athlete_predictions"]

def store_data_to_mongodb(dataframe, original_filename):
    try:
        records = dataframe.to_dict(orient='records')
        for record in records:
            record['upload_time'] = datetime.utcnow()
            record['source_file'] = original_filename
        collection.insert_many(records)
        return True
    except Exception as e:
        print(f"MongoDB Insertion Error: {e}")
        return False
