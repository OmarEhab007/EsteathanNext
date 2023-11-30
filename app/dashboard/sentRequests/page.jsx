"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function SendRequests() {
  const [forms, setForms] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/forms") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setForms(data.datas));

    fetch("/api/students") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setStudents(data.datas));
  }, []);

  console.log(students);
  console.log(forms);

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

  const handleApproval = (formId) => {
    // Make an API call to update the form data
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
        parentNumber: "201095427168", // Replace with parentPhone
        message: "تم قبول طلب الاستئذان",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // reload the page
    window.location.reload();
    // .then((res) => res.json())
    // .then((data) => {
    //   // Update the forms state with the new data
    //   setForms((prevForms) =>
    //     prevForms.map((form) => (form.id === formId ? data : form))
    //   );
    // });
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
        parentNumber: "201095427168", // Replace with parentPhone
        message: "تم رفض طلب الاستئذان",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // reload the page
    window.location.reload();
    // .then((res) => res.json())
    // .then((data) => {
    //   // Update the forms state with the new data
    //   setForms((prevForms) =>
    //     prevForms.map((form) => (form.id === formId ? data : form))
    //   );
    // });
  };

  console.log(forms);
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
                        <div
                          className="col-lg-8  col-sm-12
                "
                        >
                          <p className="card-text">
                            {" "}
                            {getStudentClass(form.studentId)}{" "}
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
                      <p className="mb-0"> أحمد عبدالله فيصل الخضيري </p>
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
                      <p className="card-text"> 1234567890 </p>
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
                      <p className="card-text"> أول متوسط </p>
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
                      <p className="card-text"> 5 </p>
                    </div>
                  </div>

                  <div>
                    <h6> سبب الاستئذان </h6>
                    <p className="card-text premationReson ">
                      {" "}
                      ذهاب الطالب الى المستشفى{" "}
                    </p>
                  </div>

                  <div className="replyButtons mt-3 text-center">
                    <button
                      type="button"
                      className="btn btn-outline-success me-3"
                    >
                      {" "}
                      قبول الطلب{" "}
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      {" "}
                      رفض الطلب{" "}
                    </button>
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
