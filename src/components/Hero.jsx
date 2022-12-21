import React from "react";

function Hero() {
  return (
    <div>
      <div className="bg-[url('../public/hero.jpg')] bg-cover w-full h-96 bg-indigo-500 bg-blend-multiply flex">
        {/* <div className="bg-indigo-500 w-full h-full mix-blend-multiply inline"></div> */}
        <div className="m-auto text-center">
          <p className="w-full text-6xl text-white font-bold">
            Buy & Sell <br /> Anything, Anywhere
          </p>
          <button className="border border-none rounded-3xl bg-[#E647E1] text-white py-2 px-6 mt-9">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
