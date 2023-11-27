"use client";
import React, { useState } from "react";

export default function AddTeacher() {
  const [teacherName, setTeacherName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(number, name, classNumber, year, parentNumber);

    fetch("/api/teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: teacherName,
        phone: phone,
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
        setMessage("تم اضافة المعلم بنجاح");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("حدث خطأ ما");
      });
  };

  return (
    <>
      <section className="addTeacher">
        <div className="container">
          <h2 className="text-center fs-1 mt-3">اضافة معلم جديد</h2>
          <hr className="w-25 mx-auto mb-5" />
          <p className="text-center fs-5">من فضلك املأ الحقول التالية</p>

          <form
            onSubmit={handleSubmit}
            className="border-primary p-3 row justify-content-center align-items-center"
          >
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="teacherName">اسم المعلم</label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="teacherName"
                  placeholder="اسم المعلم"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="teacherId"> رقم الجوال </label>
                <input
                  type="number"
                  className="form-control border-primary"
                  id="teacherId"
                  placeholder=" رقم الجوال "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <div className="form-group">
                <button type="submit" className="btn btn-outline-success">
                  {" "}
                  اضافة معلم جديد{" "}
                  <span className=" p-1 ">
                    <i class="fa-solid fa-plus"></i>
                  </span>{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="message">
        <div className="container">
          <div className="alert alert-success" role="alert">
            {message && message}
          </div>
        </div>
      </section>
    </>
  );
}
