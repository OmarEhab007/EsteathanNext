"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [searchNumber, setSearchNumber] = useState("");
  const [studentId, setStudentId] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/students/${searchNumber}`);
    const result = await response.json();
    const student = result.data;
    console.log(student);
    if (student) {
      setStudentId(student.id);
    }
  };

  return (
    <main className="reqMain">
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <form onSubmit={handleSearch} className="w-50 p-5 border-success">
            <label htmlFor="personalId" className="form-labe mb-3">
              {" "}
              هوية الطالب{" "}
            </label>
            <input
              type="text"
              id="personalId"
              name="personalId"
              className="form-control border-success"
              value={searchNumber}
              onChange={(e) => setSearchNumber(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-success mt-3 text-center m-auto d-block"
            >
              بحث
            </button>
          </form>
          {studentId && (
            <div className="d-flex justify-content-center align-items-center h-100 d-block">
              <Link href={`/parentPre/${searchNumber}`}>
                <button className="btn btn-success">ارسال طلب استئذان</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
