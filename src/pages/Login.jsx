import React, { useState } from 'react'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import '../App.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredidential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredidential);
      const user = userCredidential.user;
      localStorage.setItem('token', user.accesToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MdAlternateEmail className='icon'/>
        </div>
        <div className="input-box">
        <input
          type="password"
          placeholder="Your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RiLockPasswordFill className='icon'/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <Link to="/signup">Forgot password?</Link>
        </div>
        <button type="submit" className='login-button'>Login</button>
        <div className="register-link">
        <p>Need to signup? <Link to="/signup">Signup</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login