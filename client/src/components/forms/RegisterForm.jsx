import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import api from "@/api/client";

export default function RegisterForm({ onSwitch }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/auth/register", form);

      toast.success(
        "Account created successfully!"
      );

      setTimeout(() => {
        onSwitch();
      }, 1200);
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Full Name
        </label>

        <Input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          className="
            h-11
            border-zinc-300
            dark:border-zinc-700
            focus-visible:ring-[#D4AF37]
          "
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email
        </label>

        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="
            h-11
            border-zinc-300
            dark:border-zinc-700
            focus-visible:ring-[#D4AF37]
          "
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Password
        </label>

        <Input
          type="password"
          name="password"
          placeholder="Create a password"
          value={form.password}
          onChange={handleChange}
          className="
            h-11
            border-zinc-300
            dark:border-zinc-700
            focus-visible:ring-[#D4AF37]
          "
          required
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="
          w-full
          h-11
          bg-[#D4AF37]
          hover:bg-[#c49b22]
          text-black
          font-semibold
        "
      >
        {loading ? (
          <Loader2 className="animate-spin w-4 h-4" />
        ) : (
          "Create Account"
        )}
      </Button>

      <p className="text-sm text-center text-zinc-600 dark:text-zinc-400">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="
            text-[#D4AF37]
            hover:underline
            font-medium
          "
        >
          Login
        </button>
      </p>
    </form>
  );
}