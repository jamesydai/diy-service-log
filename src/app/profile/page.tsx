'use client'

import useAuthRedirect from '../hooks/useAuthRedirect'
import React from 'react';


const Dashboard: React.FC = () => {

    const { isAuthenticated, userId } = useAuthRedirect();

    if (!isAuthenticated) {
      return null; // Return null or a loading spinner while redirecting
    }
  return (
    <div>
        <p>Welcome to the dashboard!</p>
      <p>Your User ID: {userId}</p>
    </div>

    
  ) 
}
export default Dashboard