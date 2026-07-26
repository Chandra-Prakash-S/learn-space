import CourseCard from "./CourseCard";

function CourseGrid({ courses }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          course={course}
        />
      ))}
    </div>
  );
}

export default CourseGrid;