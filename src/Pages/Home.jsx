import { Apple } from "lucide-react";
import React from "react";

const Home = () => {
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
        <img className="w-150" src="/src/assets/hero.png" alt="" />
      </div>

      {/* Banner section  */}
      <div className="bg-gradient-to-r from-[#A33FFB] to-[#7746FC]">
        <div className="py-4 text-3xl text-white font-semibold">
          <h1>Trusted by Millions, Built for You</h1>
        </div>

        <div className="sm:flex flex-col text-white py-2 md:flex-row gap-7 justify-around ">
          <div className="text-center">
            <p>Total Downloads</p>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="text-4xl font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="text-4xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
