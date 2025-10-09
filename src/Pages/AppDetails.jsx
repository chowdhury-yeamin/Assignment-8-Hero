import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import downloadImg from "../assets/icon-downloads.png";
import starImg from "../assets/icon-ratings.png";
import likeImg from "../assets/icon-review.png";
import ErrorApp from "./ErrorApp";

const AppDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;
  const product = products.find((p) => String(p.id) === id);
   if (!product) return <ErrorApp></ErrorApp>;
  const {
    image,
    title,
    companyName,
    description,
    ratingAvg,
    reviews,
    size,
    downloads,
  } = product || {};

  return (
    <div>
      <div className="flex items-center gap-3 mt-10 md:gap-4 lg:gap-5">
        <div>
          <figure className="w-50 md:w-70 lg:100">
            <img src={image} alt="Album" />
          </figure>
        </div>

        <div>
          <div className="card-body ">
            <h2 className="card-title text-2xl font-semibold">{title}</h2>
            <p>
              Developed by
              <span className="text-purple-400">{companyName}</span>
            </p>
          </div>
          <div>
            <hr className="text-gray-400 ml-3" />
            <div className="flex gap-8 ml-5 mt-2">
              <div>
                <img src={downloadImg} alt="" className="w-[70px]" />
                <p>Downloads</p>
                <h1>{downloads}</h1>
              </div>
              <div>
                <img src={starImg} alt="" className="w-[70px]" />
                <p>Average Ratings</p>
                <h1>{ratingAvg}</h1>
              </div>
              <div>
                <img src={likeImg} alt="" className="w-[70px]" />
                <p>Total Reviews</p>
                <h1>{reviews}</h1>
              </div>
            </div>
            <div className="ml-5 mt-2">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded">
                Install Now ({size} MB)
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-400 ml-3 mt-10" />
      <div></div>
      <div className="my-10">
        <h1 className="text-xl font-bold">Description</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
