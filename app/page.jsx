"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Icon from "./bigIcon.png";

export default function Home() {
  const [searchNumber, setSearchNumber] = useState("");
  const [studentId, setStudentId] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/esteathan/api/students/${searchNumber}`);
      const result = await response.json();
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
    <main className={` reqMain  ${styles.reqMain}`}>
      <div className="container h-100">
        <h1 className="text-center mb-3 mt-5"> <Image src={Icon} alt="Icon" width={300} />   </h1>
        <div className="row justify-content-center align-items-center h-50">
          <form onSubmit={handleSearch} className={` p-5 border-success col-md-8 col-sm-10 col-12 ${styles.searchForm}`}>
            <label htmlFor="personalId" className="form-label mb-3">
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
              className={`btn btn-success mt-3 text-center mx-auto d-block mb-3 ${loading ? 'disabled' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className="fas fa-spinner fa-spin"></span>
              ) : (
                "بحث"
              )}
            </button>

            {hasSearched ? (
              studentId ? (
                <div className="d-flex justify-content-center align-items-center h-100 d-block">
                  <Link href={`/parentPre/${searchNumber}`}>
                    <button className="btn btn-success">ارسال طلب استئذان</button>
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
    
  );
}