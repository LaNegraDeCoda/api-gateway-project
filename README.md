# API Gateway Project

This project sets up a secure API Gateway using **NGINX** as a reverse proxy with SSL and a **Node.js API** backend. It uses **Docker Compose** to orchestrate containers.

## 📁 Project Structure

api-gateway-project/
│
├── Dockerfile              # Builds the Node.js API container
├── docker-compose.yml      # Defines and runs multi-container Docker apps
├── nginx.conf              # NGINX configuration for SSL + reverse proxy
├── certs/                  # Contains self-signed SSL certificate and key
│   ├── self.crt
│   └── self.key
├── src/
│   └── server.js           # Main entry point for your Node.js API (CommonJS)
└── README.md               # Project documentation



## ✅ Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Node.js (for local testing if needed)



## 🛠️ Setup Instructions

### 1. Create Self-Signed Certificates

Run the following to generate test certs (or provide your own):


mkdir certs
openssl req -x509 -newkey rsa:4096 -nodes -out certs/self.crt -keyout certs/self.key -days 365


Use `localhost` as the Common Name (CN) when prompted.


### 2. Build and Start the Project

Run these commands from the root directory:

docker compose down --volumes --remove-orphans
docker compose build
docker compose up


## 🌐 Accessing the API

Once running, access your API securely at:

https://localhost/api/stable


https://localhost/api/poppy


**Note**: Your browser may warn you about the self-signed certificate. Accept the risk for development purposes.


## 🔧 Troubleshooting

* `502 Bad Gateway`: Ensure the `api` container is running and not crashing on startup.
* "require is not defined": This project uses **CommonJS** to avoid ES module compatibility issues in Node.js.


## 🧼 Stopping the Project


docker compose down


## 📚 Notes

* API routes are defined in `server.js`.
* This project uses `CommonJS` (`require`/`module.exports`) for simplicity and compatibility.
* For production, use valid SSL certificates (e.g., from Let's Encrypt) and adjust security settings accordingly.


## 🙅🏽‍♀️ Author

Created by \DaCoda BlakHeart — built for simplicity, stability, and sanity.


# api-gateway-project
API Gateway
