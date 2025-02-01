import React, { useContext, useState } from "react";
//data
import modelInfo from "../../utils/model-info";
//context
import { AppContext } from "../../context/ContextApp";

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useContext(AppContext);

  const [text, setText] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault(); 
    const expense = {
      name: text,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

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

              <form className="mb-4" onSubmit={onSubmit}>
                <label
                  htmlFor="titulo"
                  className="block text-sm font-medium text-gray-700"
                ></label>titulo
                <input type="text" name="titulo" id="titulo" value={text} placeholder="titulo de la entrada" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(event) => setText(event.target.value)
                     } />
                         <label
                  htmlFor="titulo"
                  className="block text-sm font-medium text-gray-700"
                ></label>Monto
                <input type="text" name="titulo" id="titulo" value={cost} placeholder="titulo de la entrada" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(event) => setCost(event.target.value)
                     } />
              </form>

            
              <button className="btn" type="submit">guardar</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
