import React from 'react'

export default function ForgetPassword() {
  return <>
  
    <section className='forgetPassword d-flex align-items-center justify-content-center'>

        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className='text-center'> نسيت كلمة المرور </h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">  الرقم الوزاري </label>
                                    <input type="text" className="form-control" id="userName" name="username" />
                                </div>
                                <div className="mb-3 text-center">
                                    <button type="submit" className="btn  mb-2 esteathan-btn d-block m-auto ">  تأكيد </button>
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
