import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  const [open, setOpen] = React.useState(false);

  const showSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="private-layout">
        <Navbar showSidebar={showSidebar} open={open} />
        <div className="content">
          <Aside open={open} />
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
