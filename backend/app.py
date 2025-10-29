import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("RAPIDAPI_KEY")
metrics = PrometheusMetrics(app)
metrics.info('app_info', 'Application info', version='1.0.0')

@app.route("/weather")
def get_weather():
    city = request.args.get("city", "London")

    url = "https://weatherapi-com.p.rapidapi.com/current.json"
    headers = {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": API_KEY
    }
    params = {"q": city}

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch weather data"}), response.status_code

    data = response.json()
    result = {
        "city": data["location"]["name"],
        "country": data["location"]["country"],
        "temperature": data["current"]["temp_c"],
        "condition": data["current"]["condition"]["text"]
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
