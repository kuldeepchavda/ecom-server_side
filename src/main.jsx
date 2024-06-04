import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/Auth.jsx";
import CompanyName from "./components/CompanyName.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <CompanyName/>
      <App />
    </React.StrictMode>
    
  </AuthProvider>
);
