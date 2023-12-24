"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
 

  return (
    <>
      <section className='login d-flex justify-content-center align-items-center mt-5'>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4> تسجيل الدخول </h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="userName" className="form-label">  اسم المستخدم </label>
                      <input type="text" className="form-control" id="userName" name="username" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label"> كلمة المرور </label>
                      <input type="password" className="form-control" id="password" name="password"  />
                    </div>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary me-3"> تسجيل الدخول </button>
                      <span><Link href="/dashboard/signup" > مستخدم جديد </Link></span>
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
