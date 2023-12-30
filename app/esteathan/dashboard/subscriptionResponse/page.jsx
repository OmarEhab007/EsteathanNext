"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function SubscriptionResponce() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [billId, setBillId] = useState(null);
  const [schholId, setSchholId] = useState(null);
  const [password, setPassword] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [rejectReason, setRejectReason] = useState(null);
  const [reject, setReject] = useState(false);
  const [isRejectButtonVisible, setRejectButtonVisible] = useState(true);
  const [reason, setReason] = useState(null);
  const [rejectedBill, setRejectedBill] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    const fetchBills = async () => {
      const response = await fetch("/api/bill");
      const data = await response.json();

      setBills(data.datas);
      setLoading(false);
      console.log(data);
    };

    fetchBills();
  }, []);

  // handle bill accept
  const handleBillAccept = async (bill) => {
    // send put request to api/bill/[id]
    const response = await fetch(`/api/bill/${bill.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bill,
        status: "accepted",
      }),
    });
    const data = await response.json();
    console.log(data);

    // generate password from 10 char
    const password = Array(10)
      .fill(0)
      .map(() => Math.floor(Math.random() * 10))
      .join("");
    setPassword(password);
    console.log(password);
    console.log(bill);

    // create user in db
    const userResponse = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: bill.schoolName,
        password: password,
        role: "manager",
        schoolId: bill.schoolId,
        phone: bill.phone,
        status: "active",
        lastLogin: new Date(),
      }),
    });
    const userData = await userResponse.json();
    console.log(userData);

    // map plan to date range start and end

    let startDate = new Date();
    let endDate = new Date();

    if (bill.plan === "oneSemester") {
      endDate.setMonth(endDate.getMonth() + 3);
      // console.log(dateRange);
      setStartDate(startDate);
      setEndDate(endDate);
    } else if (bill.plan === "fullYear") {
      endDate.setMonth(endDate.getMonth() + 12);
      // console.log(dateRange);
      setStartDate(startDate);
      setEndDate(endDate);
    } else if (bill.plan === "twoSemester") {
      endDate.setMonth(endDate.getMonth() + 6);
      // console.log(dateRange);
      setStartDate(startDate);
      setEndDate(endDate);
    }

    // create subscription in db
    const subscriptionResponse = await fetch("/api/subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        schoolId: bill.schoolId,
        plan: bill.plan,
        status: "active",
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        billId: bill.id,
      }),
    });
    const subscriptionData = await subscriptionResponse.json();
    console.log(subscriptionData.data);
    setSubscription(subscriptionData.data);

    // create school
    const schoolResponse = await fetch("/api/school", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: bill.schoolName,
        phone: bill.phone,
        schoolId: bill.schoolId,
        district: bill.district,
        office: bill.office,
        subscriptionId: subscriptionData.data.id,
      }),
    });
    const schoolData = await schoolResponse.json();
    console.log(schoolData);

    // send message to user with schoolId and password
    fetch("/api/sentMessageToTeacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentNumber: bill.phone, // Replace with parentPhone
        message: ` تم قبول طلبك للإنضمام للبرنامج سيكون اسم المستخدم ${bill.schoolId} وكلمة المرور ${password}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setIsLoading(false);
      })
    .then(() => {
      window.location.reload();
    });
  };

  // handle bill reject
  const handleBillReject = async (bill) => {
    // send put request to api/bill/[id]
    const response = await fetch(`/api/bill/${bill.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bill,
        status: "rejected",
      }),
    });
    const data = await response.json();
    console.log(data);
    fetch("/api/sentMessageToTeacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentNumber: bill.phone, // Replace with parentPhone
        message: ` تم رفض طلبك للإنضمام للبرنامج : ${rejectReason}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setIsLoading(false);
      }).then(() => {
        window.location.reload();
      }
      );
  };
  return (
    <>
      <section className="subscriptionResponce">
        <div className="container my-5">
          <div className="subscriptionResponceHead mb-5">
            <h2 className="fs-1 text-center"> الإشتراكات الجديدة </h2>
          </div>

          <div className="row justify-content-center align-items-center">
            {bills
              .filter((bill) => bill.status === "pending")
              .map((bill) => (
                <div className="col-12 col-lg-6 mb-3">
                  <div className="card">
                    <div className="card-header">
                      <div className="row">
                        <div className="col-3">
                          <div>
                            <h5 className=" fw-bold text-center mb-0">
                              {" "}
                              مدرسة{" "}
                            </h5>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className=" fs-5 fw-bold text-center mb-0">
                              {" "}
                              :{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-8">
                          <div>
                            <p className=" fs-5 fw-bold text-center mb-0">
                              {bill.schoolName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="group overflow-hidden mb-2">
                        <div className="row justify-content-center align-items-center">
                          <div className="col-8 pe-0 col-sm-5">
                            <div>
                              <p className=" fs-5 text-center mb-0">
                                {" "}
                                الرقم الوزاري{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-1 ps-0">
                            <div>
                              <p className="text-start text-sm-center mb-0">
                                {" "}
                                :{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pe-0">
                            <div>
                              <p className="   text-center mb-0">
                                {" "}
                                {bill.schoolId}{" "}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="row justify-content-center align-items-center">
                          <div className="col-8 pe-0 col-sm-5">
                            <div>
                              <p className=" fs-5 text-center mb-0">
                                {" "}
                                المنطقة التعليمية{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-1 ps-0">
                            <div>
                              <p className="   text-center mb-0"> : </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pe-0">
                            <div>
                              <p className="   text-center mb-0">
                                {" "}
                                {bill.district}{" "}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="row justify-content-center align-items-center">
                          <div className="col-8 pe-0 col-sm-5">
                            <div>
                              <p className=" fs-5 text-center mb-0">
                                {" "}
                                المكتب التابع له المدرسة{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-1 ps-0">
                            <div>
                              <p className="   text-center mb-0 "> : </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pe-0">
                            <div>
                              <p className="text-center mb-0 ">
                                {" "}
                                {bill.office}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group overflow-hidden mb-2">
                        <div className="row justify-content-center align-items-center">
                          <div className="col-8 pe-0 col-sm-5">
                            <div>
                              <p className=" fs-5 text-center mb-0">
                                {" "}
                                اسم المشرف{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-1 ps-0">
                            <div>
                              <p className="text-start text-sm-center mb-0">
                                {" "}
                                :{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pe-0">
                            <div>
                              <p className="   text-center mb-0">
                                {" "}
                                {bill.managerName}{" "}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="row justify-content-center align-items-center">
                          <div className="col-8 pe-0 col-sm-5">
                            <div>
                              <p className=" fs-5 text-center mb-0">
                                {" "}
                                رقم الجوال{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-1 ps-0">
                            <div>
                              <p className="text-center mb-0"> : </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pe-0">
                            <div>
                              <p className="text-center mb-0"> {bill.phone} </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group overflow-hidden text-center mb-2">
                        <div className="row justify-content-center align-items-center">
                          <div className="col-8 pe-0 col-sm-5">
                            <div>
                              <p className=" fs-5 text-center mb-0">
                                {" "}
                                مدة الاشتراك{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-1 ps-0">
                            <div>
                              <p className="text-start text-sm-center mb-0">
                                {" "}
                                :{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pe-0">
                            <div>
                              <p className="   text-center mb-0">
                                {" "}
                                {(() => {
                                  switch (bill.plan) {
                                    case "oneSemester":
                                      return "فصل دراسي";
                                    case "twoSemester":
                                      return "فصلين دراسيين";
                                    case "fullYear":
                                      return "سنة كاملة";
                                    default:
                                      return bill.plan;
                                  }
                                })()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group overflow-hidden text-center mb-2">
                        <img
                          src={bill.attachment}
                          alt="pill"
                          className="img-fluid"
                        />
                      </div>

                      {/* <form className="text-center"> */}
                      <button
                        className="btn esteathan-btn px-4 me-2 "
                        onClick={() => handleBillAccept(bill)}
                      >
                        {" "}
                        قبول{" "}
                      </button>

                      {selectedBill !== bill && (
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => {
                            // setReason(true);
                            setRejectedBill(bill);
                            setRejectButtonVisible(false);
                            setSelectedBill(bill);
                          }}
                        >
                          {" "}
                          رفض الطلب{" "}
                        </button>
                      )}
                      {rejectedBill === bill && (
                        <div className="mt-3">
                          <h6> سبب الرفض </h6>
                          <textarea
                            className="form-control"
                            rows="3"
                            required
                            onChange={(e) => setRejectReason(e.target.value)}
                          ></textarea>
                          <div className="replyButtons mt-3 text-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => handleBillReject(bill)}
                            >
                              {" "}
                              رفض الطلب{" "}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
