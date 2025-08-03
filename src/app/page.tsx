import { Montserrat } from "next/font/google";
import Hero from "./components/Hero";
import Card from "./components/card";
import Main from "./components/main";
export default function HomePage() {
  return (
    <div className="">
      <Hero />
     <div className="mt-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
        <p className="py-3 ">
          Discover our luxurious rooms and competitive rates designed to provide you with the ultimate comfort and relaxation during your stay.
        </p>
      </div>
      <Main />
     </div>
    </div>
  );
}
