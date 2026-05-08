import { useEffect } from "react";
import api from "./api/client";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  useEffect(() => {
    api.post("/test", {
      message: "Hello from central API, my second test and Axios 🚀",
    })
      .then(res => {
        console.log("Saved:", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="stylehub-theme">
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;