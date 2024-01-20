"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
// import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// import "../globals.css"; // Assuming you have global styles in this file
import Image from "next/image.js";
import icon from "../bigIcon.png";
import bgFooter from "../footer-bg.png";
import Icon from "../bigIcon.png";
import { signOut } from "next-auth/react";
import "@uploadthing/react/styles.css";
import { Providers } from "../../../components/provider";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import useStore from "../../../lib/store";
// import { options } from "../../../app/api/auth/[...nextauth]/options";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const [darkMode, setDarkMode] = useState(false);
  // const [user, setUser] = useState(null);
  // const [school, setSchool] = useState(null);
  // const [subscription, setSubscription] = useState(null);
  // const [status, setStatus] = useState(null);
  const {
    user,
    school,
    subscription,
    status,
    darkMode,
    setUser,
    setSchool,
    setSubscription,
    setStatus,
    toggleDarkMode,
    setForms,
    setTeachers,
    setStudents,
    setBill,
    loading,
    setLoading,
  } = useStore();

  // const data =  getServerSession(options);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.user?.id) {
        setLoading(true);
        const userResponse = await fetch(`/api/user/${session.user.id}`);
        const userData = await userResponse.json();
        setUser(userData.data);

        const formsResponse = await fetch(
          `/api/forms/school/${userData.data.schoolId}`
        );
        const formsData = await formsResponse.json();
        setForms(formsData.data || []);

        const studentsResponse = await fetch(
          `/api/students/school/${userData.data.schoolId}`
        );
        const studentsData = await studentsResponse.json();
        setStudents(studentsData.data);

        const schoolResponse = await fetch(
          `/api/school/${userData.data.schoolId}`
        );
        const schoolData = await schoolResponse.json();
        setSchool(schoolData.data[0]);
        setLoading(false);

        const teachersResponse = await fetch(
          `/api/teacher/school/${userData.data.schoolId}`
        );
        const teachersData = await teachersResponse.json();
        setTeachers(teachersData.data);

        const subscriptionResponse = await fetch(
          `/api/subscription/${schoolData.data[0].subscriptionId}`
        );
        const subscriptionData = await subscriptionResponse.json();
        setSubscription(subscriptionData.data);
        setStatus(subscriptionData.data.status);

        const billResponse = await fetch(
          `/api/bill/${subscriptionData.data.billId}`
        );
        const billData = await billResponse.json();
        // console.log(billData.data);
        setBill(billData.data);

        if (subscriptionData.data.status === "invalid") {
          signOut();
        }
      }
    };

    fetchUserData();
  }, [session]);

  // const user_id = session?.user?.id;
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const today = new Date();
  //     if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${session.user.id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //       // console.log(userData.data);

  //       const schoolResponse = await fetch(
  //         `/api/school/${userData.data.schoolId}`
  //       );
  //       const schoolData = await schoolResponse.json();
  //       setSchool(schoolData.data[0]);
  //       // console.log(schoolData.data[0]);

  //       const subscriptionResponse = await fetch(
  //         `/api/subscription/${schoolData.data[0].subscriptionId}`
  //       );
  //       const subscriptionData = await subscriptionResponse.json();
  //       setSubscription(subscriptionData.data);
  //       // console.log(subscriptionData.data);
  //       // console.log(subscriptionData.data.status);
  //       setStatus(subscriptionData.data.status);
  //       if (subscriptionData.data.status === "invalid") {
  //         // Sign out the user and redirect to the login page
  //         // Replace 'signOut' and '/login' with your actual sign out function and login page path
  //         signOut();
  //         // router.push("/signin");
  //       }
  //     }

  //     console.log(user);
  //   };

  //   fetchUserData();
  // }, [session, setUser, setSchool, setSubscription, setStatus]);

  // useEffect(async() => {
  //   if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${session.user.id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //     // console.log(userData.data);
  //   }
  // }, [session]);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  return (
    <html lang="ar">
      <body
        className={`root-layout d-flex flex-wrap ${darkMode ? "dark" : ""}`}
      >
        <header>
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link href="/esteathan/dashboard" className="navbar-brand px-2">
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
                    <Link className="nav-link" href="/esteathan/dashboard">
                      الرئيسية
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
                      الطلبات
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          href="/esteathan/"
                        >
                          طلب جديد
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          href="/esteathan/dashboard/sentRequests"
                        >
                          الطلبات المرسلة
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item me-2 text-center text-center">
                    <Link
                      className="nav-link"
                      href="/esteathan/dashboard/sendToTeacher"
                    >
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
                        <Link
                          className="dropdown-item text-center"
                          href="/esteathan/dashboard/importStudentData"
                        >
                          استيراد بيانات الطلاب
                        </Link>
                      </li>
                      <li className="text-center nav-color">
                        <Link
                          className="dropdown-item text-center"
                          href="/esteathan/dashboard/importTeacherData"
                        >
                          استيراد بيانات المعلمين
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider text-center" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          href="/esteathan/dashboard/addStudent"
                        >
                          اضافة طالب جديد
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          href="/esteathan/dashboard/addTeacher"
                        >
                          اضافة معلم جديد
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider text-center" />
                      </li>
                      <li className="text-center nav-color">
                        <Link
                          className="dropdown-item text-center"
                          href="/esteathan/dashboard/deleteData "
                        >
                          حذف وتعديل البيانات
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item me-2 text-center">
                    <Link
                      className="nav-link"
                      href="/esteathan/dashboard/reports"
                    >
                      {" "}
                      التقارير{" "}
                    </Link>
                  </li>
                  {user?.role === "admin" && (
                    <li className="nav-item me-2 text-center">
                      <Link
                        className="nav-link"
                        href="/esteathan/dashboard/subscriptionResponse"
                      >
                        {" "}
                        الاشتراكات{" "}
                      </Link>
                    </li>
                  )}
                  <ul className="navbar-nav me-2 d-xxl-none d-lg-none d-block text-center text-center">
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-solid fa-user"></i>
                      </Link>
                      <ul
                        class="dropdown-menu text-center"
                        aria-labelledby="navbarDropdown"
                      >
                        {/* <li><p class="dropdown-item mb-0 " href=""> مرحبا عبدالعزيز محمد </p></li> */}
                        <li>
                          <Link
                            class="dropdown-item"
                            href="/esteathan/dashboard/user"
                          >
                            معلومات المستخدم
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item"
                            href="/esteathan/dashboard/bills"
                          >
                            الفواتير
                          </Link>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li className="">
                          <Link
                            className="text-center dropdown-item"
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              signOut();
                            }}
                          >
                            <i className="fas fa-sign-out-alt"></i> تسجيل الخروج
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* {user?.role === "admin" && (
                  <li className="nav-item me-2 text-center">
                    <Link
                      className="nav-link"
                      href="/esteathan/dashboard/subscriptionResponse"
                    >
                      {" "}
                      الاشتراكات{" "}
                    </Link>
                    </li>
                  )} */}

                  {/* <li className="nav-item me-2 text-center nav-color">
                    <Link className="nav-link" href="/dashboard/signin"> تسجيل الدخول </Link>{" "}
                    تسجيل الدخول
                  </li>
                   */}
                </ul>
              </div>

              <ul className="navbar-nav me-2 d-lg-block d-none text-center">
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-user"></i>
                  </Link>
                  <ul
                    class="dropdown-menu text-center"
                    aria-labelledby="navbarDropdown"
                  >
                    {/* <li><p class="dropdown-item mb-0 " href=""> مرحبا عبدالعزيز محمد </p></li> */}
                    <li>
                      <Link
                        class="dropdown-item"
                        href="/esteathan/dashboard/user"
                      >
                        معلومات المستخدم
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item"
                        href="/esteathan/dashboard/bills"
                      >
                        الفواتير
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li className="">
                      <Link
                        className="text-center dropdown-item"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          signOut();
                        }}
                      >
                        <i className="fas fa-sign-out-alt"></i> تسجيل الخروج
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <label className="switch m-md-auto">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
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
        <footer className="align-self-end position-relative">
          <Image
            src={bgFooter}
            placeholder="blur"
            width="100%"
            className="footer-bg"
          />
          <div className="position-absolute top-0 bottom-0 start-0 end-0 ">
            <div className="footer-layer w-100 h-100 d-flex justify-content-center align-items-center flex-wrap">
              <div className="w-100">
                <p className=" mb-0 text-center">
                  تصميم وتنفيذ
                  <span> المبدع الفني لتقنية المعلومات </span>
                  جميع الحقوق محفوظة لبرنامج استئذان
                  <Image src={icon} alt="Icon" width={80} placeholder="blur" />
                </p>
              </div>
              <div className=" d-flex justify-content-center align-content-center w-100">
                <p className="mb-0 text-center">
                  للدعم الفني والاستفسارات الرجاء التواصل على رقم الواتساب
                  <a href="https://wa.me/+966545894287" target="_blank">
                    <i class="fa-brands fa-whatsapp fs-4 mx-2"></i>:{" "}
                    <span>+966545894287</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
