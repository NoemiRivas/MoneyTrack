import React, { useState } from "react";
import "./index.css";
//reactdom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import TransactionsPage from "./pages/TransactionsPage";
import CategoryPage from "./pages/CategoryPage";
import StatistichPage from "./pages/StatistichPage";
import Aside from "./components/Aside";
//import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar";
// context
import { AppProvider } from "./context/ContextApp";


function App() {
  const [open, setOpen] = useState(false);
  const showSidebar = () => {
    setOpen(!open);
  };
  return (
    <AppProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        {/* por el momento esta es la pagina inicial hasta que cree la landingpage y agrege la logica*/}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/estadisticas" element={<StatistichPage />} />
        {/*LandingPage*/}
        {/* <Route path="/inicio" element={<LandingPage/>}/> */}
        {/* <Route path="/settings" element={<settings/>}/> */}
      </Routes>
      <Navbar showSidebar={showSidebar} open={open} />
      <Aside open={open} />
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;
