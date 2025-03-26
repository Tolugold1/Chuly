// components/Header.js
import React from "react";
import { FaSearch, FaBell, FaFilter } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white ">
      {/* Left section: brand, search, filter */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center border-r-2 shadow-md w-40">
          <Image
            src="/logo.svg"
            alt="Profile"
            width={60}
            height={60}
            className="object-cover"
          />
          <div className=" ml-4 text-2xl font-bold text-black">Chuly</div>
        </div>

        <div className="flex items-center gap-8 lg:left-8 vsm:left-3">
          <div className="vsm:hidden lg:flex relative  flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full px-4 py-1 pl-8 border-[#3E7BEA]"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <button className="vsm:hidden md:flex flex items-center bg-gray-100 px-3 py-1 rounded-full text-gray-600">
            <FaFilter className="mr-1" /> Filter
          </button>
        </div>
      </div>

      {/* Right section: notification, user avatar */}
      <div className="flex items-center space-x-4 md:pr-10 vsm:pr-[40px]">
        <Image
          src="/bell.svg"
          alt="Notification bell"
          width={20}
          height={20}
          className="object-cover"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full">
          <Image
            src="/profile-pic.svg"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
          </div>
      </div>
    </header>
  );
};

export default Header;
