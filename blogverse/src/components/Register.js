import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bg, setBg] = useState("white");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/user/signup', {name,email,password});
            alert(res.data.message || 'Registered successfully!');
        } catch (err) {
            alert(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div style={{backgroundColor: "#34495E", width: "100%", height:"550px"}}>
        <form onSubmit={handleSubmit} style={{backgroundColor: '#E0E0E0', textAlign: "center", display: "inline-block",margin: "65px 400px 20px 430px", padding: "40px",borderRadius:"20px"}}>
            <h3 style={{margin: '10px 15px', fontSize: "30px"}}>Register Yourself</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required style={{margin: '20px 60px 20px 80px', padding: '10px'}}/> <br></br>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required style={{margin: '8px 60px 20px 80px', padding: '10px'}}/> <br></br>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required style={{margin: '8px 60px 20px 80px', padding: '10px'}}/> <br></br>
            <button type="submit" style={{margin: '10px 40px 20px 60px', padding: '5px', backgroundColor: bg,  border: "solid #34495E"}}onMouseEnter={() => setBg("#34495E")} onMouseLeave={() => setBg(" #E0E0E0")}>Register</button>
        </form>
        </div>
    );
}

export default Register;
