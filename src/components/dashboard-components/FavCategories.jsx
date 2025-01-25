import React from "react";
//data
import categories from "../../utils/categFake";

export default function FavCategories() {
  return (
<aside className="mt-8 py-2 max-w-[1200px]">
        
      <div className="flex justify-start items-center pl-8 max-sm:flex-col gap-6">
        <h2> Categorias Favoritas</h2>
        <div className="text-4xl font-bold ml-0 flex gap-4">
          {categories.slice(0, 3).map((category) => (
            <div key={category.index}  className="bg-black-slate py-4 px-3 rounded-lg text-sm w-1/3">
              <div className="flex items-center gap-2">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
