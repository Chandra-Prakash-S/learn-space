import { useEffect } from "react";
import { Loader2, Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  courseSchema,
  defaultCourseValues,
} from "@/schemas/courseSchema";

function CourseForm({
  defaultValues = defaultCourseValues,
  onSubmit,
  isSubmitting = false,
  submitText = "Create Course",
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Course Title</Label>

        <Input
          id="title"
          placeholder="React Masterclass"
          disabled={isSubmitting}
          {...register("title")}
        />

        {errors.title && (
          <p className="text-sm font-medium text-red-500">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">
          Description
        </Label>

        <Textarea
          id="description"
          rows={5}
          placeholder="Write a short course description..."
          disabled={isSubmitting}
          {...register("description")}
        />

        {errors.description && (
          <p className="text-sm font-medium text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Thumbnail */}
      <div className="space-y-2">
        <Label htmlFor="thumbnail">
          Thumbnail URL
        </Label>

        <Input
          id="thumbnail"
          placeholder="https://example.com/image.jpg"
          disabled={isSubmitting}
          {...register("thumbnail")}
        />

        {errors.thumbnail && (
          <p className="text-sm font-medium text-red-500">
            {errors.thumbnail.message}
          </p>
        )}
      </div>

      {/* Category + Level */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="category">
            Category
          </Label>

          <Input
            id="category"
            placeholder="Web Development"
            disabled={isSubmitting}
            {...register("category")}
          />

          {errors.category && (
            <p className="text-sm font-medium text-red-500">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="level">
            Level
          </Label>

          <select
            id="level"
            disabled={isSubmitting}
            {...register("level")}
            className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition focus:border-indigo-500"
          >
            <option value="Beginner">
              Beginner
            </option>

            <option value="Intermediate">
              Intermediate
            </option>

            <option value="Advanced">
              Advanced
            </option>
          </select>

          {errors.level && (
            <p className="text-sm font-medium text-red-500">
              {errors.level.message}
            </p>
          )}
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-2">
        <Label htmlFor="duration">
          Duration
        </Label>

        <Input
          id="duration"
          placeholder="12 Hours"
          disabled={isSubmitting}
          {...register("duration")}
        />

        {errors.duration && (
          <p className="text-sm font-medium text-red-500">
            {errors.duration.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2 bg-indigo-600 hover:bg-indigo-500"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 shrink-0 animate-spin" />
            {submitText === "Update Course"
              ? "Updating Course..."
              : "Creating Course..."}
          </>
        ) : (
          <>
            <Plus className="mr-2 h-4 w-4 shrink-0" />
            {submitText}
          </>
        )}
      </Button>
    </form>
  );
}

export default CourseForm;