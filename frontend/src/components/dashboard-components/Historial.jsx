import React, { useContext, useEffect, useState } from "react";

//context
import { AppContext } from "../../context/ContextApp";
//components
import FilterButton from "./filterButton";
import SortButton from "./SortButton";

export default function Historial() {
  const { ingreso, gasto, getIncome } = useContext(AppContext);
  const [filtrado, setFiltrado] = useState([]);
  const [type, setType] = useState("todos");

  useEffect(() => {
    getIncome();
  }, []);

  useEffect(() => {
    if (type === "ingreso") {
      setFiltrado(ingreso);
    } else if (type === "gasto") {
      setFiltrado(gasto);
    } else {
      setFiltrado([...ingreso, ...gasto]); // Mostrar todo
    }
  }, [ingreso, gasto, type]);

  return (
    <div className="m-auto mt-4 py-6 max-w-[1000px] max-[1800px]:ml-24 max-lg:m-auto bg-white rounded-lg">
      <div className="flow-root">
        <div className="overflow-x-auto">
          <div className="py-2 lg:w-[800px] lg:px-8 md:w-[600px] md:m-auto sm:px-6">
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold capitalize text-lg">
                  Historial de transacciones
                </h2>
                <p className="text-sm text-cool-gray mb-4">
                  Tus transacciones más recientes
                </p>
              </div>
              {/* Filtro */}
              <div className="flex items-center gap-2">
                {" "}
                <div>
                  <SortButton filtrado={filtrado} setFiltrado={setFiltrado} />
                </div>
                <div >
                  <FilterButton setType={setType} type={type} />
                </div>
              </div>
            </div>
            {/* Tabla de transacciones */}
            <table className="table w-full border-separate lg:border-collapse border border-cool-gray">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Categoría</th>
                  <th>Tipo</th>
                  <th>Costo</th>
                </tr>
              </thead>
              <tbody>
                {filtrado.length > 0 ? (
                  filtrado.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date || "Sin fecha"}</td>
                      <td>{item.category || "Sin categoría"}</td>
                      <td>{item.type || item.payMethod || "N/A"}</td>
                      <td>${item.amount || item.cost || 0}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500">
                      No hay transacciones disponibles
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
