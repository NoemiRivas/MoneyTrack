import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/ContextApp'

export default function LogoutButton() {
const{logout} = useContext(AppContext)
const navigate = useNavigate()

const handleLogout = ()=>{
    logout()
    navigate("/login")
}

  return (
<button onClick={handleLogout}>
salir
</button>
  )
}
