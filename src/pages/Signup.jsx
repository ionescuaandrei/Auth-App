import React, { useState } from 'react'
import { auth } from '../firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handeSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredidential = await createUserWithEmailAndPassword(auth, email, password);
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
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handeSubmit} className='signup-form'>
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='signup-button'>Signup</button>
        <p>Need to Login? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Signup