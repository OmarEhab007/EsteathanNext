import React from 'react'

export default function ImportTeacherData() {
  return <>
  
    <section className="importStudentData">

        <div className="container">

            <div className="row justify-content-center align-items-center">

                <div className="col-md-12">
                    <div className="wrapper border-primary">
                    <header><h2 className=""> استيراد بيانات المعلمين </h2></header>
                    <form action="#">
                        <input className="file-input" type="file" name="file" hidden />
                        <i className="fa-solid fa-cloud-arrow-up fa-bounce fs-2 my-4 text-primary"></i>
                        <p className="text-danger">من فضلك اختر الاكسل الخاص بالمعلمين </p>
                    </form>
                    <section className="progress-area"></section>
                    <section className="uploaded-area"></section>
                    </div>
                </div>

            </div>

        </div>

    </section>
  
  </>
}
