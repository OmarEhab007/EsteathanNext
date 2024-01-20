"use client";

import { useState, useEffect } from "react";

import React from "react";
import Image from "next/image.js";
import icon from "../../bigIcon.png";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";

export default function Pills() {
  // const [school, setSchool] = useState(null);
  // const [subscription, setSubscription] = useState(null);
  // const [bill, setBill] = useState(null);
  // const [user, setUser] = useState(null);
  const [billNumber, setBillNumber] = useState(null);
  const { data: session } = useSession();

  const {
    user,
    school,
    bill,
    subscription,
    forms,
    students,
    teachers,
    toggleDarkMode,
    setForms,
    darkMode,
  } = useStore();

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
  //       // console.log(schoolData.data);
  //       // console.log(schoolData.data[0]);
  //       setSchool(schoolData.data[0]);

  //       const subscriptionResponse = await fetch(
  //         `/api/subscription/${schoolData.data[0].subscriptionId}`
  //       );
  //       const subscriptionData = await subscriptionResponse.json();
  //       // console.log(subscriptionData.data);
  //       setSubscription(subscriptionData.data);

  //       const billResponse = await fetch(
  //         `/api/bill/${subscriptionData.data.billId}`
  //       );
  //       const billData = await billResponse.json();
  //       // console.log(billData.data);
  //       setBill(billData.data);
  //     }
  //   };

  //   fetchUserData();
  // }, [session]);

  const [isPrintMode, setIsPrintMode] = useState(false);

  const handlePrint = () => {
    setIsPrintMode(true);
    // Wait for a short time before printing (e.g., 500 milliseconds)
    setTimeout(() => {
      window.print();
      setIsPrintMode(false); // Reset the print mode after printing
    }, 500);
  };

  return (
    <>
      <section className={`bills my-5 ${isPrintMode ? "printable" : ""}`}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center mt-2"> فاتورة الاشتراك </h4>
                  <button
                    className="btn esteathan-btn p-1 px-3"
                    onClick={handlePrint}
                  >
                    {" "}
                    طباعة{" "}
                  </button>
                </div>
                <div className="card-body billPrint">
                  <figure className="text-center">
                    <Image
                      src={icon}
                      alt="icon"
                      placeholder="blur"
                      width={150}
                    />
                  </figure>

                  <div className="row align-items-center">
                    <div className="col-6 mb-3">
                      <div className="text-center d-flex justify-content-around align-items-center">
                        <h6 className="col-6"> رقم الفاتورة: </h6>
                        <span className="mb-1">
                          {" "}
                          {bill?.id.substring(0, 10)}{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="text-center d-flex justify-content-around align-items-center">
                        <h6 className="col-6"> تاريخ الفاتورة: </h6>
                        <span className="mb-1">
                          {new Date(bill?.createdAt).toLocaleDateString(
                            "en-GB"
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="d-flex ">
                        <h6 className=" col-3"> عناية / </h6>
                        <span className="col-9">{bill?.managerName}</span>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="d-flex ">
                        <h6 className="col-3"> مدرسة / </h6>
                        <span className="col-9">{school?.name}</span>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div>
                        <table className="table table-striped table-bordered borderem overflow-hidden">
                          <thead>
                            <tr>
                              <th> الوصف </th>
                              <th> المبلغ </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p>اشتراك في خدمة</p>
                                <p>
                                  {" "}
                                  برنامج <span className="markUs">
                                    استئذان
                                  </span>{" "}
                                  لمدة{" "}
                                </p>
                                <p>
                                  <span className="markUs">
                                    {(() => {
                                      switch (bill?.plan) {
                                        case "oneSemester":
                                          return "فصل دراسي واحد";
                                        case "twoSemester":
                                          return "فصلين دراسيين";
                                        case "fullYear":
                                          return "سنة دراسية كاملة";
                                        default:
                                          return bill?.plan;
                                      }
                                    })()}
                                  </span>
                                </p>
                              </td>
                              <td>
                                {
                                  
                                    (() => {
                                      switch (bill?.plan) {
                                        case "oneSemester":
                                          return "150 ريال";
                                        case "twoSemester":
                                          return "250 ريال";
                                        case "fullYear":
                                          return "350 ريال";
                                        default:
                                          return bill?.plan;
                                      }
                                    })()
                                  
                                }
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
