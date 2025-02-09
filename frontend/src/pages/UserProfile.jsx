import React from 'react'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/ContextApp'

import LogoutButton from '../components/logoutButton'

export default function UserProfile() {
  const { auth } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);
  return (
    <div className='mt-60'>
    <h1>Perfil del Usuario</h1>

    <LogoutButton /> 
  </div>
  )
}
