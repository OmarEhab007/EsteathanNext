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
    console.log(selectedSchool);

    try {
      const response = await fetch(`/api/students/${searchNumber}`);
      const result = await response.json();
      // console.log(result);
      const student = result.data;
      if (student) {
        setStudentId(student.id);
      }
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
                  studentId ? (
                    <div className="d-flex justify-content-center align-items-center h-100 d-block">
                      <Link href={`/esteathan/parentPre/${studentId}`}>
                        <button className="btn btn-success">
                          ارسال طلب استئذان
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center align-items-center h-100 d-block">
                      <p className="text-danger">هذا الطالب غير موجود</p>
                    </div>
                  )
                ) : null}
              </form>
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
