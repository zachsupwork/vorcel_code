import  { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './styles.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found! Make sure you have an element with id='root' in your HTML.");
}
