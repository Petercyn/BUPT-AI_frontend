"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { api } from "@/lib/api";

interface FieldErrors {
  email?: string;
  password?: string;
}

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      email: String(formData.get("email") || "").trim(),
      password: String(formData.get("password") || ""),
    };

    const nextErrors: FieldErrors = {};
    if (!data.email) nextErrors.email = "School email is required.";
    if (!data.password) nextErrors.password = "Password is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      setLoading(true);
      const res = await api.auth.login({
        matricNumber: data.email, // backend expects matric number but frontend input name is email... wait, label says "School email". Backend expects matricNumber.
        password: data.password
      });

      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res));

      toast.success("Welcome back.", {
        description: "We will use your answers to personalize your reading habit.",
      });

      if (res.isOnboarded) {
        router.push("/dashboard");
      } else {
        router.push("/onboarding");
      }
    } catch (error: any) {
      toast.error("Login failed", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-6"
    >
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight">
          Sign in to continue
        </h2>
        <p className="text-sm text-muted-foreground">
          Use your school email and password to access your tutoring space.
        </p>
      </div>

      <Input
        name="email"
        type="email"
        label="School email"
        placeholder="firstname.lastname@babcock.edu.ng"
        autoComplete="email"
        error={errors.email}
      />
      <Input
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        error={errors.password}
      />

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          This is a UI preview. Your answers will be saved once the backend is
          connected.
        </p>
        <Button type="submit" loading={loading}>
          Continue to setup
        </Button>
      </div>
    </form>
  );
}

