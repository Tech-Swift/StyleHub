import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AuthPage from "@/pages/AuthPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import AuthModal from "@/components/cards/authModal";

export default function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="stylehub-theme">
      <Toaster richColors position="top-right" />

      <div className="min-h-screen bg-white">

        <Navbar onRequireAuth={() => setShowAuth(true)} />

        <Routes>
          <Route path="/" element={<Home onRequireAuth={() => setShowAuth(true)} />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>

        <Footer />

        <AuthModal
          open={showAuth}
          onClose={() => setShowAuth(false)}
        />

      </div>
    </ThemeProvider>
  );
}