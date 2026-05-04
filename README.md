# Academic Monitoring & Evaluation System

A full-stack web application built with React (Vite), Express.js, MongoDB, and Mongoose for tracking student grades and generating academic reports.

## Setup Instructions

1. **Prerequisites**: Ensure you have Node.js and MongoDB installed and running.
2. **Install Root Dependencies**:
   ```bash
   cd ./academic-monitor
   npm install
   ```
3. **Install Server Dependencies**:
   ```bash
   cd server
   npm install
   ```
4. **Install Client Dependencies**:
   ```bash
   cd ../client
   npm install
   ```
5. **Environment Configuration**:
   Create .env file at
   ``` server/.env ``` and update PORT and MONGO_URI variables.
## Running the Application

From the root directory (`academic-monitor/`), you can start both frontend and backend concurrently:

```bash
npm run dev
```

This will run:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

by default if PORT is not updated or absent in .env file.

## Features
- Manage Students (Add & View)
- Manage Subjects (Add & View)
- Manage Grades (Add & View)
- View Dashboard with quick stats
- View Aggregate Reports of Average Marks per Subject
