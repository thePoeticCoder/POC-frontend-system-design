import { useForm, FormProvider, useFormContext } from "react-hook-form";
import type { ReactNode } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* =========================
   ZOD SCHEMA (SOURCE OF TRUTH)
========================= */

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  role: z.enum(["user", "admin"]),
  age: z.coerce.number().min(18, "Must be 18+"),
  dob: z.string(),
  salary: z.coerce.number().positive("Salary must be positive"),
  subscribe: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

/* =========================
   FORM ROW
========================= */

function FormRow({
  label,
  name,
  children,
}: {
  label: string;
  name: keyof FormData;
  children: ReactNode;
}) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>
      {children}
      {errors[name] && (
        <p className="text-sm text-red-500">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}

/* =========================
   MAIN FORM
========================= */

export function CompleteForm() {
  // ❗ IMPORTANT: NO <FormData> GENERIC HERE
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "user",
      age: 18,
      dob: "",
      salary: 0,
      subscribe: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("SUBMIT:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-md space-y-4 rounded bg-white p-6 shadow"
      >
        <h2 className="text-xl font-semibold">Simple RHF Form</h2>

        <FormRow label="Name" name="name">
          <input
            className="w-full border p-2 rounded"
            {...methods.register("name")}
          />
        </FormRow>

        <FormRow label="Email" name="email">
          <input
            className="w-full border p-2 rounded"
            {...methods.register("email")}
          />
        </FormRow>

        <FormRow label="Role" name="role">
          <select
            className="w-full border p-2 rounded"
            {...methods.register("role")}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </FormRow>

        <FormRow label="Age" name="age">
          <input
            type="number"
            className="w-full border p-2 rounded"
            {...methods.register("age")}
          />
        </FormRow>

        <FormRow label="Date of Birth" name="dob">
          <input
            type="date"
            className="w-full border p-2 rounded"
            {...methods.register("dob")}
          />
        </FormRow>

        <FormRow label="Salary" name="salary">
          <input
            type="number"
            className="w-full border p-2 rounded"
            {...methods.register("salary")}
          />
        </FormRow>

        <label className="flex gap-2 items-center">
          <input type="checkbox" {...methods.register("subscribe")} />
          Subscribe
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
