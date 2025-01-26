import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import Badget from "../components/dashboard-components/Badget";
import Historial from "../components/dashboard-components/Historial";
import RigthSidebar from "../components/RigthSidebar";


export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const showSidebar = () => {
    setOpen(!open);
  };

  return (
    <main>
      <Navbar showSidebar={showSidebar} open={open} />
      <RigthSidebar/>
      <Badget/>
      <Historial/>
      <Aside  open={open} />
     
    </main>
  )
}
