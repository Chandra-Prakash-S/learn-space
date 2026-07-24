import {
  LayoutDashboard,
  Users,
  BookOpen,
  Video,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Community",
    path: "/community",
    icon: Users,
  },
  {
    label: "Courses",
    path: "/courses",
    icon: BookOpen,
  },
  {
    label: "Live Sessions",
    path: "/live-sessions",
    icon: Video,
  },
];