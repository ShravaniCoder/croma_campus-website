import React from 'react'
import Image from "next/image";
import Logo from "../../public/logo.png";
import Phone from "../../public/phone.png";
import Menu from "../../public/menu.png";
import Profile from "../../public/profile.png";
import Options from "../../public/options.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    
    
      <div className="bg-customColor">
        <div className="flex w-full items-center justify-between px-[20px] py-[10px] lg:container lg:mx-auto lg:px-20">
          <div className="flex gap-x-4">
            <Image src={Menu} alt="Menu Button" className="lg:hidden" />
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={30}
              className="hidden lg:block"
            />
            <div className="hidden border-r-2 border-white h-10 lg:block"></div>
            <button className="items-center justify-center border-opacity-10 text-white rounded-md hidden py-2 px-5 lg:block border lg:flex">
              <Image src={Options} alt="Options" className="mr-1" />
              Course Menu
            </button>
            <div className="flex rounded">
              <input
                type="text"
                className="text-1xl rounded-l-md px-3 min-w-[350px] hidden lg:block"
                placeholder="Search your course here!"
              />
              <CiSearch className="bg-orange-500 py-2 px-2 justify-center min-w-10 min-h-11 hidden lg:block rounded-r-md" />
            </div>
          </div>

          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={30}
              className="lg:hidden"
            />
          </div>

          <div className="flex items-center gap-x-2">
            <Image src={Phone} alt="Call" className="rounded lg:hidden" />
            <span className="hidden font-medium text-white lg:block">
              All Courses
            </span>
            <div className="hidden border-r-4 border-white h-6 lg:block"></div>
            <span className="hidden font-medium text-white lg:block">
              Corporate Training
            </span>
            <Image
              src={Profile}
              alt="Profile"
              className="hidden lg:block ml-4"
            />
          </div>
        </div>
      </div>
    
  );
}

export default Navbar;