import React from 'react'

export default function AddTeacher() {
  return <>
  
    <section className='addTeacher'>

        <div className="container">

            <h2 className="text-center fs-1 mt-3">اضافة معلم جديد</h2>
            <hr className="w-25 mx-auto mb-5"/>
            <p className="text-center fs-5">من فضلك املأ الحقول التالية</p>

            <form action="" className='border-primary p-3 row justify-content-center align-items-center'>

                <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label htmlFor="teacherName">اسم المعلم</label>
                        <input type="text" className="form-control border-primary" id="teacherName" placeholder="اسم المعلم" />
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label htmlFor="teacherId"> رقم الجوال </label>
                        <input type="number" className='form-control border-primary' id='teacherId' placeholder=' رقم الجوال ' />
                    </div>
                </div>

                <div className="col-12 mb-3">
                    <div className="form-group">
                        <button type='button' className='btn btn-outline-success'> اضافة معلم جديد <span className=' p-1 '><i class="fa-solid fa-plus"></i></span> </button>
                    </div>
                </div>

            </form>

        </div>

    </section>
  
  </>
}
