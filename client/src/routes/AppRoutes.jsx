import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import AuthLayout from "@/components/auth/AuthLayout";

import ProtectedRoute from "@/routes/ProtectedRoute";
import GuestRoute from "@/routes/GuestRoute";

import Dashboard from "@/pages/Dashboard";
import Community from "@/pages/Community";
import Courses from "@/pages/Courses";
import CourseDetails from "@/pages/CourseDetails";
import CreateCourse from "@/pages/CreateCourse";
import EditCourse from "@/pages/EditCourse";
import LiveSessions from "@/pages/LiveSessions";
import LiveSessionDetails from "@/pages/LiveSessionDetails";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* Guest Routes */}
      <Route element={<GuestRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/community"
            element={<Community />}
          />

          <Route
            path="/courses"
            element={<Courses />}
          />

          {/* Create Course */}
          <Route
            path="/courses/new"
            element={<CreateCourse />}
          />

          <Route
            path="/courses/:id"
            element={<CourseDetails />}
          />

          <Route
            path="/courses/:id/edit"
            element={<EditCourse />}
          />

          <Route
            path="/live-sessions"
            element={<LiveSessions />}
          />

          <Route
            path="/live-sessions/:id"
            element={<LiveSessionDetails />}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;