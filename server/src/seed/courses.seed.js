const courses = [
  {
    title: "React Fundamentals",
    description:
      "Learn React from scratch by building modern and reusable user interfaces.",
    instructor: "John Doe",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    category: "Frontend",
    level: "Beginner",
    duration: "8 Hours",
    lessons: [
      {
        title: "Introduction to React",
        videoUrl: "https://example.com/react-intro",
        duration: "15 min",
      },
      {
        title: "JSX Basics",
        videoUrl: "https://example.com/react-jsx",
        duration: "20 min",
      },
      {
        title: "Components & Props",
        videoUrl: "https://example.com/react-components",
        duration: "28 min",
      },
      {
        title: "State & Events",
        videoUrl: "https://example.com/react-state",
        duration: "30 min",
      },
      {
        title: "Project Setup",
        videoUrl: "https://example.com/react-project",
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
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    category: "Backend",
    level: "Intermediate",
    duration: "10 Hours",
    lessons: [
      {
        title: "Node.js Basics",
        videoUrl: "https://example.com/node-intro",
        duration: "18 min",
      },
      {
        title: "Express Fundamentals",
        videoUrl: "https://example.com/express",
        duration: "25 min",
      },
      {
        title: "REST APIs",
        videoUrl: "https://example.com/rest",
        duration: "35 min",
      },
      {
        title: "Authentication",
        videoUrl: "https://example.com/auth",
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
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "Database",
    level: "Beginner",
    duration: "6 Hours",
    lessons: [
      {
        title: "Introduction to MongoDB",
        videoUrl: "https://example.com/mongo-intro",
        duration: "16 min",
      },
      {
        title: "Collections & Documents",
        videoUrl: "https://example.com/collections",
        duration: "20 min",
      },
      {
        title: "CRUD Operations",
        videoUrl: "https://example.com/crud",
        duration: "30 min",
      },
      {
        title: "Aggregation Pipeline",
        videoUrl: "https://example.com/aggregation",
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
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "Programming",
    level: "Intermediate",
    duration: "12 Hours",
    lessons: [
      {
        title: "ES6 Features",
        videoUrl: "https://example.com/es6",
        duration: "24 min",
      },
      {
        title: "Closures",
        videoUrl: "https://example.com/closures",
        duration: "26 min",
      },
      {
        title: "Promises",
        videoUrl: "https://example.com/promises",
        duration: "28 min",
      },
      {
        title: "Async Await",
        videoUrl: "https://example.com/async-await",
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
      "https://images.unsplash.com/photo-1605745341112-85968b19335b",
    category: "DevOps",
    level: "Advanced",
    duration: "9 Hours",
    lessons: [
      {
        title: "Docker Introduction",
        videoUrl: "https://example.com/docker",
        duration: "20 min",
      },
      {
        title: "Docker Images",
        videoUrl: "https://example.com/images",
        duration: "22 min",
      },
      {
        title: "Docker Compose",
        videoUrl: "https://example.com/compose",
        duration: "28 min",
      },
      {
        title: "Deploying Containers",
        videoUrl: "https://example.com/deploy",
        duration: "35 min",
      },
    ],
  },
];

export default courses;