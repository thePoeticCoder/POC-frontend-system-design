/** @format */

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { servicesList } from "@/constant/service-list";

const Services = () => {
  const router = useRouter();

  return (
    <>
      <div className='min-h-screen py-20 bg-gray-100'>
        <div className='w-[90%] xl:w-[80%] mx-auto text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-10'>
            Our Services
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {servicesList.map((service) => (
              <div
                key={service.id}
                className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer'
                onClick={() => router.push(`/services/${service.id}`)}>
                <h2 className='text-xl font-semibold text-gray-900'>
                  {service.title}
                </h2>
                <p className='text-gray-600 mt-2'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
