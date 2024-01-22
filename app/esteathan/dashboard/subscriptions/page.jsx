"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";
// import { useState } from 'react';

export default function Subscriptions() {
  const { school, forms, students, toggleDarkMode, setForms, darkMode } =
    useStore();

  const [Subscriptions, setSubscriptions] = useState([]);
  const [bills, setBills] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [billImage, setBillImage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const subscriptionsResponse = await fetch(`/api/subscription`);
      const subscriptionsData = await subscriptionsResponse.json();
      console.log(subscriptionsData.datas);
      setSubscriptions(subscriptionsData.datas);

      const billResponse = await fetch(`/api/bill`);
      const billData = await billResponse.json();
      console.log(billData.datas);
      setBills(billData.datas);

      const usersResponse = await fetch(`/api/user`);
      const usersData = await usersResponse.json();
      // console.log(usersData.datas);
      setUsers(usersData.datas);

      // setLoading(false);
    };
    fetchUserData();
  }, []);

 

  return (
    <>
      <section className="subscribtionsDetails my-5">
        <div className="subscribtionsDetails__header text-center mb-5">
          <h1>اشتراكاتنا</h1>
        </div>

        <div className="subscribtionsDetails__content">
          <div className="container">
            <div className="row justify-content-center align-items-center ">
              <div className="col-12 mb-5">
                <div className="text-center">
                  <div class="form-floating col-6 mx-auto">
                    <input
                      type="search"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="بحث"
                    />
                    <label for="floatingPassword">بحث</label>
                  </div>
                </div>
              </div>

              {Subscriptions.map((subscription) => {
                const correspondingBill = bills.find(
                  (bill) => bill.id === subscription.billId
                );
                const correspondingUser = users.find(
                  (user) => user.schoolId === subscription.schoolId
                );

                return (
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-3 ">
                    <div className="card">
                      <div className="card-header">
                        <div className="row justify-content-center align-items-center text-center">
                          <div className="col-lg-4 col-5 pe-0">
                            <div>
                              <h5 className="mb-0">مدرسة</h5>
                            </div>
                          </div>
                          <div className="col-1">
                            <div>
                              <p className="mb-0">:</p>
                            </div>
                          </div>
                          <div className="col-lg-7 col-6">
                            <div>
                              <p className="mb-0">
                                {correspondingBill?.schoolName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="group p-2 mb-2">
                          <div className="row mb-2 justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0">الرقم الوزاري</h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {correspondingBill?.schoolId}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-2 justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0"> الرقم السري </h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {correspondingUser?.password}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-2 justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5 pe-0">
                              <div>
                                <h6 className="mb-0"> المنطقة التعليمية </h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {correspondingBill?.district}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5 pe-0">
                              <div>
                                <h6 className="mb-0 ">
                                  {" "}
                                  المكتب التابع له المدرسة{" "}
                                </h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6 pe-0">
                              <div>
                                <p className="mb-0 ">
                                  {correspondingBill?.office}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="group p-2 mb-2">
                          <div className="row mb-2 justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0">المسؤول</h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {correspondingBill?.managerName}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0">جوال المسؤول</h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {correspondingBill?.phone}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="group p-2 mb-2">
                          <div className="row mb-2 justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0">مدة الاشتراك</h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {(() => {
                                    switch (correspondingBill?.plan) {
                                      case "oneSemester":
                                        return "فصل دراسي";
                                      case "twoSemester":
                                        return "فصلين دراسيين";
                                      case "fullYear":
                                        return "سنة كاملة";
                                      default:
                                        return correspondingBill?.plan;
                                    }
                                  })()}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* <div className="row mb-2 justify-content-center align-items-center text-center">
                          <div className="col-lg-4 col-5">
                            <div>
                              <h6 className="mb-0"> الدفع </h6>
                            </div>
                          </div>
                          <div className="col-1">
                            <div>
                              <p className="mb-0">:</p>
                            </div>
                          </div>
                          <div className="col-lg-7 col-6">
                            <div>
                                <p className="mb-0">
                                  
                              </p>
                            </div>
                          </div>
                        </div> */}

                          <div className="row justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0"> حالة الاشتراك </h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>
                            <div className="col-lg-7 col-6">
                              <div className="text-centet">
                                <div class="checkbox-apple mx-auto my-0 text-center">
                                  <input
                                    class="yep"
                                    id="check-apple"
                                    type="checkbox"
                                    checked={subscription?.status === "active"} // Replace 'valid' with the actual value for a valid subscription
                                  />
                                  <label for="check-apple"></label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="group p-2 mb-2">
                          <div className="row mb-2 justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0">تاريخ الاشتراك</h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>

                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {new Date(
                                    subscription?.startDate
                                  ).toLocaleDateString("en-GB")}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row mb-2 justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-5">
                              <div>
                                <h6 className="mb-0">تاريخ الانتهاء</h6>
                              </div>
                            </div>
                            <div className="col-1">
                              <div>
                                <p className="mb-0">:</p>
                              </div>
                            </div>

                            <div className="col-lg-7 col-6">
                              <div>
                                <p className="mb-0">
                                  {new Date(
                                    subscription?.endDate
                                  ).toLocaleDateString("en-GB")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="group p-2 mb-0">
                          <div className="row justify-content-center align-items-center text-center">
                            <div className="col-12">
                              <div>
                                <button className="btn esteathan-btn"
                                  onClick={
                                    // show bill image
                                    () => {
                                      // setShowModal(true);
                                      // setBillImage(
                                      //   correspondingBill?.billImage
                                      // );
                                      window.open(
                                        correspondingBill?.attachment,
                                        "_blank"
                                      );
                                    }
                                }
                                
                                >
                                  {" "}
                                  عرض الفاتورة{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12  ">
                <div className="card">
                  <div className="card-header">
                    <div className="row justify-content-center align-items-center text-center">
                      <div className="col-lg-4 col-5 pe-0">
                        <div>
                          <h5 className="mb-0">مدرسة</h5>
                        </div>
                      </div>
                      <div className="col-1">
                        <div>
                          <p className="mb-0">:</p>
                        </div>
                      </div>
                      <div className="col-lg-7 col-6">
                        <div>
                          <p className="mb-0">الرياض الثانوية</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">الرقم الوزاري</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">123456789</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0"> الرقم السري </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> 1234 </p>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5 pe-0">
                          <div>
                            <h6 className="mb-0"> المنطقة التعليمية </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">المدينة المنورة</p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5 pe-0">
                          <div>
                            <h6 className="mb-0 ">
                              {" "}
                              المكتب التابع له المدرسة{" "}
                            </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6 pe-0">
                          <div>
                            <p className="mb-0 "> غرب </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">المسؤول</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">محمد علي</p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">جوال المسؤول</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">9665428793</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">مدة الاشتراك</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> فصلين دراسيين </p>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0"> الدفع </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> تم </p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0"> حالة الاشتراك </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div className="text-centet">
                            <div class="checkbox-apple mx-auto my-0 text-center">
                              <input
                                class="yep"
                                id="check-apple0"
                                type="checkbox"
                              />
                              <label for="check-apple0"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">تاريخ الاشتراك</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>

                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> 2021/10/10 </p>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">تاريخ الانتهاء</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>

                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> 2021/10/10 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group p-2 mb-0">
                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-12">
                          <div>
                            <button className="btn esteathan-btn">
                              {" "}
                              عرض الفاتورة{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12  ">
                <div className="card">
                  <div className="card-header">
                    <div className="row justify-content-center align-items-center text-center">
                      <div className="col-lg-4 col-5 pe-0">
                        <div>
                          <h5 className="mb-0">مدرسة</h5>
                        </div>
                      </div>
                      <div className="col-1">
                        <div>
                          <p className="mb-0">:</p>
                        </div>
                      </div>
                      <div className="col-lg-7 col-6">
                        <div>
                          <p className="mb-0">الرياض الثانوية</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">الرقم الوزاري</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">123456789</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0"> الرقم السري </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> 1234 </p>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5 pe-0">
                          <div>
                            <h6 className="mb-0"> المنطقة التعليمية </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">المدينة المنورة</p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5 pe-0">
                          <div>
                            <h6 className="mb-0 ">
                              {" "}
                              المكتب التابع له المدرسة{" "}
                            </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6 pe-0">
                          <div>
                            <p className="mb-0 "> غرب </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">المسؤول</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">محمد علي</p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">جوال المسؤول</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0">9665428793</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">مدة الاشتراك</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> فصلين دراسيين </p>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0"> الدفع </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> تم </p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0"> حالة الاشتراك </h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>
                        <div className="col-lg-7 col-6">
                          <div className="text-centet">
                            <div class="checkbox-apple mx-auto my-0 text-center">
                              <input
                                class="yep"
                                id="check-apple1"
                                type="checkbox"
                              />
                              <label for="check-apple1"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group p-2 mb-2">
                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">تاريخ الاشتراك</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>

                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> 2021/10/10 </p>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-2 justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-5">
                          <div>
                            <h6 className="mb-0">تاريخ الانتهاء</h6>
                          </div>
                        </div>
                        <div className="col-1">
                          <div>
                            <p className="mb-0">:</p>
                          </div>
                        </div>

                        <div className="col-lg-7 col-6">
                          <div>
                            <p className="mb-0"> 2021/10/10 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group p-2 mb-0">
                      <div className="row justify-content-center align-items-center text-center">
                        <div className="col-12">
                          <div>
                            <button className="btn esteathan-btn">
                              {" "}
                              عرض الفاتورة{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
