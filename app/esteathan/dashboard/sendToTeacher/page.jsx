"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";

export default function SendToTeasher() {
  // const [forms, setForms] = useState([]);
  // const [students, setStudents] = useState([]);
  // const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState({});
  // const [user, setUser] = useState(null);
  const { data: session } = useSession();
  const [today, setToday] = useState(new Date());
  const {
    user,
    school,
    forms,
    students,
    teachers,
    toggleDarkMode,
    setForms,
    darkMode,
  } = useStore();

  const todayForms = forms.filter((form) => {
          const formDate = new Date(form.createdAt);
          return (
            formDate.getDate() === today.getDate() &&
            formDate.getMonth() === today.getMonth() &&
            formDate.getFullYear() === today.getFullYear() &&
            form.approval === "approved"
          );
        });

  // const user_id = session?.user?.id;

  // useEffect(() => {
  //   const today = new Date();
  //   const fetchUserData = async () => {
  //     if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${user_id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //       console.log("userData", userData.data)

  //       const formsResponse = await fetch(
  //         `/api/forms/school/${userData.data.schoolId}`
  //       );
  //       const formsData = await formsResponse.json();
  //       // setForms(formsData.data || []);
  //       const todayForms = formsData.data.filter((form) => {
  //         const formDate = new Date(form.createdAt);
  //         return (
  //           formDate.getDate() === today.getDate() &&
  //           formDate.getMonth() === today.getMonth() &&
  //           formDate.getFullYear() === today.getFullYear() &&
  //           form.approval === "approved"
  //         );
  //       });
  //       setForms(todayForms);

  //       console.log("formsData", formsData.data)

  //       const studentsResponse = await fetch(
  //         `/api/students/school/${userData.data.schoolId}`
  //       );
  //       const studentsData = await studentsResponse.json();
  //       setStudents(studentsData.data || []);
  //       console.log("studentsData", studentsData.data)

  //       const teachersResponse = await fetch(
  //         `/api/teacher/school/${userData.data.schoolId}`
  //       );
  //       const teachersData = await teachersResponse.json();
  //       setTeachers(teachersData.data || []);
  //       console.log("teachersData", teachersData.data)
  //     }
  //   };
  //   // fetch("/api/forms") // replace with your API endpoint
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     const todayForms = data.datas.filter((form) => {
  //   //       const formDate = new Date(form.createdAt);
  //   //       return (
  //   //         formDate.getDate() === today.getDate() &&
  //   //         formDate.getMonth() === today.getMonth() &&
  //   //         formDate.getFullYear() === today.getFullYear() &&
  //   //         form.approval === "approved"
  //   //       );
  //   //     });
  //   //     setForms(todayForms);
  //   //   });

  //   // fetch("/api/students") // replace with your API endpoint
  //   //   .then((res) => res.json())
  //   //   .then((data) => setStudents(data.datas));

  //   // fetch("/api/teacher") // replace with your API endpoint
  //   //   .then((res) => res.json())
  //   //   .then((data) => setTeachers(data.datas));

  //   fetchUserData();
  // }, [session]);

  // console.log(forms);
  // console.log(students);
  // console.log(teachers);

  const handleSubmit = (event, formId) => {
    event.preventDefault();
    setIsLoading(true);
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
        parentNumber: selectedTeacher?.phone,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      });
  };
  const handleTeacherChange = async (event) => {
    const teacherId = event.target.value;
    const response = await fetch(`/api/teacher/${teacherId}`);
    const result = await response.json();
    setSelectedTeacher(result.data);
  };
  // console.log(selectedTeacher?.phone);
  // const handleInputChange = (event) => {
  //   setMessage(event.target.value);
  // };

  const handleInputChange = (event, id) => {
  setMessages(prevMessages => ({
    ...prevMessages,
    [id]: event.target.value
  }));
};

  function handleCancel(event, formId) {
    // Prevent form submission
    event.preventDefault();
    setIsLoading(true);

    // Remove the form from the state
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
        setIsLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }

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
            {todayForms.map((form) => {
              const student = students.find(
                (student) => student.id === form.studentId
              );

              return (
                <div className="col-lg-6 mb-3">
                  <div className="card border-primary position-relative">
                    <div className="card-header border-primary">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-lg-3  col-4">
                          <h6 className="mb-0"> اسم الطالب </h6>
                        </div>
                        <div className="col-1">
                          <p className="mb-0"> : </p>
                        </div>
                        <div className="col-lg-8  col-7 pe-0">
                          <p className="mb-0">
                            {" "}
                            {student ? student.name : "Student not found"}
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
                          <p className="card-text">
                            {" "}
                            {student
                              ? student.number
                              : "Student not found"}{" "}
                          </p>
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
                            {student ? student.class : "Student not found"}
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
                              required
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
                              value={messages[form.id] || ''}
                              onChange={(event) => handleInputChange(event, form.id)}
                              required
                            ></textarea>
                          </div>
                          {isLoading ? (
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
                            <div className="sendToteacherButton text-center">
                              <button
                                type="button"
                                className="btn btn-primary mt-3"
                                onClick={(event) =>
                                  handleSubmit(event, form.id)
                                }
                              >
                                ارسال
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-danger mt-3 ms-5"
                                onClick={(event) =>
                                  handleCancel(event, form.id)
                                }
                              >
                                الغاء
                              </button>
                            </div>
                          )}
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
