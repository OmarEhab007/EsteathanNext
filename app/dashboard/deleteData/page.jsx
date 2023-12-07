"use client";
import React, { useState, useEffect } from "react";

export default function DeleteData() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.includes(searchQuery)
  );

  const deleteStudent = (id) => {
    fetch(`/esteathan/api/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newStudents = students.filter((student) => student.id !== id);
        setStudents(newStudents);
      });
  };

  const deleteAllStudents = () => {
    fetch(`/esteathan/api/students`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents([]);
      });
  };

  const deleteAllTeachers = () => {
    fetch(`/esteathan/api/teacher`, {
      method: "DELETE",
    }).then((res) => res.json());
  };

  useEffect(() => {
    fetch("/esteathan/api/students") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setStudents(data.datas));
  }, []);

  return (
    <>
      <section className="deleteData">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 mb-5">
              <h2 className="text-center fs-1">حذف البيانات</h2>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="card border-danger">
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        حذف بيانات الطلاب
                      </h5>
                      <p className="card-text text-center">
                        يمكنك حذف بيانات جميع الطلاب من هنا{" "}
                      </p>
                      <button
                        type="button"
                        className="btn btn-danger mx-auto d-block"
                        onClick={deleteAllStudents}
                      >
                        حذف البيانات
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="card border-danger">
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        حذف بيانات المعلمين
                      </h5>
                      <p className="card-text text-center">
                        يمكنك حذف بيانات جميع المعلمين من هنا{" "}
                      </p>
                      <button
                        type="button"
                        className="btn btn-danger mx-auto d-block"
                        onClick={deleteAllTeachers}
                      >
                        حذف البيانات
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row justify-content-center align-items-center">
                <div className="col-12  mb-3">
                  <div className="card border-danger pb-3 px-2">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-3"></div>
                      <div className="col-12 col-md-6 ">
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            حذف بيانات الطلاب
                          </h5>
                          <form action="">
                            <div class="form-floating mb-3">
                              <input
                                type="search"
                                class="form-control"
                                id="studentSearch"
                                placeholder="ابحث باسم الطالب"
                                value={searchQuery}
                                onChange={(event) =>
                                  setSearchQuery(event.target.value)
                                }
                              />
                              <label for="studentSearch">
                                {" "}
                                ابحث باسم الطالب{" "}
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-3"></div>

                      {filteredStudents.map((student) => (
                        <div className="col-12 col-md-6 mb-3">
                          <div className="card border-info">
                            <div className="card-header border-warning">
                              <div className="row justify-content-start align-items-center">
                                <div className="col-lg-3  col-5">
                                  <p className="mb-0"> اسم الطالب </p>
                                </div>
                                <div className="col-1">
                                  <p className="mb-0"> : </p>
                                </div>
                                <div className="col-lg-8  col-12">
                                  <p className="mb-0">{student.name}</p>
                                </div>
                              </div>
                            </div>

                            <div className="card-body">
                              <div className="row align-items-center justify-content-start mb-2">
                                <div className="col-lg-3  col-5">
                                  <p className="card-text"> هوية الطالب </p>
                                </div>
                                <div className="col-1">
                                  <p className="card-text"> : </p>
                                </div>
                                <div className="col-lg-8  col-sm-12">
                                  <p className="card-text">
                                    {" "}
                                    {student.number}{" "}
                                  </p>
                                </div>
                              </div>

                              <div className="row align-items-center justify-content-start mb-2">
                                <div className="col-lg-3  col-5">
                                  <p className="card-text"> السنة الدراسية </p>
                                </div>
                                <div className="col-1">
                                  <p className="card-text"> : </p>
                                </div>
                                <div className="col-lg-8  col-sm-12">
                                  <p className="card-text"> {student.class}</p>
                                </div>
                              </div>

                              <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-warning">
                                <div className="col-lg-3  col-5">
                                  <p className="card-text"> رقم الفصل </p>
                                </div>
                                <div className="col-1">
                                  <p className="card-text"> : </p>
                                </div>
                                <div className="col-lg-8  col-sm-12">
                                  <p className="card-text"> {student.year} </p>
                                </div>
                              </div>

                              <form action="">
                                <button
                                  type="button"
                                  className="btn btn-danger text-center m-auto d-block"
                                  onClick={() => deleteStudent(student.id)}
                                >
                                  {" "}
                                  حذف الطالب{" "}
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
