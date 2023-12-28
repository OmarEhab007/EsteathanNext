"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function AddTeacher() {
  const [teacherName, setTeacherName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nameError: "",
    phoneError: "",
  });
  const [user, setUser] = useState(null);
  const { data: session } = useSession();

  // Regex pattern for validating a full name with at least 3 names in Arabic
  const nameRegex = /^[\u0600-\u06FF\s]+(\s[\u0600-\u06FF\s]+){2,}$/;

  // Regex pattern for validating a Saudi Arabia phone number
  const phoneRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;

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

    // Reset errors
    setErrors({
      nameError: "",
      phoneError: "",
    });

    // Validate teacherName and phone using regex
    let hasErrors = false;
    if (!nameRegex.test(teacherName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameError:
          "يرجى إدخال اسم صحيح باللغة العربية ويحتوي على ثلاثة أسماء على الأقل",
      }));
      hasErrors = true;
    }

    if (!phoneRegex.test(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneError: "يرجى إدخال رقم جوال صحيح في المملكة العربية السعودية",
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      // Exit early if there are validation errors
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: teacherName,
          phone: phone,
          schoolId: user.schoolId,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setMessage("تم اضافة المعلم بنجاح");

      // Clear the input fields after successful submission
      setTeacherName("");
      setPhone("");

      // Wait for one second and then remove the success message
      setTimeout(() => {
        setMessage("");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        error.message || "هذا المعلم موجود مسبقا في قاعدة البيانات الخاصة بنا "
      );
    } finally {
      setLoading(false);
    }
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
                  className={`form-control border-primary ${
                    errors.nameError ? "is-invalid" : ""
                  }`}
                  id="teacherName"
                  placeholder="اسم المعلم"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  disabled={loading}
                />
                {errors.nameError && (
                  <div className="invalid-feedback">{errors.nameError}</div>
                )}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="teacherId"> رقم الجوال </label>
                <input
                  type="text"
                  className={`form-control border-primary ${
                    errors.phoneError ? "is-invalid" : ""
                  }`}
                  id="teacherId"
                  placeholder=" رقم الجوال "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                />
                {errors.phoneError && (
                  <div className="invalid-feedback">{errors.phoneError}</div>
                )}
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
                      اضافة معلم جديد{" "}
                      <span className=" p-1 ">
                        <i className="fa-solid fa-plus"></i>
                      </span>{" "}
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="message">
        <div className="container">
          <div
            className={`text-success text-center mt-3 ${
              message ? "" : "d-none"
            }`}
            role="alert"
          >
            {message}
          </div>
        </div>
      </section>
    </>
  );
}
