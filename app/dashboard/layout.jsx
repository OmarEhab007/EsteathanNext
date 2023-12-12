"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
// import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../globals.css"; // Assuming you have global styles in this file
import Image from "next/image.js";
import icon from "../bigIcon.png";
import bgFooter from "../footer-bg.png";
import Icon from "../bigIcon.png";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  if (typeof window !== 'undefined') {
    import('../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
    import('../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css');
    import('../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
    import('next/font/google');
  }
}, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <html lang="ar">
      <body
        className={`root-layout ${inter.className} ${darkMode ? "dark" : ""}`}
      >
        <header>
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link href="/dashboard" className="navbar-brand px-2">
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
                  <li className="nav-item dropdown me-2 text-center">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      الطلبات
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-center" href="/">
                          طلب جديد
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          href="/dashboard/sentRequests"
                        >
                          الطلبات المرسلة
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item me-2 text-center text-center">
                    <Link className="nav-link" href="/dashboard/sendToTeacher">
                      ارسال لمعلم
                    </Link>
                  </li>
                  <li className="nav-item dropdown me-2 text-center">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      استيراد بيانات
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="text-center nav-color">
                        <Link className="dropdown-item text-center" href="/dashboard/importStudentData">استيراد بيانات الطلاب</Link>
                      </li>
                      <li className="text-center nav-color">
                        <Link className="dropdown-item text-center" href="/dashboard/importTeacherData">استيراد بيانات المعلمين</Link>
                        
                      </li>
                      <li>
                        <hr className="dropdown-divider text-center" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          href="/dashboard/addStudent"
                        >
                          اضافة طالب جديد
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          href="/dashboard/addTeacher"
                        >
                          اضافة معلم جديد
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider text-center" />
                      </li>
                      <li className="text-center nav-color">
                        <Link className="dropdown-item text-center" href="/dashboard/deleteData ">حذف وتعديل البيانات</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item me-2 text-center">
                    <Link className="nav-link" href="/dashboard/reports">
                      {" "}
                      التقارير{" "}
                    </Link>
                  </li>
                  <li className="nav-item me-2 text-center nav-color">
                    {/*<Link className="nav-link" href="/dashboard/signin"> تسجيل الدخول </Link>*/}{" "}
                    تسجيل الدخول
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

        {children}
        <footer className="align-self-end position-relative">
          <Image src={ bgFooter } placeholder="blur" width="100%" className="footer-bg"  />
          <div className="position-absolute top-0 bottom-0 start-0 end-0 ">
            <div className="footer-layer w-100 h-100 d-flex justify-content-center align-items-center">
              <div>
                <p className=" p-3 text-center">
                  فكرة وتصميم و تنفيذ
                  <span>  عبدالحميد عبيد الله الجابري </span> 
                  جميع الحقوق محفوظة لبرنامج استئذان
                <Image src={Icon} alt="Icon" width={80} placeholder="blur" />
              </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
