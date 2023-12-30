"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { signIn } from 'next-auth/client';
import { useSession, signIn, signOut } from 'next-auth/react'
// import { useSession } from "next-auth/react";

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
      <section className='login d-flex justify-content-center align-items-center mt-5'>
        <div className="container">
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
    </>
  );
}