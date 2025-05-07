import React, { useEffect, useState } from 'react';
import "../styles/BlogList.css";

const BlogList = ({ user, onLogout }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blog/all');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      <h2>Welcome, {user.username}</h2>
      <button onClick={onLogout}>Logout</button>
      <h2>Blogs</h2>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h3>{blog.topic}</h3>
            <p>{blog.descp}</p>
            <small>By: {blog.username}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;