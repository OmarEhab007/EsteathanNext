"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "@uploadthing/react/styles.css";
// Uncomment the line below if you need Bootstrap's JavaScript functionality
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
// import { extractRouterConfig } from "uploadthing/server";
import Image from "next/image.js";
import icon from "../bigIcon.png";
import bgFooter from "../footer-bg.png";
import Icon from "../bigIcon.png";
import { useEffect, useState } from "react";

// import { ourFileRouter } from "./api/uploadthing/core";
import { Providers } from "../../../components/provider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
      import("../../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css");
      import(
        "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
      );
      import("next/font/google");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`home  ${darkMode ? "dark" : ""}`}>
        <header>
          <nav className="navbar navbar-expand-md ">
            <div className="container">
              <Link href="/esteathan/home" className="navbar-brand px-2">
                {" "}
                <Image
                  src={icon}
                  alt="icon"
                  placeholder="blur"
                  width={120}
                />{" "}
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">                  
                  <li className="nav-item me-2 text-center text-center">
                    <Link
                      className="nav-link"
                      href="/esteathan/home"
                    >
                       الرئيسية
                    </Link>
                  </li>

                  <li className="nav-item me-2 text-center text-center">
                    <Link
                      className="nav-link"
                      href="/signin"
                    >
                       تسجيل الدخول
                    </Link>
                  </li>

                  <li className="nav-item me-2 text-center text-center">
                    <Link
                      className="nav-link"
                      href="/esteathan/home/subscription"
                    >
                       اشتراك جديد
                    </Link>
                  </li>
                  
                </ul>
              </div>
              <label className="switch m-md-auto">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider"></span>
              </label>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
