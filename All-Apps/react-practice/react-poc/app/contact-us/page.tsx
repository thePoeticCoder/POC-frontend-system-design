/** @format */

"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { servicesList } from "@/constant/service-list";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
    reset,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const [selectedService, setSelectedService] = useState("");

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    alert(" Your message has been sent successfully!");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className='p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10'>
      <h2 className='text-2xl font-semibold text-center mb-6'>📩 Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>
        <div>
          <input
            {...register("name")}
            type='text'
            placeholder='Your Name'
            className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black transition'
          />
          <p className='text-red-500 text-xs mt-1'>{errors.name?.message}</p>
        </div>

        <div>
          <input
            {...register("email")}
            type='email'
            placeholder='Your Email'
            className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black transition'
          />
          <p className='text-red-500 text-xs mt-1'>{errors.email?.message}</p>
        </div>

        <div>
          <select
            {...register("service")}
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-black transition'>
            <option value=''>Select a Service</option>
            {servicesList.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          <p className='text-red-500 text-xs mt-1'>{errors.service?.message}</p>
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder='Your Message'
            className='w-full p-3 border border-gray-300 rounded h-24 focus:outline-none focus:border-black transition'
          />
          <p className='text-red-500 text-xs mt-1'>{errors.message?.message}</p>
        </div>

        <button
          type='submit'
          disabled={!isDirty || !isValid || isSubmitting}
          className='w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition duration-300 disabled:opacity-50'>
          {isSubmitting ? "Sending..." : "Send Message 🚀"}
        </button>

        <div className='flex justify-between mt-4 text-gray-600 text-sm'>
          <button
            type='button'
            onClick={() => reset()}
            className='hover:text-black transition'>
            Reset
          </button>
          <button
            type='button'
            onClick={() => trigger()}
            className='hover:text-black transition'>
            Validate
          </button>
        </div>
      </form>

      <div className='mt-8 text-center text-gray-600'>
        <p>
          📞 Contact us at: <strong>9090909090</strong>
        </p>
        <p>
          📧 Email: <strong>parasjainn08@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
