import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="realtive h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-7xl font-extrabold leading-tight mb-3 capitalize text-white">
          Book Your Luxury Room
        </h1>
        <p className="text-xl text-white mb-8">
          Experience the best in hospitality with our exclusive hotel bookings.
          Enjoy luxury, comfort, and convenience at your fingertips.
        </p>
        <div className="flex gap-5">
          <Link
            href="/room"
            className="bg-gray-700 text-white hover:bg-gray-900 py-2
          px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg"
          >
            Book Now
          </Link>
          <Link
            href="/room"
            className="bg-transparent border  text-white hover:bg-auto py-2
          px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg"
          >
            Contact User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
