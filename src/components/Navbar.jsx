//icons
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
export default function Navbar({ showSidebar, open }) {
  return (
    <div className="bg-white w-full shadow-ms fixed top-0">
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
              <h2 className="font-sans text-slate-700 ml-0">avatar</h2>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-between items-center gap-4 p-4  max-sm:justify-end max-lg:justify-center ">
            <button className="btn">
              <ArrowLeftIcon onClick={showSidebar} />{" "}
            </button>
            <li className="max-md:hidden ">
              <SearchIcon className="fill-red-light cursor-pointer" />
              <input
                type="search"
                className="border-2 border-sky-500 rounded-lg focus:border-none max-md:hidden"
              />
            </li>
            <li>
              <h2 className="font-sans text-slate-700 ml-0 max-md:hidden">
                avatar
              </h2>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
