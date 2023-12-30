"use client";

import React from "react";
import { UploadButton, UploadDropzone } from "../../../../utils/uploadthing";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function SubscriptionRenow() {
  const [user, setUser] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [plan, setPlan] = useState(null);
  const [school, setSchool] = useState(null);
  const { data: session } = useSession();
  const user_id = session?.user?.id;
  useEffect(() => {
    const fetchUserData = async () => {
      const today = new Date();
      if (session?.user?.id) {
        const userResponse = await fetch(`/api/user/${session.user.id}`);
        const userData = await userResponse.json();
        setUser(userData.data);
        console.log(userData.data);

        const schoolResponse = await fetch(
          `/api/school/${userData.data.schoolId}`
        );
        const schoolData = await schoolResponse.json();
        console.log(schoolData.data[0]);
        setSchool(schoolData.data[0]);

        const subscriptionResponse = await fetch(
          `/api/subscription/${schoolData.data[0].subscriptionId}`
        );
        const subscriptionData = await subscriptionResponse.json();
        console.log(subscriptionData.data);
      }
    };
    fetchUserData();
  }, [session]);

  const handleRenewSubscription = async () => {};

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
                            value="twoSemesters"
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
                            }
                            console.log(fileUrl);
                          }}
                          onUploadError={(error) => {
                            // Do something with the error.
                            // alert(`حدث خطأ! ${error.message}`);
                            // setErrorUpload(true);
                          }}
                        />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
