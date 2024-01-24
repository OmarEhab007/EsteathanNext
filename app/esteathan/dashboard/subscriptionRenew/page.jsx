"use client";

import React from "react";
import { UploadButton, UploadDropzone } from "../../../../utils/uploadthing";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useStore from "../../../../lib/store";

export default function SubscriptionRenow() {
  // const [user, setUser] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [plan, setPlan] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errorUpload, setErrorUpload] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // const [school, setSchool] = useState(null);
  const { data: session } = useSession();
  const user_id = session?.user?.id;
  const {
    forms,
    user,
    schoolId,
    school,
    subscription,
    setForms,
    setUser,
    setSchoolId,
    setSchool,
    setSubscription,
    loading,
    bill,
  } = useStore();

  const handleRenewSubscription = async (e) => {
    e.preventDefault();
    console.log(bill);
    try{
    const resposne = await fetch("/api/bill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "renew",
        schoolId: bill.schoolId,
        schoolName: bill.schoolName,
        managerName: bill.managerName,
        phone: bill.phone,
        district: bill.district,
        office: bill.office,
        attachment: fileUrl,
        plan: plan,
        history: "1",
      }),
    });
    const { data } = await resposne.json();
      console.log(data);
      setSuccess(true);
    }
    catch(error){
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="subscriptionRenow position-relative">
        <div className="container my-5">
          <div className="subscriptionRenowHead mb-5">
            <h2 className="fs-1 text-center"> تجديد الاشتراك </h2>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-xl-6 col-lg-7 ">
              <div className="card">
                <div className="card-body">
                  <form action="" className="text-center">
                    <div className="row group p-1  mb-2">
                      <div className="my-3 col-lg-6">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="oneSemester"
                            onChange={(e) => setPlan(e.target.value)}
                          />
                          <label class="form-check-label" for="exampleRadios1">
                            فصل دراسي واحد
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="twoSemester"
                            onChange={(e) => setPlan(e.target.value)}
                          />
                          <label class="form-check-label" for="exampleRadios2">
                            فصلان دراسيان
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios3"
                            value="fullYear"
                            onChange={(e) => setPlan(e.target.value)}
                          />
                          <label class="form-check-label" for="exampleRadios3">
                            سنة دراسية كاملة
                          </label>
                        </div>
                      </div>

                      <div className="mb-0 col-lg-6 d-flex justify-center align-items-center">
                        <UploadButton
                          content={{
                            button({ ready }) {
                              if (ready)
                                return (
                                  <div>
                                    ارفاق صوره ايصال الدفع{" "}
                                    <i class="fa-regular fa-image"></i>
                                  </div>
                                );

                              return "جاري الاستعداد";
                            },
                            allowedContent({ ready, fileTypes, isUploading }) {
                              // if (!ready) return "Checking what you allow";
                              if (isUploading)
                                return "جاري رفع الملف الرجاء الانتظار";
                              return `بحد اقصي 4 ميجا`;
                            },
                          }}
                          className="pillUploader me-2 form-control"
                          // add two endpoints for each type of file
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            // Do something with the response
                            console.log("Files: ", res);
                            if (res.length > 0) {
                              setFileUrl(res[0].url);
                              // alert("تم رفع الملف بنجاح");
                              // setUploading(true);
                              setUploading(true);
                            }
                            console.log(fileUrl);
                          }}
                          onUploadError={(error) => {
                            // Do something with the error.
                            // alert(`حدث خطأ! ${error.message}`);
                            // setErrorUpload(true);
                            setErrorUpload(true);
                          }}
                        />
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
                      </div>
                    </div>

                    <div className="text-center mt-3 ">
                      <button
                        className="btn px-5 esteathan-btn"
                        onClick={handleRenewSubscription}
                      >
                        {" "}
                        تجديد الاشتراك{" "}
                      </button>
                    </div>
                  </form>
                  {success && (
                    <div className="alert alert-success m-3" role="alert">
                      تم ارسال طلب التجديد بنجاح
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      حدث خطأ! الرجاء المحاولة مرة اخري
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
