import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className=" flex justify-center my-4">
      <span className="text-2xl font-bold">HOOK</span>

      <div className=" border border-slate-300 rounded-3xl p-2 mx-8 w-2/3 inline justify-center relative">
        <input
          className="w-2/3 pl-2 focus:outline-none"
          placeholder="Type anything here..."
        ></input>
        <span>|</span>
        <input
          className="pl-6 w-1/4 focus:outline-none"
          placeholder="Postal Code OR Location"
        ></input>
        <div className="border rounded-full inline w-8 h-8 bg-purple-600 absolute right-2 top-1 py-[2px] px-[4px] flex">
          <button className="text-white m-auto">
            <FiSearch />
          </button>
        </div>
      </div>

      <button className="border rounded-3xl bg-teal-300 py-2 px-4 font-semibold">
        Post Ads
      </button>
    </div>
  );
};

export default Header;
