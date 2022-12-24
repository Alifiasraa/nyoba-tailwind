import React from "react";

function Category() {
  return (
    <div className="bg-slate-100 flex flex-col py-14">
      <h1 className="pb-12 font-bold text-3xl text-center">
        Featured Categories
      </h1>

      <div className="flex flex-row justify-center gap-10">
        <div className="bg-[url('../public/category/category-1.jpg')] card-category">
          <p className="border border-none rounded-full py-2 px-5 m-3 max-w-1/2 text-center font-bold text-white bg-violet-500 absolute right-0">
            Popular
          </p>
          <div className="flex justify-center">
            <div className="w-5/6 h-16 border rounded-xl bg-white absolute bottom-3 flex flex-row p-1 divide-x divide-slate-300">
              <div className="basis-3/5 m-auto ml-3 font-bold">
                <p>Latest Jobs</p>
              </div>
              <div className="basis-2/5 m-auto ml-3 text-slate-400">
                <p className="text-center">10.000 Ads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[url('../public/category/category-2.jpg')] card-category">
          <p className="border border-none rounded-full py-2 px-5 m-3 max-w-1/2 text-center font-bold text-white bg-indigo-500 absolute right-0">
            Best Selling
          </p>
          <div className="flex justify-center">
            <div className="w-5/6 h-16 border rounded-xl bg-white absolute bottom-3 flex flex-row p-1 divide-x divide-slate-300">
              <div className="basis-3/5 m-auto ml-3 font-bold">
                <p>Automobiles</p>
              </div>
              <div className="basis-2/5 m-auto ml-3 text-slate-400">
                <p className="text-center">20.000 Ads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[url('../public/category/category-3.jpg')] card-category">
          <p className="border border-none rounded-full py-2 px-5 m-3 max-w-1/2 text-center font-bold text-white bg-violet-500 absolute right-0">
            Popular
          </p>
          <div className="flex justify-center">
            <div className="w-5/6 h-16 border rounded-xl bg-white absolute bottom-3 flex flex-row p-1 divide-x divide-slate-300">
              <div className="basis-3/5 m-auto ml-3 font-bold">
                <p>Real Estate</p>
              </div>
              <div className="basis-2/5 m-auto ml-3 text-slate-400">
                <p className="text-center">60.000 Ads</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="border border-none rounded-3xl bg-fuchsia-400 text-white py-2 px-6 mt-9 w-1/6 mx-auto">
        View all Categories
      </button>
    </div>
  );
}

export default Category;
