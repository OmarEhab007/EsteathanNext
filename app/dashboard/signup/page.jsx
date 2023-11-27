import React from 'react'

export default function Signup() {
  return <>
  
    <section className='signup d-flex justify-content-center align-items-center mt-3' >
            
        <div className="container ">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4> انشاء حساب جديد </h4>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">  اسم المستخدم </label>
                                    <input type="text" className="form-control" id="userName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label"> كلمة المرور </label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label"> تأكيد كلمة المرور </label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="code" className="form-label">  كود التفعيل  </label>
                                    <input type="text" className="form-control" id="code" />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary"> انشاء حساب </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  
  </>
}
