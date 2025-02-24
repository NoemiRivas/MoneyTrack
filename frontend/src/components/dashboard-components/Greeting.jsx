import React from "react";
import ModalButton from "./ModalButton";


export default function Greeting() {
 
  return (
    <section className="mt-24 py-6 mb-7 m-0">
    <div className="flex justify-between items-center  max-sm:flex-col gap-6">
      <div className="text-4xl font-bold ml-0 s">
        <h2> Hola👋 Noemi!{/**aqui ira el nombre de usuario del backend*/} </h2>
      </div>
  
      <div className="ml-20">
        <ModalButton/>
      </div>
      <hr />
    </div>
    </section>
  );
}
