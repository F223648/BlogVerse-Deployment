# BlogVerse - Containerization and Deployment

## Project Overview
BlogVerse is a full-stack blogging platform where users can register, log in, create blog posts, and add comments. This project demonstrates the containerization and orchestration of the application using Docker and Kubernetes, fulfilling the requirements for Assignment 2.

## Tools and Technologies Used
* **Frontend:** React.js, JavaScript, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Containerization:** Docker, Docker Compose
* **Orchestration:** Kubernetes (Local via Docker Desktop)

## Application Architecture
The application follows a standard 3-tier MERN stack architecture:
1. **Frontend (blogverse):** A React application serving the user interface, running on port 3000.
2. **Backend (backend):** A Node.js/Express REST API handling routing, business logic, and database connections, running on port 5000.
3. **Database (mongo):** A MongoDB database storing collections for users, posts, and comments.

## Docker Build and Run Instructions
To build and run the individual containers locally, use the following commands from the root directory:

**1. Build the images:**
```bash
docker build -t blogverse-backend:latest ./backend
docker build -t blogverse-frontend:latest ./blogverse

**2. Run the containers manually:**
docker run -d -p 5000:5000 --name backend-container blogverse-backend
docker run -d -p 3000:3000 --name frontend-container blogverse-frontend

**3. To run the entire multi-container application (Frontend, Backend, and Database) at once with automated network configuration and environment variables, use Docker Compose:**

# Start all services in the background
docker-compose up --build -d

# To stop and remove the containers
docker-compose down

Kubernetes Deployment Steps
The application is orchestrated using local Kubernetes. The deployment manifests are located in the k8s/ directory.

1. Build the local images for Kubernetes:

docker build -t blogverse-backend:latest ./backend
docker build -t blogverse-frontend:latest ./blogverse
2. Apply the Kubernetes manifests:

# 1. Setup Persistent Volume and Claim for MongoDB
kubectl apply -f k8s/mongo-pv-pvc.yaml

# 2. Deploy MongoDB and its Service
kubectl apply -f k8s/mongo-deployment.yaml

# 3. Deploy the Backend (3 Replicas) and Service
kubectl apply -f k8s/backend-deployment.yaml

# 4. Deploy the Frontend (3 Replicas) and Service
kubectl apply -f k8s/frontend-deployment.yaml

# 5. Apply Horizontal Pod Autoscalers
kubectl apply -f k8s/hpa.yaml
3. Verify the deployment:

kubectl get pods
kubectl get svc
Scaling Configuration
Horizontal Pod Autoscaling (HPA) is implemented for both the frontend and backend deployments to handle variable traffic loads automatically.

HPA Parameters:

Minimum Pods: 2

Maximum Pods: 5

CPU Utilization Target: 70%

When average CPU utilization across the pods exceeds 70%, Kubernetes will automatically spin up additional replicas (up to a maximum of 5) to handle the load.