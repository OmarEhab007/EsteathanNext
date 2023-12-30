"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
// import PhoneAuth from "./../../../components/PhoneAuth";
import { useSession } from "next-auth/react";

export default function ParentPre() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [school, setSchool] = useState(null);
  const { data: session } = useSession();
  const [student, setStudent] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  // console.log(params);
  // search for student with id = params.id in the database and get the student's parent's phone number
  const [parentPhone, setParentPhone] = useState(null);
  const id = params.id;
  const [verificationId, setVerificationId] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(id);

  // const user_id = session?.user?.id;
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const today = new Date();
  //     if (session?.user?.id) {
  //       const userResponse = await fetch(`/api/user/${session.user.id}`);
  //       const userData = await userResponse.json();
  //       setUser(userData.data);
  //       console.log(userData.data);

  //       const schoolResponse = await fetch(
  //         `/api/school/${userData.data.schoolId}`
  //       );
  //       const schoolData = await schoolResponse.json();
  //       console.log(schoolData.data);
  //       console.log(schoolData.data[0]);
  //       setSchool(schoolData.data[0]);
  //     }
  //   }
  
  //   fetchUserData();
  // }, [session]);


  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`/api/students/id/${id}`);
        const result = await response.json();
        // console.log(result);
        const student = result.data;
        console.log(student);
        setStudent(student);
        setParentPhone(student.parentNumber);
        // get student school name 
        const schoolResponse = await fetch(
          `/api/school/${student.schoolId}`
        );
        const schoolData = await schoolResponse.json();
        console.log(schoolData.data);
        console.log(schoolData.data[0]);
        setSchool(schoolData.data[0]);
        setSchoolName(schoolData.data[0].name);
        console.log(schoolData.data[0].name);
        
      } catch (error) {
        console.error("Error fetching student data:", error);
      }

      
    };

    if (id) {
      fetchStudentData();
    }
  }, [id]);

  useEffect(() => {
    console.log(schoolName)
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
            parentNumber: '201019063529',
            code: `رمز التحقق الخاص بك لطلب الاستئذان لابنك من مدرسة ${schoolName} هو : ${verificationCode}`,
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
  }, [parentPhone, isVerificationSent, schoolName]);

  // console.log("------------------");
  // console.log(verificationId);
  // console.log(parentPhone);

  return (
    <>
      <main className="reqParent w-100">
        <div className="container h-100">
          <header className=" d-flex justify-content-center align-items-end text-center">
            <h4 className=""> أدخل كود التأكيد المرسل الى واتساب ولي الأمر </h4>
          </header>

          {/* <PhoneAuth /> */}
          <div className="row justify-content-center align-items-center form-outer ">
            <form
              className="col-md-8 col-sm-10 col-12 p-5 border-success"
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
                    window.location.href = `/esteathan/parentPre/student/${id}`;
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
