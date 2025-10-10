import React, { useState } from "react";
import Card from "../Components/Card";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router";

const Apps = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

  const searchedProducts = term
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(term)
      )
    : products;

  return (
    <div>
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between mx-4 mt-5 items-center">
        <h1 className="text-2xl font-semibold">
          ({searchedProducts.length}) Products Found
        </h1>
        <label>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Products"
            />
          </label>
        </label>
      </div>

      
      {searchedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {searchedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-gray-500">
            Product Not Found
          </h2>
          <p className="text-gray-400">Try searching with a different name</p>
        </div>
      )}
    </div>
  );
};

export default Apps;

