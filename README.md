# 🚗 GoRentCars – React Application CI/CD Pipeline with Jenkins, SonarQube & Docker

This repository demonstrates a **complete CI/CD pipeline** for the **GoRentCars car rental web application**, built using **React.js** and deployed using **Jenkins, SonarQube, Docker, and AWS EC2**.

Every code commit triggers **automated build, code quality analysis, Docker image creation, and deployment**, following real-world DevOps best practices.

---

## 🏗️ Architecture Overview

```
Developer → GitHub → Jenkins → SonarQube → Docker → AWS EC2 → Browser
```

---

## 🔁 CI/CD Workflow

1. Developer pushes code to GitHub  
2. Jenkins automatically pulls the latest source code  
3. SonarQube performs static code quality analysis  
4. React application is built (`npm run build`)  
5. Docker image is created using Nginx  
6. Container is deployed on AWS EC2  
7. Users access the live car rental website  

---

## 🧰 Tech Stack

| Category | Tool / Technology |
|--------|------------------|
| Frontend | React.js |
| Package Manager | npm |
| Version Control | GitHub |
| CI/CD | Jenkins |
| Code Quality | SonarQube |
| Containerization | Docker |
| Web Server | Nginx (Alpine) |
| Cloud Platform | AWS EC2 (Ubuntu) |

---

## 🗂️ Project Structure

```
go_rent_cars/
│
├── Dockerfile
├── .dockerignore
├── Jenkinsfile
├── package.json
├── package-lock.json
│
├── public/
├── src/
│
└── README.md
```

---

## 🐳 Dockerfile (React Production Build)

```dockerfile
# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🧪 SonarQube Code Analysis

✔ Quality Gate: PASSED  
✔ No critical bugs  
✔ No security vulnerabilities  

Project Key: `GoRentCars-React`

---

## ⚙️ Jenkins Deployment Commands

```bash
npm install
npm run build
```

```bash
scp -r ./* ubuntu@<DOCKER_EC2_IP>:~/go_rent_cars/
```

```bash
cd go_rent_cars
docker build -t go_rent_cars_app .
docker stop go_rent_cars || true
docker rm go_rent_cars || true
docker run -d -p 8090:80 --name go_rent_cars go_rent_cars_app
```

---

## 🌐 Access the Application

```
http://<AWS_EC2_PUBLIC_IP>:8090
```

---

## 🔐 AWS Security Group Ports

| Service | Port |
|-------|------|
| Jenkins | 8080 |
| SonarQube | 9000 |
| React App | 8090 |
| SSH | 22 |

---

## 📌 Key Learnings

- CI/CD automation for React applications  
- SonarQube quality enforcement  
- Dockerized production deployments  
- Jenkins-based DevOps workflow  

---

### 👨‍💻 Author
**Sanket Sangmiskar**
