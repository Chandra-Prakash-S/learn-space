import mongoose from "mongoose";
import LiveSession from "../models/LiveSession.js";

const getLiveSessions = async (req, res) => {
  try {
    // Fetch all live sessions (summary view)
    const liveSessions = await LiveSession.find()
      .select(
        [
          "title",
          "description",
          "instructor",
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

export { getLiveSessions, getLiveSessionById };