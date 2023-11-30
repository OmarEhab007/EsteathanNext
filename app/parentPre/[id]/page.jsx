"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import { set } from "mongoose";
// import PhoneAuth from "./../../../components/PhoneAuth";

export default function ParentPre() {
  const params = useParams();
  // console.log(params);
  // search for student with id = params.id in the database and get the student's parent's phone number
  const [parentPhone, setParentPhone] = useState(null);
  const id = params.id;
  const [verificationId, setVerificationId] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(id);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
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

  useEffect(() => {
    const sendVerificationCode = async () => {
      if (parentPhone && !isVerificationSent) {
        const verificationCode = Math.floor(
          1000 + Math.random() * 9000
        ).toString();
        setVerificationId(verificationCode);

        fetch("/api/phoneValidation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            parentNumber: "201095427168", // Replace with parentPhone
            code: verificationCode,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setIsVerificationSent(true);
          });
      }
    };

    sendVerificationCode();
  }, [parentPhone, isVerificationSent]);

  console.log("------------------");
  // console.log(verificationId);
  // console.log(parentPhone);

  return (
    <>
      <main className="reqParent">
        <div className="container h-100">
          <header className=" d-flex justify-content-center align-items-end text-center">
            <h4 className=""> أدخل كود التأكيد المرسل الى هاتف ولي الأمر </h4>
          </header>

          {/* <PhoneAuth /> */}
          <div className="d-flex justify-content-center align-items-center form-outer ">
            <form
              className="w-50 p-5 border-success"
              onSubmit={(e) => e.preventDefault()}
            >
              <label for="personalId" className="form-labe mb-3">
                {" "}
                كود التأكيد{" "}
              </label>
              <input
                type="text"
                id="personalId"
                name="personalId"
                className="form-control border-success"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              {/* <a href={`/parentPre/student/${id}`}> */}
              <button
                className="btn btn-success mt-3 text-center m-auto d-block "
                type="submit"
                onClick={() => {
                  if (inputValue === verificationId) {
                    // If the input value is correct, navigate to the next page
                    window.location.href = `/parentPre/student/${id}`;
                  } else {
                    // If the input value is incorrect, show an error message
                    setErrorMessage("The verification code is incorrect.");
                  }
                }}
              >
                {" "}
                تأكيد{" "}
              </button>
              {/* </a> */}
            </form>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      </main>
    </>
  );
}
