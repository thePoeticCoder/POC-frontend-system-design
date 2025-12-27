/** @format */
"use client";
import { navLinks } from "@/constant/nav-links";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`transition-all ${
        navbg ? "bg-white shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[50] fixed w-full`}>
      <div className='flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center'>
            <GrTechnology className='w-6 h-6 text-white' />
          </div>
          <h1 className='text-xl md:text-2xl font-bold text-gray-900 hidden sm:block'>
            Everything
          </h1>
        </div>

        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link: any) => (
            <Link
              href={link.url}
              key={link.id}
              className='text-gray-800 hover:text-red-600 font-semibold transition-all duration-200'>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center space-x-4'>
          <Link href='/create-account'>
            <button className='relative inline-block text-lg group px-5 py-3 font-medium text-gray-800 border-2 border-gray-900 rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-900'>
              Create Account
            </button>
          </Link>

          <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 cursor-pointer text-gray-900 lg:hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
