const courses = [
  {
    title: "React Fundamentals",
    description:
      "Learn React from scratch by building modern and reusable user interfaces.",
    instructor: "John Doe",
    thumbnail:
      "/uploads/courses/react-fundamentals.png",
    category: "Frontend",
    level: "Beginner",
    duration: "8 Hours",
    lessons: [
      {
        title: "Introduction to React",
        videoUrl: "https://www.youtube.com/embed/QFaFIcGhPoM?si=24URJ6zOP0vfKRrv",
        duration: "15 min",
      },
      {
        title: "JSX Basics",
        videoUrl: "https://www.youtube.com/embed/7fPXI_MnBOY?si=oisJafSOHWnj2kfd",
        duration: "20 min",
      },
      {
        title: "Components & Props",
        videoUrl: "https://www.youtube.com/embed/Y2hgEGPzTZY?si=uOAyfAZnMHjQuHnp",
        duration: "28 min",
      },
      {
        title: "State & Events",
        videoUrl: "https://www.youtube.com/embed/4ORZ1GmjaMc?si=FeOVVfBaqvAeoISh",
        duration: "30 min",
      },
      {
        title: "Project Setup",
        videoUrl: "https://www.youtube.com/embed/VZ6Qpe3sjhM?si=u8V-3ostkZDLfOZA",
        duration: "25 min",
      },
    ],
  },

  {
    title: "Node.js & Express API",
    description:
      "Build scalable REST APIs using Node.js, Express and MongoDB.",
    instructor: "Sarah Wilson",
    thumbnail:
      "/uploads/courses/node-express-api.png",
    category: "Backend",
    level: "Intermediate",
    duration: "10 Hours",
    lessons: [
      {
        title: "Node.js Basics",
        videoUrl: "https://www.youtube.com/embed/ENrzD9HAZK4?si=Np4maBzlhGN7XXaw",
        duration: "18 min",
      },
      {
        title: "Express Fundamentals",
        videoUrl: "https://www.youtube.com/embed/SccSCuHhOw0?si=0sq9T4f4CvfO3KxG",
        duration: "25 min",
      },
      {
        title: "REST APIs",
        videoUrl: "https://www.youtube.com/embed/lsMQRaeKNDk?si=c01OyFqb2yKTIOFb",
        duration: "35 min",
      },
      {
        title: "Authentication",
        videoUrl: "https://www.youtube.com/embed/xJA8tP74KD0?si=iYWsKbuPy-6bvpLk",
        duration: "32 min",
      },
    ],
  },

  {
    title: "MongoDB Essentials",
    description:
      "Understand NoSQL databases and design efficient MongoDB schemas.",
    instructor: "David Lee",
    thumbnail:
      "/uploads/courses/mongodb-essentials.png",
    category: "Database",
    level: "Beginner",
    duration: "6 Hours",
    lessons: [
      {
        title: "Introduction to MongoDB",
        videoUrl: "https://www.youtube.com/embed/Puc2EjkdycU?si=xhkEJgOf3BRKfQML",
        duration: "16 min",
      },
      {
        title: "Collections & Documents",
        videoUrl: "https://www.youtube.com/embed/1Ibys9sWJS8?si=Cyo_uwOfJ7xTY7UR",
        duration: "20 min",
      },
      {
        title: "CRUD Operations",
        videoUrl: "https://www.youtube.com/embed/l0QWVHwD5rU?si=XnG7czXjD7sYs1pD",
        duration: "30 min",
      },
      {
        title: "Aggregation Pipeline",
        videoUrl: "https://www.youtube.com/embed/-ijw7mzJLVE?si=7y_RAvNTkWltf39I",
        duration: "35 min",
      },
    ],
  },

  {
    title: "JavaScript Mastery",
    description:
      "Master modern JavaScript concepts required for frontend and backend development.",
    instructor: "Michael Brown",
    thumbnail:
      "/uploads/courses/javascript-mastery.png",
    category: "Programming",
    level: "Intermediate",
    duration: "12 Hours",
    lessons: [
      {
        title: "ES6 Features",
        videoUrl: "https://www.youtube.com/embed/NCwa_xi0Uuc?si=cpoCQF8lvOonZ03A",
        duration: "24 min",
      },
      {
        title: "Closures",
        videoUrl: "https://www.youtube.com/embed/qikxEIxsXco?si=AzlMZ8vF6_h1U_4m",
        duration: "26 min",
      },
      {
        title: "Promises",
        videoUrl: "https://www.youtube.com/embed/DHvZLI7Db8E?si=wGB1meY6LMdeq3l9",
        duration: "28 min",
      },
      {
        title: "Async Await",
        videoUrl: "https://www.youtube.com/embed/9j1dZwFEJ-c?si=pbqTcAtVwEwSeCG0",
        duration: "30 min",
      },
    ],
  },

  {
    title: "Docker for Developers",
    description:
      "Containerize applications and simplify deployments using Docker.",
    instructor: "Emma Johnson",
    thumbnail:
      "/uploads/courses/docker-for-developers.png",
    category: "DevOps",
    level: "Advanced",
    duration: "9 Hours",
    lessons: [
      {
        title: "Docker Introduction",
        videoUrl: "https://www.youtube.com/embed/17Bl31rlnRM?si=dar8YI_7Mh8ikpgu",
        duration: "20 min",
      },
      {
        title: "Docker Images",
        videoUrl: "https://www.youtube.com/embed/X2hpxp3Kq6A?si=iy9dUDat-A-Py5t_",
        duration: "22 min",
      },
      {
        title: "Docker Compose",
        videoUrl: "https://www.youtube.com/embed/HG6yIjZapSA?si=I1Su4p7Zzi1MEUlN",
        duration: "28 min",
      },
      {
        title: "Deploying Containers",
        videoUrl: "https://www.youtube.com/embed/cw34KMPSt4k?si=lTZPuE8VuAtTwZt7",
        duration: "35 min",
      },
    ],
  },
];

export default courses;