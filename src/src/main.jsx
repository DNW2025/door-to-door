import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // (Falls du eine Tailwind-Indexdatei hast – sonst kannst du diese Zeile entfernen)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
