# 🌦️ Nginx Reverse Proxy | Weather App with Monitoring (DevOps Project)

## 📖 Overview
This project demonstrates a **complete DevOps workflow** using a simple Weather web application built with:
- **Flask (Backend)** → serves weather data from the RapidAPI Weather API.
- **React (Frontend)** → displays weather info for selected cities.
- **Nginx** → acts as a reverse proxy to route requests between frontend & backend.
- **Prometheus & Grafana** → provide real-time monitoring & metrics visualization.
- **GitHub Actions** → automate testing, build, and CI/CD pipelines.

---

## 🏗️ Project Architecture

```
                        ┌────────────────────┐
                        │     Frontend       │
                        │  (React App, 8080) │
                        └────────┬───────────┘
                                 │
                                 ▼
                        ┌────────────────────┐
                        │       Nginx        │
                        │ Reverse Proxy (80) │
                        └────────┬───────────┘
                                 │
                                 ▼
                        ┌────────────────────┐
                        │     Backend        │
                        │   Flask API (5000) │
                        └────────┬───────────┘
                                 │
                                 ▼
                        ┌────────────────────┐
                        │  Prometheus (9090) │
                        ├────────────────────┤
                        │  Grafana (3000)    │
                        └────────────────────┘
```

---

## ⚙️ Tech Stack

| Layer        | Tool / Technology |
|---------------|-------------------|
| **Frontend**  | HTML, CSS, JS |
| **Backend**   | Flask, Python, Requests |
| **Proxy**     | Nginx |
| **Monitoring**| Prometheus, Grafana, Node Exporter |
| **CI/CD**     | GitHub Actions |
| **Containerization** | Docker, Docker Compose |

---

## 🚀 Features

✅ Reverse Proxy using **Nginx**  
✅ Fetch live weather data from **RapidAPI**  
✅ Dynamic frontend city selector with search  
✅ CI/CD using **GitHub Actions** with automated testing  
✅ **Monitoring** using Prometheus + Grafana  
✅ Fully containerized setup using **Docker Compose**

---

## 🧩 Folder Structure

```
2-Nginx-Reverse-Proxy/
│
├── backend/
│   ├── app.py
│   ├── tests/
│   │   └── test_weather.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── Dockerfile
│   ├── script.js
│   └── index.html
│
├── nginx/
│   └── nginx.conf
│
├── prometheus/
│   └── prometheus.yml
│
├── docker-compose.yml
└── .github/
    └── workflows/
        └── ci-cd.yml
```

---

## 🧰 Setup & Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/2-Nginx-Reverse-Proxy.git
cd 2-Nginx-Reverse-Proxy
```

### 2️⃣ Create a `.env` file in the root directory
```bash
RAPIDAPI_KEY=your_rapidapi_key_here
```

### 3️⃣ Build & Run with Docker Compose
```bash
docker compose up -d --build
```

### 4️⃣ Access the services
| Service | URL |
|----------|-----|
| Frontend | http://localhost:8080 |
| Backend (API) | http://localhost:5000/api/weather?city=Cairo |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3000 |

---

## 🧪 Run Tests (Backend)
To test the backend locally or in CI/CD:
```bash
cd backend
pytest -v
```

In CI/CD, tests run automatically via **GitHub Actions** before building Docker images.

---

## 🔭 Monitoring Setup

- **Prometheus** scrapes metrics from:
  - `backend:5000/metrics`
  - `node-exporter:9100`
- **Grafana** connects to Prometheus (Data Source URL: `http://prometheus:9090`)
- Use **Dashboard ID `1860`** (Node Exporter Full) for system metrics.

---

## 🧱 CI/CD Workflow

The GitHub Actions pipeline performs:

1. ✅ Code checkout  
2. 🧩 Install dependencies  
3. 🧪 Run unit tests (`pytest`)  
4. 🐳 Build Docker images (backend, frontend, nginx)  
5. 📦 Ready for deployment

Workflow file: `.github/workflows/ci-cd.yml`

---

## 📸 Example Screenshots

_(You can add screenshots from the frontend UI or Grafana dashboard here.)_

---

## 👨‍💻 Author

**Mohamed Sakr**  
DevOps Engineer 
📧 [workingsakr@gmail.com]  
🌐 [www.linkedin.com/in/mohamed-sakr-1b4986302]

---

## 🏁 Future Improvements

- Add Grafana Alerts → Slack/Discord  
- Deploy automatically to AWS ECS / EC2  

---

## 🪪 License
This project is licensed under the **MIT License** — feel free to use, modify, and share.
