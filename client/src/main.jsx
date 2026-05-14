import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import { AuthProvider } from "@/providers/context/AuthContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthProvider>
);