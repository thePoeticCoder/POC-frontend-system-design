/** @format */
"use client";
import { Service, servicesList } from "@/constant/service-list";
import React, { useState } from "react";

function PricingComponent() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <div className='py-12 bg-gray-100'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center text-gray-800 mb-12 pt-6'>
          Our Pricing Plans
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {servicesList.map((service: Service) => (
            <div
              key={service.id}
              className='group perspective'
              onMouseEnter={() => setFlippedId(service.id)}
              onMouseLeave={() => setFlippedId(null)}>
              <div
                className={`relative w-full h-64 bg-white shadow-lg rounded-lg transform-style-3d transition-transform duration-700 ${
                  flippedId === service.id ? "rotate-y-180" : ""
                }`}>
                <div className='absolute inset-0 flex flex-col justify-center items-center p-6 backface-hidden'>
                  <h3 className='text-2xl font-semibold text-gray-800'>
                    {service.title}
                  </h3>
                  <p className='text-xl font-bold text-black mt-4'>
                    {service.price}
                  </p>
                  <button className='mt-4 px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition'>
                    Get Started
                  </button>
                </div>

                <div className='absolute inset-0 flex flex-col justify-center items-center p-6 bg-black text-white rounded-lg rotate-y-180 backface-hidden'>
                  <p className='text-center'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;
