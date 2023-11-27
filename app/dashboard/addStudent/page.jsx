"use client";
import React, { use, useEffect } from "react";

export default function AddStudent() {
  
  return (
    <>
      <section className="addStudent">
        <div className="container">
          <h2 className="text-center fs-1 mt-3">اضافة طالب جديد</h2>
          <hr className="w-25 mx-auto mb-5" />
          <p className="text-center fs-5">من فضلك املأ الحقول التالية</p>

          <form
            action=""
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
                />
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentGrade">الصف الدراسي</label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="studentGrade"
                  placeholder="الصف الدراسي"
                />
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentClass">الشعبة / الفصل </label>
                <input
                  type="number"
                  className="form-control border-primary"
                  id="studentClass"
                  placeholder="الشعبة / الفصل"
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <div className="form-group">
                <button type="button" className="btn btn-outline-success">
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
    </>
  );
}
