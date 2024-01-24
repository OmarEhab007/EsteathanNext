"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
// import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";

export default function SendRequests() {
  // const [forms, setForms] = useState([]);
  // const [students, setStudents] = useState([]);
  const [parentPhone, setParentPhone] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [reason, setReason] = useState(false);
  const [reasonText, setReasonText] = useState("تم رفض طلب الاستئذان");
  const [isRejectButtonVisible, setRejectButtonVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [user, setUser] = useState(null);
  const { data: session } = useSession();
  const [today, setToday] = useState(new Date());

  const {
    user,
    school,
    forms,
    students,
    toggleDarkMode,
    setForms,
    darkMode,
  } = useStore();

  // const [NumberOfRequests, setNumberOfRequests] = useState(null);
  // today date
  // const today = new Date();
  const todayForms = forms.filter((form) => {
          const formDate = new Date(form.createdAt);
          return (
            formDate.getDate() === today.getDate() &&
            formDate.getMonth() === today.getMonth() &&
            formDate.getFullYear() === today.getFullYear() &&
            form.approval === "pending"
          );
  });
  
  // // const user_id = session?.user?.id;
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const today = new Date();
  //     if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${session.user.id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //       console.log(userData.data);

  //       const formsResponse = await fetch(
  //             `/api/forms/school/${userData.data.schoolId}`
  //       );
  //       const formsData = await formsResponse.json();
  //       setForms(formsData.data || []);
  //       console.log(formsData.data);
  //       // fillter forms by today
  //       const todayForms = formsData.data.filter((form) => {
  //         const formDate = new Date(form.createdAt);
  //         return (
  //           formDate.getDate() === today.getDate() &&
  //           formDate.getMonth() === today.getMonth() &&
  //           formDate.getFullYear() === today.getFullYear() &&
  //           form.approval === "pending"
  //         );
  //       });
  //       setForms(todayForms);
  //       // console.log(todayForms);

  //       // fetch("/api/forms") // replace with your API endpoint
  //       //   .then((res) => res.json())
  //       //   .then((data) => {
  //       //     const todayForms = data.datas.filter((form) => {
  //       //       const formDate = new Date(form.createdAt);
  //       //       return (
  //       //         formDate.getDate() === today.getDate() &&
  //       //         formDate.getMonth() === today.getMonth() &&
  //       //         formDate.getFullYear() === today.getFullYear() &&
  //       //         form.approval === "pending"
  //       //       );
  //       //     });
  //       //     setForms(todayForms);
  //       //     console.log(todayForms);
  //       //   });

  //       // fetch("/api/students") // replace with your API endpoint
  //       //   .then((res) => res.json())
  //       //   .then((data) => setStudents(data.datas));
  //       const studentsResponse = await fetch(`/api/students/school/${userData.data.schoolId}`);
  //       const studentsData = await studentsResponse.json();
  //       setStudents(studentsData.data || []);
  //       console.log(studentsData.data);
  //     }
  //   };
  //   fetchUserData();
  // }, [session]);

  // console.log(students);
  // console.log(forms);

  const getStudentName = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    return student ? student.name : "Student not found";
  };

  const getStudentYear = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    return student ? student.year : "Student not found";
  };

  const getStudentClass = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    return student ? student.class : "Student not found";
  };

  const getStudentParentNumber = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    return student ? student.parentNumber : "Student not found";
  };

  const getNumberOfRequests = (studentId) => {
    const studentForms = forms.filter((form) => form.studentId === studentId);
    // setNumberOfRequests(studentForms.length);
    return studentForms.length;
  };

  const getStudentNumber = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    return student ? student.number : "Student not found";
  };

  const handleApproval = (formId) => {
    // Make an API call to update the form data
    setIsLoading(true);
    const form = forms.find((form) => form.id === formId);
    const student = students.find(
      (student) => student.id === form.studentId
    );
    const parentNumber = student.parentNumber;
    fetch(`/api/forms/${formId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        approval: "approved",
      }),
    });

    fetch("/api/sentMessageToTeacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentNumber: parentNumber, // Replace with parentPhone
        message: "تم قبول طلب الاستئذان",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsLoading(false);
      })
      .then(() => {
        window.location.reload();
      });
  };

  const handleRejection = (formId) => {
    // Make an API call to update the form data
    setIsLoading(true);
    const form = forms.find((form) => form.id === formId);
    const student = students.find(
      (student) => student.id === form.studentId
    );
    const parentNumber = student.parentNumber;
    fetch(`/api/forms/${formId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        approval: "rejected",
      }),
    });

    fetch("/api/sentMessageToTeacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentNumber: parentNumber, // Replace with parentPhone
        message: `تم رفض طلب الاستئذان بسبب ${reasonText}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsLoading(false);
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <>
      <section className="SentRequests">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mt-5 mb-5 ">
                {" "}
                <i> الطلبات المرسلة </i>
              </h2>
            </div>
            {todayForms
              .filter((form) => form.approval === "pending")
              .map((form) => (
                <div className="col-lg-6 mb-3">
                  <div className="card border-primary">
                    <div className="card-header border-primary">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-lg-3 col-4">
                          <h6 className="mb-0"> اسم الطالب </h6>
                        </div>
                        <div className="col-1">
                          <p className="mb-0"> : </p>
                        </div>
                        <div className="col-lg-8 col-7 pe-0">
                          <p className="mb-0">
                            {" "}
                            {getStudentName(form.studentId)}{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="row align-items-center justify-content-start mb-2">
                        <div className="col-lg-3  col-4">
                          <h6 className="card-text"> هوية الطالب </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-7">
                          <p className="card-text"> {getStudentNumber(form.studentId)} </p>
                        </div>
                      </div>

                      <div className="row align-items-center justify-content-start mb-2">
                        <div className="col-lg-3  col-4">
                          <h6 className="card-text"> السنة الدراسية </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-7">
                          <p className="card-text">
                            {" "}
                            {getStudentClass(form.studentId)}{" "}
                          </p>
                        </div>
                      </div>

                      <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-primary">
                        <div className="col-lg-3  col-4">
                          <h6 className="card-text"> رقم الفصل </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-7">
                          <p className="card-text">
                            {" "}
                            {getStudentYear(form.studentId)}{" "}
                          </p>
                        </div>
                      </div>

                      {/*  ============هنا عدد الاستئذانات======== */}
                      <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-primary">
                        <div className="col-lg-3  col-4">
                          <h6 className="card-text position-relative">
                            {" "}
                            عدد طلبات الاستئذان السابقة{" "}
                          </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-7">
                          <p className="card-text">
                            {getNumberOfRequests(form.studentId)}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h6> سبب الاستئذان </h6>
                        <p className="card-text premationReson ">
                          {" "}
                          {form.reason}{" "}
                        </p>
                      </div>
                      {form.attachment && (
                        <div className="mt-3">
                          <h6> مرفقات الاستئذان</h6>
                          <p className="card-text premationReson ">
                            <a
                              className="btn btn-outline-primary"
                              href={form.attachment}
                              target="_blank"
                              download
                            >
                              تحميل الملف
                            </a>
                          </p>
                        </div>
                      )}
                      {isLoading ? (
                        // <BarLoader className="position-absolute top-0 bottom-0 start-0 end-0" />
                        <div className="position-absolute top-0 bottom-0 start-0 end-0 loading-backgound ">
                          <div className="h-100 d-flex align-items-center justify-content-center">
                            <div
                              className="spinner-border text-primary"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="replyButtons mt-3 text-center">
                          <button
                            type="button"
                            className="btn btn-outline-success me-3"
                            onClick={() => handleApproval(form.id)}
                          >
                            {" "}
                            قبول الطلب{" "}
                          </button>
                          {isRejectButtonVisible && (
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => {
                                setReason(true);
                                setRejectButtonVisible(false);
                              }}
                            >
                              {" "}
                              رفض الطلب{" "}
                            </button>
                          )}
                        </div>
                      )}
                      {reason && (
                        <div className="mt-3">
                          <h6> سبب رفض الاستئذان </h6>
                          <textarea
                            className="form-control"
                            rows="3"
                            required
                            onChange={(e) => setReasonText(e.target.value)}
                          ></textarea>
                          <div className="replyButtons mt-3 text-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => handleRejection(form.id)}
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
