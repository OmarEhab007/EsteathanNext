import React from 'react'

export default function UpdateStudents() {
  return <>
    
    <section className='updateStudents'>

        <div className="container">
        <h2 className="text-center fs-1 mt-3">تعديل طالب </h2>
          <hr className="w-25 mx-auto mb-5" />
          <p className="text-center fs-5">من فضلك فم بتعديل البيانات</p>

          <form
            className="border-primary p-3 row justify-content-center align-items-center"
          >
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentName">اسم الطالب</label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="studentName"
                  placeholder="اسم الطالب"
                />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="studentId"> هوية الطالب </label>
                <input
                  type="number"
                  className="form-control border-primary "
                  id="studentId"
                  placeholder="هوية الطالب"
                />
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div className="form-group">
                <label htmlFor="studentClass"> السنة الدراسية </label>
                <select 
                name="studentClass" 
                id="studentClass" 
                className="form-select form-control border-primary" 
                aria-label="Default select example"
                placeholder=" السنة الدراسية "
                >
                  <optgroup  >
                    <option value="أول ثانوي" > أول ثانوي </option>
                    <option value="ثاني ثانوي" > ثاني ثانوي </option>
                    <option value="ثالث ثانوي" > ثالث ثانوي </option>
                  </optgroup>
                  <optgroup  >
                    <option value="أول متوسط" > أول متوسط </option>
                    <option value="ثاني متوسط" > ثاني متوسط </option>
                    <option value="ثالث متوسط" > ثالث متوسط </option>
                  </optgroup>
                  <optgroup  >
                    <option value="أول ابتدائي" > أول ابتدائي </option>
                    <option value="ثاني ابتدائي" > ثاني ابتدائي </option>
                    <option value="ثالث ابتدائي" > ثالث ابتدائي </option>
                    <option value="أول ابتدائي" > رابع ابتدائي </option>
                    <option value="ثاني ابتدائي" > خامس ابتدائي </option>
                    <option value="ثالث ابتدائي" > سادس ابتدائي </option>
                  </optgroup>
                </select>
                
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div className="form-group">
                <label htmlFor="year">الشعبة / الفصل</label>
                <input
                  type="number"
                  className="form-control border-primary"
                  id="year"
                  placeholder="الشعبة / الفصل"
                />
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div className="form-group">
                <label htmlFor="parentNumber">رقم ولي أمر الطالب </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="parentNumber"
                  placeholder="رقم ولي أمر الطالب "
                />
              </div>
            </div>

            

            <div className="col-12 mb-3">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-info"
                >
                تعديل الطالب {" "}
                <span className=" p-1 ">
                <i className="fa-solid fa-plus"></i>
                </span>
                </button>
              </div>
            </div>
          </form>
        </div>

    </section>
  
  </>
}
