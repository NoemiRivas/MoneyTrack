import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import Badget from "../components/dashboard-components/Badget";
import Greeting from "../components/dashboard-components/Greeting";
import Historial from "../components/dashboard-components/Historial";
import FavCategories from "../components/dashboard-components/FavCategories";


export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const showSidebar = () => {
    setOpen(!open);
  };

  return (
    <main>
      <Navbar showSidebar={showSidebar} open={open} />
      <Greeting/> 
      <Badget/>
      <FavCategories/>
      <Historial/>
      <Aside  open={open} />
     
    </main>
  )
}
