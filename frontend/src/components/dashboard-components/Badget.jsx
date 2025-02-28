import React from "react";

//components
import Greeting from "./Greeting";
//contetx
import { AppContext } from "../../context/ContextApp";
import { useContext } from "react";

export default function Badget() {
  //fetch data from backend

  //context
  const { Income, totalExpenses } = useContext(AppContext);

  return (
    <section className="mt-5 p-6 rounded-t-lg m-auto bg-white max-[1800px]:ml-24 max-lg:m-auto">
      <Greeting />
      
        <div className="flex items-center justify-center gap-4 max-lg:ml-12 max-md:ml-0 max-sm:flex max-sm:flex-col ">
          <div className=" bg-[#a4f5a6] border-1 border-cool-green/50  rounded-2xl  py-6 p-20 max-lg:p-14 ">
            <p className="  text-2xl font-bold capitalize text-cool-green">
              Entrada
            </p>
            <span className="text-lg font-bold text-center text-black-slate">
             + ${Income}
            </span>
          </div>
          <div className="border-1 bg-[#b3a1ff] rounded-2xl  py-6 p-20 text-center max-lg:p-14  ">
            <p className="text-2xl font-bold capitalize text-black-slate">
              Gastos
            </p>

            <span className="text-lg font-bold text-center text-black-slate">
            -  ${totalExpenses}
            </span>
          </div>
          <div className="bg-[#222222] text-white rounded-2xl py-6 p-20 text-center max-lg:p-14">
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
