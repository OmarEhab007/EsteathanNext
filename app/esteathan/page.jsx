"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Icon from "./bigIcon.png";
import bgFooter from "./footer-bg.png";

export default function Home() {
  const [searchNumber, setSearchNumber] = useState("");
  const [studentId, setStudentId] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [schoolName, setSchoolName] = useState(null);
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [counterError, setCounterError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [lastRequestTime, setLastRequestTime] = useState(null);
  const [tooSoonError, setTooSoonError] = useState(false);
  const [latestForm, setLatestForm] = useState(null);
  const [differenceInHours, setDifferenceInHours] = useState(null)

  // const [school, setSchool] = useState(null);

  // get all schools
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(`/api/school`);
        const result = await response.json();
        const schools = result.datas;
        setSchools(schools);
        // console.log(schools);
      } catch (error) {
        // Handle errors here
        console.error("Error during search:", error);
      }
    };
    fetchSchools();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    // console.log(selectedSchool);

    try {
      const response = await fetch(`/api/students/${searchNumber}`);
      const result = await response.json();
      // console.log(result);
      const student = result.data;
      if (student) {
        setStudentId(student.id);
        const school = schools.find(
          (school) => school.schoolId === student.schoolId
        );
        setSelectedSchool(school);
        // if (school) {
        //   // setSchool(school);
        //   // console.log(school);
        // }

        if (student.requestCount >= school.maxRequestsPerStudent) {
          setCounterError(true);
          setCounter(student.requestCount);
        }
        const response = await fetch(
          `/api/forms/search?number=${student.id}&schoolId=${student.schoolId}`
        );
        const result = await response.json();
        console.log(result.data.createdAt);
        const formResponseTime = new Date(result.data.createdAt);
        const currentTime = new Date();
        const differenceTime =
          currentTime.getTime() - formResponseTime.getTime();
        const differenceInHours = Math.round(differenceTime / (1000 * 60 * 60));
        console.log(differenceInHours);
        setDifferenceInHours(differenceInHours)
        if (differenceInHours < 24) {
          setTooSoonError(true);
          setLatestForm(result.data);
        }
      }

      // console.log(student.requestCount);
    } catch (error) {
      // Handle errors here
      console.error("Error during search:", error);
    } finally {
      setLoading(false);
      setHasSearched(true);
    }
  };

  return (
    <>
      <div className="esteatahn-request d-flex justify-content-center align-items-center flex-wrap w-100">
        <main className={` reqMain w-100  mb-5 w-100`}>
          <div className="container h-100">
            <h1 className="text-center mb-4 mt-3">
              {" "}
              <Image
                src={Icon}
                alt="Icon"
                width={180}
                placeholder="blur"
              />{" "}
            </h1>
            <div className="row justify-content-center align-items-center h-50">
              <form
                onSubmit={handleSearch}
                className={` p-5 border-success col-md-8 col-sm-10 col-12 `}
              >
                {/* <select
                id="school"
                name="school"
                className="form-control border-success"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                disabled={loading}
              >
                <option value="">اختر المدرسة</option>
                {schools.map((school) => (
                  <option key={school.schoolId} value={school.schoolId}>
                    {school.name}
                  </option>
                ))}
              </select> */}

                <label htmlFor="personalId" className="form-label mb-3 mt-3">
                  هوية الطالب
                </label>
                <input
                  type="text"
                  id="personalId"
                  name="personalId"
                  className="form-control border-success"
                  value={searchNumber}
                  onChange={(e) => setSearchNumber(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="submit"
                  className={`btn btn-success mt-3 text-center mx-auto d-block mb-3 ${
                    loading ? "disabled" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="fas fa-spinner fa-spin "></span>
                  ) : (
                    "بحث"
                  )}
                </button>

                {hasSearched ? (
                  counterError ? (
                    <div className="d-flex justify-content-center align-items-center h-100 d-block">
                      <p className="text-danger">
                        لقد تجاوزت الحد المسموح لطلبات الاستئذان
                      </p>
                      <p className="text-danger">
                        عدد الطلبات المسموح بها هو{" "}
                        {selectedSchool?.maxRequestsPerStudent} ولقد قمت بطلب{" "}
                        {counter} طلب
                      </p>
                    </div>
                  ) : tooSoonError ? (
                    <div className="d-flex justify-content-center align-items-center h-100 d-block">
                      <p className="text-danger">
                        الرجاء الانتظار لمدة{" "}
                        {differenceInHours} {differenceInHours === 1 ? "ساعة" : "ساعات"}{" "}
                       لمعاودة ارسال طلبك
                      </p>
                    </div>
                  ) : studentId ? (
                    <div className="d-flex justify-content-center align-items-center d-block">
                      <Link href={`/esteathan/parentPre/${studentId}`}>
                        <button className="btn btn-success">
                          ارسال طلب استئذان
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center text-center align-items-center d-block">
                      <p className="text-danger">هذا الطالب غير موجود</p>
                    </div>
                  )
                ) : null}
              </form>
              {tooSoonError && (
                <div className="d-flex justify-content-center align-items-center h-100 d-block">
                  <p className="text-danger">
                    لقد تجاوزت الحد المسموح لطلبات الاستئذان
                  </p>
                  <p className="text-danger">
                    الرجاء الانتظار لمدة{" "}
                    {/* {differenceInHours} {differenceInHours === 1 ? "ساعة" : "ساعات"} */}{" "}
                    للتحقق من مستخدمين طلابك
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="align-self-end position-relative w-100">
          <Image
            src={bgFooter}
            placeholder="blur"
            width="100%"
            className="footer-bg"
          />
          <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
            <div className="footer-layer w-100 h-100 d-flex justify-content-center align-items-center flex-wrap">
              <div className="w-100">
                <p className=" mb-0 text-center">
                  تصميم وتنفيذ
                  <span> المبدع الفني لتقنية المعلومات </span>
                  جميع الحقوق محفوظة لبرنامج استئذان
                  <Image src={Icon} alt="Icon" width={80} placeholder="blur" />
                </p>
              </div>
              <div className=" d-flex justify-content-center align-content-center w-100">
                <p className="mb-0 text-center">
                  للدعم الفني والاستفسارات الرجاء التواصل على رقم الواتساب
                  <a href="https://wa.me/+966545894287" target="_blank">
                    <i class="fa-brands fa-whatsapp fs-4 mx-2"></i>:{" "}
                    <span>+966545894287</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
