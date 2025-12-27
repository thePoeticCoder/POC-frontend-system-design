/** @format */
"use client";

import { useForm } from "react-hook-form";

export type FormType = {
  name: string;
  // pinCode: number;
  // email: string;
  // phNumbers: {
  //   primary: number;
  //   secondary: number;
  // };
  // dob: Date;
};
export const FullForm = () => {
  const form = useForm<FormType>();
  const { register, handleSubmit, formState, control, reset, trigger } = form;
  const { errors, isDirty } = formState;

  const onSubmit = (data: FormType) => {
    console.log("data", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label htmlFor='name'></label>
          <input
            id='name'
            type='text'
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
            })}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
