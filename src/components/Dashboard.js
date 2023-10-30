import Cookies from 'js-cookie';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate()
  const token = Cookies.get('userId')
  if (token === undefined) {
    return <Navigate to='/Login'/>
  }
  const handlelogout = () => {
    Cookies.remove("userId")
    navigate("/")
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
