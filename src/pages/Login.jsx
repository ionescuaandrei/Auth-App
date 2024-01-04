import React, { useState } from 'react'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handeSubmit = async (e) => {
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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handeSubmit} className='login-form'>
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
        <button type="submit" className='login-button'>Signup</button>
        <p>Need to Signup? <Link to="/signup">Signup</Link></p>
      </form>
    </div>
  )
}

export default Login