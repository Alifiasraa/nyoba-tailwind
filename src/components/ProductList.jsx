import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="flex justify-center py-20">
      <div className="w-5/6 grid justify-items-center">
        <section className="grid grid-cols-4 gap-x-10 gap-y-8 w-full ">
          {products.map((product) => (
            <ProductItem {...product} key={product.id} id={product.id} />
          ))}
        </section>
      </div>
    </div>
  );
}

const products = [
  { id: "1", name: "Vehicles", total: "20.000 Ads" },
  { id: "2", name: "Property", total: "20.000 Ads" },
  { id: "3", name: "Mobile Phones", total: "20.000 Ads" },
  { id: "4", name: "Electronics", total: "20.000 Ads" },
  { id: "5", name: "Healt & Beauty", total: "20.000 Ads" },
  { id: "6", name: "Fashion", total: "20.000 Ads" },
  { id: "7", name: "Sports, Arts", total: "20.000 Ads" },
  { id: "8", name: "Work CVs", total: "20.000 Ads" },
  { id: "9", name: "Jobs", total: "20.000 Ads" },
  { id: "10", name: "Animals & Pets", total: "20.000 Ads" },
  { id: "11", name: "Agriculture", total: "20.000 Ads" },
  { id: "12", name: "Equipment", total: "20.000 Ads" },
  { id: "13", name: "Babies & Kids", total: "20.000 Ads" },
  { id: "14", name: "Home & Furniture", total: "20.000 Ads" },
  { id: "15", name: "Services", total: "20.000 Ads" },
  { id: "16", name: "Repairing", total: "20.000 Ads" },
];

export default ProductList;
