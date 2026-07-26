import mongoose from "mongoose";
import LiveSession from "../models/LiveSession.js";

// Get all live sessions
const getLiveSessions = async (req, res) => {
  try {
    const liveSessions = await LiveSession.find()
      .select(
        [
          "title",
          "description",
          "instructor",
          "meetingLink",
          "scheduledAt",
          "duration",
          "status",
        ].join(" ")
      )
      .sort({ scheduledAt: 1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: liveSessions.length,
      data: liveSessions,
    });
  } catch (error) {
    console.error("Error fetching live sessions:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get only upcoming live sessions (Dashboard)
const getUpcomingLiveSessions = async (req, res) => {
  try {
    const liveSessions = await LiveSession.find({
      status: "upcoming",
      scheduledAt: { $gt: new Date() },
    })
      .select(
        [
          "title",
          "description",
          "instructor",
          "meetingLink",
          "scheduledAt",
          "duration",
          "status",
        ].join(" ")
      )
      .sort({ scheduledAt: 1 })
      .limit(3)
      .lean();

    return res.status(200).json({
      success: true,
      count: liveSessions.length,
      data: liveSessions,
    });
  } catch (error) {
    console.error("Error fetching upcoming live sessions:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getLiveSessionById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid live session id",
      });
    }

    // Fetch session details
    const liveSession = await LiveSession.findById(id).lean();

    if (!liveSession) {
      return res.status(404).json({
        success: false,
        message: "Live session not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: liveSession,
    });
  } catch (error) {
    console.error("Error fetching live session:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const createLiveSession = async (req, res) => {
  try {
    const {
      title,
      description,
      meetingLink,
      scheduledAt,
      duration,
      status,
    } = req.body;

    if (
      !title ||
      !description ||
      !meetingLink ||
      !scheduledAt ||
      !duration ||
      !status
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const liveSession = await LiveSession.create({
      title,
      description,
      instructor: req.user.name,
      meetingLink,
      scheduledAt,
      duration,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "Live session created successfully",
      data: liveSession,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateLiveSession = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid live session id",
      });
    }

    const liveSession = await LiveSession.findById(id);

    if (!liveSession) {
      return res.status(404).json({
        success: false,
        message: "Live session not found",
      });
    }

    const {
      title,
      description,
      meetingLink,
      scheduledAt,
      duration,
      status,
    } = req.body;

    liveSession.title = title ?? liveSession.title;
    liveSession.description =
      description ?? liveSession.description;
    liveSession.meetingLink =
      meetingLink ?? liveSession.meetingLink;
    liveSession.scheduledAt =
      scheduledAt ?? liveSession.scheduledAt;
    liveSession.duration =
      duration ?? liveSession.duration;
    liveSession.status =
      status ?? liveSession.status;

    await liveSession.save();

    return res.status(200).json({
      success: true,
      message: "Live session updated successfully",
      data: liveSession,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteLiveSession = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid live session id",
      });
    }

    const liveSession = await LiveSession.findById(id);

    if (!liveSession) {
      return res.status(404).json({
        success: false,
        message: "Live session not found",
      });
    }

    await liveSession.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Live session deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export {
  getLiveSessions,
  getUpcomingLiveSessions,
  getLiveSessionById,
  createLiveSession,
  updateLiveSession,
  deleteLiveSession,
};