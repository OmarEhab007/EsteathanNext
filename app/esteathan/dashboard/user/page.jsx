import React from 'react'

export default function User() {
  return <>
  
    <section className='user'>
        <div className="container my-5">

            <div className="userHead mb-4">
                <h2 className='text-center fs-1'> ملف المستخدم </h2>
            </div>

            <div className="row justify-content-center align-items-center">

                <div className="col-12 col-lg-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                            <div className="col-3">
                                <div>
                                <h5 className=' fw-bold text-center mb-0'> مدرسة </h5>
                                </div>
                            </div>
                            <div className="col-1">
                                <div>
                                <p className=' fs-5 fw-bold text-center mb-0'> : </p>
                                </div>
                            </div>
                            <div className="col-8">
                                <div>
                                <p className=' fs-5 fw-bold text-center mb-0'> مدرسة الأقصى </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="group overflow-hidden mb-2">

                            <div className="row justify-content-center align-items-center">
                                <div className="col-8 pe-0 col-sm-5">
                                    <div>
                                    <p className=' fs-5 text-center mb-0'> الرقم الوزاري </p>
                                    </div>
                                </div>
                                <div className="col-1 ps-0">
                                    <div>
                                    <p className='text-start text-sm-center mb-0'> : </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 pe-0">
                                    <div>
                                    <p className='   text-center mb-0'> 0123456789 </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center align-items-center">
                                <div className="col-8 pe-0 col-sm-5">
                                <div>
                                    <p className=' fs-5 text-center mb-0'> المنطقة التعليمية </p>
                                </div>
                                </div>
                                <div className="col-1 ps-0">
                                <div>
                                    <p className='   text-center mb-0'> : </p>
                                </div>
                                </div>
                                <div className="col-12 col-sm-6 pe-0">
                                <div>
                                    <p className='   text-center mb-0'> المدينة المنورة </p>
                                </div>
                                </div>
                            </div>

                            <div className="row justify-content-center align-items-center">
                                <div className="col-8 pe-0 col-sm-5">
                                <div>
                                    <p className=' fs-5 text-center mb-0'> المكتب التابع له المدرسة </p>
                                </div>
                                </div>
                                <div className="col-1 ps-0">
                                <div>
                                    <p className='   text-center mb-0 '> : </p>
                                </div>
                                </div>
                                <div className="col-12 col-sm-6 pe-0">
                                <div>
                                    <p className='text-center mb-0 '> مكتب وسط المدينة المنورة  </p>
                                </div>
                                </div>
                            </div>

                            </div>

                            <div className="group overflow-hidden mb-2">

                                <div className="row justify-content-center align-items-center">
                                    <div className="col-8 pe-0 col-sm-5">
                                        <div>
                                        <p className=' fs-5 text-center mb-0'> اسم المشرف </p>
                                        </div>
                                    </div>
                                    <div className="col-1 ps-0">
                                        <div>
                                        <p className='text-start text-sm-center mb-0'> : </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div>
                                        <p className='   text-center mb-0'> عبدالعزيز محمد عبدالعزيز </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row justify-content-center align-items-center position-relative">
                                    
                                    {/* loading */}
                                    <div className='position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading d-none'>
                                        <div className="spinner-border text-success " role="status"></div>             
                                    </div>

                                    <div className="col-8 pe-0 col-sm-5">
                                        <div className='text-center'>
                                            <button className='btn esteathan-btn'> تعديل اسم المشرف </button>
                                        </div>
                                    </div>
                                    <div className="col-1 ps-0">
                                        <div>
                                        <p className='text-start text-sm-center mb-0 pe-0'> : </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 ">
                                        <div className='text-cnter'>
                                            <input type="text" className='form-control text-center' placeholder='عبدالعزيز محمد عبدالعزيز' />
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center align-items-center">
                                    <div className="col-8 pe-0 col-sm-5">
                                    <div>
                                        <p className=' fs-5 text-center mb-0'> رقم الجوال </p>
                                    </div>
                                    </div>
                                    <div className="col-1 ps-0">
                                    <div>
                                        <p className='text-center mb-0'> : </p>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-6 ">
                                    <div>
                                        <p className='text-center mb-0'> 96654422113 </p>
                                    </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center align-items-center position-relative">

                                    {/* loading */}
                                    <div className='position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading d-none'>
                                        <div className="spinner-border text-success " role="status"></div>             
                                    </div>

                                    <div className="col-8 pe-0 col-sm-5">
                                        <div className='text-center'>
                                            <button className='btn esteathan-btn'> تعديل رقم الجوال </button>
                                        </div>
                                    </div>
                                    <div className="col-1 ps-0">
                                        <div>
                                        <p className='text-start text-sm-center mb-0 pe-0'> : </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 ">
                                        <div className='text-cnter'>
                                            <input type="text" className='form-control text-center'placeholder='96654422113' />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="group overflow-hidden text-center mb-2">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-8 pe-0 col-sm-5">
                                        <div>
                                        <p className=' fs-5 text-center mb-0'> مدة الاشتراك </p>
                                        </div>
                                    </div>
                                    <div className="col-1 ps-0">
                                        <div>
                                        <p className='text-start text-sm-center mb-0'> : </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 pe-0">
                                        <div>
                                        <p className='   text-center mb-0'> فصل دراسي واحد </p>
                                        </div>
                                    </div>
                                </div>  
                            </div>

                            <div className="group overflow-hidden text-center mb-2">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-8 pe-0 col-sm-5">
                                        <div>
                                        <p className=' fs-5 text-center mb-0'> الرقم السري </p>
                                        </div>
                                    </div>
                                    <div className="col-1 ps-0">
                                        <div>
                                        <p className='text-start text-sm-center mb-0'> : </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 ">
                                        <div>
                                        <p className='text-center mb-0 pass'> 123456 </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center align-items-center position-relative">
                                    {/* loading */}
                                    <div className='position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center loading d-none'>
                                        <div className="spinner-border text-success " role="status"></div>             
                                    </div>

                                    <div className="col-8 pe-0 col-sm-5">
                                        <div className='text-center'>
                                            <button className='btn esteathan-btn'> تغيير الرقم السري </button>
                                        </div>
                                    </div>
                                    <div className="col-1 ps-0">
                                        <div>
                                        <p className='text-start text-sm-center mb-0 pe-0'> : </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 ">
                                        <div className='text-cnter'>
                                            <input type="text" className='form-control text-center' placeholder="123456" />
                                        </div>
                                    </div>
                                </div>  
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

  </>
}
