import React from "react";

function ProductItem({ name, total }) {
  return (
    <div className="flex flex-row w-full">
      <img src="../public/icons/icon1.png" alt="icons"></img>
      <div className="pl-5">
        <div className="font-bold">{name}</div>
        <div className="text-slate-500">{total}</div>
      </div>
    </div>
  );
}

export default ProductItem();
