import { Link } from "react-router-dom";

//React-Icons -------
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";



const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between items-center p-5 border-b text-sm xl:text-base ">
        <img
          className="w-[91px] h-[34px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/512px-Udemy_logo.svg.png"
          alt="Logo"
        />
        <Link className="hidden xl:block hover:text-purple-500 m-2 xl:m-0">
          {" "}
          Categories
        </Link>
        <div
          id="Search"
          className="p-2 border border-black bg-slate-100 rounded-3xl justify-between items-center hidden  w-[380px] lg:w-[580px]  xl:w-[800px] lg:flex "
        >
          <AiOutlineSearch className="w-5 h-5 ml-1 text-gray-400" />
          <input
            className=" w-[300px] lg:w-[500px]  xl:w-[1024px] outline-none bg-slate-100 "
            placeholder="Search for anything"
            type="text"
          />
        </div>

        <Link className="hidden  lg:block hover:text-purple-500 ">
          {" "}
          Udemy Business
        </Link>
        <Link className="hidden md:flex lg:flex hover:text-purple-500">
          {" "}
          Teach on Udemy
        </Link>
        <Link className="hidden md:flex lg:flex hover:text-purple-500">
          {" "}
          My Learning
        </Link>
        <AiOutlineHeart className="hidden md:flex lg:flex w-5 h-5" />
        <MdOutlineShoppingCart className="hidden md:flex lg:flex w-5 h-5" />
        <FaRegBell className="hidden md:flex lg:flex w-5 h-5" />
        <div className="rounded-full border w-8 h-8 bg-black text-white text-center p-[2px] font-medium">
          {" "}
          AT{" "}
        </div>
      </div>
      <div className="justify-between items-center  hidden xl:flex shadow-lg ">
        <div className="p-4 flex justify-between lg:m-auto">
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Development
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Business
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Finance & Accounting
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            It & Software
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Office Productivity
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Personal Devlopment
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Design
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Marketing
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Health & Fitnes
          </Link>
          <Link className="p-2 hover:text-purple-500 mx-2 font-medium">
            Music
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
