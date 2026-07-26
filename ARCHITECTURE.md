# 🏗️ LearnSpace Architecture

## Overview

LearnSpace is a full-stack Course Learning Application built using the MERN stack. The platform enables users to browse courses, watch recorded video lessons, engage with the community through posts and comments, and explore upcoming live learning sessions.

The application follows a modular and layered architecture with a clear separation between presentation, business logic, and data access. This approach improves maintainability, scalability, and code reusability.

---

# High-Level Architecture

```
                    +--------------------------+
                    |      React Client        |
                    |--------------------------|
                    | React Router             |
                    | React Query              |
                    | Axios                    |
                    | Tailwind CSS             |
                    | shadcn/ui                |
                    +-----------+--------------+
                                |
                     REST API (HTTP)
                                |
                                ▼
                    +--------------------------+
                    |     Express Server       |
                    |--------------------------|
                    | Routes                   |
                    | Controllers              |
                    | Services                 |
                    | Middleware               |
                    | Validators               |
                    +-----------+--------------+
                                |
                           Mongoose ODM
                                |
                                ▼
                    +--------------------------+
                    |      MongoDB Atlas       |
                    +--------------------------+
```

---

# Project Structure

```
LearnSpace
│
├── client
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── lib
│   │   ├── pages
│   │   ├── providers
│   │   ├── routes
│   │   ├── schemas
│   │   ├── services
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── public
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── seed
│   │   ├── services
│   │   ├── utils
│   │   ├── validators
│   │   └── app.js
│   │
│   └── server.js
│
├── README.md
└── ARCHITECTURE.md
```

---

# Frontend Architecture

The frontend is built using React and follows a feature-based organization to keep related files together and improve maintainability.

### Folder Responsibilities

| Folder | Responsibility |
|---------|----------------|
| **api** | API configuration and Axios instances |
| **assets** | Static assets such as images and icons |
| **components** | Reusable UI components organized by feature |
| **hooks** | Custom React hooks for reusable logic |
| **layouts** | Shared page layouts and navigation |
| **lib** | Shared helper libraries and utilities |
| **pages** | Route-level pages |
| **providers** | Global providers (React Query, Context, etc.) |
| **routes** | Application routing configuration |
| **schemas** | Form validation schemas |
| **services** | API service functions |
| **utils** | Utility/helper functions |

### Frontend Responsibilities

- Client-side routing with React Router
- Server state management using React Query
- Form validation
- Responsive UI
- API communication through Axios
- Reusable component architecture

---

# Backend Architecture

The backend follows a layered architecture that separates routing, business logic, validation, and database access.

### Folder Responsibilities

| Folder | Responsibility |
|---------|----------------|
| **config** | Database and environment configuration |
| **controllers** | Business logic for each endpoint |
| **middleware** | Authentication and request middleware |
| **models** | MongoDB schemas using Mongoose |
| **routes** | REST API endpoint definitions |
| **seed** | Database seed scripts |
| **services** | Reusable business logic |
| **utils** | Helper functions |
| **validators** | Request validation |

---

# Request Flow

```
Client Request
      │
      ▼
Express Route
      │
      ▼
Validation
      │
      ▼
Authentication Middleware
      │
      ▼
Controller
      │
      ▼
Service Layer
      │
      ▼
Mongoose Model
      │
      ▼
MongoDB Atlas
```

Each layer has a single responsibility, making the codebase easier to test and extend.

---

# Database Design

MongoDB Atlas is used as the primary database.

### User

- Authentication
- Profile information

### Course

- Title
- Description
- Category
- Level
- Thumbnail
- Lessons

### Community Post

- Author
- Content
- Likes
- Comments
- Created At

### Live Session

- Title
- Description
- Instructor
- Scheduled Date
- Meeting Link
- Status

---

# Authentication

Authentication is implemented using JSON Web Tokens (JWT).

Authentication flow:

1. User logs in.
2. Credentials are validated.
3. JWT is generated.
4. Token is returned to the client.
5. Protected routes verify the token using authentication middleware.

This enables secure and stateless authentication.

---

# API Design

The backend exposes RESTful APIs grouped by feature.

```
/api/auth
/api/posts
/api/courses
/api/live-sessions
```

Each resource has dedicated routes, controllers, and models, improving modularity and maintainability.

---

# State Management

LearnSpace uses **TanStack React Query** for server-state management.

Benefits include:

- API caching
- Automatic refetching
- Background synchronization
- Loading and error state management
- Reduced boilerplate

Component-specific UI state is managed using React Hooks.

---

# UI Architecture

The frontend UI is built with:

- Tailwind CSS
- shadcn/ui
- Lucide React Icons

Design principles include:

- Responsive layouts
- Consistent spacing
- Reusable UI components
- Clean navigation
- Modern learning platform interface

---

# Key Design Decisions

### Modular Feature-Based Structure

Frontend code is organized by feature to improve scalability and maintainability.

### Layered Backend Architecture

Business logic, routing, validation, and database access are separated into dedicated layers.

### React Query

Chosen for efficient server-state management and API caching.

### RESTful APIs

Provides a clean separation between frontend and backend.

### JWT Authentication

Ensures secure access to protected resources using stateless authentication.

### Embedded YouTube Lessons

Video lessons are embedded from YouTube rather than storing video files, reducing storage requirements while providing a smooth learning experience.

### Reusable Components

Reusable UI components minimize duplication and maintain consistency across the application.

---

# Scalability Considerations

The current architecture supports future enhancements with minimal structural changes.

Potential improvements include:

- Role-Based Access Control (RBAC)
- Course enrollment
- Real-time notifications
- Live video conferencing
- File uploads
- Course certificates
- Pagination
- Search indexing
- Analytics dashboard
- Dark mode

---

# Conclusion

LearnSpace follows a clean, modular MERN architecture with clear separation of responsibilities across the frontend, backend, and database layers. The architecture emphasizes scalability, maintainability, reusable components, and a modern user experience while providing a solid foundation for future enhancements.
