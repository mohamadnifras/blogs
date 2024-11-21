import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogContext } from './BlogContext';

function BlogDetail() {
    const {id}=useParams();
    const {blogs}=useContext(blogContext);
    const navigate=useNavigate();
    const blog = blogs.find((b)=> b.id === parseInt(id));
    if(!blog){
        return <h2>Blog not found!</h2>
    }
  return (
    <>
    <div>
         <h2>{blog.title}</h2>
         <p>{blog.body}</p>
    </div>
    <button onClick={()=>navigate('/')}>Go Back</button>
    </>
  )
}

export default BlogDetail