import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_SECRET}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
