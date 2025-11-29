# 📘 Student Result Management System

A simple and efficient **React + JSON Server** application to **Add,
View, Edit, Delete**, and **View Details** of student results.\
This project was built as part of the **BridgeLabz React Assignment**
using:

-   React Components\
-   `useState` for state management\
-   JSON Server as backend\
-   Fetch API for CRUD operations

------------------------------------------------------------------------

## 🚀 Features

-   Add new students\
-   View all students\
-   Edit student details\
-   Delete students\
-   View complete student information\
-   Uses only `useState` (no useEffect)\
-   CRUD operations via JSON Server

------------------------------------------------------------------------

## 📂 Folder Structure

    student-result-app/
    │
    ├── db.json                       → JSON Server database (student records)
    │
    ├── src/
    │   ├── components/
    │   │     ├── StudentList.jsx     → Displays all students + actions
    │   │     ├── StudentForm.jsx     → Add / Edit student form
    │   │     └── StudentDetails.jsx  → Shows detailed student info
    │   │
    │   ├── services/
    │   │     └── studentService.js   → API functions (GET, POST, PUT, DELETE)
    │   │
    │   ├── App.jsx                   → Main app, states & view switching
    │   └── index.js                  → App entry point
    │
    ├── public/                       → Static assets
    ├── package.json                  → Dependencies + scripts
    └── node_modules/                 → Installed packages

------------------------------------------------------------------------

## 🛠 Technologies Used

-   React\
-   JavaScript\
-   CSS\
-   JSON Server\
-   Fetch API\
-   Node.js

------------------------------------------------------------------------

## ▶️ How to Run the Project

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/Disha4346/Student-Result-Management.git
cd Student-Result-Management
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Start JSON Server

``` bash
npx json-server --watch db.json --port 3001
```

### 4️⃣ Start the React App

``` bash
npm start
```

### 5️⃣ Open the App

Visit: http://localhost:3000

Backend: http://localhost:3001/students

------------------------------------------------------------------------

## 👩‍💻 Author

**Disha Gupta**

GitHub: https://github.com/Disha4346
