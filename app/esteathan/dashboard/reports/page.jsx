"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Reports() {
  const [forms, setForms] = useState([]);
  const [students, setStudents] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [school, setSchool] = useState(null);
  const [user, setUser] = useState(null);
  const { data: session } = useSession();
  // const [formstwo, setFormstwo] = useState([]);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    const reportPrintContent = document.querySelector(".reportPrint");

    if (printWindow && reportPrintContent) {
      printWindow.document.write(`
          <html>
            <head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.min.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.6.1/bootstrap-icons.min.css" />

              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

              <title> &nbsp; </title>
              <!-- Include any necessary stylesheets or styles here -->
              <style>
                body {
                  font-size: 14px;
                }
                /* Add any other print-specific styles */
              </style>
            </head>
            <body>
              ${reportPrintContent.outerHTML}
            </body>
          </html>
        `);

      printWindow.document.close();

      // Add a delay before printing (adjust the delay time as needed)
      setTimeout(() => {
        printWindow.print();
      }, 1000); // 1000 milliseconds = 1 second
    }
  };

  const user_id = session?.user?.id;
  useEffect(() => {
    // Fetch data here
    // fetch("/api/forms")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const approvedForms = data.datas.filter(
    //       (form) => form.approval === "approved" || form.approval === "done"
    //     );
    //     setForms(approvedForms);
    //   })
    //   .finally(() => setLoading(false)); // Set loading to false once data is fetched

    // fetch("/api/students")
    //   .then((res) => res.json())
    //   .then((data) => setStudents(data.datas))
    //   .finally(() => setLoading(false)); // Set loading to false once data is fetched
    const fetchUserData = async () => {
      const today = new Date();
      if (session?.user?.id) {
        const userResponse = await fetch(`/api/user/${session.user.id}`);
        const userData = await userResponse.json();
        setUser(userData.data);
        // console.log(userData.data);

        const formsResponse = await fetch(
          `/api/forms/school/${userData.data.schoolId}`
        );
        const formsData = await formsResponse.json();
        const approvedForms = formsData.data.filter(
          (form) => form.approval === "approved" || form.approval === "done"
        );
        setForms(approvedForms);
        setLoading(false);
        // console.log(formsData.data);
        // setFormstwo(formsData.data);
        // console.log(approvedForms);

        const studentsResponse = await fetch(
          `/api/students/school/${userData.data.schoolId}`
        );
        const studentsData = await studentsResponse.json();
        setStudents(studentsData.data);
        setLoading(false);
        // console.log(studentsData.data);

        const schoolResponse = await fetch(
          `/api/school/${userData.data.schoolId}`
        );
        const schoolData = await schoolResponse.json();
        setSchool(schoolData.data[0]);
        // console.log(schoolData.data[0]);
      }
    };

    fetchUserData();
  }, [session]);

  const findStudentByNumber = (id) => {
    const student = students.find((student) => student.id === id);
    // console.log(student);
    return student;
  }

  const handleFilter = () => {
    // Filter the forms based on the selected date range
    const filteredForms = forms.filter((form) => {
      const formDate = new Date(form.updatedAt).getTime();
      const startTimestamp = startDate ? new Date(startDate).getTime() : 0;
      const endTimestamp = endDate ? new Date(endDate).getTime() : Infinity;

      // Include forms if the timestamp is within the range or matches the start or end date
      return formDate >= startTimestamp && formDate <= endTimestamp;
    });

    setForms(filteredForms);
    // console.log(filteredForms);
  };

  // Additional cases when start or end date is not specified
  useEffect(() => {
    if (!startDate && endDate) {
      // Display reports up to the specified end date
      const filteredForms = forms.filter((form) => {
        const formDate = new Date(form.updatedAt).getTime();
        const endTimestamp = new Date(endDate).getTime();

        return formDate <= endTimestamp;
      });

      setForms(filteredForms);
    } else if (startDate && !endDate) {
      // Display reports from the specified start date
      const filteredForms = forms.filter((form) => {
        const formDate = new Date(form.updatedAt).getTime();
        const startTimestamp = new Date(startDate).getTime();

        return formDate >= startTimestamp;
      });

      setForms(filteredForms);
    } else if (!startDate && !endDate) {
      // Display all report data if both start and end dates are blank
      setForms(forms);
    }
  }, [startDate, endDate]);

  return (
    <>
      {loading ? (
        // Loading screen
        <div className="loading-screen">
          <div class="🤚">
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="🌴"></div>
            <div class="👍"></div>
          </div>
        </div>
      ) : (
        // Content when data is loaded
        <section className="reports">
          <div className="container">
            <div className="row justify-content-center align-items-center mt-5 mb-3">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4> تقرير الاستئذان </h4>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div className="row">
                        <div className="col-6">
                          <div className="mb-3">
                            <label htmlFor="startDate" className="form-label">
                              من
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="startDate"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="mb-3">
                            <label htmlFor="endDate" className="form-label">
                              إلى
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="endDate"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="mb-3">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleFilter}
                            >
                              عرض
                            </button>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="mb-3">
                            <button
                              type="button"
                              className="btn btn-warning ms-auto d-block"
                              onClick={handlePrint}
                            >
                              طباعة
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="reportPrint">
              <div className="row justify-content-center align-items-center mt-5 mb-3">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-center">
                      <p> المنطقة التعليمية: {school?.district} </p>
                      <p> المكتب: {school?.office} </p>
                      <h3 className="mb-3"> اسم المدرسة: {school?.name} </h3>
                      <h4 className="text-center"> تقرير الاستئذان </h4>
                    </div>
                    <div className="card-body">
                      {startDate || endDate ? (
                        <div className="row border-secondary reportDate mb-3">
                          <div className="col-5">
                            <div className="mb-3 text-center">
                              <p>
                                <span className="fw-bold startDate">
                                  {" "}
                                  من :{" "}
                                </span>{" "}
                                {startDate
                                  ? new Date(startDate).toLocaleDateString()
                                  : ""}
                              </p>
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="mb-3 text-center">
                              <p> : </p>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="mb-3 text-center">
                              <p>
                                <span className="fw-bold endDate"> إلى : </span>{" "}
                                {endDate
                                  ? new Date(endDate).toLocaleDateString()
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : null}

                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col"> م </th>
                            <th scope="col">الاسم</th>
                            <th scope="col">هوية الطالب</th>
                            <th scope="col"> السنة الدراسية </th>
                            <th scope="col"> الفصل </th>
                            <th scope="col"> رقم ولي الأمر </th>
                            <th scope="col"> تاريخ الاستئذان </th>
                            <th scope="col"> وقت الاستئذان </th>
                          </tr>
                        </thead>
                        <tbody>
                          {forms.map((form, index) => {
                            const student = findStudentByNumber(form.studentId);
                            // console.log('Student ID:', form.studentId, 'Student:', student);
                            // console.log(student);
                            if (!student) {
                              return null; // or return a default row
                            }
                            const date = new Date(
                              form.updatedAt
                            ).toLocaleDateString();
                            const time = new Date(
                              form.createdAt
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            });
                            return (
                              <tr key={form.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.number}</td>
                                <td>{student.class}</td>
                                <td>{student.year}</td>
                                <td>{student.parentNumber}</td>
                                <td>{date}</td>
                                <td>{time}</td>
                              </tr>
                            );
                          })}
                          {/* <tr>
                            <th scope="row">3</th>
                            <td>أحمد محمد محمود</td>
                            <td>0123456789</td>
                            <td> أول متوسط </td>
                            <td> 5 </td>
                            <td> 0123456789 </td>
                            <td> 2021-10-10 </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
