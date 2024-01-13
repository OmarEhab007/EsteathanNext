"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { signIn } from 'next-auth/client';
import { useSession, signIn, signOut } from 'next-auth/react'
// import { useSession } from "next-auth/react";
import bgFooter from "../esteathan/footer-bg.png";
import Image from "next/image";
import icon from "../esteathan/bigIcon.png";

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  
  // const { data: session } = useSession();

  

  const handleInputChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username: credentials.username,
      password: credentials.password,
    });
    if (result.error) {
      setError(result.error);
    } else {
      // console.log(result);
      window.location.href = '/esteathan/dashboard';
    }
  };

  return (
    <>
      <section className='login d-flex justify-content-center align-items-center flex-wrap mb-3'>

        <h1 className="text-center mb-3 mt-3 w-100">
            {" "}
            <Image src={icon} alt="Icon" width={180} placeholder="blur" />{" "}
        </h1>

        <div className="container ">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h2 className='text-center'> تسجيل الدخول </h2>
                </div>
                <div className="card-body">
                  {error && <p>{error}</p>}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="userName" className="form-label"> الرقم الوزاري </label>
                      <input type="text" className="form-control" id="userName" name="username" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label"> كلمة المرور </label>
                      <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3 text-center ">
                      <button type="submit" className="btn esteathan-btn m-auto d-block mb-1 "> تسجيل الدخول </button>
                      <span className=''><Link href="/dashboard/signup" >  نسيت الرقم السري </Link></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="align-self-end position-relative">
          <Image
            src={bgFooter}
            placeholder="blur"
            width="100%"
            className="footer-bg"
          />
          <div className="position-absolute top-0 bottom-0 start-0 end-0 ">
            <div className="footer-layer w-100 h-100 d-flex justify-content-center align-items-center">
              <div>
              <p className=" p-3 text-center">
                  تصميم وتنفيذ    
                  <span> المبدع الفني لتقنية المعلومات </span>
                  جميع الحقوق محفوظة لبرنامج استئذان
                  <Image src={icon} alt="Icon" width={80} placeholder="blur" />
                </p>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}