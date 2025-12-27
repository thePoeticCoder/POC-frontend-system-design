/** @format */
"use client";

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DevTool } from "@hookform/devtools";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phNumbers: z.array(
    z.object({
      number: z.string().min(10, "Phone number must be at least 10 characters"),
    })
  ),
});

type FormType = z.infer<typeof formSchema>;

export const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
    reset,
    control,
    trigger,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormType) => {
    console.log("Form Data Submitted:", data);
    alert("Account created successfully!");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className='flex flex-col items-center justify-center w-[80%] h-full p-4'>
      <h1 className='text-3xl md:text-5xl lg:text-7xl text-gray-950 font-bold text-center animate-typing overflow-hidden whitespace-nowrap'>
        Let's create your account..
      </h1>

      <form
        className='shadow-lg rounded-lg p-6 w-full max-w-md bg-white'
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <div className='form-control mb-4'>
          <label htmlFor='name' className='block text-lg mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            {...register("name")}
            className='w-full p-2 border border-gray-300 rounded-md'
          />
          <p className='text-gray-500 text-xs mt-1'>{errors.name?.message}</p>
        </div>

        <div className='form-control mb-4'>
          <label htmlFor='email' className='block text-lg mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            {...register("email")}
            className='w-full p-2 border border-gray-300 rounded-md'
          />
          <p className='text-gray-500 text-xs mt-1'>{errors.email?.message}</p>
        </div>

        <div className='form-control mb-4'>
          <label htmlFor='password' className='block text-lg mb-2'>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            {...register("password")}
            className='w-full p-2 border border-gray-300 rounded-md'
          />
          <p className='text-gray-500 text-xs mt-1'>
            {errors.password?.message}
          </p>
        </div>

        <div className='form-control mb-4'>
          <label className='block text-lg mb-2'>Phone Numbers</label>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className='flex items-center mb-2'>
                <input
                  type='text'
                  placeholder='Enter phone number'
                  {...register(`phNumbers.${index}.number`)}
                  className='w-full p-2 border border-gray-300 rounded-md'
                />
                {index > 0 && (
                  <button
                    type='button'
                    onClick={() => remove(index)}
                    className='ml-2 p-2 bg-gray-500 text-white rounded-md'>
                    Remove
                  </button>
                )}
                <p className='text-gray-500 text-xs mt-1'>
                  {errors.phNumbers?.[index]?.number?.message}
                </p>
              </div>
            );
          })}
          <button
            type='button'
            onClick={() => append({ number: "" })}
            className='text-blue-500 mt-2'>
            Add phone number
          </button>
        </div>

        <button
          type='submit'
          disabled={!isDirty || !isValid || isSubmitting}
          className='w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300 disabled:opacity-50'>
          {isSubmitting ? "Creating..." : "Create Account"}
        </button>

        <div className='flex justify-between mt-4'>
          <button
            type='button'
            onClick={() => reset()}
            className='text-gray-600'>
            Reset
          </button>
          <button
            type='button'
            onClick={() => trigger()}
            className='text-gray-600'>
            Validate
          </button>
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};
