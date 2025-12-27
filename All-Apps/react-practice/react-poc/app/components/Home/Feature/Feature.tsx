/** @format */

import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";

const Feature = () => {
  return (
    <div className='pt-16 bg-gray-100'>
      <div>
        <h1 className='text-center text-black font-bold'>
          Why Choose Our Services?
        </h1>
        <p className='mt-3 text-center font-medium text-gray-600 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
          We provide top-tier solutions tailored to your needs. Whether it's
          digital services, content creation, or development, our expertise
          ensures quality and satisfaction.
        </p>
      </div>

      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>Custom Solutions</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              We craft personalized services that align with your unique
              business goals.
            </p>
          </div>

          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>Innovative Approach</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              Our team leverages the latest technology to bring you innovative
              solutions.
            </p>
          </div>

          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>Expert Team</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              Our experienced professionals ensure the highest quality of
              service.
            </p>
          </div>

          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>Customer Satisfaction</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              We prioritize client satisfaction, delivering results that exceed
              expectations.
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <img
            src='/images/feature-men.webp'
            alt='Feature Illustration'
            className='w-full max-w-sm rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
