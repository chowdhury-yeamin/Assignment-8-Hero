import React from "react";
import Card from "../Components/Card";
import useProducts from "../Hooks/useProducts";

const Apps = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">
          ({products.length}) Products Found
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Apps;
