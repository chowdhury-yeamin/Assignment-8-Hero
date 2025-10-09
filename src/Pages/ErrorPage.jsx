import { Link } from "react-router";
import pageNotFoundImg from "../assets/error-404.png";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div className=" bg-gray-200 ">
      <Nav></Nav>
      <div className='max-w-screen mx-auto w-full px-4 md:px-8 lg;px-8  flex-1'>
        <div className='my-7 flex flex-col items-center'>
          <img src={pageNotFoundImg} alt="" className="max-w-[250px]" />
          <h1>OPPS!! PAGE NOT FOUND</h1>
          <p>The page you are looking for is not available.</p>
          <Link to={"/"} className="btn btn-primary">
            Go Back!
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
