# MERN Todo App - Azure Deployment

A full-stack Todo application built with the MERN stack (MongoDB, Express, React, Node.js) and deployed to Microsoft Azure.

## 🚀 Live Demo

**Access the live application here:**  
👉 https://mern-todo-app-h6ewaqendnhdeufz.southafricanorth-01.azurewebsites.net


## ✨ Features

- ✅ Create, read, update, delete todos
- ✅ Mark todos as complete/incomplete with one click
- ✅ Real-time statistics (total, pending, completed)
- ✅ Responsive design that works on all devices
- ✅ MongoDB cloud database for data persistence
- ✅ Clean, modern UI with smooth animations
- ✅ Error handling and user feedback

## 🛠️ Tech Stack

- **Frontend**: React, Axios, CSS3
- **Backend**: Express.js, Node.js
- **Database**: MongoDB Atlas
- **Deployment**: Azure App Service
- **Version Control**: GitHub

## 📁 Project Structure
mern-todo-app/
├── client/ # React frontend
│ ├── src/
│ │ ├── App.js # Main React component
│ │ ├── App.css # Styles
│ │ └── index.js # React entry point
│ ├── public/
│ └── package.json # Frontend dependencies
├── src/
│ └── server.js # Express server with API routes
├── .env # Environment variables (local)
├── .gitignore
├── package.json # Backend dependencies and scripts
└── README.md # This file

text

## 🏃‍♂️ Local Development

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/JeffKagiri/mern-todo-app.git
   cd mern-todo-app
Install backend dependencies

bash
npm install
Install frontend dependencies

bash
cd client
npm install
cd ..
Set up environment variables

Create .env file in root directory

Add your MongoDB connection string:

text
MONGODB_URI=your_mongodb_connection_string
PORT=5001
Run the application

bash
# Terminal 1 - Start backend server
npm run dev

# Terminal 2 - Start frontend development server
cd client
npm start
Access the application

Frontend: http://localhost:3000

Backend API: http://localhost:5001

🌐 Production Deployment
This app is deployed on Azure App Service with the following configuration:

Deployment Architecture
Frontend: React app built and served from Express

Backend: Node.js/Express API

Database: MongoDB Atlas (cloud)

Platform: Azure App Service (Linux)

Environment Variables (Production)
MONGODB_URI: MongoDB Atlas connection string

NODE_ENV: production

PORT: Automatically set by Azure

Build Process
bash
npm run build  # Builds React app and prepares for production
📝 API Endpoints
Method	Endpoint	Description
GET	/api/health	Health check and database status
GET	/api/todos	Get all todos
POST	/api/todos	Create new todo
PUT	/api/todos/:id	Update todo completion status
DELETE	/api/todos/:id	Delete todo
🎯 Usage
Adding a Todo: Type your task in the input field and click "Add Todo"

Completing a Todo: Click on the todo text or the circle button

Deleting a Todo: Click the trash icon (🗑️)

Clearing Completed: Use "Clear Completed" button to remove all completed todos

Statistics: View real-time counts of total, pending, and completed todos

🔧 Troubleshooting
Common Issues
Todos not saving:

Check MongoDB connection

Verify environment variables are set

Check browser console for API errors

App not loading:

Verify all dependencies are installed

Check if ports are available

Review Azure deployment logs

Database connection issues:

Confirm MongoDB Atlas IP whitelist includes Azure IPs

Verify connection string format

Local Development Issues
bash
# Clear dependencies and reinstall
rm -rf node_modules client/node_modules
npm install
cd client && npm install && cd ..

# Fix port conflicts
npx kill-port 3000 5001
🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Jeff Kagiri

GitHub: @JeffKagiri

Project Repository: mern-todo-app

🙏 Acknowledgments
React team for create-react-app

Express.js team

MongoDB Atlas for cloud database

Microsoft Azure for deployment platform

All contributors and testers
