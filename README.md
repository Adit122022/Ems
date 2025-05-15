# 🧑‍💼 Employee Management System (EMS)

> A simple and intuitive task management platform for employees and admins. Designed for productivity, built with simplicity.

[![Netlify Status](https://img.shields.io/netlify/your-netlify-deploy-id?style=flat-square&logo=netlify)](https://employeemanagementsytm.netlify.app/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)

🔗 **Live Demo:** [Click Here](https://employeemanagementsytm.netlify.app/)  
🔗 **GitHub Repo:** [Click here](https://github.com/Adit122022/Ems)

---

## 🚀 Overview

The **Employee Management System (EMS)** is a lightweight task management app for teams.  
Employees can manage tasks, and admins can monitor their progress.

---

## 🛠 Features

✅ Employee & Admin login/logout  
✅ Task creation, update, and deletion  
✅ Task categories: `Development`, `Testing`, `Design`, `Management`, `Support`  
✅ Task statuses: `Active`, `New`, `Completed`, `Failed`  
✅ LocalStorage-based data persistence  
✅ Admin panel to oversee employee activity  

---

## 📁 Project Structure

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

````

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Adit122022/Ems.git
cd Ems
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Application

```bash
npm run dev
```

---

## 💾 LocalStorage Structure

### 📌 Employees Data Format

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

### 📌 Admin Data Format

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

---

## 🧪 How to Use

1. 🔐 **Login** as an Employee or Admin
2. 📋 **Employees** can manage their assigned tasks
3. ✅ **Update task status** (Active, Completed, Failed)
4. 🧑‍💼 **Admins** can view and monitor employee task progress

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌱 Create your branch: `git checkout -b feature-branch`
3. 💾 Commit your changes: `git commit -m "add feature"`
4. 🚀 Push and create a Pull Request

---

## 📜 License

This project is **MIT Licensed**.
Use it freely, modify it creatively, and share it proudly.

---

> Built with ❤️ by [Aditya Sharma](https://github.com/Adit122022)


