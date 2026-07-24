import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    instructor: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    lessons: {
      type: [lessonSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

courseSchema.set("toJSON", {
  versionKey: false,
});

const Course = mongoose.model("Course", courseSchema);

export default Course;