"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function ImportTeacherData() {
  const [user, setUser] = useState(null);
  const { data: session } = useSession();

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      data.forEach((teacher) => {
        fetch("/api/teacher", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: teacher["الإسم"],
            phone: teacher["الجوال"],
            schoolId: user.schoolId,
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
                  <p className="text-muted">
                    لرفع بيانات الطلاب الرجاء ارسال ملف الاكسل  على واتساب الدعم الفني رقم 
                    <span className="high d-block"> ( 0545894287) </span>
                  </p>
                  <p>
                    وذلك من برنامج نور من أيقونة 
                  </p>
                  <p>
                  التقارير ثم تقارير المعلمين ثم بيانات معلمي المدرسة  ثم اختيار الكل ثم عرض 
                  </p>
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
