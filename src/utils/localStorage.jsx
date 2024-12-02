const employees = [
    {
      id: 1,
      email: "employee1@example.com",
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
          failed: false
        },
        {
          title: "Task Title 2",
          description: "Description for task 2",
          date: "2024-03-10",
          category: "Testing",
          active: false,
          newTask: true,
          completed: false,
          failed: true
        },
        {
          title: "Task Title 3",
          description: "Description for task 3",
          date: "2024-05-20",
          category: "Management",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Task Title 1",
          description: "Description for task 1",
          date: "2024-02-12",
          category: "Design",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Task Title 2",
          description: "Description for task 2",
          date: "2024-04-25",
          category: "Support",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Task Title 1",
          description: "Description for task 1",
          date: "2024-03-30",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Task Title 2",
          description: "Description for task 2",
          date: "2024-06-01",
          category: "Development",
          active: false,
          newTask: true,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Task Title 1",
          description: "Description for task 1",
          date: "2024-01-18",
          category: "Management",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Task Title 2",
          description: "Description for task 2",
          date: "2024-07-10",
          category: "Support",
          active: true,
          newTask: true,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Task Title 1",
          description: "Description for task 1",
          date: "2024-02-01",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Task Title 2",
          description: "Description for task 2",
          date: "2024-08-05",
          category: "Testing",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
export  const setLocalStorage =() =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
    
}
export  const getLocalStorage = () =>{
  const employees =  JSON.parse(localStorage.getItem('employees'))
    const admin =  JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin)
   

}