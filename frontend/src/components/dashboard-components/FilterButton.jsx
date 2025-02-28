import React, { useState } from "react";

//context
import { AppContext } from "../../context/ContextApp";
//icons
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

export default function FilterButton({ setType, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (v) => {
    setType(v);
    setIsOpen(true);
  };
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="button-secondary "
      >
        <FilterAltOutlinedIcon />
        {type === "todos" ? "Todos" : type === "ingreso" ? "Ingreso" : "Gasto"}
      </button>
      {isOpen && (
        <div className="input-select">
          <span onClick={() => handleSelect("todos")}>Todos</span>
          <span onClick={() => handleSelect("ingreso")}>Ingreso</span>
          <span onClick={() => handleSelect("gasto")}>Gasto</span>
        </div>
      )}
    </div>
  );
}
