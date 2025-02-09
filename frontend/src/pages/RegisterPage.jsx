import { useState } from "react";
import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
const [nombre, setNombre]= useState("")
const [apellido, setApellido]= useState("")
const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
const [error, setError] = useState("")

const navigate = useNavigate();

const handleRegister = async (e) => {
e.preventDefault()
try {
  const response = await axios.post("http://localhost:3000/api/user", {
    nombre,
    apellido,
    email,
    password

  })
  
  navigate("/login")
  console.log("creado exitosamente");
  

} catch (error) {
  setError(error.response?.data?.message)
}

}

  return (
    <form action="" onSubmit={handleRegister} className="mt-24">
      <h2>sucribirse</h2>
      <div>
        <label>nombre</label>
        <input type="text" value={nombre}
            onChange={(e) => setNombre(e.target.value)}/>
      </div>
      <div>
        <label>apellido</label>
        <input type="text" value={apellido}
            onChange={(e) => setApellido(e.target.value)}/>
      </div>
      <div>
        <label>email</label>
        <input type="email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>password</label>
        <input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
      </div>
      {error && <p>{error} </p>}
      <button type="submit">suscribirse</button>
    </form>
  );
}
