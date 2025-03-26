// components/NavLink.js
"use client"; // Must be a client component because it uses hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

export default function NavLink({ href, children, ...props }) {
  let dispatch = useDispatch();
  let pathname = usePathname();
  pathname = pathname == "/" ? "/dashboard" : pathname;
  const isActive = pathname === href;
  const colorClass = isActive ? "text-white" : "text-black";

  return (
    <Link href={href} {...props} className={`${colorClass}`} onClick={() => dispatch(props.hide())}>
      <span
        className={`px-4 py-2 rounded flex items-center justify-start ${
          isActive ? "sm:text-sm lg:text-xl rounded-lg w-full py-2 bg-[#EF2424] text-white" : "text-black sm:text-sm lg:text-xl w-full py-2"
        }`}
      >
        {children}
      </span>
    </Link>
  );
}
