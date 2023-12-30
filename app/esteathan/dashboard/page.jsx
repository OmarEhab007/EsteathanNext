"use client";
import React, { useState, useEffect } from "react";
// import { getServerSession } from "next-auth";
// import { options } from "../../../app/api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const [forms, setForms] = useState([]);
  const [user, setUser] = useState(null);
  const [schoolId, setSchoolId] = useState(null);
  const { data: session } = useSession();

  const user_id = session?.user?.id;
  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.user?.id) {
        try {
          const userResponse = await fetch(`/api/user/${session.user.id}`);
          const userData = await userResponse.json();
          setUser(userData.data);

          // Ensure the schoolId is available before making the forms request
          if (userData.data?.schoolId) {
            const formsResponse = await fetch(
              `/api/forms/school/${userData.data.schoolId}`
            );
            const formsData = await formsResponse.json();
            setForms(formsData.data || []);
            // console.log(formsData.data);
          } else {
            console.log("No schoolId available");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }

      }
    };

    fetchUserData();
  }, [session]);

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

  const receivedTodayCount = forms?.filter((form) => {
    const formDate = new Date(form.createdAt);
    const today = new Date();
    return (
      formDate.getDate() === today.getDate() &&
      formDate.getMonth() === today.getMonth() &&
      formDate.getFullYear() === today.getFullYear()
    );
  }).length;

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
            {user?.role === "admin" && (
              <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card text-center">
                  <div className="card-header">
                    <h3>
                      <i className="fa-solid fa-person-walking-arrow-right text-primary"></i>
                    </h3>
                    <h6> طلبات الاشتراك </h6>
                  </div>
                  <div className="card-body">
                    <p className="fs-1 text-center">
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
            )}

            <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card text-center">
                <div className="card-header">
                  <h3>
                    <i className="fa-solid fa-person-walking-arrow-right text-primary"></i>
                  </h3>
                  <h6> معلومات المستخدم</h6>
                </div>
                <div className="card-body">
                  <Link href="/esteathan/dashboard/user">
                    اذهب الي الصفحة
                  </Link>
                </div>
              </div>
            
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
