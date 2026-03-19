import React from "react";
import Home from "./components/Home";
import Loginn from "./components/Loginn";
import Register from "./components/Register";
import NewPost from "./components/NewPost";
import BlogList from "./components/BlogList";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
return (
    <BrowserRouter>
      <nav style={{background:"#f5f5f5",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 30px",boxShadow:"0 2px 5px rgba(0,0,0,0.1)",borderRadius:"8px",position:"sticky",top:"0",zIndex:"1000"}}>
  <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
    <Link to="/" style={{textDecoration:"none",color:"#333",fontWeight:"bold",fontSize:"16px"}} onMouseEnter={e=>e.target.style.color="#007BFF"} onMouseLeave={e=>e.target.style.color="#333"}>Home</Link>
    <Link to="/login" style={{textDecoration:"none",color:"#333",fontWeight:"bold",fontSize:"16px"}} onMouseEnter={e=>e.target.style.color="#007BFF"} onMouseLeave={e=>e.target.style.color="#333"}>Login</Link>
    <Link to="/post" style={{textDecoration:"none",color:"#333",fontWeight:"bold",fontSize:"16px"}} onMouseEnter={e=>e.target.style.color="#007BFF"} onMouseLeave={e=>e.target.style.color="#333"}>New Blog</Link>
    <Link to="/comments" style={{textDecoration:"none",color:"#333",fontWeight:"bold",fontSize:"16px"}} onMouseEnter={e=>e.target.style.color="#007BFF"} onMouseLeave={e=>e.target.style.color="#333"}>Posts</Link>
  </div>
  <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
    <h3 style={{margin:0,fontSize:"18px",color:"#555"}}>Welcome to <span style={{color:"#007BFF"}}>BlogVerse</span></h3>
    <img src="https://cdn-icons-png.flaticon.com/512/60/60736.png" alt="icon" style={{height:"40px",width:"40px",borderRadius:"50%",objectFit:"cover",border:"2px solid #007BFF"}} />
  </div>
</nav>


<Routes>
<Route path="/" element={<Home />} />;
<Route path="/login" element={<Loginn />} />;
<Route path="/register" element={<Register />} />;
<Route path="/post" element={<NewPost />} />;
<Route path="/comments" element={<BlogList />} />;
</Routes>
</BrowserRouter>
);
}
export default App;