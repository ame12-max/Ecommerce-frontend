import React, { useState } from 'react'
import axios from 'axios'
import {replace, useNavigate} from 'react-router-dom'
import "./Login.css"

function Login() {
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [error,setError] = useState(null);

       const navigate = useNavigate()

        const handleSubmit  = async (event) =>{
            event.preventDefault();
            try {
                 const response =   await axios.post('http://localhost:7001/api/login' , {
                email,password
        })
        console.log(response.data);
        const {token,user} = response.data;
        if(!token) return "Authentication Token Missed";

        localStorage.setItem('token', token);
        if(user) localStorage.setItem('user', JSON.stringify(user));
          navigate('/',{replace:true})
            } catch (err) {const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Login failed. Please try again."; 
          setError(msg); 
            }
        }

  return (
    <div className='login-container' >
        <form onSubmit={handleSubmit}>
            <label  htmlFor="email"> Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter Your Email'/>
            <label htmlFor="password"> Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter Your Password'/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login