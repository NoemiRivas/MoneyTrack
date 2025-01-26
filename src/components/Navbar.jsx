//icons
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
//components	
import AvatarIcon from "./AvatarIcon";
export default function Navbar({ showSidebar, open }) {
  return (
    <div className="bg-white shadow-ms fixed top-0 left-0 right-0 z-50">
      <nav className=" m-auto w-[1200px]">
        {!open ? (
          <ul className="flex justify-between items-center gap-4 p-4 ">
            <button className="btn">
              <MenuIcon className="cursor-pointer" onClick={showSidebar} />
            </button>
            <li>
              <SearchIcon className="fill-red-light  cursor-pointer" />
              <input
                type="search"
                className="border-2 border-sky-500 rounded-lg focus:border-none max-md:hidden"
              />
            </li>
            <li>
              <AvatarIcon />
            </li>
          </ul>
        ) : (
          <ul className="flex justify-between items-center gap-4 p-4 max-sm:margin-bottom-4 mt-1 ml-2">
            <button className="btn">
              <ArrowLeftIcon onClick={showSidebar} />
            </button>
            <li className="max-md:hidden ">
              <SearchIcon className="fill-red-light cursor-pointer" />
              <input
                type="search"
                className="border-2 border-sky-500 rounded-lg focus:border-none max-md:hidden"
              />
            </li>
            <li>
            <AvatarIcon />
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
