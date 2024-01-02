import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Home() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
  }

  return (
    <div>
      <h1>Welcome to Auth App</h1> 
      <h2>{user && user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home