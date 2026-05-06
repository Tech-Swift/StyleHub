import { useEffect } from "react";
import api from "./api/client";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;