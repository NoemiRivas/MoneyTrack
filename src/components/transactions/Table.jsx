import React from 'react'
import listItems from '../../utils/listFake'
export default function Table() {
  return (
    <div className='mt-10 py-6 max-w-[1000px] mx-auto'>
    <div className='flow-root'>
     <div className='overflow-auto'>
       <div className='inline-block min-w-full sm:px-6 lg:px-8'>
         <h2 className='text-4xl font-semibold mb-4'>Historial de transacciones</h2>
         <table className='min-w-full divide-y divide-gray-200'>
           <thead>
             <tr className='capitalize font-semibold text-gray-500 bg-black-slate text-cool-gray'> 
                 <th className='px-3 py-3.5 text-left'>fecha</th>
               <th scope='col' className='py-3.5 pl-4 pr-3 text-left sm:pl-0'>categoria</th>
               <th className='px-3 py-3.5 text-left'>Metodo de pago</th>
               <th className='px-3 py-3.5 text-left'>Costo</th>
               <th className='px-3 py-3.5 text-left'>Accion</th>
             </tr>
           </thead>
           <tbody>
             {listItems.map((item, index)=>(
               <tr key={index} className='rounded-lg bg-white divide-y divide-gray-200'>
                  <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>{item.date}</td>
                 <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>{item.category}</td>
                 <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>{item.payMethod}</td>
                 <td className='whitespaces-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'> ${item.cost}</td>
                 <td><button className='btn'>eliminar</button></td>
               </tr>
             ))  }
           
           </tbody>
     
         </table>
         
         </div>
<button className='btn relative left-[90%] mt-[0.4em]'>agregar</button>
         </div>
         </div>
       </div>
  )
}
 