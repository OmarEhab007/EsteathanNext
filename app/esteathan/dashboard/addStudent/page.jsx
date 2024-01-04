"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function AddStudent() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [year, setYear] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { data: session } = useSession();

  const nameRegex = /^[\u0600-\u06FF\s]+$/; // Arabic characters and spaces
  const numberRegex = /^\d{10}$/; // 10-digit numbers
  const yearRegex = /^\d{1,2}$/; // 2-digit numbers
  const parentNumberRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/; // Valid Saudi Arabia phone number

  const user_id = session?.user?.id;
  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.user?.id) {
        const userResponse = await fetch(`/api/user/${session.user.id}`);
        const userData = await userResponse.json();
        setUser(userData.data);
        console.log(userData.data.schoolId);
      }
    };
    fetchUserData();
  }, [session]);  


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Validate form fields using regex
      if (!nameRegex.test(name)) {
        throw new Error("الرجاء إدخال الاسم باللغة العربية");
      }
      if (!numberRegex.test(number)) {
        throw new Error("الرقم يجب أن يكون عبارة عن 10 أرقام");
      }
      if (!yearRegex.test(year)) {
        throw new Error("السنة يجب أن تكون عبارة عن رقمين");
      }
      if (!parentNumberRegex.test(parentNumber)) {
        throw new Error("رقم ولي الأمر يجب أن يكون رقم هاتف صحيح في المملكة العربية السعودية");
      }

      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: number,
          name: name,
          class: classNumber,
          year: year,
          parentNumber: parentNumber,
          schoolId: user.schoolId,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setMessage("تم اضافة الطالب بنجاح");

      // Clear the input fields after successful submission
      setNumber("");
      setName("");
      setClassNumber("");
      setYear("");
      setParentNumber("");

      // Remove the success message after one second
      setTimeout(() => {
        setMessage("");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message || "هذا الطالب موجود مسبقا في قاعدة البيانات الخاصة بنا");
    } finally {
      setLoading(false);
    }
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
                  className="form-control border-primary "
                  id="studentId"
                  placeholder="هوية الطالب"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
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
                value={classNumber}
                onChange={(e) => setClassNumber(e.target.value)}
                >
                  <optgroup  >
                    <option value="أول ثانوي" > أول ثانوي </option>
                    <option value="ثاني ثانوي" > ثاني ثانوي </option>
                    <option value="ثالث ثانوي" > ثالث ثانوي </option>
                  </optgroup>
                  <optgroup  >
                    <option value="أول متوسط" > أول متوسط </option>
                    <option value="ثاني متوسط" > ثاني متوسط </option>
                    <option value="ثالث متوسط" > ثالث متوسط </option>
                  </optgroup>
                  <optgroup  >
                    <option value="أول ابتدائي" > أول ابتدائي </option>
                    <option value="ثاني ابتدائي" > ثاني ابتدائي </option>
                    <option value="ثالث ابتدائي" > ثالث ابتدائي </option>
                    <option value="أول ابتدائي" > رابع ابتدائي </option>
                    <option value="ثاني ابتدائي" > خامس ابتدائي </option>
                    <option value="ثالث ابتدائي" > سادس ابتدائي </option>
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
                  placeholder="الشعبة / الفصل"
                  value={year}
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
                  placeholder="رقم ولي أمر الطالب "
                  value={parentNumber}
                  onChange={(e) => setParentNumber(e.target.value)}
                />
              </div>
            </div>

            

            <div className="col-12 mb-3">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>{" "}
                      جاري الإضافة...
                    </>
                  ) : (
                    <>
                      اضافة طالب جديد{" "}
                      <span className=" p-1 ">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </>
                  )}
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
