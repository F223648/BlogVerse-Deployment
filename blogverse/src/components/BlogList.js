import React, { useEffect, useState } from "react";
import axios from "axios";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({}); // { postId: [comments] }
  const [newComments, setNewComments] = useState({}); // { postId: "comment text" }

 const user = JSON.parse(localStorage.getItem("user"));
const currentUserId = user?.id;
  // Fetch all posts
  useEffect(() => {
    axios.get("http://localhost:5000/api/posts") // Your PostRoutes.js GET all posts
      .then(res => {
        setPosts(res.data);
        // Load comments for each post
        res.data.forEach(post => fetchComments(post._id));
      })
      .catch(err => console.error(err));
  }, []);

  // Fetch comments for a specific post
  const fetchComments = (postId) => {
    axios.get(`http://localhost:5000/api/comments/post/${postId}`)
      .then(res => {
        setComments(prev => ({ ...prev, [postId]: res.data }));
      })
      .catch(err => console.error(err));
  };

  // Handle adding a new comment
  const handleAddComment = async (postId) => {
    if (!newComments[postId]) return;

    try {
    const res = await axios.post("http://localhost:5000/api/comments", {
        postId: postId,
        userId: currentUserId,
        comment: newComments[postId]
      });
      const addedComment = {
      ...res.data,
      userid: { username: user?.username || "You" }
    };
      setNewComments(prev => ({ ...prev, [postId]: "" }));
      setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), res.data] // append new comment
    }));
     // fetchComments(postId); // Refresh comments
    } catch (err) {
      console.error(err);
      alert("Error adding comment");
    }
  };
  if (!user) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Please log in to view and comment on posts.</p>;
  }

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center" }}>All Blog Posts</h1>

      {posts.map(post => (
        <div key={post._id} style={{
          backgroundColor: "#fff",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "800px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
        }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="blog"
              style={{ width: "100%", borderRadius: "8px", margin: "10px 0" }}
            />
          )}

          {post.tags?.length > 0 && (
            <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
          )}

          <hr />

          {/* Comments */}
          <div>
            <h4>Comments:</h4>
            {comments[post._id]?.length > 0 ? (
              comments[post._id].map(c => (
                <div key={c._id} style={{
                  backgroundColor: "#f1f1f1",
                  padding: "8px",
                  borderRadius: "5px",
                  margin: "5px 0"
                }}>
                  <strong>{c.userid?.username || "Anonymous"}:</strong> {c.comment}
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}

            {/* Add comment form */}
            <div style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComments[post._id] || ""}
                onChange={(e) =>
                  setNewComments(prev => ({ ...prev, [post._id]: e.target.value }))
                }
                style={{
                  padding: "8px",
                  width: "70%",
                  marginRight: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc"
                }}
              />
              <button
                onClick={() => handleAddComment(post._id)}
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
