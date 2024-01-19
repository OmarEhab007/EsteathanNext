"use client";
import React, { useState, useEffect } from "react";
// import { getServerSession } from "next-auth";
// import { options } from "../../../app/api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";
import Link from "next/link";
import useStore from "../../../lib/store";

export default function Dashboard() {
  // const [forms, setForms] = useState([]);
  // const [user, setUser] = useState(null);
  // const [schoolId, setSchoolId] = useState(null);
  // const [school, setSchool] = useState(null);
  // const [subscription, setSubscription] = useState(null);
  const {
    forms,
    user,
    schoolId,
    school,
    subscription,
    setForms,
    setUser,
    setSchoolId,
    setSchool,
    setSubscription,
  } = useStore();

  const { data: session } = useSession();
  const [today, setToday] = useState(new Date());

  // const user_id = session?.user?.id;
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (session?.user?.id) {
  //       try {
  //         const userResponse = await fetch(`/api/user/${session.user.id}`);
  //         const userData = await userResponse.json();
  //         setUser(userData.data);

  //         // Ensure the schoolId is available before making the forms request
  //         if (userData.data?.schoolId) {
  //           const formsResponse = await fetch(
  //             `/api/forms/school/${userData.data.schoolId}`
  //           );
  //           const formsData = await formsResponse.json();
  //           setForms(formsData.data || []);
  //           // console.log(formsData.data);
  //           const schoolResponse = await fetch(
  //             `/api/school/${userData.data.schoolId}`
  //           );
  //           const schoolData = await schoolResponse.json();
  //           setSchool(schoolData.data[0]);
  //           // console.log(schoolData.data[0]);

  //           const subscriptionResponse = await fetch(
  //             `/api/subscription/${schoolData.data[0].subscriptionId}`
  //           );
  //           console.log(schoolData.data[0]);
  //           const subscriptionData = await subscriptionResponse.json();
  //           // console.log(subscriptionData.data);
  //           setSubscription(subscriptionData.data);
  //         } else {
  //           console.log("No schoolId available");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, [session]);

  const pendingApprovalCount = forms?.filter(
    (form) => form.approval === "pending"
  ).length;
  const approvedApprovalCount = forms?.filter(
    (form) => form.approval === "approved"
  ).length;

  const approvedApprovalCountToday = forms?.filter((form) => {
    const formDate = new Date(form.createdAt);
    const today = new Date();
    return (
      form.approval === "approved" &&
      formDate.getDate() === today.getDate() &&
      formDate.getMonth() === today.getMonth() &&
      formDate.getFullYear() === today.getFullYear()
    );
  }).length;

  // const receivedTodayCount = forms.filter((form) => {
  //   const formDate = new Date(form.createdAt);
  //   const today = new Date();
  //   return (
  //     form.approval === "approved" &&
  //     formDate.getDate() === today.getDate() &&
  //     formDate.getMonth() === today.getMonth() &&
  //     formDate.getFullYear() === today.getFullYear()
  //   );
  // }).length;

  // show received forms count today
  const receivedTodayCount = forms?.filter((form) => {
    const formDate = new Date(form.createdAt);
    const today = new Date();
    return (
      formDate.getDate() === today.getDate() &&
      formDate.getMonth() === today.getMonth() &&
      formDate.getFullYear() === today.getFullYear()
    );
  }).length;

  // const receivedTodayCount = forms?.filter((form) => {
  //   const formDate = new Date(form.createdAt);
  //   const today = new Date();
  //   return (
  //     formDate.getDate() === today.getDate() &&
  //     formDate.getMonth() === today.getMonth() &&
  //     formDate.getFullYear() === today.getFullYear()
  //   );
  // }).length;

  const pendingTodayCount = forms?.filter((form) => {
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
        <div className="loading position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
          <div class="🤚">
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="🌴"></div>
            <div class="👍"></div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="heading d-flex justify-content-center">
            <h1 className="text-center mb-5 high fs-1">
              {" "}
              مدرسة : {school?.name}{" "}
            </h1>
          </div>
          <div className="row index-row align-items-center justify-content-center">
            <div className=" reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h2 className="mb-3 mt-2">
                    <i className="fa-solid fa-person-walking-arrow-right text-primary"></i>
                  </h2>
                  <h5> طلبات بانتظار الرد عليها </h5>
                </div>
                <div className="card-body">
                  <p className="fs-1">{pendingTodayCount}</p>
                </div>
              </div>
            </div>

            <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h2 className="mb-3 mt-2">
                    <i className="fa-solid fa-envelope-circle-check text-info"></i>
                  </h2>
                  <h5> طلبات منتظرة الارسال الى المعلم </h5>
                </div>
                <div className="card-body">
                  <p className="fs-1">{approvedApprovalCountToday}</p>
                </div>
              </div>
            </div>

            <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h2 className="mb-3 mt-2">
                    <i className="fa-solid fa-list-check text-success"></i>
                  </h2>
                  <h5> عدد الطلبات المستلمة اليوم </h5>
                </div>
                <div className="card-body">
                  <p className="fs-1">{receivedTodayCount}</p>
                </div>
              </div>
            </div>

            <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h2 className="mb-3 mt-2">
                    <i class="fa-solid fa-calendar-check text-warning"></i>
                  </h2>
                  <h5> صلاحية الاشتراك </h5>
                </div>
                <div className="card-body">
                  <p className="fs-1">
                    {/*want to make the number of subscription days be updated each day*/}
                    {subscription?.startDate &&
                    subscription?.endDate &&
                    new Date(subscription?.endDate) > new Date() ? (
                      Math.floor(
                        (new Date(subscription?.endDate) - today) /
                          (1000 * 60 * 60 * 24)
                      )
                    ) : (
                      <span className="fs-5"> غير محدد </span>
                    )}
                    <span className="fs-5"> يوم </span>

                    {/*{subscription?.startDate && subscription?.endDate*/}
                    {/*  ? Math.floor(*/}
                    {/*      (new Date(subscription?.endDate) -*/}
                    {/*        new Date(subscription?.startDate)) /*/}
                    {/*        (1000 * 60 * 60 * 24)*/}
                    {/*    )*/}
                    {/*  : "غير محدد "}*/}
                    {/*  <span className="fs-5"> يوم </span> */}
                  </p>
                </div>
              </div>
            </div>
            {/* {user?.role === "admin" && (
              <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card text-center">
                  <div className="card-header">
                    <h3>
                      <i className="fa-solid fa-person-walking-arrow-right text-primary"></i>
                    </h3>
                    <h6> طلبات الاشتراك </h6>
                  </div>
                  <div className="card-body">
                    <p className=" text-center">
                      <Link
                        href="/esteathan/dashboard/subscriptionResponse"
                        className="text-center"
                      >
                        اذهب الي الصفحة
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )} */}

            {/* <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h3>
                    <i className="fa-solid fa-person-walking-arrow-right text-primary"></i>
                  </h3>
                  <p> معلومات المستخدم</p>
                </div>
                <div className="card-body">
                  <p>
                    <Link href="/esteathan/dashboard/user">
                      اذهب الي الصفحة
                    </Link>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
