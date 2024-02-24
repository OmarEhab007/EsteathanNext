"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";
import { parse } from "path";

export default function User() {
  // const [user, setUser] = useState(null);
  // const [school, setSchool] = useState(null);
  // const [subscription, setSubscription] = useState(null);
  // const [bill, setBill] = useState(null);
  const [newPhone, setNewPhone] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newCounter, setNewCounter] = useState(0);
  const { user, school, students, teachers, setStudents, setTeachers, subscription, bill } =
    useStore();

  const { data: session } = useSession();

  // const user_id = session?.user?.id;
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     setLoading(true);
  //     const today = new Date();
  //     if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${session.user.id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //       console.log(userData.data);

  //       const schoolResponse = await fetch(
  //         `/api/school/${userData.data.schoolId}`
  //       );
  //       const schoolData = await schoolResponse.json();
  //       console.log(schoolData.data);
  //       console.log(schoolData.data[0]);
  //       setSchool(schoolData.data[0]);

  //       const subscriptionResponse = await fetch(
  //         `/api/subscription/${schoolData.data[0].subscriptionId}`
  //       );
  //       const subscriptionData = await subscriptionResponse.json();
  //       console.log(subscriptionData.data);
  //       setSubscription(subscriptionData.data);

  //       const billResponse = await fetch(
  //         `/api/bill/${subscriptionData.data.billId}`
  //       );
  //       const billData = await billResponse.json();
  //       console.log(billData.data);
  //       setBill(billData.data);
  //       setLoading(false);
  //     }
  //   };
  //   fetchUserData();
  // }, [session]);

  const handlePhoneChange = async () => {
    setLoading(true);
    // update bill phone
    const response = await fetch(`/api/bill/${bill.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bill,
        phone: newPhone,
      }),
    });
    const data = await response.json();
    console.log(data);

    // update user phone
    const userResponse = await fetch(`/api/user/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        phone: newPhone,
      }),
    });

    const userData = await userResponse.json();
    console.log(userData.data);

    // update school phone
    const schoolResponse = await fetch(`/api/school/${user.schoolId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...school,
        phone: newPhone,
      }),
    });
    const schoolData = await schoolResponse.json();
    console.log(schoolData);

    setLoading(false);
    // reload page
    window.location.reload();
  };

  const handlePasswordChange = async () => {
    setLoading(true);
    // update user password
    const userResponse = await fetch(`/api/user/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        password: newPassword,
      }),
    });
    const userData = await userResponse.json();
    console.log(userData.data);
    // reload page
    window.location.reload();

    setLoading(false);
  };

  const handleCounterChange = async () => {
    setLoading(true);
    // update user password
    const userResponse = await fetch(`/api/school/counter/${school.schoolId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        maxRequestsPerStudent: parseInt(newCounter),
      }),
    });
    const schoolData = await userResponse.json();
    console.log(schoolData);

    window.location.reload();

    setLoading(false);
  };

  const resetCounters = async () => {
    setLoading(true);
    const response = await fetch(`/api/school/counter`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    window.location.reload();
  };

  return (
    <>
      <section className="user">
        <div className="container my-5">
          <div className="userHead mb-4">
            <h2 className="text-center fs-1"> ملف المستخدم </h2>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-6 mb-3">
              <div className="card position-relative">
                {/* loading */}
                {loading && (
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading">
                    <div
                      className="spinner-border text-success "
                      role="status"
                    ></div>
                  </div>
                )}
                <div className="card-header">
                  <div className="row">
                    <div className="col-3">
                      <div>
                        <h5 className=" fw-bold text-center mb-0"> مدرسة </h5>
                      </div>
                    </div>
                    <div className="col-1">
                      <div>
                        <p className=" fs-5 fw-bold text-center mb-0"> : </p>
                      </div>
                    </div>
                    <div className="col-8">
                      <div>
                        <p className=" fs-5 fw-bold text-center mb-0">
                          {school?.name}
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
                          <p className="text-start text-sm-center mb-0"> : </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 pe-0">
                        <div>
                          <p className="   text-center mb-0">
                            {" "}
                            {school?.schoolId}{" "}
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
                            {school?.district}
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
                          <p className="text-center mb-0 ">{school?.office}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group overflow-hidden mb-2">
                    {/* <div className="row justify-content-center align-items-center">
                      <div className="col-8 pe-0 col-sm-5">
                        <div>
                          <p className=" fs-5 text-center mb-0">
                            {" "}
                            اسم المسؤول{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0"> : </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div>
                          <p className="   text-center mb-0">
                            
                          </p>
                        </div>
                      </div>
                    </div> */}

                    {/* loading */}
                    {/* <div className="row justify-content-center align-items-center position-relative">
                      <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading d-none">
                        <div
                          className="spinner-border text-success "
                          role="status"
                        ></div>
                      </div>

                      <div className="col-8 pe-0 col-sm-5">
                        <div className="text-center">
                          <button className="btn esteathan-btn">
                            {" "}
                            تعديل اسم المسؤول{" "}
                          </button>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0 pe-0">
                            {" "}
                            :{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 ">
                        <div className="text-cnter">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder="عبدالعزيز محمد عبدالعزيز"
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className="row justify-content-center align-items-center">
                      <div className="col-8 pe-0 col-sm-5">
                        <div>
                          <p className=" fs-5 text-center mb-0"> رقم الجوال </p>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-center mb-0"> : </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 ">
                        <div>
                          <p className="text-center mb-0"> {user?.phone} </p>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center align-items-center ">
                      <div className="col-8 pe-0 col-sm-5">
                        <div className="text-center">
                          <button
                            className="btn esteathan-btn"
                            onClick={handlePhoneChange}
                          >
                            {" "}
                            تعديل رقم الجوال{" "}
                          </button>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0 pe-0">
                            {" "}
                            :{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 ">
                        <div className="text-cnter">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder={user?.phone}
                            onChange={(e) => setNewPhone(e.target.value)}
                            value={newPhone}
                          />
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
                          <p className="text-start text-sm-center mb-0"> : </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 pe-0">
                        <div>
                          <p className="   text-center mb-0">
                            {(() => {
                              switch (subscription?.plan) {
                                case "oneSemester":
                                  return "فصل دراسي";
                                case "twoSemester":
                                  return "فصلين دراسيين";
                                case "fullYear":
                                  return "سنة كاملة";
                                default:
                                  return subscription?.plan;
                              }
                            })()}
                          </p>
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
                            فترة الاشتراك{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0"> : </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 pe-0">
                        <div>
                          <p className="   text-center mb-0">
                            {subscription?.startDate && subscription?.endDate
                              ? `${new Date(
                                  subscription?.startDate
                                ).toLocaleDateString("en-CA")} - ${new Date(
                                  subscription?.endDate
                                ).toLocaleDateString("en-CA")}`
                              : "غير محدد"}
                          </p>
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
                            الرقم السري{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0"> : </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 ">
                        <div>
                          <p className="text-center mb-0 pass">
                            {" "}
                            {user?.password}{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center align-items-center position-relative">
                      {/* loading */}
                      <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading d-none">
                        <div
                          className="spinner-border text-success "
                          role="status"
                        ></div>
                      </div>

                      <div className="col-8 pe-0 col-sm-5">
                        <div className="text-center">
                          <button
                            className="btn esteathan-btn"
                            onClick={handlePasswordChange}
                          >
                            {" "}
                            تغيير الرقم السري{" "}
                          </button>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0 pe-0">
                            {" "}
                            :{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 ">
                        <div className="text-cnter">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder={user?.password}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
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
                            مرات الاستئذان{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0"> : </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 ">
                        <div>
                          <p className="text-center mb-0 pass">
                            {school?.maxRequestsPerStudent}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center align-items-center position-relative">
                      {/* loading */}
                      <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading d-none">
                        <div
                          className="spinner-border text-success "
                          role="status"
                        ></div>
                      </div>

                      <div className="col-8 pe-0 col-sm-5">
                        <div className="text-center">
                          <button
                            className="btn esteathan-btn"
                            onClick={handleCounterChange}
                          >
                            {" "}
                          تغير مرات الاستئذان{" "}
                          </button>
                        </div>
                      </div>
                      <div className="col-1 ps-0">
                        <div>
                          <p className="text-start text-sm-center mb-0 pe-0">
                            {" "}
                            :{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 ">
                        <div className="text-cnter">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder={school?.maxRequestsPerStudent}
                            onChange={(e) => setNewCounter(e.target.value)}
                          />
                    
                        </div>
                      </div>
                    </div>
                  </div>

                  {user?.role === "admin" ? (
                    <div className="group overflow-hidden text-center mb-2">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-8 pe-0 col-sm-5">
                          <div>
                            <p className=" fs-5 text-center mb-0">
                              {" "}
                              تصفير عداد الطلبات{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-1 ps-0">
                          <div>
                            <p className="text-start text-sm-center mb-0"> : </p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 ">
                          <div>
                            <button
                            className="btn esteathan-btn"
                            onClick={resetCounters}
                          >
                              {" "}
                              تصفير عداد الطلبات{" "}
                          {" "}
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                          
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
