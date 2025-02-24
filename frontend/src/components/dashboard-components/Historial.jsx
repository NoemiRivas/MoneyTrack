import React, { useContext}  from 'react'

//context
import { AppContext } from "../../context/ContextApp"; 

export default function Historial() {
 const {expenses}= useContext(AppContext)


return (
  <div className='mt-2 py-6 max-w-[1000px] m-auto'>
 <div className='flow-root'>
  <div className='overflow-x-auto'>
    <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
      <h2 className='text-4xl font-semibold mb-4'>Historial de transacciones</h2>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead>
          <tr className='capitalize font-semibold text-gray-500'> 
              <th className='px-3 py-3.5 text-left'>fecha</th>
            <th scope='col' className='py-3.5 pl-4 pr-3 text-left sm:pl-0'>categoria</th>
            <th className='px-3 py-3.5 text-left'>Metodo de pago</th>
            <th className='px-3 py-3.5 text-left'>Costo</th>
         
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index)=>(
            <tr key={index}>
               <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>{item.date}</td>
              <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>{item.category}</td>
              <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>{item.payMethod}</td>
              <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'> ${item.cost}</td>
             
            </tr>
          ))  }
        </tbody>

      </table>
      </div>
      </div>
      </div>
    </div>
  )
}
