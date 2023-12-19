"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function SendRequests() {
  const [forms, setForms] = useState([]);
  const [students, setStudents] = useState([]);
  const [parentPhone, setParentPhone] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  // const [NumberOfRequests, setNumberOfRequests] = useState(null);
  // today date
  // const today = new Date();

  useEffect(() => {
    const today = new Date();
    fetch("/api/forms") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => {
        const todayForms = data.datas.filter((form) => {
          const formDate = new Date(form.createdAt);
          return (
            formDate.getDate() === today.getDate() &&
            formDate.getMonth() === today.getMonth() &&
            formDate.getFullYear() === today.getFullYear() &&
            form.approval === "pending"
          );
        });
        setForms(todayForms);
        console.log(todayForms);
      });

    fetch("/api/students") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setStudents(data.datas));
  }, []);

  // console.log(students);
  // console.log(forms);

  const getStudentName = (studentId) => {
    const student = students.find((student) => student.number === studentId);
    return student ? student.name : "Student not found";
  };

  const getStudentYear = (studentId) => {
    const student = students.find((student) => student.number === studentId);
    return student ? student.year : "Student not found";
  };

  const getStudentClass = (studentId) => {
    const student = students.find((student) => student.number === studentId);
    return student ? student.class : "Student not found";
  };

  const getStudentParentNumber = (studentId) => {
    const student = students.find((student) => student.number === studentId);
    return student ? student.parentNumber : "Student not found";
  };

  const getNumberOfRequests = (studentId) => {
    const studentForms = forms.filter((form) => form.studentId === studentId);
    // setNumberOfRequests(studentForms.length);
    return studentForms.length;
  };

  const handleApproval = (formId) => {
    // Make an API call to update the form data
    const form = forms.find((form) => form.id === formId);
    const student = students.find(
      (student) => student.number === form.studentId
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
        console.log(data);
      })
      .then(() => {
        window.location.reload();
      });
  };

  const handleRejection = (formId) => {
    // Make an API call to update the form data
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
        parentNumber: parentPhone, // Replace with parentPhone
        message: "تم رفض طلب الاستئذان",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        window.location.reload();
      });
  };

  console.log(forms);

  function FileDisplay({ fileUrl }) {
    if (!fileUrl) return null;

    const fileExtension = fileUrl.split(".").pop();

    if (fileExtension === "pdf") {
      return (
        <embed
          src={fileUrl}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      );
    } else if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
      return <img src={fileUrl} alt="file" />;
    } else {
      return (
        <a href={fileUrl} download>
          Download file
        </a>
      );
    }
  }

  const downloadFile = async (filePath) => {
    if (filePath) {
    // const displayPath = filePath.replace('./public', '');
    const displayPath = '/test.png'
    const response = await fetch(displayPath);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    // rest of your code
  } else {
    console.error('filePath is undefined');
  }

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
            {forms
              .filter((form) => form.approval === "pending")
              .map((form) => (
                <div className="col-md-6 mb-3">
                  <div className="card border-primary">
                    <div className="card-header border-primary">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-lg-3  col-5">
                          <h6 className="mb-0"> اسم الطالب </h6>
                        </div>
                        <div className="col-1">
                          <p className="mb-0"> : </p>
                        </div>
                        <div className="col-lg-8  col-12">
                          <p className="mb-0">
                            {" "}
                            {getStudentName(form.studentId)}{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="row align-items-center justify-content-start mb-2">
                        <div className="col-lg-3  col-5">
                          <h6 className="card-text"> هوية الطالب </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-sm-12">
                          <p className="card-text"> {form.studentId} </p>
                        </div>
                      </div>

                      <div className="row align-items-center justify-content-start mb-2">
                        <div className="col-lg-3  col-5">
                          <h6 className="card-text"> السنة الدراسية </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-sm-12">
                          <p className="card-text">
                            {" "}
                            {getStudentYear(form.studentId)}{" "}
                          </p>
                        </div>
                      </div>

                      <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-primary">
                        <div className="col-lg-3  col-5">
                          <h6 className="card-text"> رقم الفصل </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-sm-12">
                          <p className="card-text">
                            {" "}
                            {getStudentClass(form.studentId)}{" "}
                          </p>
                        </div>
                      </div>

                      {/*  ============هنا عدد الاستئذانات======== */}
                      <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-primary">
                        <div className="col-lg-3  col-5">
                          <h6 className="card-text">
                            {" "}
                            عدد طلبات الاستئذان السابقة{" "}
                          </h6>
                        </div>
                        <div className="col-1">
                          <p className="card-text"> : </p>
                        </div>
                        <div className="col-lg-8  col-sm-12">
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
                      <div className="mt-3">
                        <h6> مرفقات الاستئذان</h6>
                        <p className="card-text premationReson ">
                          <a
                            download
                            className="btn btn-outline-primary"
                            href={form.attachment}
                            // open in new tab
                            target="_blank"
                          >
                            تحميل الملف
                          </a>
                        </p>
                      </div>

                      <div className="replyButtons mt-3 text-center">
                        <button
                          type="button"
                          className="btn btn-outline-success me-3"
                          onClick={() => handleApproval(form.id)}
                        >
                          {" "}
                          قبول الطلب{" "}
                        </button>
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
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
