import React from "react";

//components
import Greeting from "./Greeting";
//contetx
import { AppContext } from "../../context/ContextApp";
import { useContext } from "react";


export default function Badget() {
  //fetch data from backend
  
  //context
  const {Income, totalExpenses} =useContext(AppContext)

  return (
    <section className="py-6 max-w-[1000px] m-auto">
        <Greeting/> 
      <div className="flex items-center gap-6 max-md:flex-col max-md:gap-4">
        <div className="border-2 border-cool-green/50  rounded-2xl  py-6 p-24 text-center ">
          <p className=" text-2xl font-semibold capitalize text-cool-green">
            Entrada
          </p>
          <span className="text-lg font-bold text-center text-black-slate">
          
            ${Income}
          </span>
        </div>
        <div className="border-2 border-cool-red/50 rounded-2xl  py-6 p-20 text-center ">
          <p className="text-2xl font-semibold capitalize text-cool-red">
            Gastos
          </p>

          <span className="text-lg font-bold text-center text-black-slate">
            ${totalExpenses}
          </span>
        </div>
        <div className="border-2 border-cool-green/50  rounded-2xl py-6 p-24 text-center">
          <p className="text-2xl font-semibold capitalize ">Balance</p>
          {/**agrgar funcionalidad cuanto la cuenta este en negativo camabia de color a segun se ha la cuenta*/}
          <span className="text-lg font-bold ">
            ${Income - totalExpenses}
          </span>
        </div>
      </div>       
    </section>
  );
}
