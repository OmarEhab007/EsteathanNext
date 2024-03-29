"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function UpdateStudents() {
  const params = useParams();
  const [studentName, setStudentName] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [studentClass, setStudentClass] = useState(null);
  const [year, setYear] = useState(null);
  const [parentNumber, setParentNumber] = useState(null);
  const [student, setStudent] = useState(null);
  const [user, setUser] = useState(null);
  const { data: session } = useSession();

  const id = params.id;
  const router = useRouter();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`/api/students/id/${id}`);
        const result = await response.json();
        const student = result.data;
        console.log(student);
        setStudent(student);
        setStudentName(student.name);
        setStudentId(student.number);
        setStudentClass(student.class);
        setYear(student.year);
        setParentNumber(student.parentNumber);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    if (id) {
      fetchStudentData();
    }
  }, [id]);

  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      let finalPhone = parentNumber;
      if (!parentNumber.startsWith("966")) {
        finalPhone = parentNumber.startsWith("0")
          ? "966" + parentNumber.substring(1)
          : "966" + parentNumber;
      }
      const response = await fetch(`/api/students/id/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: studentName,
          number: studentId,
          class: studentClass,
          year: year,
          parentNumber: finalPhone,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          alert("تم تعديل الطالب بنجاح");
        })
        .then(() => {
          router.push("/esteathan/dashboard/deleteData");
        });
    } catch (error) {
      alert("حدث خطأ أثناء تعديل الطالب");
      // console.error("Error updating student data:", error);
    }
  };

  return (
    <>
      <section className="updateStudents">
        <div className="container">
          <h2 className="text-center fs-1 mt-3">تعديل طالب </h2>
          <hr className="w-25 mx-auto mb-5" />
          <p className="text-center fs-5">من فضلك فم بتعديل البيانات</p>

          <form className="border-primary p-3 row justify-content-center align-items-center">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentName">اسم الطالب</label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="studentName"
                  placeholder={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentId"> هوية الطالب </label>
                <input
                  type="number"
                  className="form-control border-primary "
                  id="studentId"
                  placeholder={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div className="form-group">
                <label htmlFor="studentClass"> السنة الدراسية </label>
                <select
                  name="studentClass"
                  id="studentClass"
                  className="form-select form-control border-primary"
                  aria-label="Default select example"
                  placeholder=" السنة الدراسية "
                  onChange={(e) => setStudentClass(e.target.value)}
                >
                  <optgroup>
                    <option >   </option>
                    <option value="أول ثانوي"> أول ثانوي </option>
                    <option value="ثاني ثانوي"> ثاني ثانوي </option>
                    <option value="ثالث ثانوي"> ثالث ثانوي </option>
                  </optgroup>
                  <optgroup>
                    <option value="أول متوسط"> أول متوسط </option>
                    <option value="ثاني متوسط"> ثاني متوسط </option>
                    <option value="ثالث متوسط"> ثالث متوسط </option>
                  </optgroup>
                  <optgroup>
                    <option value="أول ابتدائي"> أول ابتدائي </option>
                    <option value="ثاني ابتدائي"> ثاني ابتدائي </option>
                    <option value="ثالث ابتدائي"> ثالث ابتدائي </option>
                    <option value="أول ابتدائي"> رابع ابتدائي </option>
                    <option value="ثاني ابتدائي"> خامس ابتدائي </option>
                    <option value="ثالث ابتدائي"> سادس ابتدائي </option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div className="form-group">
                <label htmlFor="year">الشعبة / الفصل</label>
                <input
                  type="number"
                  className="form-control border-primary"
                  id="year"
                  placeholder={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div className="form-group">
                <label htmlFor="parentNumber">رقم ولي أمر الطالب </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="parentNumber"
                  placeholder={parentNumber}
                  onChange={(e) => setParentNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={updateStudent}
                >
                  تعديل الطالب{" "}
                  <span className=" p-1 ">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
