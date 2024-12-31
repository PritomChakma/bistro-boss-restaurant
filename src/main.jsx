import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import router from "./Routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
