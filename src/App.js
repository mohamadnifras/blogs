import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateBlog from './ComponentBlog/CreateBlog';
import BlogDetail from './ComponentBlog/BlogDetail';
import BlogsList from './ComponentBlog/BlogsList';
import BlogContext from './ComponentBlog/BlogContext';


function App() {
  return (
    <div className="App">
  
    <BlogContext>
      <Routes>
        <Route path='/' element={<CreateBlog/>}></Route>
        <Route path='/blogslist' element={<BlogsList/>}></Route>
        <Route path='/blogslist/:id' element={<BlogDetail/>}></Route>
      </Routes>
      </BlogContext>
    </div>
  );
}

export default App;
