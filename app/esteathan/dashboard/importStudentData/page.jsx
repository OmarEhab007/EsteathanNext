"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";
import * as XLSX from "xlsx";

export default function ImportStudentData() {
  // const [user, setUser] = useState(null);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const { user, school, forms, students, toggleDarkMode, setForms, darkMode } =
    useStore();
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
    setLoading(true);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Get the second sheet
      const sheetName = workbook.SheetNames[1];
      const sheet = workbook.Sheets[sheetName];

      // Convert the sheet to JSON
      // Convert the sheet to JSON
      let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Remove the first row if it's blank
      // Remove the first row if it's blank
      if (jsonData[0].every((cell) => cell === null || cell === "")) {
        jsonData.shift();
      }

      // Remove the second row (header row)
      jsonData.splice(1, 1);

      // Filter out the remaining blank rows
      jsonData = jsonData
        .map((row) => row.filter((cell) => cell !== null && cell !== ""))
        .filter((row) => row.length > 0);

      jsonData = jsonData.filter((row) =>
        row.some((cell) => cell !== null && cell !== "")
      );
      jsonData.shift();
      console.log(jsonData);
      // console.log(user.schoolId);

      // // Assuming jsonData is your array of students

      try {
        setLoading(true);
        const promises = jsonData.map(async (student) => {
          let [parentNumber, year, classNumber, name, number] =
            student.map(String);

          parentNumber = parentNumber.toString();
          year = year.toString();
          classNumber = classNumber.toString();
          name = name.toString();
          number = number.toString();

          let classLabel;
          classNumber = parseInt(classNumber, 10); // Convert to number

          if (classNumber >= 1300 && classNumber < 1400) {
            classLabel = "أول ثانوي";
          } else if (classNumber >= 1400 && classNumber < 1500) {
            classLabel = "ثاني ثانوي";
          } else if (classNumber >= 1500 && classNumber < 1600) {
            classLabel = "ثالث ثانوي";
          } else {
            classLabel = "الصف غير معروف";
          }

          const response = await fetch("/api/students", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              number,
              name,
              class: classLabel,
              year,
              parentNumber,
              schoolId: user.schoolId, // Assuming user.schoolId is available in this scope
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log(data);
        });

        await Promise.all(promises);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        // redirect to the students page
        window.location.href = "/esteathan/dashboard/deleteData";
      }

      // try {
      //   jsonData.forEach(async (student) => {
      //     let [parentNumber, year, classNumber, name, number] = student;

      //     parentNumber = parentNumber.toString();
      //     year = year.toString();
      //     classNumber = classNumber.toString();
      //     name = name.toString();
      //     number = number.toString();

      //     let classLabel;
      //     switch (classNumber) {
      //       case "1314":
      //         classLabel = "أول ثانوي";
      //         break;
      //       case "1416":
      //         classLabel = "ثاني ثانوي";
      //         break;
      //       case "1516":
      //         classLabel = "ثالث ثانوي";
      //         break;
      //       default:
      //         classLabel = "Unknown class";
      //     }

      //     // console.log({
      //     //   number: number,
      //     //   name: name,
      //     //   class: classLabel,
      //     //   year: year,
      //     //   parentNumber: parentNumber,
      //     //   schoolId: user.schoolId, // Assuming user.schoolId is available in this scope
      //     // });

      //     const response = await fetch("/api/students", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         number: number,
      //         name: name,
      //         class: classLabel,
      //         year: year,
      //         parentNumber: parentNumber,
      //         schoolId: user.schoolId, // Assuming user.schoolId is available in this scope
      //       }),
      //     });

      //     if (!response.ok) {
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //     }

      //     const data = await response.json();
      //     console.log(data);
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
    };
    reader.readAsArrayBuffer(file);
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const data = JSON.parse(event.target.result);
  //     data.forEach((student) => {
  //       let classLabel = "";

  //       switch (student["رقم الصف"]) {
  //         case "1314":
  //           classLabel = "أول ثانوي";
  //           break;
  //         case "1416":
  //           classLabel = "ثاني ثانوي";
  //           break;
  //         case "1516":
  //           classLabel = "ثالث ثانوي";
  //           break;
  //         // Add more cases if needed

  //         default:
  //           classLabel = "Unknown Class";
  //           break;
  //       }

  //       fetch("/api/students", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           parentNumber: student["الجوال"],
  //           class: classLabel,
  //           year: student["الفصل"],
  //           name: student["اسم الطالب"],
  //           number: student["رقم الطالب"],
  //           schoolId: user.schoolId,
  //         }),
  //       });
  //     });
  //   };

  //   reader.readAsText(file);
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
                  <h2 className=""> استيراد ملفات الطلاب </h2>
                  <p className="text-center">
                    لرفع بيانات الطلاب الرجاء استخراج ملف الاكسل وتحميله هنا
                  </p>
                  <p>وذلك من برنامج نور من أيقونة</p>
                  <p>
                    التقارير ثم تقارير الاحصائية ثم البيانات الخاصة بالارشاد
                    الطلابي ثم اختيار الفصل الدارسي ثم تصدير
                  </p>
                </header>
                <form action="#">
                  <input
                    id="file-input"
                    className="file-input"
                    type="file"
                    name="file"
                    accept=".xlsx, .xls"
                    hidden
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-input">
                    <i className="fa-solid fa-cloud-arrow-up fa-bounce fs-2 my-4 text-primary cursor-pointer"></i>
                  </label>
                  <p className="text-danger">
                    من فضلك اختر الاكسل الخاص بالطلاب{" "}
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
