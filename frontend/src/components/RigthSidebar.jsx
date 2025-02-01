import React from 'react'
import FavCategories from "./dashboard-components/FavCategories";
import Calendar from "./dashboard-components/Calendar";

export default function LefthSidebar() {
  return (
   <aside className='absolute lg:right-10 top-0 max-[1345px]:hidden'>
    <FavCategories/>
    <Calendar />
   </aside>
  )
}
