"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsTable } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuVars = {
    initial: {   
      y: -10,  
    },
    animate: {    
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
        
      },
    },
    exit: {
      y: -10,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        
      },
    },
  };
  
  return (
    <>
      <section className="md:hidden lg:hidden">
        <div className="bg-green-500 p-2 text-white font-bold text-center">
          <div className="flex justify-center items-center gap-2">
            <BsWhatsapp className="text-2xl" />
            <p className="text-2xl">GUIDE ME</p>
          </div>
        </div>
      </section>

      <section className="bg-customColor">
        <div className="flex w-full items-center justify-between px-[20px] py-[10px] lg:container lg:mx-auto lg:px-20">
          <div className="flex gap-x-4">
            <BiMenu
              className="text-3xl text-white lg:hidden"
              onClick={() => setShow(!show)}
            />
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={30}
              className="hidden lg:block"
            />
            <div className="hidden border-r-2 border-white h-10 lg:block"></div>
            <button className="items-center justify-center border-opacity-10 text-white rounded-md hidden py-2 px-5 lg:block border lg:flex">
              <BsTable className="mr-1" />
              Course Menu
            </button>
            <div className="flex rounded">
              <input
                type="text"
                className="text-sm rounded-l-md p-1 min-w-[350px] border-none hidden lg:block"
                placeholder="Search your course here !"
              />
              <CiSearch className="bg-orange-500 text-white py-2 px-2 justify-center min-w-10 min-h-11 hidden lg:block rounded-r-md" />
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
            <div className="bg-orange-500 rounded-md lg:hidden">
              <BiSolidPhoneCall className="text-4xl p-1 text-white" />
            </div>

            <span className="hidden text-sm font-medium text-white lg:block">
              All Courses
            </span>
            <div className="hidden border-r-4 border-white h-6 lg:block"></div>
            <span className="hidden text-sm font-medium text-white lg:block">
              Corporate Training
            </span>
            <CgProfile className="hidden text-3xl text-white lg:block ml-4" />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {show && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden w-full p-2 h-[180px] bg-black rounded-sm"
          >
            <motion.div className="flex justify-center items-center bg-black mt-5">
              <motion.button
                className="px-4 py-1 gap-1 font-bold text-white border border-white-500 rounded-lg flex justify-center items-center"
                
              >
                <BsTable className="mr-1" />
                <p>Course Menu</p>
              </motion.button>
            </motion.div>
            <motion.div className="flex justify-center items-center mt-4">
              <input
                type="text"
                placeholder="Search your course here !"
                className="p-1 rounded-sm min-w-[300px] outline-none"
              />
              <CiSearch className="bg-orange-500 text-white py-2 px-2 justify-center min-w-8 min-h-8 lg:block rounded-r-md" />
            </motion.div>
            <motion.div className="All-course flex justify-center items-center gap-2 text-center text-white mt-4">
              <span className="text-sm font-medium text-white lg:block">
                All Courses
              </span>
              <span className="text-xl h-8">|</span>
              <span className="text-sm font-medium text-white lg:block">
                Corporate Training
              </span>
              <CgProfile className="text-3xl text-white lg:block ml-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


    
  );
}

export default Navbar;
