import React,{useState} from "react";
import { Link } from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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

  const [openMobile, setOpenMobile] = useState(false)

  return (
    <>
    
    <button 
    className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full text-white"
    onClick={() => setOpenMobile(!openMobile)}>{openMobile ? <></>: <MenuIcon fontSize="large" />}</button>

    <div className="flex  ">
      <aside
        className={`aside hidden md:block ${open ? "w-72" : "w-20"} h-screen `}
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
      <aside
          className={`fixed top-0 left-0 w-64 h-full bg-gray-900 p-5 transition-transform duration-300 z-40 bg-background ${
            openMobile ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setOpenMobile(false)}
          >
            <CloseIcon fontSize="large" />
          </button>
          <ul className="flex flex-col gap-6 mt-10">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-white text-base font-medium p-2 capitalize hover:bg-orange rounded-lg"
              >
                <span>{item.icon}</span>
                <Link to={item.address} className="ms-2" onClick={() => openMobile(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
    </div>
    </>
    
    
  );
}
