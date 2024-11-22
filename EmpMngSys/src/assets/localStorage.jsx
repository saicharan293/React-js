const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Prepare Report",
          taskDescription: "Prepare the financial report for Q3.",
          taskDate: "2024-11-22",
          category: "Finance",
          active: true,
          newTask: true,
          completed: false
        },
        {
          taskTitle: "Team Meeting",
          taskDescription: "Participate in the weekly team meeting.",
          taskDate: "2024-11-23",
          category: "Management",
          active: true,
          newTask: false,
          completed: false
        },
        {
          taskTitle: "Code Review",
          taskDescription: "Review the code changes in Project X.",
          taskDate: "2024-11-24",
          category: "Development",
          active: false,
          newTask: false,
          completed: true
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Client Presentation",
          taskDescription: "Prepare slides for the upcoming client meeting.",
          taskDate: "2024-11-25",
          category: "Sales",
          active: true,
          newTask: true,
          completed: false
        },
        {
          taskTitle: "Update Documentation",
          taskDescription: "Update the product documentation to include the new feature.",
          taskDate: "2024-11-20",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true
        },
        {
          taskTitle: "Testing Module",
          taskDescription: "Run test cases for Module Y.",
          taskDate: "2024-11-19",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Fix Bugs",
          taskDescription: "Resolve reported issues in the system.",
          taskDate: "2024-11-18",
          category: "Development",
          active: true,
          newTask: false,
          completed: false
        },
        {
          taskTitle: "Create Wireframes",
          taskDescription: "Design wireframes for the new product feature.",
          taskDate: "2024-11-22",
          category: "Design",
          active: false,
          newTask: true,
          completed: false
        },
        {
          taskTitle: "Deploy App",
          taskDescription: "Deploy the latest version of the app to production.",
          taskDate: "2024-11-24",
          category: "Operations",
          active: true,
          newTask: false,
          completed: true
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Database Backup",
          taskDescription: "Perform routine database backup.",
          taskDate: "2024-11-21",
          category: "IT",
          active: true,
          newTask: true,
          completed: false
        },
        {
          taskTitle: "Code Refactor",
          taskDescription: "Refactor the authentication module.",
          taskDate: "2024-11-20",
          category: "Development",
          active: false,
          newTask: false,
          completed: true
        },
        {
          taskTitle: "Research AI Tools",
          taskDescription: "Look into AI tools for automation.",
          taskDate: "2024-11-23",
          category: "Research",
          active: true,
          newTask: true,
          completed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design Logo",
          taskDescription: "Create a new logo for the rebranding project.",
          taskDate: "2024-11-22",
          category: "Design",
          active: true,
          newTask: false,
          completed: false
        },
        {
          taskTitle: "Server Maintenance",
          taskDescription: "Perform maintenance on the main server.",
          taskDate: "2024-11-18",
          category: "Operations",
          active: false,
          newTask: false,
          completed: true
        },
        {
          taskTitle: "Write Blog Post",
          taskDescription: "Write a new blog post for the company website.",
          taskDate: "2024-11-19",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false
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

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}