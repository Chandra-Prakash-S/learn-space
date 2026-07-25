import { useMemo, useState } from "react";
import { BookOpen, Search } from "lucide-react";

import CourseGrid from "@/components/courses/CourseGrid";
import CourseSkeleton from "@/components/courses/CourseSkeleton";
import EmptyCourses from "@/components/courses/EmptyCourses";

import { useCourses } from "@/hooks/courses/useCourses";

function Courses() {
  const { data, isLoading } = useCourses();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const courses = data?.data || [];

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const levels = [
    "All",
    ...new Set(courses.map((course) => course.level)),
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      const matchesLevel =
        level === "All" || course.level === level;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, searchTerm, category, level]);

  // ✅ Hooks are finished before any conditional return
  if (isLoading) {
    return <CourseSkeleton />;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <BookOpen className="h-7 w-7 text-indigo-400" />

          <h1 className="text-3xl font-bold text-white">
            Course Library
          </h1>
        </div>

        <p className="text-slate-400">
          Browse and continue your learning journey.
        </p>

        <div>
          <span className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
            {courses.length}{" "}
            {courses.length === 1 ? "Course" : "Courses"} Available
          </span>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full min-w-0 rounded-lg border border-slate-700 bg-slate-900 py-2 pl-10 pr-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none transition focus:border-indigo-500"
        >
          <option value="All">All Categories</option>

          {categories
            .filter((item) => item !== "All")
            .map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>

        {/* Level Filter */}
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none transition focus:border-indigo-500"
        >
          <option value="All">All Levels</option>

          {levels
            .filter((item) => item !== "All")
            .map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
            
        {/* Clear */}
        <button
          onClick={() => {
            setSearchTerm("");
            setCategory("All");
            setLevel("All");
          }}
          className="w-full rounded-lg border border-indigo-500 bg-indigo-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 md:w-auto"
        >
          Clear
        </button>
      </div>

      {courses.length === 0 ? (
        <EmptyCourses />
      ) : filteredCourses.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 py-16 text-center">
          <Search className="mb-4 h-12 w-12 text-slate-500" />

          <h3 className="text-xl font-semibold text-white">
            No matching courses found
          </h3>

          <p className="mt-2 text-slate-400">
            Try changing your search or filter criteria.
          </p>
        </div>
      ) : (
        <CourseGrid courses={filteredCourses} />
      )}
    </div>
  );
}

export default Courses;