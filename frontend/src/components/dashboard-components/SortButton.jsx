import React,{useState} from 'react'


export default function SortButton({filtrado, setFiltrado}) {
    const [order, setOrder]= useState("asc")
const handleSort = () => {
    const sorted = [...filtrado].sort((a,b)=>{
        return order === "asc" ? a.amount - b.amount : b.amount - a.amount
        
    })
    setFiltrado(sorted);
        setOrder(order === "asc" ? "desc" : "asc")
}

  return (
    <button
      onClick={handleSort}
      className="button-secondary "
    >
      
   {order === "asc" ? "↑" : "↓"} <span>Ordenar </span> 
    </button>
  )
}
