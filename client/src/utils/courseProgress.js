function getStorageKey(userId) {
  return `course-progress-${userId}`;
}

export function getCourseProgress(userId) {
  if (!userId) return {};

  return JSON.parse(
    localStorage.getItem(getStorageKey(userId)) || "{}"
  );
}

export function getCompletedLessons(userId, courseId) {
  const progress = getCourseProgress(userId);
  return progress[courseId] || [];
}

export function toggleLessonCompletion(
  userId,
  courseId,
  lessonTitle
) {
  const progress = getCourseProgress(userId);

  const completed = progress[courseId] || [];

  const exists = completed.includes(lessonTitle);

  progress[courseId] = exists
    ? completed.filter(
        (lesson) => lesson !== lessonTitle
      )
    : [...completed, lessonTitle];

  localStorage.setItem(
    getStorageKey(userId),
    JSON.stringify(progress)
  );

  return progress[courseId];
}

export function getProgressPercentage(
  userId,
  courseId,
  totalLessons
) {
  if (!totalLessons) return 0;

  const completed = getCompletedLessons(
    userId,
    courseId
  );

  return Math.round(
    (completed.length / totalLessons) * 100
  );
}