"use client";
import React, { useEffect, useState } from "react";

export default function Reports() {
  const [forms, setForms] = useState([]);
  const [students, setStudents] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  // const handlePrint = () => {
  //     const printWindow = window.open('', '_blank');
  //     const reportPrintContent = document.querySelector('.reportPrint');

  //     if (printWindow && reportPrintContent) {

  //       printWindow.document.write(`
  //         <html>
  //           <head>
  //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" />
  //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.min.css" />
  //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.6.1/bootstrap-icons.min.css" />

  //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

  //             <title> &nbsp; </title>
  //             <!-- Include any necessary stylesheets or styles here -->
  //             <style>
  //               body {
  //                 font-size: 14px;
  //               }
  //               /* Add any other print-specific styles */
  //             </style>
  //           </head>
  //           <body>
  //             ${reportPrintContent.outerHTML}
  //           </body>
  //         </html>
  //       `);

  //       printWindow.document.close();

  //       // Add a delay before printing (adjust the delay time as needed)
  //       setTimeout(() => {
  //         printWindow.print();
  //       }, 1000); // 1000 milliseconds = 1 second
  //     }
  // };
  // }, [])

  useEffect(() => {
    // Fetch data here
    fetch("/api/forms")
      .then((res) => res.json())
      .then((data) => {
        const approvedForms = data.datas.filter(
          (form) => form.approval === "done"
        );
        setForms(approvedForms);
      })
      .finally(() => setLoading(false)); // Set loading to false once data is fetched

    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.datas))
      .finally(() => setLoading(false)); // Set loading to false once data is fetched
  }, []);

  function findStudentByNumber(id) {
    return students.find((student) => student.number === id);
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
                              // onClick={handlePrint}
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
                    <div className="card-header">
                      <h4> تقرير الاستئذان </h4>
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
                          </tr>
                        </thead>
                        <tbody>
                          {forms.map((form, index) => {
                            const student = findStudentByNumber(form.studentId);
                            if (!student) {
                              return null; // or return a default row
                            }
                            const date = new Date(
                              form.updatedAt
                            ).toLocaleDateString();
                            return (
                              <tr key={form.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.number}</td>
                                <td>{student.class}</td>
                                <td>{student.year}</td>
                                <td>{student.parentNumber}</td>
                                <td>{date}</td>
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
