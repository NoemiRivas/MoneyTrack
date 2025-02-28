import React, { useContext, useState } from "react";
import axios from "axios";
//context
import { AppContext } from "../../context/ContextApp";

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
 const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  const {addIncome} = useContext(AppContext);
  const handleSubmit = async (e) =>{
    e.preventDefault()
    await addIncome(title, type, parseFloat(amount), category, description )
    setShowModal(false)

  }

  
  return (
    <>
      <button
        className="button-secondary"
        onClick={() => setShowModal(true)}
      >
        Agregar nuevo
      </button>
      {showModal ? (
        <>
          <div className="absolute inset-0 top-52 flex justify-center items-center z-20">
            <div className=" bg-black-slate  text-white  p-6 rounded-lg">
              <div className="px-20 py-4 rounded-lg bg-cool-gray/5">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold mt-[1em] mb-2">
                    Crear nueva Entrada /Gasto
                  </h2>
                  <span
                    className="btn relative -top-8 -right-4 text-2xl cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </span>
                </div>

                <form className="" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-gray-700 mt-2 mb-4">Titulo</label>
                <input
                  type="text"
                  value={title}
                  placeholder="Escribe el titulo"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm text-black-slate focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label className="block text-sm font-medium text-gray-700 mb-4 mt-4">Tipo</label>
                <select
                  value={type}
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm text-black-slate focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="ingreso">Ingreso</option>
                  <option value="gasto">Gasto</option>
                </select>

                {/* Monto */}
                <label className="block text-sm font-medium text-gray-700 mt-2 mb-4">Monto</label>
                <input
                  type="number"
                  value={amount}
                  placeholder="Cantidad"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm text-black-slate focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setAmount(e.target.value)}
                />

                {/* Categoría */}
                <label className="block text-sm font-medium text-gray-700 mt-2 mb-4">Categoría</label>
                <input
                  type="text"
                  value={category}
                  placeholder="Ej: Alimentación, Transporte..."
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm  text-black-slate focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setCategory(e.target.value)}
                />

                {/* Descripción */}
                <label className="block text-sm font-medium text-gray-700 mt-2 mb-4">Descripción</label>
                <textarea
                  value={description}
                  placeholder="Descripción opcional..."
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm text-black-slate focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <button className="mt-4 bg-orange text-white p-2 rounded-lg w-full hover:bg-button " type="submit">
                  Guardar
                </button>
                </form>

              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
