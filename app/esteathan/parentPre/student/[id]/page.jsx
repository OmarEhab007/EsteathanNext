"use client";
import React, { useState, useEffect, use } from "react";
import { useParams } from "next/navigation";
// import { UploadButton } from "../../../../utils/uploadthing";
import { UploadButton, UploadDropzone } from "../../../../../utils/uploadthing";

export default function Student() {
  const params = useParams();
  // console.log(params);
  const [student, setStudent] = useState(null);
  const [school, setSchool] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [bill, setBill] = useState(null);
  const [phone, setPhone] = useState(null);
  const [reason, setReason] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errorUpload, setErrorUpload] = useState(false);
  const [waiteUpload, setWaiteUpload] = useState(false);

  const id = params.id;
  useEffect(() => {
    const fetchStudentData = async () => {
      const studentResponse = await fetch(`/api/students/id/${id}`);
      const studentData = await studentResponse.json();
      setStudent(studentData.data);
      // console.log(studentData.data);
      const schoolResponse = await fetch(
        `/api/school/${studentData.data.schoolId}`
      );
      const schoolData = await schoolResponse.json();
      setSchool(schoolData.data[0]);
      // console.log(schoolData.data[0]);

      const subscriptionResponse = await fetch(
        `/api/subscription/${schoolData.data[0].subscriptionId}`
      );
      const subscriptionData = await subscriptionResponse.json();
      setSubscription(subscriptionData.data);
      // console.log(subscriptionData.data);

      const billResponse = await fetch(
        `/api/bill/${subscriptionData.data.billId}`
      );
      const billData = await billResponse.json();
      // console.log(billData.data);
      setBill(billData.data);
      setPhone(billData.data.phone);
      // console.log(billData.data.phone);


    };
    fetchStudentData();
  }, [id]);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    fetch("/api/forms", {
      // replace with your API endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: id,
        reason,
        attachment: fileUrl,
        parentNumber: student.parentNumber,
        verificationCode: "",
        status: "done",
        approval: "pending",
        schoolId: student.schoolId,
        // Add other form fields here
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        fetch("/api/sentMessageToTeacher", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            parentNumber: phone,
            message: `${student.name}`
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setSuccess(true);
          });
      })
      .then(
        // get request
        () => fetch(`/api/students/counter/${id}`
        ).then((res) => res.json())
        .then((data) => {
          console.log(data);
        }

      )
      )



    // const counterResponse = await fetch(`/api/students/counter/${id}`);
    // const counterData = await counterResponse.json();
    // console.log(counterData);
  };

  const handleFileChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFileUrl(data.path);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleFileChange = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", e.target.files[0]);
  //   const res = await fetch("/esteathan/api/uploading", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   if (res.ok && res.status !== 204) {
  //     const data = await res.json();
  //     setFileUrl(data.url);
  //     console.log(data.url);
  //   } else {
  //     console.log("No content");
  //   }
  // };

  return (
    <>
      <main className="w-100">
        <section className="studentInfo">
          <div className="container d-flex justify-content-center align-items-center ">
            <div className="card border-info mb-3 col-xxl-6 col-xl-8 col-md-10 col-sm-12 col-12 position-relative ">
              <div className="card-header border-primary">
                <div className="row justify-content-start align-items-center">
                  <div className="col-lg-3  col-4 ">
                    <p className="mb-0"> اسم الطالب </p>
                  </div>
                  <div className="col-1">
                    <p className="mb-0"> : </p>
                  </div>
                  <div className="col-lg-8  col-7 pe-0">
                    <p className="mb-0">
                      {student ? student.name : "جاري تحميل البيانات..."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="row align-items-center justify-content-start mb-2">
                  <div className="col-lg-3  col-5">
                    <p className="card-text"> هوية الطالب </p>
                  </div>
                  <div className="col-1">
                    <p className="card-text"> : </p>
                  </div>
                  <div className="col-lg-8  col-6">
                    <p className="card-text">
                      {" "}
                      {student ? student.number : "جاري تحميل البيانات..."}{" "}
                    </p>
                  </div>
                </div>

                <div className="row align-items-center justify-content-start mb-2">
                  <div className="col-lg-3  col-5">
                    <p className="card-text"> السنة الدراسية </p>
                  </div>
                  <div className="col-1">
                    <p className="card-text"> : </p>
                  </div>
                  <div className="col-lg-8  col-6">
                    <p className="card-text">
                      {" "}
                      {student ? student.class : "جاري تحميل البيانات..."}{" "}
                    </p>
                  </div>
                </div>

                <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-primary">
                  <div className="col-lg-3  col-5">
                    <p className="card-text"> رقم الفصل </p>
                  </div>
                  <div className="col-1">
                    <p className="card-text"> : </p>
                  </div>
                  <div className="col-lg-8  col-6">
                    <p className="card-text">
                      {" "}
                      {student ? student.year : "جاري تحميل البيانات..."}{" "}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <label for="requestReason" className="form-label col-3">
                      {" "}
                      سبب الاستئذان{" "}
                    </label>
                    <p className="col-1">:</p>
                  </div>
                  <textarea
                    name=""
                    id="requestReason"
                    cols="30"
                    rows="5"
                    className="form-control border-primary"
                    required
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  ></textarea>

                  <div className="mb-3">
                    <label for="formFile" className="form-label">
                      اختر طريقة لإرفاق ملف
                      <span className="fs-6 text-opacity-50 text-danger">
                        *اختياري
                      </span>{" "}
                    </label>
                    <div className=" d-flex  ">
                      <UploadButton
                        content={{
                          button({ ready }) {
                            if (ready) return <div>ارفاق صوره</div>;

                            return "جاري الاستعداد";
                          },
                          allowedContent({ ready, fileTypes, isUploading }) {
                            // if (!ready) return "Checking what you allow";
                            if (isUploading) {
                              setWaiteUpload(true);
                              return "جاري رفع الملف الرجاء الانتظار";
                            }
                            return `بحد اقصي 4 ميجا`;
                          },
                        }}
                        
                        className="imageUploader me-2  "
                        // add two endpoints for each type of file
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          console.log("Files: ", res);
                          if (res.length > 0) {
                            setFileUrl(res[0].url);
                            // alert("تم رفع الملف بنجاح");
                            setUploading(true);
                            setWaiteUpload(false);
                          }
                          console.log(fileUrl);
                        }}
                        onUploadError={(error) => {
                          // Do something with the error.
                          // alert(`حدث خطأ! ${error.message}`);
                          setErrorUpload(true);
                        }}
                      />
                      <UploadButton
                        content={{
                          button({ ready }) {
                            if (ready) return <div>ارفاق مستند</div>;

                            return "جاري الاستعداد";
                          },
                          allowedContent({ ready, fileTypes, isUploading }) {
                            // if (!ready) return "Checking what you allow";
                            if (isUploading) {
                              setWaiteUpload(true);
                              return "جاري رفع الملف الرجاء الانتظار";
                            }
                            return `بحد اقصي 8 ميجا`;
                          },
                        }}
                        className="pdfUploader"
                        endpoint="pdfUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          console.log("Files: ", res);
                          if (res.length > 0) {
                            setFileUrl(res[0].url);
                            // alert("Upload Completed");
                            setUploading(true);
                            setWaiteUpload(false);
                          }
                          console.log(fileUrl);
                        }}
                        onUploadError={(error) => {
                          // Do something with the error.
                          // alert(`ERROR! ${error.message}`);
                          setErrorUpload(true);
                        }}
                      />
                    </div>
                  </div>

                  {uploading && (
                    // create p for success uploading message
                    <div className="alert alert-success" role="alert">
                      تم رفع الملف بنجاح
                    </div>
                  )}
                  {errorUpload && (
                    // create p for error uploading message
                    <div className="alert alert-danger" role="alert">
                      حدث خطأ! الرجاء المحاولة مرة اخري
                    </div>
                  )}
                  {/*want to hide submit button on uploading file and show it again after upload success*/}
                  {waiteUpload && (
                    <div className="alert alert-warning" role="alert">
                      جاري رفع الملف الرجاء الانتظار
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary text-center m-auto d-block px-5 py-2"
                  >
                    {" "}
                    ارسال{" "}
                    </button>
                </form>
              </div>
              {loading && (
                <div className="loader1">
                  <div className="typewriter">
                    <div className="slide">
                      <i></i>
                    </div>
                    <div className="paper"></div>
                    <div className="keyboard"></div>
                  </div>
                </div>
              )}
              {success && (
                <div className="send-done">
                  <div className="container h-100 d-flex justify-content-center align-items-center ">
                    <div className="row  justify-content-center align-items-center">
                      <div className="col-12">
                        <div className="mb-3">
                          <i className="fa-regular fa-circle-check d-block text-center text-success"></i>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <p className=" text-center fs-4 mb-2">
                            {" "}
                            تم ارسال طلبك بنجاح{" "}
                          </p>
                          <a
                            href={`/esteathan`}
                            className="text-secondary text-decoration-underline"
                          >
                            {" "}
                            العودة الى شاشة الاستئذان{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
