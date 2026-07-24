import mongoose from "mongoose";

const liveSessionSchema = new mongoose.Schema(
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
    meetingLink: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    },
    scheduledAt: {
      type: Date,
      required: true,
      index: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["upcoming", "completed"],
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  }
);

liveSessionSchema.set("toJSON", {
  versionKey: false,
});

const LiveSession = mongoose.model("LiveSession", liveSessionSchema);

export default LiveSession;