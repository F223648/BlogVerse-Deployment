import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Loginn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bg, setBg] = useState("white");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/user/login', { email, password });
            alert(res.data.message || 'Login successful!');
            localStorage.setItem("user", JSON.stringify(res.data.admin));

            navigate("/");
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Login failed';
            if (errorMsg === 'Invalid password') {
                alert('❌ Wrong password. Try again.');
            } else if (errorMsg === 'Admin not found') {
                alert('❌ No account with this email.');
            } else {
                alert(errorMsg);
            }
        }
    };
     const navigate = useNavigate();
    return (
        <div style={{backgroundColor: "#34495E", width: "100%", height:"550px"}}>
        <form onSubmit={handleSubmit} style={{backgroundColor: '#E0E0E0', textAlign: "center", display: "inline-block", margin: "100px 400px 20px 430px", padding: "40px",borderRadius:"20px"}}>
             <h2 style={{margin: '10px 15px'}}>Login</h2>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email..." required style={{margin: '20px 70px 20px 80px', padding: '10px 60px 10px 10px'}}/>
            <br></br>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password..." required style={{margin: '8px 70px 20px 80px', padding: '10px 60px 10px 10px'}}/>
            <br></br>
            <button type="submit" style={{margin: '10px 50px 20px 60px', padding: '7px 10px 7px 10px', backgroundColor: bg, border: "solid #34495E", borderRadius: "10px"}}onMouseEnter={() => setBg("#34495E")} onMouseLeave={() => setBg(" #E0E0E0")}>Login</button>
        </form>
        </div>
    );
}

export default Loginn;
