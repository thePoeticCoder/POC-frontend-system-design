/** @format */

"use client";
import { servicesList } from "@/constant/service-list";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import React from "react";

const ServiceDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const service = servicesList.find((s) => s.id === parseInt(id as string));

  if (!service)
    return <div className='text-center py-20'>Service Not Found</div>;

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-10 rounded-lg shadow-lg max-w-lg text-center'>
        <h1 className='text-3xl font-bold text-gray-900'>{service.title}</h1>
        <p className='text-gray-600 mt-4'>{service.description}</p>
        <button
          className='mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition'
          onClick={() => router.push("/services")}>
          Back to Services
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
