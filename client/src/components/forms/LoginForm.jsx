import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import api from "@/api/client";
import { useAuth } from "@/providers/context/AuthContext";

export default function LoginForm({ onSwitch }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

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

      const res = await api.post("/auth/login", form);

      login(res.data);

      toast.success("Welcome back!");

      const roleRoutes = {
        customer: "/dashboard/customer",
        stylist: "/dashboard/stylist",
        admin: "/dashboard/admin",
        superadmin: "/dashboard/superadmin",
      };

      setTimeout(() => {
        navigate(
          roleRoutes[res.data.role] || "/dashboard",
          { replace: true }
        );
      }, 1000);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
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
          placeholder="Enter your password"
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
          transition-all
        "
      >
        {loading ? (
          <Loader2 className="animate-spin w-4 h-4" />
        ) : (
          "Login"
        )}
      </Button>

      <p className="text-sm text-center text-zinc-600 dark:text-zinc-400">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="
            text-[#D4AF37]
            hover:underline
            font-medium
          "
        >
          Sign Up
        </button>
      </p>
    </form>
  );
}