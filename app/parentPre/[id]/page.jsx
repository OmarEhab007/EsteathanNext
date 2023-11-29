"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
// import PhoneAuth from "./../../../components/PhoneAuth";

export default function ParentPre() {
  const params = useParams();
  console.log(params);
  // search for student with id = params.id in the database and get the student's parent's phone number
  const [parentPhone, setParentPhone] = useState(null);
  const id = params.id;
  const [verificationId, setVerificationId] = useState("");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint that provides student data
        const response = await fetch(`/api/students/${id}`);
        const result = await response.json();
        const student = result.data;
        console.log(student.parentNumber);
        setParentPhone(student.parentNumber);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    if (id) {
      fetchStudentData();
    }
  }, [id]);
  console.log(parentPhone);

  return (
    <>
      <main className="reqParent">
        <div className="container h-100">
          <header className=" d-flex justify-content-center align-items-end text-center">
            <h4 className=""> أدخل كود التأكيد المرسل الى هاتف ولي الأمر </h4>
          </header>

          {/* <PhoneAuth /> */}
          <div className="d-flex justify-content-center align-items-center form-outer ">
            <form action="" className="w-50 p-5 border-success">
              <label for="personalId" className="form-labe mb-3">
                {" "}
                كود التأكيد{" "}
              </label>
              <input
                type="text"
                id="personalId"
                name="personalId"
                className="form-control border-success"
              />

              <a href={`/parentPre/student/${id}`}>
                <button
                  className="btn btn-success mt-3 text-center m-auto d-block "
                  type="button"
                >
                  {" "}
                  تأكيد{" "}
                </button>
              </a>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
