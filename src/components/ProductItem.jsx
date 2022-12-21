import React from "react";
import icon1 from "../images/icons/icon1.png";

function ProductItem({ name, total }) {
  return (
    <div className="flex flex-row w-full">
      <img src={icon1} alt="icons" className="w-12 h-12"></img>
      <div className="pl-5">
        <div className="font-bold">{name}</div>
        <div className="text-slate-500">{total}</div>
      </div>
    </div>
  );
}

export default ProductItem;
