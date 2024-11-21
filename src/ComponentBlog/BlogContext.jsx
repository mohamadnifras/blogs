import React, { createContext, useState } from 'react'


export const blogContext =createContext()
function BlogContext({children}) {
const [blogs,setBlogs]=useState([])
const addBlog =(title, body) =>{
  const newBlog = {
    id: blogs.length + 1,
    title,
    body,
  };
  setBlogs([...blogs, newBlog]);
}
  return (
    <div>
  <blogContext.Provider value={{blogs, addBlog}}>
    {children}
  </blogContext.Provider>   
 </div>
  )
}

export default BlogContext