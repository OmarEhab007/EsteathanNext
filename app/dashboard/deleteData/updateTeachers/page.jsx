import React from 'react'

export default function UpdateTeacher() {
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
                  placeholder="اسم المعلم"
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
                  placeholder=" رقم الجوال "
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-info"
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
