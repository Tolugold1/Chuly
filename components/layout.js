"use client"

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

const Layout = ({ children }) => {  
  const sidebarStatus = useSelector((state) => state.sidebar.status);
  return (
    <div className="flex justify-center w-full bg-gray-100">
      {/* Sidebar */}
      {sidebarStatus && (
        <div className="">
          <Sidebar />
        </div>
      )}

      {/* Main content area */}
      <div className="w-full">
        <Header />
        <div className="p-4 bg-[#F6F6F6]  flex justify-center w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
