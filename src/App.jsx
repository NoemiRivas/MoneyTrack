import "./index.css"
//reactdom
import {BrowserRouter, Routes, Route} from "react-router-dom"
//components
import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import UserProfile from "./pages/UserProfile"
import TransactionsPage from "./pages/TransactionsPage"
import CategoryPage from "./pages/CategoryPage"
import StatistichPage from "./pages/StatistichPage"
//import LandingPage from "./pages/LandingPage"

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<Dashboard/>} />{/* por el momento esta es la pagina inicial hasta que cree la landingpage y agrege la logica*/ }
      <Route path="/profile" element={<UserProfile/>}/>
      <Route path="/transactions" element={<TransactionsPage/>}/>
      <Route path="/categories" element={<CategoryPage/>}/>
      <Route path="/estadisticas" element={<StatistichPage/>}/>
      {/*LandingPage*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
