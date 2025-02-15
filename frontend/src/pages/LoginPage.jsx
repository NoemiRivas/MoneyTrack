import { useState, useContext } from "react";
import { AppContext } from "../context/ContextApp";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const { login, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password, navigate);
      dispatch({ type: "SET_USER", payload: response.data.user });
    } catch (error) {
      console.log(error);
      
      setError(error.response?.data?.message || "Error en la autenticazion." );
    }
  };

  return (
    <div className="pt-28 bg-[url(/19534061_6100144.jpg)] py-[20px] min-h-screen ">
      <div className="flex justify-between gap-36 items-center shadow-lg shadow-[#020202] w-[1000px] m-auto rounded-xl">
        <div className="text-white font-semibold flex flex-col gap-6 pl-10 py-24">
          <h2 className="tittle">¡Bienvenido/a!</h2>
          <p>
            ¿Estas listo/a para alcanzar tus objetivos? entra y averigua que
            sucede!
          </p>
          <p className="font-light">¿Aun no te has suscrito?</p>
          <Link to="/">
            <button className="button-form w-56">registrarse</button>
          </Link>
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-ligth-background w-[60%] text-white flex flex-col items-center gap-6 py-16 mr-10 rounded-lg"
        >
          <h2 className="font-bold text-[2.2em]">Login</h2>
          <div className=" flex flex-col items-center gap-6 text-base font-semibold">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-lg  text-lg font-light text-center text-black-slate border-none outline-none"/>
            </div>
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white rounded-lg text-lg font-light text-center text-black-slate border-none outline-none"
              />
            </div>
            { <p className="text-[12px] text-red-light">{error}</p>}
            <button type="submit" className="button-form w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
