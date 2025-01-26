import React, { useState } from "react";
//data
import modelInfo from "../../utils/model-info";

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShowModal(true)}>
        Agregar nuevo
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed inset-0 flex justify-center items-center z-20">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold mt-[1em] mb-2">
                  Crear nueva entrada/Gasto
                </h2>
                <span
                  className="btn relative -top-8 -right-4"
                  onClick={() => setShowModal(false)}
                >
                  x
                </span>
              </div>
              {modelInfo.fields.map((field) => (
                <div key={field.name} className="mb-4">
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ))}
              <button className="btn">guardar</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
