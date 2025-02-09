import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AppContext } from '../context/ContextApp'

function PrivateRoute() {
    const {auth}= useContext(AppContext)
    if (auth === false || auth === null) {
        return <Navigate to="/login" />;
      }
    
      return <Outlet />;
}

export default PrivateRoute
