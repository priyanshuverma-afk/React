// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import UserProvider from "./AuthContext/UserProvider.jsx";
// import { ThemeProvider } from "./Theme/ThemeProvider.jsx"; // 👈 add this

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <ThemeProvider>     {/* 👈 theme sabse outer */}
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </ThemeProvider>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);