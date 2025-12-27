import { useForm } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

export function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
