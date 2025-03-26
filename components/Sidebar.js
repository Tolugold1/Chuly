// components/Sidebar.js
"use client";

import React from "react";
// import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink"
import { CiSettings } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "@/store/slices/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  let pathname = usePathname();
  let classStatus = pathname == "/dashboard" ? "text-white" : "text-black";
  const sidebarStatus = useSelector((state) => state.sidebar.status); 
  
  const handleShowSidebar = () => {
    if (sidebarStatus == true) {
        dispatch(hide());
    } else {
        dispatch(show())
    }
  }

  return (
    <aside className="lg:w-[350px] h-screen vsm:w-full sm:w-[150px] bg-white  p-4 flex justify-center vsm:z-[100] md:z-0 vsm:top-0 vsm:left-0 vsm:fixed md:relative vsm:bottom-0 vsm:right-0">
      <div className="">
        <div className="flex vsm:justify-between lg:justify-center">
          {/* Profile picture */}
          <div>
            <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
              <Image
                src="/profile-pic.svg"
                alt="Profile"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h2 className="md:text-xl font-semibold text-black vsm:text-xl">Temiloluwa</h2>
          </div>
          <div className="lg:relative mt-4 md:hidden" onClick={handleShowSidebar}>
            <Image
                src="/bar.svg"
                alt="Profile"
                width={20}
                height={20}
                className="object-cover"
            />
            </div>
        </div>

        {/* Nav links */}
        <nav className="mt-8">
          <ul className="space-y-2">
            <li className=" flex  ">
              <NavLink href="/dashboard" hide={hide}>
                {/* <Image
                  src="/dashboard_icon.svg"
                  alt="dashboard"
                  width={20}
                  height={20}
                  className="object-cover"
                /> */}
                <RxDashboard className={classStatus} />
                <span className="lg:w-40 sm:w-30 ml-4">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li className=" flex  ">
              <NavLink href="/profile">
                <Image
                  src="/profile.svg"
                  alt="Profile"
                  width={20}
                  height={20}
                  className="object-cover text-white"
                />
                <span className="lg:w-40 sm:w-30 ml-4">
                  My Profile
                </span>
              </NavLink>
            </li>
            <li className=" flex  ">
              <NavLink href="#">
                <Image
                  src="/heart.svg"
                  alt="favourites"
                  width={20}
                  height={20}
                  className="object-cover text-white"
                />
                <span className="lg:w-40 sm:w-30 ml-4">
                  Favorites
                </span>
              </NavLink>
            </li>
            <li className=" flex  ">
              <NavLink href="#">
                <div className="flex justify-start">
                  <Image
                    src="/mutual.svg"
                    alt="Mutual icon"
                    width={20}
                    height={20}
                    className="object-cover text-white"
                  />
                  <span className="lg:w-40 sm:w-30 ml-4">
                    My Mutuals
                  </span>
                </div>
              </NavLink>
            </li>
            <li className=" flex  ">
              <NavLink href="#">
                <Image
                  src="/subscribe.svg"
                  alt="subscribe icon"
                  width={20}
                  height={20}
                  className="object-cover text-white"
                />
                <span className="lg:w-40 sm:w-30 ml-4">
                  My Subscribed
                </span>
              </NavLink>
            </li>
            <li className=" flex  ">
              <NavLink href="#">
                <Image
                  src="/interest.svg"
                  alt="Interested Icon"
                  width={20}
                  height={20}
                  className="object-cover text-white"
                />
                <span className="lg:w-40 sm:w-30 ml-4">
                  Interested in me
                </span>
              </NavLink>
            </li>
            <li className=" flex  ">
              <NavLink href="#">
                <Image
                  src="/settings.svg"
                  alt="settings"
                  width={20}
                  height={20}
                  className="object-cover text-white"
                />
                <span className="w-40 ml-4">
                  Settings
                </span>
              </NavLink>
            </li>
            <li className=" flex  ">
              <NavLink href="#">
                <Image
                  src="/quit.svg"
                  alt="logout"
                  width={20}
                  height={20}
                  className="object-cover text-white"
                />
                <span className="w-40 ml-4">
                  Logout
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
