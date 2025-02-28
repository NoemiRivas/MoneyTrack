import React from "react";
import ModalButton from "./ModalButton";
import { AppContext } from "../../context/ContextApp";
import { useContext } from "react";

export default function Greeting() {
  const { user } = useContext(AppContext);
  
  
  return (
    <div className=" py-6 mb-7 bg-white  ">
    <div className=" flex justify-around items-center max-sm:flex  gap-6">
      <div className="ml-0 ">
        <h2 className="text-4xl font-bold capitalize"> Hola,  {user.nombre} </h2>
        <p className="text-sm text-cool-gray">Tu vista personal principal</p>
      </div>
  
      <div className="ml-20">
        <ModalButton/>
      </div>
   
    </div>
    </div>
  );
}
