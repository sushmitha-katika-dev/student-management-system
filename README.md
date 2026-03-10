# Student Management System

This is a Full-Stack Student Management System built with Spring Boot (Java) for the backend and React for the frontend.

## Technologies Used
- **Backend**: Java 17+, Spring Boot 3.x, Spring Data JPA, MySQL
- **Frontend**: React, Vite, Axios, Bootstrap, React Router DOM

---

## Project Structure
- `backend/`: Contains the Spring Boot REST API application.
- `frontend/`: Contains the React UI application.

---

## How to Run the Application

### Prerequisites
1. **Java 17 or higher** installed on your system.
2. **Node.js** (v18+) and npm installed.
3. **MySQL Server** installed and running locally.

### Step 1: Database Setup
1. Open your MySQL client (e.g., MySQL Workbench, command line).
2. Create a database named `sms`:
   ```sql
   CREATE DATABASE sms;
   ```
3. Update the database credentials (if your username/password are different from `root`/`root`) in `backend/src/main/resources/application.properties`.

### Step 2: Running the Backend (Spring Boot)
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Run the application using the Maven wrapper:
   - On Windows:
     ```bash
     mvnw.cmd spring-boot:run
     ```
   - On macOS/Linux:
     ```bash
     ./mvnw spring-boot:run
     ```
3. The backend server will start running on `http://localhost:8080`.

### Step 3: Running the Frontend (React)
1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the required Node dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL (typically `http://localhost:5173/`) in your web browser.

---

## Features
- **View All Students**: Display a tabular list of all students in the system.
- **Add Student**: Functionality to create a new student record (First Name, Last Name, Email).
- **Update Student**: Edit existing student details.
- **Delete Student**: Remove a student from the system.
