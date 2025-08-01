"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import clsx from "clsx";
import Footer from "./footer";

const Navlink = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="w-full  bg-white  top-0 z-50">
      <>
        {/* Toggle Button for Mobile */}
        <div className="flex justify-end md:hidden px-4 py-3">
          <button
            onClick={() => setIsOpen(!open)}
            className="inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded-md hover:bg-gray-100 transition-all duration-200"
          >
            {open ? <IoClose className="size-8" /> : <IoMenu className="size-8" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={clsx(
            "w-full md:block md:w-auto transition-all duration-300 ease-in-out",
            {
              hidden: !open,
            }
          )}
        >
          <ul
            className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 md:mt-0 rounded-sm
              bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:border-0
              md:bg-white md:justify-center"
          >
            <li>
              <Link
                href="/home"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/room"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                ROOMS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="/myreservation"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                MY RESERVATION
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                DASHBOARD
              </Link>
            </li>
            <li>
              <Link
                href="/admin/room"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                MANAGE ROOM
              </Link>
            </li>
            <li className="pt-2 md:pt-0">
              <Link
                href="/signin"
                className="block text-center py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm md:ml-4"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default Navlink;
