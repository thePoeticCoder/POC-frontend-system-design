/** @format */

import React from "react";
import BoxText from "../../Helper/BoxText";
import { AboutImage } from "./about-image";

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <div>
          <AboutImage />
        </div>
        <div>
          <BoxText>About Us</BoxText>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5] sm:leading-[3rem]'>
            {" "}
            Everything you can do is here..
          </h1>
          <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>
            Welcome to Everything, where we bring ideas to life and solutions to
            your doorstep. Our mission is to provide high-quality, tailored
            services that empower creators, businesses, and individuals alike.
            Whether you need expert content creation, cutting-edge tech
            solutions, security services, or personal development coaching,
            we’ve got you covered. Let us help you achieve more, create more,
            and grow more—all in one place.
          </p>
          <button className='mt-5 text-gray-600 font-bold pb-1 border-b-2 border-black'>
            Learn More &#8594;
          </button>
          <div className='mt-8 border-l-2 border-gray-200'>
            <div className='ml-6'>
              <p className='text-gray-700 font-medium'>
                &quot; The many integerations that can be linked really help me
                see data from other tools I also use. &quot;
              </p>
              <div className='flex items-center space-x-6 mt-6'>
                <img
                  className='rounded-full'
                  src='/images/u3.jpg'
                  alt='user'
                  width={40}
                  height={40}></img>
                <p className='font-medium'>Paras Jain</p>
                <p className='text-gray-700 text-sm'>Product Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
