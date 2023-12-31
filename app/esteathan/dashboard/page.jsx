"use client";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch("/api/forms") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => {
        console.log(data.datas); // add this line
        setForms(data.datas);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const pendingApprovalCount = forms.filter(
    (form) => form.approval === "pending"
  ).length;
  const approvedApprovalCount = forms.filter(
    (form) => form.approval === "approved"
  ).length;
  
  const approvedApprovalCountToday = forms.filter((form) => {
    const formDate = new Date(form.createdAt);
    const today = new Date();
    return (
      form.approval === "approved" &&
      formDate.getDate() === today.getDate() &&
      formDate.getMonth() === today.getMonth() &&
      formDate.getFullYear() === today.getFullYear()
    );
  }).length;
  
  const receivedTodayCount = forms.filter((form) => {
    const formDate = new Date(form.createdAt);
    const today = new Date();
    return (
      formDate.getDate() === today.getDate() &&
      formDate.getMonth() === today.getMonth() &&
      formDate.getFullYear() === today.getFullYear()
    );
  }).length;

  const pendingTodayCount = forms.filter((form) => {
  const formDate = new Date(form.createdAt);
  const today = new Date();
  return (
    form.approval === "pending" &&
    formDate.getDate() === today.getDate() &&
    formDate.getMonth() === today.getMonth() &&
    formDate.getFullYear() === today.getFullYear()
  );
}).length;

  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row index-row align-items-center justify-content-center">
            <div className=" reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h3>
                    <i className="fa-solid fa-person-walking-arrow-right text-primary"></i>
                  </h3>
                  <h6> طلبات بانتظار الرد عليها </h6>
                </div>
                <div className="card-body">
                  <p className="fs-1">{pendingTodayCount}</p>
                </div>
              </div>
            </div>

            <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h3>
                    <i className="fa-solid fa-envelope-circle-check text-info"></i>
                  </h3>
                  <h6> طلبات منتظرة الارسال الى المعلم </h6>
                </div>
                <div className="card-body">
                  <p className="fs-1">{approvedApprovalCountToday}</p>
                </div>
              </div>
            </div>

            <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h3>
                    <i className="fa-solid fa-list-check text-success"></i>
                  </h3>
                  <h6> عدد الطلبات المستلمة اليوم </h6>
                </div>
                <div className="card-body">
                  <p className="fs-1">{receivedTodayCount}</p>
                </div>
              </div>
            </div>

            <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h3>
                    <i className="fa-solid fa-coins text-warning"></i>
                  </h3>
                  <h6> الرصيد المتبقي </h6>
                </div>
                <div className="card-body">
                  <p className="fs-1">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
