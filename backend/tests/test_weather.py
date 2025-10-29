import sys
import os
import pytest


sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app

@pytest.fixture
def client():
    app.testing = True
    with app.test_client() as client:
        yield client

def test_weather_endpoint(client):

    response = client.get('/api/weather?city=Cairo')
    if response.status_code == 404:
        response = client.get('/weather?city=Cairo')  # fallback test

    assert response.status_code == 200, f"Endpoint returned {response.status_code} instead of 200"
    data = response.get_json()
    assert "city" in data
    assert "temperature" in data
