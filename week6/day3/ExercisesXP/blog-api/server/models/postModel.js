const db = require('../config/db');

const getAllPosts = async () => {
  const result = await db.query('SELECT * FROM posts');
  return result.rows;
};

const getPostById = async (id) => {
  const result = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  return result.rows[0];
};

const createPost = async (title, content) => {
  const result = await db.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return result.rows[0];
};

const updatePost = async (id, title, content) => {
  const result = await db.query(
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  );
  return result.rows[0];
};

const deletePost = async (id) => {
  const result = await db.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
