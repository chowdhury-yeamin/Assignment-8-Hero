import { Apple } from "lucide-react";
import img1 from "../assets/hero.png";
import Banner from "../Components/Banner";
import { Link } from "react-router";
import Card from "../Components/Card";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  const { products , } = useProducts();

  const eightProducts = products.slice(0, 8);
  return (
    <div className="text-center  mt-5">
      <h1 className="font-bold text-4xl">
        We Build <br />
        <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="px-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="join mt-3">
        <button className="btn join-item">
          <a
            href="https://play.google.com/store/games?hl=en"
            className="flex gap-1"
          >
            <img
              src="https://www.gstatic.com/android/market_images/web/favicon_v3.ico"
              alt=""
              className="w-5"
            />
            Google Play
          </a>
        </button>
        <button className="btn join-item">
          <a href="https://www.apple.com/app-store/" className="flex gap-1">
            <Apple className="w-5"></Apple> App Store
          </a>
        </button>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <img className="w-150" src={img1} alt="" />
      </div>

      {/* Banner section  */}
      <Banner></Banner>

      <div className="text-center mt-15">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {eightProducts.map((product) => (   
            <Card key={product.id} product={product}></Card>
        ))}
      </div>
      <Link
        to={"/apps"}
        className="btn btn-primary text-2xl my-4 p-6 rounded-2xl"
      >
        Show All
      </Link>
    </div>
  );
};

export default Home;
