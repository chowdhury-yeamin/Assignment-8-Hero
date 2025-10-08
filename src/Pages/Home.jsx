import { Apple } from "lucide-react";
import img1 from "../assets/hero.png"
import Banner from "../Components/Banner"

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
        <img className="w-150" src={img1} alt="" />
      </div>

      {/* Banner section  */}
     <Banner></Banner>
    </div>
  );
};

export default Home;
