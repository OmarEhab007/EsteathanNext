"use client";
import React from "react";

export default function ImportTeacherData() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      data.forEach((teacher) => {
        fetch("/esteathan/api/teacher", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: teacher["الإسم"],
            phone: teacher["الجوال"],
          }),
        });
      });
    };

    reader.readAsText(file); // This line should be here
  };
  return (
    <>
      <section className="importStudentData">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="wrapper border-primary">
                <header>
                  <h2 className=""> استيراد ملفات المعلمين </h2>
                </header>
                <form action="#">
                  <input
                    id="file-input"
                    className="file-input"
                    type="file"
                    name="file"
                    hidden
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-input">
                    <i className="fa-solid fa-cloud-arrow-up fa-bounce fs-2 my-4 text-primary"></i>
                  </label>
                  <p className="text-danger">
                    من فضلك اختر الاكسل الخاص بالمعلمين{" "}
                  </p>
                </form>
                <section className="progress-area"></section>
                <section className="uploaded-area"></section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
