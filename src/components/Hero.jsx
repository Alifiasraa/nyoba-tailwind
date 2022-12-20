import React from "react";

function Hero() {
  return (
    <div flex>
      <div className="bg-[url('../public/hero.jpg')] bg-cover w-full h-96">
        <div className="bg-indigo-500 w-full h-full mix-blend-multiply">
          <div className="text-center">
            <p className="w-full text-7xl text-white font-bold">
              Buy & Sell <br /> Anything, Anywhere
            </p>
            <button className="border rounded-3xl bg-fuchsia-400 text-white py-2 px-6 mt-9">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero();
