
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LinearRegression
from sklearn.svm import SVR
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from statsmodels.tsa.arima.model import ARIMA

# ----------------- Preprocessing -----------------
def preprocess_data(df):
    df = df.copy()
    df.fillna(method='ffill', inplace=True)
    df.fillna(method='bfill', inplace=True)
    
    if 'Workload_Score' in df.columns and 'Injury_History_Score' in df.columns:
        df['Derived_Metric'] = df['Workload_Score'] * df['Injury_History_Score']
    
    return df

# ----------------- Risk Prediction -----------------
def predict_risk(df):
    features = df[['Workload_Score', 'Injury_History_Score', 'Derived_Metric']]
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(features)
    
    # Dummy model (replace with your trained model)
    rf_model = RandomForestClassifier()
    gb_model = GradientBoostingClassifier()
    
    y_dummy = np.random.randint(0, 2, len(X_scaled))  # Dummy target
    rf_model.fit(X_scaled, y_dummy)
    gb_model.fit(X_scaled, y_dummy)
    
    preds_rf = rf_model.predict(X_scaled)
    preds_gb = gb_model.predict(X_scaled)
    
    final_preds = np.where((preds_rf + preds_gb) > 0, "High Risk", "Low Risk")
    return final_preds

# ----------------- Recovery Timeline -----------------
def predict_recovery(df):
    features = df[['Workload_Score', 'Injury_History_Score']]
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(features)
    
    reg_model = LinearRegression()
    svr_model = SVR()
    
    y_dummy = np.random.randint(7, 30, len(X_scaled))
    reg_model.fit(X_scaled, y_dummy)
    svr_model.fit(X_scaled, y_dummy)
    
    preds_reg = reg_model.predict(X_scaled)
    preds_svr = svr_model.predict(X_scaled)
    
    recovery = np.mean([preds_reg, preds_svr], axis=0)
    return np.round(recovery, 2)

# ----------------- Injury Forecast -----------------
def forecast_injury(df):
    forecasts = []
    for i in range(len(df)):
        try:
            ts_data = np.cumsum(np.random.randint(0, 5, 30))  # Dummy workload trend
            model = ARIMA(ts_data, order=(1, 1, 1))
            model_fit = model.fit()
            forecast = model_fit.forecast(steps=7)
            forecasts.append(int(np.mean(forecast)))
        except:
            forecasts.append(0)
    return forecasts

# ----------------- Athlete Clustering -----------------
def cluster_athletes(df):
    features = df[['Workload_Score', 'Injury_History_Score']]
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(features)
    
    kmeans = KMeans(n_clusters=3, random_state=42)
    kmeans.fit(X_scaled)
    return kmeans.labels_
