"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [searchNumber, setSearchNumber] = useState("");
  const [studentId, setStudentId] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/students/${searchNumber}`);
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
        <div className="d-flex justify-content-center align-items-center h-100">
          <form onSubmit={handleSearch} className={`w-50 p-5 border-success ${styles.searchForm}`}>
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