"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";

export default function DeleteData() {
  // const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("students");
  // const [teachers, setTeachers] = useState([]);
  // const [user, setUser] = useState(null);
  // const { data: session } = useSession();
  // const [editedStudent, setEditedStudent] = useState({});//[name, number, class, year]
  // const [editedTeacher, setEditedTeacher] = useState({});//[name, phone]

    const { user, school, students, teachers, setStudents, setTeachers} = useStore();

  const router = useRouter();

  // const user_id = session?.user?.id;
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${session.user.id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //       console.log(userData.data.schoolId);

  //       const studentsResponse = await fetch(
  //         `/api/students/school/${userData.data.schoolId}`
  //       );
  //       const studentsData = await studentsResponse.json();
  //       setStudents(studentsData.data);
  //       // console.log(studentsData.data);

  //       const teachersResponse = await fetch(
  //         `/api/teacher/school/${userData.data.schoolId}`
  //       );
  //       const teachersData = await teachersResponse.json();
  //       setTeachers(teachersData.data);
  //       // console.log(teachersData.data);
  //     }
  //   };
  //   fetchUserData();
  // }, [session]);

  const filteredStudents = students.filter((student) =>
    student.name.includes(searchQuery)
  );

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.includes(searchQuery)
  );

  const deleteStudent = (id) => {
    fetch(`/api/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newStudents = students.filter((student) => student.id !== id);
        setStudents(newStudents);
      });
  };

  const deleteTeacher = (id) => {
    fetch(`/api/teacher/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newTeachers = teachers.filter((teacher) => teacher.id !== id);
        setTeachers(newTeachers);
      });
  };

  const deleteAllStudents = () => {
    fetch(`/api/students/school/${user.schoolId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents([]);
      });
  };

  const deleteAllTeachers = () => {
    fetch(`/api/teacher/school/${user.schoolId}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };

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
                        class="btn btn-danger mx-auto d-block"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        حذف جميع البيانات
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                حذف جميع بيانات الطلاب
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              هل انت متأكد من حذف جميع بيانات الطلاب ؟
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-success mx-auto"
                                data-bs-dismiss="modal"
                              >
                                عدم الحذف
                              </button>
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
                      </div>
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
                        class="btn btn-danger mx-auto d-block"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        حذف جميع البيانات  
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal1"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                حذف جميع بيانات المعلمين 
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              هل انت متأكد من حذف جميع بيانات المعلمين ؟
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-success mx-auto"
                                data-bs-dismiss="modal"
                              >
                                عدم الحذف
                              </button>
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
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5 mb-3">
              <div className="row border-danger delete-border">
                <nav className="col-12">
                  <ul class="nav justify-content-evenly">
                    <li class="nav-item">
                      <a
                        class="nav-link fs-5 "
                        aria-current="page"
                        onClick={() => setSelectedCategory("students")}
                      >
                        الطلاب
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link fs-5"
                        onClick={() => setSelectedCategory("teachers")}
                      >
                        المعلمين
                      </a>
                    </li>
                  </ul>
                </nav>
                {selectedCategory === "students" ? (
                  <div className="col-12">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-12  mb-3">
                        <div className="card  pb-3 px-2">
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
                                      <div className="col-lg-3  col-4 pe-0">
                                        <p className="mb-0"> اسم الطالب </p>
                                      </div>
                                      <div className="col-1 pe-0 ps-0">
                                        <p className="mb-0"> : </p>
                                      </div>
                                      <div className="col-lg-8  col-7 pe-0">
                                        <p className="mb-0">{student.name}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="card-body">
                                    <div className="row align-items-center justify-content-start mb-2">
                                      <div className="col-lg-3  col-4">
                                        <p className="card-text">
                                          {" "}
                                          هوية الطالب{" "}
                                        </p>
                                      </div>
                                      <div className="col-1">
                                        <p className="card-text"> : </p>
                                      </div>
                                      <div className="col-lg-8  col-7">
                                        <p className="card-text">
                                          {" "}
                                          {student.number}{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="row align-items-center justify-content-start mb-2">
                                      <div className="col-lg-3  col-4">
                                        <p className="card-text">
                                          {" "}
                                          السنة الدراسية{" "}
                                        </p>
                                      </div>
                                      <div className="col-1">
                                        <p className="card-text"> : </p>
                                      </div>
                                      <div className="col-lg-8  col-7">
                                        <p className="card-text">
                                          {" "}
                                          {student.class}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-warning">
                                      <div className="col-lg-3  col-4">
                                        <p className="card-text"> رقم الفصل </p>
                                      </div>
                                      <div className="col-1">
                                        <p className="card-text"> : </p>
                                      </div>
                                      <div className="col-lg-8  col-7">
                                        <p className="card-text">
                                          {" "}
                                          {student.year}{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <form action="" className="text-center">
                                      <button
                                        type="button"
                                        className="btn btn-danger text-center me-3"
                                        onClick={() =>
                                          deleteStudent(student.id)
                                        }
                                      >
                                        {" "}
                                        حذف الطالب{" "}
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-warning text-center "
                                        onClick={() =>
                                          router.push(
                                            `/esteathan/dashboard/deleteData/updateStudents/${student.id}`
                                          )
                                        }
                                      >
                                        {" "}
                                        تعديل الطالب{" "}
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
                ) : (
                  <div className="col-12">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-12  mb-3">
                        <div className="card  pb-3 px-2">
                          <div className="row justify-content-center align-items-center">
                            <div className="col-md-3"></div>
                            <div className="col-12 col-md-6 ">
                              <div className="card-body">
                                <h5 className="card-title text-center">
                                  حذف بيانات المعلمين
                                </h5>
                                <form action="">
                                  <div class="form-floating mb-3">
                                    <input
                                      type="search"
                                      class="form-control"
                                      id="studentSearch"
                                      placeholder="ابحث باسم المعلم"
                                      value={searchQuery}
                                      onChange={(event) =>
                                        setSearchQuery(event.target.value)
                                      }
                                    />
                                    <label for="studentSearch">
                                      {" "}
                                      ابحث باسم المعلم{" "}
                                    </label>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-md-3"></div>

                            {filteredTeachers.map((teacher) => (
                              <div className="col-12 col-lg-6 mb-3">
                                <div className="card border-info">
                                  <div className="card-header border-warning">
                                    <div className="row justify-content-start align-items-center">
                                      <div className="col-lg-3  col-4 pe-0">
                                        <p className="mb-0"> اسم المعلم </p>
                                      </div>
                                      <div className="col-1">
                                        <p className="mb-0"> : </p>
                                      </div>
                                      <div className="col-lg-8  col-7 pe-0">
                                        <p className="mb-0">{teacher.name}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="card-body">
                                    <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-warning">
                                      <div className="col-lg-3  col-4">
                                        <p className="card-text">
                                          {" "}
                                          رقم الهاتف{" "}
                                        </p>
                                      </div>
                                      <div className="col-1">
                                        <p className="card-text"> : </p>
                                      </div>
                                      <div className="col-lg-8  col-7 pe-0">
                                        <p className="card-text">
                                          {" "}
                                          {teacher.phone}{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <form action="" className="text-center">
                                      <button
                                        type="button"
                                        className="btn btn-danger text-center me-3"
                                        onClick={() =>
                                          deleteTeacher(teacher.id)
                                        }
                                      >
                                        {" "}
                                        حذف المعلم{" "}
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-warning text-center "
                                        onClick={() =>
                                          router.push(
                                            `/esteathan/dashboard/deleteData/updateTeachers/${teacher.id}`
                                          )
                                        }
                                      >
                                        {" "}
                                        تعديل المعلم{" "}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
