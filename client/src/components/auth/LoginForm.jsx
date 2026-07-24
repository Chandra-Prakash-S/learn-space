import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { loginSchema } from "@/schemas/loginSchema";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation";
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

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = async (formData) => {
    try {
      await loginMutation.mutateAsync(formData);

      toast.success("Login successful!");

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
          Welcome Back 👋
        </CardTitle>

        <CardDescription className="text-slate-400">
          Access your courses, community, and live sessions.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
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

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-indigo-600 transition-all duration-200 hover:bg-indigo-500 disabled:opacity-70"
          >
            {loginMutation.isPending
              ? "Signing In..."
              : "Sign In"}
          </Button>

          <p className="text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Create one
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;