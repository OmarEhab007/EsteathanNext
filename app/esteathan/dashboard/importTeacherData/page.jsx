"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";

import * as XLSX from "xlsx";

export default function ImportTeacherData() {
  // const [user, setUser] = useState(null);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const { user } = useStore();

  // const user_id = session?.user?.id;
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${session.user.id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //       console.log(userData.data.schoolId);
  //     }
  //   };
  //   fetchUserData();
  // }, [session]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Get the range of cells in the worksheet
      let range = XLSX.utils.decode_range(worksheet["!ref"]);

      // Update the start of the range to be cell C16
      range.s.r = 15; // 0-indexed, so 15 corresponds to row 16
      range.s.c = 2; // 0-indexed, so 2 corresponds to column C

      // Update the range in the worksheet
      worksheet["!ref"] = XLSX.utils.encode_range(range);

      // Convert the worksheet data to JSON
      // Convert the worksheet data to JSON
      let jsonData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: "",
      });

      // Reverse the order of elements in each row to make it LTR
      jsonData = jsonData.map((row) => row.reverse());

      // Remove blank rows
      jsonData = jsonData.filter((row) => row.some((cell) => cell !== ""));

      // Remove empty fields from each row
      jsonData = jsonData.map((row) => row.filter((cell) => cell !== ""));
      jsonData = jsonData.map((row) =>
        row.filter((cell) => cell !== "" && cell !== 0)
      );

      // Arrange items in the same order in all arrays
      const maxLength = Math.max(...jsonData.map((row) => row.length));
      jsonData = jsonData.map((row) => {
        const newRow = new Array(maxLength).fill("");
        row.forEach((cell, index) => {
          newRow[index] = cell;
        });
        return newRow;
      });

      // console.log(jsonData);

      try {
        setLoading(true);
        const promises = jsonData.map(async (teacher) => {
          let phoneNumber = teacher.find(
            (cell) => typeof cell === "string" && cell.startsWith("966")
          );

          if (phoneNumber) {
            // phoneNumber += "123"; // Add your number here

            const response = await fetch("/api/teacher/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: teacher[1], // Adjust these indices based on your data
                phone: phoneNumber, // Adjust these indices based on your data
                schoolId: user.schoolId,
              }),
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
          }
        });

        await Promise.all(promises);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        window.location.href = "/esteathan/dashboard/deleteData";
      }

      // jsonData.forEach((teacher) => {
      //   let phoneNumber = teacher.find(
      //     (cell) => typeof cell === "string" && cell.startsWith("966")
      //   );
      //   phoneNumber += "123"; // Add your number here

      //   fetch("/api/teacher/", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name: teacher[1], // Adjust these indices based on your data
      //       phone: phoneNumber, // Adjust these indices based on your data
      //       schoolId: user.schoolId,
      //     }),
      //   })
      //     .then((response) => response.json())
      //     .then((data) => console.log(data))
      //     .catch((error) => {
      //       console.error("Error:", error);
      //     });
      // });
    };

    reader.readAsArrayBuffer(file);
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const data = JSON.parse(event.target.result);
  //     data.forEach((teacher) => {
  //       fetch("/api/teacher", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: teacher["الإسم"],
  //           phone: teacher["الجوال"],
  //           schoolId: user.schoolId,
  //         }),
  //       });
  //     });
  //   };

  //   reader.readAsText(file); // This line should be here
  // };
  return (
    <>
      <section className="importStudentData my-5">
        {loading && (
          <div className="loading position-absolute  top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="wrapper border-primary">
                <header>
                  <h2 className=""> استيراد ملفات المعلمين </h2>
                  <p className="text-muted">
                    لرفع بيانات الطلاب الرجاء استخراج ملف الاكسل وتحميله هنا
                  </p>
                  <p>وذلك من برنامج نور من أيقونة</p>
                  <p>
                    التقارير ثم تقارير المعلمين ثم بيانات معلمي المدرسة ثم
                    اختيار الكل ثم عرض
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
