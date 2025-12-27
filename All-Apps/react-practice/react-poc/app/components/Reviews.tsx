/** @format */

"use client";
import { Review, reviewsList } from "@/constant/review-lists";
import React from "react";
const renderStars = (rating: number): string => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const Reviews = () => {
  return (
    <div className='min-h-screen py-20 bg-gray-100'>
      <div className='w-[90%] xl:w-[80%] mx-auto text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-10'>
          Customer Reviews
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {reviewsList.map((review: Review) => (
            <div
              key={review.id}
              className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300'>
              <h2 className='text-xl font-semibold text-gray-900'>
                {review.name}
              </h2>
              <p className='text-sm text-gray-500'>{review.date}</p>
              <p className='text-yellow-500 text-lg mt-2'>
                {renderStars(review.rating)}
              </p>
              <p className='text-gray-600 mt-2'>{review.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
