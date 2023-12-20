"use client";
import React, { useState, useEffect, use } from "react";
import { useParams } from "next/navigation";
// import { UploadButton } from "../../../../utils/uploadthing";
import { UploadButton, UploadDropzone } from "../../../../../utils/uploadthing";

export default function Student() {
  const params = useParams();
  console.log(params);
  const [student, setStudent] = useState(null);
  const [reason, setReason] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState(null);

  const id = params.id;
  useEffect(() => {
    fetch(`/api/students/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setStudent(res.data);
      });
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
        // Add other form fields here
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the response here
        setLoading(false);
        setSuccess(true);
        console.log(data);
      });
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
            <div className="card border-info mb-3 col-xxl-6 col-md-7 col-sm-8 col-12 position-relative ">
              <div className="card-header border-primary">
                <div className="row justify-content-start align-items-center">
                  <div className="col-lg-3  col-5">
                    <p className="mb-0"> اسم الطالب </p>
                  </div>
                  <div className="col-1">
                    <p className="mb-0"> : </p>
                  </div>
                  <div className="col-lg-8  col-12">
                    <p className="mb-0">
                      {student ? student.name : "Loading..."}
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
                  <div className="col-lg-8  col-sm-12">
                    <p className="card-text">
                      {" "}
                      {student ? student.number : "Loading..."}{" "}
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
                  <div className="col-lg-8  col-sm-12">
                    <p className="card-text">
                      {" "}
                      {student ? student.class : "Loading..."}{" "}
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
                  <div className="col-lg-8  col-sm-12">
                    <p className="card-text">
                      {" "}
                      {student ? student.year : "Loading..."}{" "}
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
                      {" "}
                      ارفاق مستند{" "}
                      <span className="fs-6 text-opacity-50 text-danger">
                        *اختياري
                      </span>{" "}
                    </label>
                    <div className=" d-flex  ">
                      <UploadButton
                        className="imageUploader me-2  "
                        // add two endpoints for each type of file
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          console.log("Files: ", res);
                          if (res.length > 0) {
                            setFileUrl(res[0].url);
                            alert("تم رفع الملف بنجاح");
                          }
                          console.log(fileUrl);
                        }}
                        onUploadError={(error) => {
                          // Do something with the error.
                          alert(`حدث خطأ! ${error.message}`);
                        }}
                      />
                      <UploadButton
                        className="pdfUploader"
                        endpoint="pdfUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          console.log("Files: ", res);
                          if (res.length > 0) {
                            setFileUrl(res[0].url);
                            alert("Upload Completed");
                          }
                          console.log(fileUrl);
                        }}
                        onUploadError={(error) => {
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`);
                        }}
                      />
                    </div>
                  </div>

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
                <div className="loader">
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
