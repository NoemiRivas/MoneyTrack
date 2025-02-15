import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
//icons
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function RegisterPage() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        nombre,
        apellido,
        email,
        password,
      });

      navigate("/login");
      console.log("creado exitosamente");
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  return (
    <div className="pt-28 bg-[url(/19534061_6100144.jpg)] py-[20px]  min-h-screen ">
      <div className="flex justify-between gap-36 items-center shadow-lg shadow-[#020202] w-[80%] m-auto rounded-xl">
        <div className="text-white font-semibold flex flex-col gap-6 pl-10 py-24">
          <h2 className="tittle">
            Ten bajo control tus ingresos y gatos en cualquier momento
          </h2>
          <p>
            No puedes saber a donde va tu dinero si no sabes en que lo gastas.
            Tu proximo objetivo puede estar a un centavo si lo ahorras.
          </p>
          <p>No te pierdas esta oportunidad registrate ahora es ¡gratis!</p>
        
        </div>

        <form
          action=""
          onSubmit={handleRegister}
          className="bg-ligth-background w-[100%] text-white flex flex-col items-center gap-6 mb-20 py-16 mr-10 rounded-lg"
        >
          <h2 className="font-bold text-[2.2em]">Crear una cuenta</h2>
          <div className="flex flex-col items-center gap-6 text-base font-semibold">
            <div className="flex flex-col gap-1">
              <label>nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              className="bg-white rounded-lg text-lg font-light text-center text-black-slate border-none outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>apellido</label>
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className="bg-white rounded-lg text-lg font-light text-center text-black-slate border-none outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white rounded-lg text-lg font-light text-center text-black-slate border-none outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white rounded-lg text-lg font-light text-center text-black-slate border-none outline-none"
              />
            </div>
          
          {error && <p className="text-[12px] text-red-light">{error} </p>}
          <button type="submit" className="button-form w-full">suscribirse</button></div>
          <span className="flex gap-4 items-center text-sm ">
          <p className="font-light" >
            ¿Ya tienes una cuenta? 
          </p>
          <Link to="/login">
            < LogoutOutlinedIcon />Login
          </Link>
           </span> 
          
         
        </form>
      </div>
     
    </div>
  );
}
