import AuthCard from "@/components/cards/AuthCard";

export default function AuthPage() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-10
        bg-gradient-to-br
        from-white
        via-zinc-50
        to-[#f5efe0]
        dark:from-black
        dark:via-[#0b0b0b]
        dark:to-[#111111]
      "
    >
      <AuthCard />
    </section>
  );
}