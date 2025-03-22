# FastAPI backend with latest-results route and ML pipeline integration
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"msg": "Hello from FastAPI"}
