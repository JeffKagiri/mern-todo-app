# MERN Todo App - Azure Deployment

A full-stack Todo application built with the MERN stack (MongoDB, Express, React, Node.js) and deployed to Azure.

## 🚀 Features

- Create, read, update, delete todos
- Mark todos as complete/incomplete
- Real-time statistics
- Responsive design
- MongoDB cloud database
- Azure deployment ready

## 🛠️ Tech Stack

- **Frontend**: React, Axios, CSS3
- **Backend**: Express.js, Node.js
- **Database**: MongoDB Atlas
- **Deployment**: Azure App Service

## 📁 Project Structure

mern-todo-azure/
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── README.md
├── src/
│ └── server.js # Express server
├── .env # Environment variables
├── .gitignore
├── package.json # Backend dependencies
└── README.md # This file

text

## 🏃‍♂️ Local Development

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mern-todo-azure
   Install backend dependencies
   ```

bash
npm install
Install frontend dependencies

bash
cd client
npm install
cd ..
Set up environment variables

Create .env file in root

Add your MongoDB connection string:

text
MONGODB_URI=your_mongodb_connection_string
PORT=5001
Run the application

bash

# Terminal 1 - Backend

npm run dev

# Terminal 2 - Frontend

cd client
npm start
Access the app

Frontend: http://localhost:3000

Backend API: http://localhost:5001

🌐 Deployment on Azure
Prerequisites
Azure account

MongoDB Atlas database

GitHub repository

Deployment Steps:
Prepare for production

Ensure all environment variables are set

Test the production build locally:

bash
npm run build
npm start
Azure Portal Setup

Go to Azure Portal → App Services

Create new App Service

Runtime stack: Node.js

Operating System: Linux

Configuration

Set environment variables in Azure App Settings:

MONGODB_URI: Your MongoDB connection string

NODE_ENV: production

Deployment

Connect your GitHub repository

Enable continuous deployment

Azure will automatically build and deploy

Verify Deployment

Visit your Azure App Service URL

Test all API endpoints

Verify React frontend is served

📝 API Endpoints
GET /api/health - Health check and database status

GET /api/todos - Get all todos

POST /api/todos - Create new todo

PUT /api/todos/:id - Update todo completion status

DELETE /api/todos/:id - Delete todo
