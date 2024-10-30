import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <h1>Webpack hello world</h1>
    </div>
  );
}
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
