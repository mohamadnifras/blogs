import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { blogContext } from './BlogContext';

function CreateBlog() {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const {addBlog}=useContext(blogContext);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        addBlog(title,body);
        navigate('/blogslist');
    }
  return (
   <div>
     <h1>Create Blog</h1>
     <form onSubmit={handleSubmit}>
        <div>
            <label >Title:</label>
            <input 
            type='text'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
            />
        </div>
        <div>
            <label >Body:</label>
            <input 
            type='text'
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            required
            />
        </div>
        <button type='submit'>Submit Blog</button>
     </form>
   </div>
  )
}

export default CreateBlog