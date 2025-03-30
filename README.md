# Employee Management System (EMS)

## 🚀 Overview
The **Employee Management System (EMS)** is a simple task management platform for employees and admins. Employees can manage their tasks, while admins can oversee and monitor them.

## 🛠 Features
- Employee authentication (login/logout)
- Task management (create, update, delete tasks)
- Task categories: Development, Testing, Design, Management, Support
- Task status tracking: Active, New, Completed, Failed
- LocalStorage-based data persistence
- Admin panel for overseeing employee activities

## 📂 Project Structure
```
EMS/
│── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── TaskList.jsx
│   │   ├── AdminPanel.jsx
│   ├── App.jsx
│   ├── main.jsx
│── public/
│   ├── index.html
│── README.md
│── package.json
```

## ⚡ Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Adit122022/Ems.git
cd Ems
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Application
```sh
npm run dev
```

## 🗂 LocalStorage Data Structure
The system uses `localStorage` to store employees, tasks, and admin data.

### 📌 Employees Data
```js
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Task Title 1",
        description: "Description for task 1",
        date: "2024-01-15",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: "active1"
      },
      {
        title: "Task Title 2",
        description: "Description for task 2",
        date: "2024-03-10",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskNumber: "newTask1"
      }
    ]
  }
];
```

### 📌 Admin Data
```js
const admin = [
  {
    id: 1,
    firstName: "admin",
    email: "admin@example.com",
    password: "123"
  }
];
```

## 🚀 How to Use
1. **Login** as an Employee/Admin
2. **View Assigned Tasks** on the dashboard
3. **Update Task Status** (Active, Completed, Failed)
4. **Admins** can monitor employee progress

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push the changes and create a Pull Request

## 📜 License
This project is **MIT Licensed**. Feel free to use and modify it as needed.

---
🔗 **GitHub Repository**: [Ems](https://github.com/Adit122022/Ems)
🔗 **Live  Preview**: [Ems](https://employeemanagementsytm.netlify.app/)
