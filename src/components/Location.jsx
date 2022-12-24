import React from "react";
import { MdOutlineEditLocation } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import location from "../images/locations/location.jpg";

function Location() {
  return (
    <div className="my-16 relative flex flex-col">
      <h1 className="pb-12 font-bold text-3xl text-center">
        Popular Locations
      </h1>
   
   

    <div className="flex">
      <div className="flex flex-row justify-center gap-6">

        <div className="w-1/6 border rounded-3xl drop-shadow-xl relative overflow-hidden">
          <div className="w-full">
            <img src={location} alt="gambar" className="w-full"></img>
          </div>
          <div className="h-10">
            <div className="rotate-12 bg-white w-[150%] h-28 z-10 absolute -bottom-8 -left-6">
              <div className="flex gap-2 -rotate-12 absolute bottom-4 left-2">
                <div className="text-purple-600 pt-1 pl-6"><MdOutlineEditLocation size={20} /></div>
                <div>
                  <p className="font-bold">Australia</p>
                  <p className="text-slate-500">(40 Ads)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/6 border rounded-3xl drop-shadow-xl relative overflow-hidden">
          <div className="w-full">
            <img src={location} alt="gambar" className="w-full"></img>
          </div>
          <div className="h-10">
            <div className="rotate-12 bg-white w-[150%] h-28 z-10 absolute -bottom-8 -left-6">
              <div className="flex gap-2 -rotate-12 absolute bottom-4 left-2">
                <div className="text-purple-600 pt-1 pl-6"><MdOutlineEditLocation size={20} /></div>
                <div>
                  <p className="font-bold">Australia</p>
                  <p className="text-slate-500">(40 Ads)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/6 border rounded-3xl drop-shadow-xl relative overflow-hidden">
          <div className="w-full">
            <img src={location} alt="gambar" className="w-full"></img>
          </div>
          <div className="h-10">
            <div className="rotate-12 bg-white w-[150%] h-28 z-10 absolute -bottom-8 -left-6">
              <div className="flex gap-2 -rotate-12 absolute bottom-4 left-2">
                <div className="text-purple-600 pt-1 pl-6"><MdOutlineEditLocation size={20} /></div>
                <div>
                  <p className="font-bold">Australia</p>
                  <p className="text-slate-500">(40 Ads)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/6 border rounded-3xl drop-shadow-xl relative overflow-hidden">
          <div className="w-full">
            <img src={location} alt="gambar" className="w-full"></img>
          </div>
          <div className="h-10">
            <div className="rotate-12 bg-white w-[150%] h-28 z-10 absolute -bottom-8 -left-6">
              <div className="flex gap-2 -rotate-12 absolute bottom-4 left-2">
                <div className="text-purple-600 pt-1 pl-6"><MdOutlineEditLocation size={20} /></div>
                <div>
                  <p className="font-bold">Australia</p>
                  <p className="text-slate-500">(40 Ads)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>   
    </div>

    <div className="flex justify-center my-5">
      <div className="absolute w-20 flex justify-between">
        <span className="w-8 h-8 py-[2px] px-[4px] border drop-shadow-2xl rounded-full flex m-auto hover:scale-125"><button><BiChevronLeft size={22} /></button></span>
        <span className="w-8 h-8 py-[2px] px-[4px] border drop-shadow-2xl rounded-full flex m-auto hover:scale-125"><button><BiChevronRight size={22} /></button></span>
      </div>
    </div>

    </div>
  );
}

export default Location;
