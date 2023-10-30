import Cookies from 'js-cookie';
import React from 'react'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const token = Cookies.get('token')
  if (token === undefined) {
    return <Navigate to='/Login'/>
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
