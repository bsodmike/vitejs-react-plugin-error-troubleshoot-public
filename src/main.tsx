import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import moment from "moment";

import "../public/css/tailwind.css";
// FIXME: This breaks!!
import Home from "./Home.tsx";

const currentYear = moment().year();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <div className="flex flex-col h-screen justify-between">
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </BrowserRouter>

        <footer className="">
          <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
            &copy; {currentYear} Copyright YourName
          </div>
        </footer>
      </div>
    </NextUIProvider>
  </StrictMode>,
);
