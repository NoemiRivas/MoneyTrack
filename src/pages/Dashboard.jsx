import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'


export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const showSidebar = () => {
    setOpen(!open);
  };
  console.log("este es una prueba", open);
  return (
    <main>
      <Navbar showSidebar={showSidebar} open={open} />
      <Aside  open={open} />
    </main>
  )
}
