import React from "react";
import "./index.css";
//reactdom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//components
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import TransactionsPage from "./pages/TransactionsPage";
import CategoryPage from "./pages/CategoryPage";
import StatistichPage from "./pages/StatistichPage";
//import LandingPage from "./pages/LandingPage"
import UserProfile from "./pages/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
// Context
import { AppProvider, AppContext } from "./context/ContextApp";
import PrivateLayout from "./components/PrivateLayout";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* por el momento esta es la pagina inicial hasta que cree la landingpage y agrege la logica*/}

        <Route element={<PrivateRoute />}>
          <Route element={<PrivateLayout/>}> 
            <Route path="/perfil" element={<UserProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/estadisticas" element={<StatistichPage />} />
          </Route>
        </Route>
        {/*LandingPage*/}
        {/* <Route path="/inicio" element={<LandingPage/>}/> */}
        {/* <Route path="/settings" element={<settings/>}/> */}
      </Routes>
    </>
  );
}

export default App;
