import React, { useContext } from 'react'
import { blogContext } from './BlogContext'
import { Link } from 'react-router-dom';

function BlogsList() {
    const {blogs}=useContext(blogContext)
  return (
    <div>
        <h1>Blogs</h1>
        {blogs.length === 0 ? (
           <p>No blogs available.</p> 
        ):(
            blogs.map((blog)=>(
                <div key={blog.id}>
                   <h2>
                      <Link to={`/blogslist/${blog.id}`}>{blog.title}</Link>
                   </h2>
                </div>
            ))
        )}
        
    </div>
  );
};

export default BlogsList