"use client";
import React, { useState } from "react";
import { UploadButton, UploadDropzone } from "../../../../utils/uploadthing";

export default function Subscription() {
  const [schoolName, setSchoolName] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [district, setDistrict] = useState("");
  const [office, setOffice] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [attachment, setAttachment] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errorUpload, setErrorUpload] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(schoolName);
    // console.log(schoolId);
    // console.log(district);
    // console.log(office);
    // console.log(managerName);
    // console.log(managerPhone);
    // console.log(attachment);
    // console.log(plan);

    if (
      schoolName === "" ||
      schoolId === "" ||
      district === "" ||
      office === "" ||
      managerName === "" ||
      managerPhone === "" ||
      attachment === "" ||
      plan === ""
    ) {
      setLoading(false);
      alert("الرجاء ادخال جميع البيانات");
    } else {
      let finalPhone = managerPhone.startsWith("995")
        ? managerPhone
        : "995" + managerPhone;

      const resposne = await fetch("/api/bill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "pending",
          schoolId,
          schoolName,
          managerName,
          phone: finalPhone,
          district,
          office,
          attachment,
          plan,
          history: "0",
        }),
      });
      const data = await resposne.json();
      console.log(data);
      setLoading(false);
      setSuccess(true);
      // re direct to home
      window.location.href = "/esteathan/home";
    }
  };

  return (
    <>
      <section className="home d-flex justify-content-center align-items-center mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-md-10">
              <div className="card">
                <div className="card-body text-center">
                  <h2 className="fs-1"> اشتراك جديد </h2>
                </div>
                <div className="details m-auto mb-3">
                  <div className="card-body">
                    <p className="text-center m-0">
                      قم بتحويل قيمة اشتراكك على حسابنا في بنك الراجحي
                    </p>
                    <p className="text-center m-0">
                      <span className="high"> 300608010173943 </span>
                      <br />
                      <span className="high">
                        {" "}
                        أيبان : SA6380000300608010173943{" "}
                      </span>
                      <br />
                      <span className="high">
                        {" "}
                        باسم : عبدالحميد عبيدالله الجابري{" "}
                      </span>
                    </p>
                    <p className="text-center m-0">
                      وارفق صورة ايصال الدفع لتتمكن من استخدام البرنامج
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-9 col-sm-10 col-12 mt-3 mb-5">
              <div className="card p-3 position-relative">
                {loading && (
                  <div className="position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading ">
                    <div
                      className="spinner-border text-success "
                      role="status"
                    ></div>
                  </div>
                )}

                {success && (
                  <div className="position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading ">
                    <div>
                      <div className="text-center" role="alert">
                        <p>تم استلام طلبك بنجاح</p>
                        <p>سيتم التواصل معكم في اقرب وقت على رقم الواتساب</p>
                        <i class="fa-regular fa-circle-check text-center text-success fs-1"></i>
                      </div>
                    </div>
                  </div>
                )}

                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row group p-1 mb-2">
                      <div className="col-12">
                        <h6 className="mb-1 fw-bold mt-2"> بيانات المدرسة </h6>
                        <div className="underLine ms-1 mb-2"></div>
                      </div>
                      <div className="mb-3 col-lg-6">
                        <label htmlFor="schoolName" className="form-label">
                          {" "}
                          اسم المدرسة{" "}
                        </label>
                        <input
                          type="text"
                          id="schoolName"
                          className="form-control"
                          placeholder="اسم المدرسة"
                          value={schoolName}
                          onChange={(e) => setSchoolName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 col-lg-6">
                        <label htmlFor="schoolNumber" className="form-label">
                          {" "}
                          الرقم الوزاري{" "}
                        </label>
                        <input
                          type="number"
                          id="schoolNumber"
                          className="form-control"
                          placeholder="الرقم الوزاري"
                          value={schoolId}
                          onChange={(e) => setSchoolId(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 col-lg-6">
                        <label htmlFor="city" className="form-label">
                          {" "}
                          المنطقة التعليمية{" "}
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="form-control"
                          placeholder="المنطقة التعليمية"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 col-lg-6">
                        <label htmlFor="educationOffice" className="form-label">
                          {" "}
                          المكتب التابع له المدرسة{" "}
                        </label>
                        <input
                          type="text"
                          id="educationOffice"
                          className="form-control"
                          placeholder="المكتب التابع له المدرسة"
                          value={office}
                          onChange={(e) => setOffice(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row group p-1  mb-2">
                      <div className="col-12">
                        <h6 className="mb-1 fw-bold mt-2"> بيانات المسؤول </h6>
                        <div className="underLine ms-1 mb-2"></div>
                      </div>
                      <div className="mb-3 col-lg-6">
                        <label htmlFor="name" className="form-label">
                          {" "}
                          اسم المسئول{" "}
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="اسم المسؤول"
                          value={managerName}
                          onChange={(e) => setManagerName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 col-lg-6">
                        <label htmlFor="phoneNumber" className="form-label">
                          {" "}
                          رقم الجوال مفعل فيه الوتساب{" "}
                        </label>
                        <input
                          type="number"
                          id="phoneNumber"
                          className="form-control"
                          placeholder="رقم الجوال مفعل فيه الوتساب"
                          value={managerPhone}
                          onChange={(e) => setManagerPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row group p-1  mb-2">
                      <div className="col-12">
                        <h6 className="mb-1 fw-bold mt-2"> تفاصيل الدفع </h6>
                        <div className="underLine ms-1 mb-2"></div>
                      </div>
                      <div className="mb-3 col-lg-6">
                        <div class="form-check">
                          <div className="row">
                            <div className="col-7">
                              <div>
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  value="oneSemester"
                                  onChange={(e) => setPlan(e.target.value)}
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios1"
                                >
                                  فصل دراسي واحد
                                </label>
                              </div>
                            </div>
                            <div className="col-5">
                              <div>
                                <p className="price2">150 ريال</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-check">
                          <div className="row">
                            <div className="col-7">
                              <div>
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  value="twoSemester"
                                  onChange={(e) => setPlan(e.target.value)}
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios2"
                                >
                                  فصلان دراسيان
                                </label>
                              </div>
                            </div>
                            <div className="col-5">
                              <div>
                                <p className="price2">250 ريال</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-check">
                          <div className="row">
                            <div className="col-7">
                              <div>
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios3"
                                  value="fullYear"
                                  onChange={(e) => setPlan(e.target.value)}
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios3"
                                >
                                  سنة دراسية كاملة
                                </label>
                              </div>
                            </div>
                            <div className="col-5">
                              <div>
                                <p className="price2">350 ريال</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 col-lg-6">
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
                          className="pillUploader me-2 form-control text-center"
                          // add two endpoints for each type of file
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            // Do something with the response
                            console.log("Files: ", res);
                            if (res.length > 0) {
                              // setFileUrl(res[0].url);
                              setAttachment(res[0].url);
                              // alert("تم رفع الملف بنجاح");
                              setUploading(true);
                            }
                            // console.log(fileUrl);
                          }}
                          onUploadError={(error) => {
                            // Do something with the error.
                            // alert(`حدث خطأ! ${error.message}`);
                            setErrorUpload(true);
                          }}
                        />
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
                    </div>
                    <div className="text-center mt-3 ">
                      <button className="btn px-5 esteathan-btn" type="submit">
                        {" "}
                        اشتراك{" "}
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
