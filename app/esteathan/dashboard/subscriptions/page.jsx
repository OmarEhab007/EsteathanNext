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
  const [searchTerm, setSearchTerm] = useState("");

  // const [showModal, setShowModal] = useState(false);
  // const [billImage, setBillImage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const subscriptionsResponse = await fetch(`/api/subscription`);
      const subscriptionsData = await subscriptionsResponse.json();
      // console.log(subscriptionsData.datas);
      setSubscriptions(subscriptionsData.datas);

      const billResponse = await fetch(`/api/bill`);
      const billData = await billResponse.json();
      // console.log(billData.datas);
      setBills(billData.datas);

      const usersResponse = await fetch(`/api/user`);
      const usersData = await usersResponse.json();
      // console.log(usersData.datas);
      setUsers(usersData.datas);

      // setLoading(false);
    };
    fetchUserData();
  }, []);

  const filteredBill = bills.filter((bill) =>
    bill.schoolName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handelDeleteSchool = async (schoolId) => {
    // send delete request to api/school/alldata/[schoolId]
    const response = await fetch(`/api/school/alldata/${schoolId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    // console.log(data);
    window.location.reload();
  };

  const handleEndDateChange = async (event) => {
    const newEndDate = new Date(event.target.value + "T00:00:00"); // Append 'T00:00:00' to set the time to midnight

    // Update the end date in the database
    const response = await fetch(`/api/subscription/${subscription?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ endDate: newEndDate.toISOString() }), // Convert the date to the ISO 8601 format
    });

    if (response.ok) {
      // Update the end date in the local state if the request was successful
      // setSubscription({ ...subscription, endDate: newEndDate.toISOString() });
      console.log("Successfully updated the end date");
    } else {
      // Handle the error
      console.error("Failed to update the end date");
    }
  };

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
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <label for="floatingPassword">بحث</label>
                  </div>
                </div>
              </div>

              {Subscriptions.filter((subscription) => {
                const correspondingBill = bills.find(
                  (bill) => bill.id === subscription.billId
                );
                return (
                  correspondingBill &&
                  correspondingBill.schoolName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                );
              })
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((subscription) => {
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
                                      checked={
                                        subscription?.status === "active"
                                      } // Replace 'valid' with the actual value for a valid subscription
                                    />
                                    <label for="check-apple"></label>
                                  </div>
                                </div>
                              </div>
                              {/* add button to change status of subscription */}
                              <div className="col-12 m-3">
                                <div className="text-center">
                                  <button
                                    className="btn esteathan-btn"
                                    onClick={
                                      // change status of subscription
                                      async () => {
                                        const response = await fetch(
                                          `/api/subscription/${subscription?.id}`,
                                          {
                                            method: "PUT",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              status:
                                                subscription?.status ===
                                                "active"
                                                  ? "inactive"
                                                  : "active",
                                            }),
                                          }
                                        );
                                        const data = await response.json();
                                        // console.log(data);
                                        window.location.reload();
                                      }
                                    }
                                  >
                                    {" "}
                                    تغيير حالة الاشتراك{" "}
                                  </button>
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
                              {/* create input box for changing endDate of subscription with text to to enter the  new endDate*/}
                              <div className="col-lg-7 col-6">
                                <div>
                                  <label for="end-date">
                                    ادخل تاريخ الانتهاء الجديد
                                  </label>
                                  <input
                                    type="date"
                                    id="end-date"
                                    style={{
                                      width: "100%",
                                      padding: "10px",
                                      border: "none",
                                      borderRadius: "4px",
                                      boxShadow:
                                        "0 2px 5px rgba(0, 0, 0, 0.15)",
                                      fontSize: "16px",
                                      outline: "none",
                                    }}
                                    defaultValue={subscription?.endDate?.substring(
                                      0,
                                      10
                                    )} // Set the default value to the current end date
                                    onChange={
                                      // Update the end date in the database
                                      async (event) => {
                                        const newEndDate = new Date(
                                          event.target.value + "T00:00:00"
                                        ); // Append 'T00:00:00' to set the time to midnight

                                        const response = await fetch(
                                          `/api/subscription/${subscription?.id}`,
                                          {
                                            method: "PUT",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              endDate: newEndDate.toISOString(), // Convert the date to the ISO 8601 format
                                            }),
                                          }
                                        );
                                        if (response.ok) {
                                          // Update the end date in the local state if the request was successful
                                          // setSubscription({ ...subscription, endDate: newEndDate.toISOString() });
                                          console.log(
                                            "Successfully updated the end date"
                                          );
                                        }
                                      }
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="group p-2 mb-0">
                            <div className="row justify-content-center align-items-center text-center">
                              <div className="col-12">
                                <div>
                                  <button
                                    className="btn esteathan-btn"
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
                                  <button
                                    type="button"
                                    class="btn btn-danger m-2"
                                    data-bs-toggle="modal"
                                    data-bs-target={
                                      "#exampleModal" + subscription?.id
                                    }
                                  >
                                    حذف الاشتراك
                                  </button>
                                  <div
                                    class="modal fade"
                                    id={"exampleModal" + subscription?.id}
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5
                                            class="modal-title"
                                            id="exampleModalLabel"
                                          >
                                            مدرسة {correspondingBill.schoolName}
                                          </h5>
                                          <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                        <div class="modal-body">
                                          هل انت متأكد من حذف الاشتراك ؟
                                        </div>
                                        <div class="modal-footer text-center">
                                          <button
                                            type="button"
                                            class="btn btn-success m-auto"
                                            data-bs-dismiss="modal"
                                          >
                                            الغاء
                                          </button>
                                          <button
                                            className="btn  btn-danger m-auto"
                                            onClick={
                                              // delete subscription
                                              () => {
                                                handelDeleteSchool(
                                                  correspondingBill?.schoolId
                                                );
                                              }
                                            }
                                          >
                                            {" "}
                                            حذف {" "}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
