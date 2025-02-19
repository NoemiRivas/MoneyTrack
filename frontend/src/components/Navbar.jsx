//icons
import SearchIcon from "@mui/icons-material/Search";

//components
import AvatarIcon from "./AvatarIcon";
import { useContext } from "react";
import { AppContext } from "../context/ContextApp";

export default function Navbar() {
  const { user } = useContext(AppContext);

  return (
    <div className="bg-background text-white y shadow-m max-xl:w-full ">
      <nav className=" m-auto max-w-[1200px] lg:max-w-[800px] md:max-w-screen-md max-sm:max-w-[300px]">
        <div className="flex justify-end items-center gap-4 p-4">
          <span className="bg-violet-extra-light p-2 rounded-2xl max-md:hidden max-sm:hidden">
            <input
              type="search"
              className="rounded-lg bg-violet-extra-light focus:outline-none
               text-white mr-60 pl-4 "
              placeholder="Busca por aqui ..."
            />
            {/** agregar logica del buscador */}
            <SearchIcon className="cursor-pointer" />
          </span>

          <AvatarIcon user={user} />
        </div>
      </nav>
    </div>
  );
}
