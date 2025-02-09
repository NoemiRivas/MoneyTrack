import React from "react";
import { Link } from "react-router-dom";
import "../index.css"
//iconos
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

export default function Aside({ open }) {
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
    }
  ];


  return (
    <aside
      className={`aside ${open ? "aside-visible"  : "aside-hidden"}`}
    >
      <ul className={`flex flex-col gap-6 p-4 `}>
        {listItems.map((item, index) => (
          <li key={index} className="text-black-slate text-base font-medium p-2 capitalize hover:bg-cool-green/65 rounded-lg pointer hover:text-cool-green">
            <span>{item.icon}</span>
            
            <Link to={item.address} className="ms-2 hover:text-cool-green">{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
