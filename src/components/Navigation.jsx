import React from "react";
import { GoTriangleDown } from "react-icons/go";

function Navigation() {
  return (
    <div className=" flex flex-row inline bg-[#361C90] py-5 justify-center gap-x-20">
      <div className="flex flex-row">
        <p className="text-white text-sm">EN</p>
        <span className="text-white ml-1 self-center">
          <GoTriangleDown size={11} />
        </span>
      </div>

      <nav className="grid grid-cols-7 text-center divide-x text-white w-3/5">
        <div className="hover:text-teal-300 hover:cursor-pointer">
          Car & Vehicles
        </div>
        <div className="hover:text-teal-300 hover:cursor-pointer">For Sale</div>
        <div className="hover:text-teal-300 hover:cursor-pointer">Property</div>
        <div className="hover:text-teal-300 hover:cursor-pointer">Jobs</div>
        <div className="hover:text-teal-300 hover:cursor-pointer">Services</div>
        <div className="hover:text-teal-300 hover:cursor-pointer">
          Community
        </div>
        <div className="hover:text-teal-300 hover:cursor-pointer">Pets</div>

        {/* <ul className="flex flex-row text-white">
          <li className="border border-none border-r-white px-4">
            Car & Vehicles
          </li>
          <span>|</span>
          <li className="border border-none border-r-white px-4">For Sale</li>
          <span>|</span>
          <li className="border border-none border-r-white px-4">Property</li>
          <span>|</span>
          <li className="border border-none border-r-white px-4">Jobs</li>
          <span>|</span>
          <li className="border border-none border-r-white px-4">Services</li>
          <span>|</span>
          <li className="border border-none border-r-white px-4">Community</li>
          <span>|</span>
          <li className="border border-none border-r-white px-4">Pets</li>
        </ul> */}
      </nav>

      <div>
        <ul className="flex flex-row text-white">
          <li className="underline px-4 hover:text-teal-300 hover:cursor-pointer">
            Login
          </li>
          <li className="underline px-4 hover:text-teal-300 hover:cursor-pointer">
            Register
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
