// post controllers functions

const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Reply = require('../models/Reply');

// create a new post
exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Could not create post' });
  }
};

// get all posts in a community
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: 'Post not found' });
  }
};

// delete a post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete post' });
  }
};

// create a new comment
exports.createComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const newComment = await Comment.create(req.body);
    post.comments.push(newComment);
    await post.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Could not create comment' });
  }
};

// delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const index = post.comments.findIndex(comment => comment._id.toString() === req.params.commentId);
    if (index !== -1) {
      post.comments.splice(index, 1);
      await post.save();
    }
    await Comment.findByIdAndDelete(req.params.commentId);
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete comment' });
  }
};

// create a new reply
exports.createReply = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    const newReply = await Reply.create(req.body);
    comment.replies.push(newReply);
    await comment.save();
    res.status(201).json(newReply);
  } catch (error) {
    res.status(500).json({ error: 'Could not create reply' });
  }
};

// delete a reply
exports.deleteReply = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    const index = comment.replies.findIndex(reply => reply._id.toString() === req.params.replyId);
    if (index !== -1) {
      comment.replies.splice(index, 1);
      await comment.save();
    }
    await Reply.findByIdAndDelete(req.params.replyId);
    res.json({ message: 'Reply deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete reply' });
  }
};