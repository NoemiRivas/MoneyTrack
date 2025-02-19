import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import "../index.css";
//iconos
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";

export default function Aside({ showSidebar, open }) {
  const listItems = [
    {
      name: "Dahboard",
      address: "/dashboard",
      icon: <DashboardCustomizeOutlinedIcon />,
    },
    {
      name: "Movimientos",
      address: "/transactions",
      icon: <ReceiptLongOutlinedIcon />,
    },
    {
      name: "categorias",
      address: "/categorias",
      icon: <CategoryOutlinedIcon />,
    },
    {
      name: "perfil",
      address: "/perfil",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      name: "estadisticas",
      address: "/estadisticas",
      icon: <ShowChartOutlinedIcon />,
    },
    {
      name: "ajustar ",
      address: "/settings",
      icon: <SettingsOutlinedIcon />,
    },
  ];

  return (
    <div className="flex  ">
      <aside
        className={`aside ${open ? "w-72" : "w-20"} h-screen `}
      >
        <div className="flex items-center justify-end ">
          <button className={` rounded-full hover:bg-orange  text-white cursor-pointer transition-transform duration-300 ${!open ? "rotate-180" : ""}`} onClick={showSidebar}>
            <KeyboardArrowLeftOutlinedIcon fontSize="large"  />
          </button>
        </div>
        <div>
        <ul className={`flex flex-col gap-6 p-4 `}>
          {listItems.map((item, index) => (
            <li
              key={index}
              className="text-white text-base font-medium p-2 capitalize hover:bg-orange rounded-lg pointer hover:text-cool-green"
            >
              <span>{item.icon}</span>

              <Link
                to={item.address}
                className={`ms-2 hover:text-white ${
                  !open && "scale-0 hidden"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </aside>
    </div>
  );
}
