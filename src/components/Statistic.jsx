import React from "react";

function Statistic() {
  return (
    <div className="bg-[#130938]">
      <div className="grid grid-cols-4 content-center h-56 text-white text-center mx-56">
        <div>
          <p className="text-3xl text-[#DC4CDA] font-bold mb-3">11,400+</p>
          <p className="text-lg font-semibold">Sales and Counting</p>
        </div>
        <div>
          <p className="text-3xl text-[#7AD7D1] font-bold mb-3">8,400+</p>
          <p className="text-lg font-semibold">Reviews & Feedback</p>
        </div>
        <div>
          <p className="text-3xl text-[#F9EB4F] font-bold mb-3">10,350+</p>
          <p className="text-lg font-semibold">Active Customers</p>
        </div>
        <div>
          <p className="text-3xl text-[#7152F0] font-bold mb-3">1M+</p>
          <p className="text-lg font-semibold">App Downloads</p>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
