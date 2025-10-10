import React from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav></Nav>
      <div className="max-w-screen mx-auto w-full px-4 md:px-8 lg;px-8  flex-1 bg-gray-200 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
