/** @format */

import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center flex-col">
      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        <div>
          <p className='text-sm sm:text-base md:text-xl font-bold text-black'>
            Lets do the everything Here
          </p>
          <h1 className='text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-gray-600 leading-[2.5rem] md:leading-[3.5rem]'>
            One solution, infinite possibilities—your all-in-one powerhouse for{" "}
            {"  "}
            <span className='text-black'>everything you need!</span>
          </h1>
          <p className='text-xs sm:text-sm md:text-base font-medium text-gray-600'>
            Experience the ultimate all-in-one solution designed to handle
            everything effortlessly. Whether it's work, creativity, or daily
            tasks, this powerhouse adapts to your needs, making life simpler and
            more efficient. One product, endless possibilities!
          </p>
          <div className='flex sm:flex-row flex-col sm:items-center sm:space-x-4 mt-6'>
            <div className='flex items-center space-x-4'>
              <img
                src='/images/google.png'
                alt='google'
                width={40}
                height={40}
              />
              <div>
                <div className='flex items-center space-x-2 '>
                  <h1 className='text-lg sm:text-xl md:text-2xl text-gray-600 font-bold'>
                    4.5
                  </h1>
                  <div className='flex items-center'>
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <BsStarHalf className='w-4 h-4 text-yellow-600' />
                  </div>
                </div>
                <p className='text-gray-600 text-small sm:text-base'>
                  Best rated on google
                </p>
              </div>
            </div>
            <div className='flex mt-4 sm:mt-0 items-center space-x-4'>
              <img
                src='/images/linkedin.png'
                alt='google'
                width={40}
                height={40}
              />
              <div>
                <div className='flex items-center space-x-2 '>
                  <h1 className='text-lg sm:text-xl md:text-2xl text-gray-600 font-bold'>
                    4.7
                  </h1>
                  <div className='flex items-center'>
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <FaStar className='w-4 h-4 text-yellow-600' />
                    <BsStarHalf className='w-4 h-4 text-yellow-600' />
                  </div>
                </div>
                <p className='text-gray-600 text-small sm:text-base'>
                  Best rated on linkedin
                </p>
              </div>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col sm:items-center sm:space-x-4 mt-6'>
            <div className='mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <a
                href='#_'
                className='rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-gray-600 active:shadow-none shadow-lg bg-gradient-to-tr from-gray-600 to-gray-400 border-gray-800 text-white'>
                <span className='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10'></span>
                <span className='relative'>Get Free Trial</span>
              </a>
            </div>
            <div className='mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <a
                href='/create-account'
                className='rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-gray-600 active:shadow-none shadow-lg bg-gradient-to-tr from-gray-600 to-gray-400 border-gray-800 text-white'>
                <span className='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10'></span>
                <span className='relative'>Create Account</span>
              </a>
            </div>
          </div>
        </div>
        <div className='mx-auto hidden xl:block '>
          <img src='/images/hero.jpg' alt='hero' width={900} height={900}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
