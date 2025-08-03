
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Navlink from "./navlink";

const navbar = () => {
  return (
    <div>
       <div className="fixed top-0 w-full bg-white shadow-sm z-50 ">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 ">
        <Link href="/">
          <Image src="/logo.png" width={100} height={50} alt="logo" priority/>
        </Link>
        <Navlink></Navlink>
      </div>
    </div>
    </div>
  )
}

export default navbar
