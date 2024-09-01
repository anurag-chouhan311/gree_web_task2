import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const data = useSelector((state) => state.itemData);
  return (
    <div className="w-[100%] h-[10%] bg-[#ccc] shadow-lg  flex justify-between items-center border-2 p-5">
      <Link to='/'><h1 className="text-center text-3xl">Restaurant Website</h1></Link>
      <Link to={'/order'}>
        <button className="border-2 p-2 bg-[#000] text-white rounded-md cursor-pointer">
          order list
        </button>
      </Link>
      <div className="relative flex">
        <Link to={"/cartitem"}>
          <CiShoppingCart className="text-4xl cursor-pointer font-bold hover:text-green-500" />
        </Link>
        <div className="flex justify-center items-center p-1 border-2 border-[#00000048] text-green-700 font-bold absolute w-[25px] h-[25px] rounded-full left-5 bottom-6 ">
          {data.length}
        </div>
      </div>
    </div>
  );
};

export default Header;
