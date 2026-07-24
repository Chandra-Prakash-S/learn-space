import mongoose from "mongoose";
import Post from "../models/Post.js";

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name avatar")
      .populate("comments.user", "name avatar")
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid post id",
      });
    }

    const post = await Post.findById(id)
      .populate("author", "name avatar")
      .populate("comments.user", "name avatar")
      .lean();

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("Error fetching post:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { content, image } = req.body;

    const post = await Post.create({
      author: req.user._id,
      content,
      image,
    });

    const populatedPost = await Post.findById(post._id)
      .populate("author", "name avatar")
      .populate("comments.user", "name avatar")
      .lean();

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: populatedPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const toggleLike = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid post id",
      });
    }

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const userId = req.user._id.toString();

    const alreadyLiked = post.likes.some(
      (like) => like.toString() === userId
    );

    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (like) => like.toString() !== userId
      );
    } else {
      post.likes.push(req.user._id);
    }

    await post.save();

    const updatedPost = await Post.findById(post._id)
      .populate("author", "name avatar")
      .populate("comments.user", "name avatar")
      .lean();

    return res.status(200).json({
      success: true,
      message: alreadyLiked ? "Post unliked" : "Post liked",
      data: updatedPost,
    });
  } catch (error) {
    console.error("Error toggling like:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid post id",
      });
    }

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    post.comments.push({
      user: req.user._id,
      text,
    });

    await post.save();

    const updatedPost = await Post.findById(post._id)
      .populate("author", "name avatar")
      .populate("comments.user", "name avatar")
      .lean();

    return res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: updatedPost,
    });
  } catch (error) {
    console.error("Error adding comment:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export {
  getPosts,
  getPostById,
  createPost,
  toggleLike,
  addComment,
};