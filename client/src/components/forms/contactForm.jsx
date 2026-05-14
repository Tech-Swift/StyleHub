import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { contactSchema } from "@/schemas/contactSchema";
import { submitContactForm } from "@/api/public/contactApi";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await submitContactForm(data);

      toast.success(response.message || "Message sent successfully");

      reset();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-foreground border border-border/40 rounded-3xl p-8 md:p-10 shadow-2xl transition-colors duration-300">

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            className="w-full bg-transparent border border-border/40 focus:border-[#c9a14a]
                       outline-none transition-all duration-300 rounded-xl px-5 py-4
                       text-foreground placeholder:text-muted-foreground"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email")}
            className="w-full bg-transparent border border-border/40 focus:border-[#c9a14a]
                       outline-none transition-all duration-300 rounded-xl px-5 py-4
                       text-foreground placeholder:text-muted-foreground"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="w-full bg-transparent border border-border/40 focus:border-[#c9a14a]
                       outline-none transition-all duration-300 rounded-xl px-5 py-4
                       text-foreground placeholder:text-muted-foreground"
          />

          {errors.subject && (
            <p className="text-red-500 text-sm mt-2">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows={6}
            placeholder="Write your message here..."
            {...register("message")}
            className="w-full resize-none bg-transparent border border-border/40 focus:border-[#c9a14a]
                       outline-none transition-all duration-300 rounded-xl px-5 py-4
                       text-foreground placeholder:text-muted-foreground"
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#c9a14a] hover:bg-[#d8b15a]
                     disabled:opacity-60 disabled:cursor-not-allowed
                     transition-all duration-300 text-black font-semibold py-4 rounded-xl"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
}