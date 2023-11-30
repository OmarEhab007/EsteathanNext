"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function SendToTeasher() {
  const [forms, setForms] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/forms") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => {
        const approvedForms = data.datas.filter(
          (form) => form.approval === "approved"
        );
        setForms(approvedForms);
      });

    fetch("/api/students") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setStudents(data.datas));

    fetch("/api/teacher") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setTeachers(data.datas));
  }, []);

  console.log(forms);
  console.log(students);
  console.log(teachers);

  const handleSubmit = (event, formId) => {
    event.preventDefault();

    fetch(`/api/forms/${formId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ approval: "done" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setForms(forms.filter((form) => form.id !== formId));
      })
      .catch((error) => console.error("Error:", error));

    fetch("/api/sentMessageToTeacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentNumber: "201095427168", // Replace with parentPhone
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleTeacherChange = async (event) => {
    const teacherId = event.target.value;
    const response = await fetch(`/api/teacher/${teacherId}`);
    const result = await response.json();
    setSelectedTeacher(result.data);
  };
  console.log(selectedTeacher);
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <section className="sendToTeacher">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mt-5 mb-5 ">
                {" "}
                <i> ارسال لمعلم </i>
              </h2>
            </div>
            {forms.map((form) => {
              const student = students.find(
                (student) => student.number === form.studentId
              );

              return (
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
                            {student ? student.name : "Student not found"}
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
                          <p className="card-text">
                            {" "}
                            {student
                              ? student.number
                              : "Student not found"}{" "}
                          </p>
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
                            {student ? student.class : "Student not found"}
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
                            {student ? student.year : "Student not found"}{" "}
                          </p>
                        </div>
                      </div>

                      <form action="">
                        <div className="row align-items-center justify-content-start mb-3 mt-3">
                          <div className="col-lg-3  col-5">
                            <h6 className="card-text"> اسم المعلم </h6>
                          </div>
                          <div className="col-1">
                            <p className="card-text"> : </p>
                          </div>
                          <div className="col-lg-8  col-sm-12">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleTeacherChange}
                            >
                              <option>اختر المعلم</option>
                              {teachers.map((teacher) => {
                                return (
                                  <option value={teacher.id}>
                                    {teacher.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>

                        <div className="row align-items-center justify-content-start ">
                          <div className="col-lg-3  col-5">
                            <label
                              for="exampleFormControlTextarea1"
                              className="card-text fw-semibold"
                            >
                              {" "}
                              تفاصيل الطلب{" "}
                            </label>
                          </div>
                          <div className="col-1">
                            <p className="card-text"> : </p>
                          </div>
                          <div className="col-lg-8  col-sm-12">
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              value={message}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                          <div className="sendToteacherButton text-center">
                            <button
                              type="button"
                              className="btn btn-primary mt-3"
                              onClick={(event) => handleSubmit(event, form.id)}
                            >
                              ارسال
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
