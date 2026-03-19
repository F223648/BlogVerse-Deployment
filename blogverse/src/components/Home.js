import React,{useState} from "react";
import axios from 'axios';
import TemplateCard from "./TemplateCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home(){
    const [bg, setBg] = useState("white");
    const templates = [
        {
            title: "Food Blog",
            description: "Showcase recipes, reviews, and food photography.",
            image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
        },
        {
            title: "Travel Blog",
            description: "Perfect for sharing travel stories & adventures.",
            image: "https://images.pexels.com/photos/6016755/pexels-photo-6016755.jpeg"
        },
        {
            title: "Tech Blog",
            description: "Discuss gadgets, coding tips, and latest tech trends.",
            image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg"

        }
    ]
    const navigate = useNavigate();
    return(
        <div style={{background: '#f0f0f0'}}>
        <div style={{backgroundImage: `url("https://www.shutterstock.com/image-photo/smartphone-tablet-pc-mock-on-260nw-1287357250.jpg")`,backgroundSize: "cover",backgroundPosition: "center", textAlign: "center", width: "100%", height: "250px", padding: "80px 5px 120px 5px"}}>
           <motion.h1 style={{ fontSize: "50px", color: "black" }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>Create a blog worth sharing!</motion.h1>
            <p>A space where ideas, stories, and creativity come together. Share your thoughts, tips, and experiences on topics that inspire all.</p>
            <p>Get registered now!</p>
            <button style={{padding: "10px", borderRadius: "10px", border: "none", backgroundColor: bg }} onMouseEnter={() => setBg("#34495E")} onMouseLeave={() => setBg(" #E0E0E0")} onClick={() => navigate("/register")}>Get Started!</button>
        </div>
            <h3 style={{textAlign:"center", fontSize: "30px"}}>Some of the templates that you can try</h3>
        <div>
            <div style={{display: "inline-flex"}}>
                {templates.map((temp, index) => (
          <TemplateCard 
            key={index}
            title={temp.title}
            description={temp.description}
            image={temp.image}
          />
        ))}
            </div>    
        </div>
        <footer style={{backgroundColor: " #E0E0E0", color: "black", padding: "1px", textAlign: "center"}}>
            <p>Looking forward to provide services to you! &copy;</p>
        </footer>
        </div>
    );
}
export default Home;