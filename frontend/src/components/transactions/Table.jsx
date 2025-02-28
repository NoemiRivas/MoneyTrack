import React, { useContext } from "react"; 
//context
import { AppContext } from "../../context/ContextApp"; 
//component
import ModalButton from "../dashboard-components/ModalButton";             


export default function Table() {
  const {expenses, dispatch}= useContext(AppContext)

  const handleDeleteExpense = () =>{
    dispatch({
      type:"DELETE_EXPENSE",
      payload:props.id,
    })
  }

  return (
    <div className="mt-40 max-w-[800px] m-auto ">
      <div className="flow-root">
        <div className="overflow-auto ">
          <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
            <h2 className="text-4xl font-semibold mb-4">
              Historial de transacciones
            </h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="capitalize font-semibold text-gray-500 bg-black-slate text-cool-gray">
                  <th className="px-3 py-3.5 text-left">fecha</th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left sm:pl-0"
                  >
                    categoria  
                  </th>
                  <th className="px-3 py-3.5 text-left">Metodo de pago</th>
                  <th className="px-3 py-3.5 text-left">Costo</th>
                  <th className="px-3 py-3.5 text-left">Accion</th>
                </tr>
              </thead>
              <tbody >
                {expenses.map((item, index) => (
                  <tr
                    key={index}
                    className="rounded-lg divide-y divide-gray-200"
                  >
                    <td className="whitespaces-nowrap pl-4 pr-2 text-sm px-8  sm:pl-0">
                      {item.date}
                    </td>
                    <td className="whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      {item.category}
                    </td>
                    <td className="whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      {item.payMethod}
                    </td>
                    <td className="whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      {" "}
                      ${item.cost}
                    </td>
                    <td>
                      <button className="btn" onClick={ console.log(handleDeleteExpense, "eliminar")
                       }>eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="relative left-[77%] mt-[0.4em]">
            <ModalButton/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
