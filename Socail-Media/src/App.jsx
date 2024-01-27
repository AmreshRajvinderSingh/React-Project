import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Create from './components/CreatePost';
import PostList from './components/PostList';
import PostListProvider from './store/post-list-store';
import Loading from './components/Loading';

function App() {
  

  const [selected, setSelected]= useState("Home");

  return (
   <PostListProvider>
    <div className='app-container'>
      <Sidebar selected={selected} setSelected={setSelected}/>
      <div className='content'>
      <Header />
      {selected==="Home" ?(<PostList />) :(<Create/>)}
        
      <Footer />
      </div>
      </div>
      </PostListProvider>
      
  
  )
}

export default App
