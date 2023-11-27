"use client";
import React, { useState } from "react";

export default function AddStudent() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [year, setYear] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(number, name, classNumber, year, parentNumber);

    fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: number,
        name: name,
        class: classNumber,
        // make year a number not a string
        year: parseInt(year),
        parentNumber: parentNumber,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage("تم اضافة الطالب بنجاح");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("حدث خطأ ما");
      });
  };
  return (
    <>
      <section className="addStudent">
        <div className="container">
          <h2 className="text-center fs-1 mt-3">اضافة طالب جديد</h2>
          <hr className="w-25 mx-auto mb-5" />
          <p className="text-center fs-5">من فضلك املأ الحقول التالية</p>

          <form
            onSubmit={handleSubmit}
            className="border-primary p-3 row justify-content-center align-items-center"
          >
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentName">اسم الطالب</label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="studentName"
                  placeholder="اسم الطالب"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentId"> هوية الطالب </label>
                <input
                  type="number"
                  className="form-control border-primary"
                  id="studentId"
                  placeholder="هوية الطالب"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="form-group">
                <label htmlFor="year">السنة</label>
                <input
                  type="number"
                  className="form-control border-primary"
                  id="year"
                  placeholder="السنة"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="form-group">
                <label htmlFor="parentNumber">رقم الوالد</label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="parentNumber"
                  placeholder="رقم الوالد"
                  value={parentNumber}
                  onChange={(e) => setParentNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentClass">الشعبة / الفصل </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="classNumber"
                  placeholder="الشعبة / الفصل"
                  value={classNumber}
                  onChange={(e) => setClassNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <div className="form-group">
                <button type="submit" className="btn btn-outline-success">
                  {" "}
                  اضافة طالب جديد{" "}
                  <span className=" p-1 ">
                    <i class="fa-solid fa-plus"></i>
                  </span>{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="container">
        <p className="text-center fs-5 text-success">
          {message && <p>{message}</p>}
        </p>
      </div>
    </>
  );
}
