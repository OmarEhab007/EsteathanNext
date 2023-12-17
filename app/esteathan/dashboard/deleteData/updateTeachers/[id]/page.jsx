"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation'

export default function UpdateTeacher() {


  const params = useParams();
  const [teacherName, setTeacherName] = useState(null);
  const [teacherPhone, setTeacherPhone] = useState(null);

  const id = params.id;
  const router = useRouter()
  
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await fetch(`/api/teacher/${id}`);
        const result = await response.json();
        const teacher = result.data;
        console.log(teacher);
        setTeacherName(teacher.name);
        setTeacherPhone(teacher.phone);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    if (id) {
      fetchTeacherData();
    }
  }
  , [id]);

  const updateTeacher = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/teacher/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: teacherName,
          phone: teacherPhone,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          alert("تم تعديل المعلم بنجاح");
        }).then(() => {
          router.push('/dashboard/deleteData')
        }
        );

      
    } catch (error) {
      alert("حدث خطأ أثناء تعديل المعلم");
      // console.error("Error updating teacher data:", error);

    }
  }


  return <>
  
    <section className='updateTeacher'>

        <div className="container">

        <h2 className="text-center fs-1 mt-3">تعديل معلم </h2>
          <hr className="w-25 mx-auto mb-5" />
          <p className="text-center fs-5">من فضلك قم بتعديل البيانات </p>

          <form
            className="border-primary p-3 row justify-content-center align-items-center"
          >
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="teacherName">اسم المعلم</label>
                <input
                  type="text"
                  className={`form-control border-primary `}
                  id="teacherName"
                placeholder={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="teacherId"> رقم الجوال </label>
                <input
                  type="text"
                  className={`form-control border-primary `}
                  id="teacherId"
                placeholder={teacherPhone}
                onChange={(e) => setTeacherPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <div className="form-group">
                <button
                  type="submit"
                className="btn btn-info"
                onClick={updateTeacher}
                >
                
                    تعديل المعلم {" "}
                    <span className=" p-1 ">
                    <i className="fa-solid fa-plus"></i>
                    </span>{" "}
    
                </button>
              </div>
            </div>
          </form>

        </div>

    </section>
  
  </>
}
