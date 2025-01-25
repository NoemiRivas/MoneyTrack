import React from "react";
import { useState } from "react";

export default function Greeting() {
 
  return (
    <section className="mt-24 py-6 max-w-[1200px]">
    <div className="flex justify-evenly items-center  max-sm:flex-col gap-6">
      <div className="text-4xl font-bold ml-0 s">
        <h2> Hola👋 Noemi!{/**aqui ira el nombre de usuario del backend*/} </h2>
      </div>
  
      <div>
        <button className="btn"> agregar nuevo</button>
      </div>
      <hr />
    </div>
    </section>
  );
}
