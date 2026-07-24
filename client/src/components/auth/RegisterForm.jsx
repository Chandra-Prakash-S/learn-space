import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { registerSchema } from "@/schemas/registerSchema";
import { useRegisterMutation } from "@/hooks/auth/useRegisterMutation";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import PasswordInput from "@/components/auth/PasswordInput";
import FormField from "@/components/auth/FormField";

function RegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const registerMutation = useRegisterMutation();

  const onSubmit = async (formData) => {
    try {
      await registerMutation.mutateAsync(formData);

      toast.success("Account created successfully!");

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <Card className="border border-slate-800 bg-slate-900 shadow-2xl">
      <CardHeader className="space-y-2">
        <CardTitle className="text-3xl font-bold text-white">
          Create Account 🚀
        </CardTitle>

        <CardDescription className="text-slate-400">
          Join LearnSpace and start your learning journey.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <FormField
            id="name"
            label="Full Name"
            error={errors.name}
          >
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className={cn(
                "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500",
                errors.name &&
                  "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500"
              )}
            />
          </FormField>

          <FormField
            id="email"
            label="Email"
            error={errors.email}
          >
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={cn(
                "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500",
                errors.email &&
                  "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500"
              )}
            />
          </FormField>

          <FormField
            id="password"
            label="Password"
            error={errors.password}
          >
            <PasswordInput
              id="password"
              placeholder="••••••••"
              {...register("password")}
              className={cn(
                "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500",
                errors.password &&
                  "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500"
              )}
            />
          </FormField>

          <FormField
            id="confirmPassword"
            label="Confirm Password"
            error={errors.confirmPassword}
          >
            <PasswordInput
              id="confirmPassword"
              placeholder="••••••••"
              {...register("confirmPassword")}
              className={cn(
                "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500",
                errors.confirmPassword &&
                  "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500"
              )}
            />
          </FormField>

          <Button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full bg-indigo-600 transition-all duration-200 hover:bg-indigo-500 disabled:opacity-70"
          >
            {registerMutation.isPending
              ? "Creating Account..."
              : "Create Account"}
          </Button>

          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Sign In
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default RegisterForm;