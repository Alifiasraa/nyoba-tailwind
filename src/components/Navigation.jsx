import React from "react";
import { GoTriangleDown } from "react-icons/go";

function Navigation() {
  return (
    <div className=" flex flex-row inline bg-indigo-800 py-5 justify-center gap-x-24">
      <div className="flex flex-row">
        <p className="text-white text-sm">EN</p>
        <span className="text-white ml-1 self-center">
          <GoTriangleDown size={11} />
        </span>
      </div>

      <nav>
        <ul className="flex flex-row text-white">
          <li className="border border-none border-r-white px-4">
            Car & Vehicles
          </li>
          <li className="border border-none border-r-white px-4">For Sale</li>
          <li className="border border-none border-r-white px-4">Property</li>
          <li className="border border-none border-r-white px-4">Jobs</li>
          <li className="border border-none border-r-white px-4">Services</li>
          <li className="border border-none border-r-white px-4">Community</li>
          <li className="border border-none border-r-white px-4">Pets</li>
        </ul>
      </nav>

      <div>
        <ul className="flex flex-row text-white">
          <li className="underline px-4">Login</li>
          <li className="underline px-4">Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
