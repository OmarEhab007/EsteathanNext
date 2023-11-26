import React from 'react'

export default function Student() {
  return <>
  
    <main>

        <section className="studentInfo">
            <div className="container d-flex justify-content-center align-items-center ">

                <div className="card border-info mb-3 col-xxl-6 col-md-7 col-sm-8 position-relative " >
                    <div className="card-header border-primary"> 
                        <div className="row justify-content-start align-items-center" >
                            <div className="col-lg-3  col-5">
                                <p className="mb-0"> اسم الطالب  </p>
                            </div>
                            <div className="col-1">
                                <p className="mb-0"> : </p>
                            </div>
                            <div className="col-lg-8  col-12">
                                <p className="mb-0"> أحمد عبدالله فيصل الخضيري </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="row align-items-center justify-content-start mb-2" >
                            <div className="col-lg-3  col-5">
                                <p className="card-text"> هوية الطالب </p>
                            </div>
                            <div className="col-1">
                                <p className="card-text"> : </p>
                            </div>
                            <div className="col-lg-8  col-sm-12">
                                <p className="card-text"> 1234567890 </p>
                            </div>
                        </div>
        
                        <div className="row align-items-center justify-content-start mb-2" >
                            <div className="col-lg-3  col-5">
                                <p className="card-text"> السنة الدراسية </p>
                            </div>
                            <div className="col-1">
                                <p className="card-text"> : </p>
                            </div>
                            <div className="col-lg-8  col-sm-12">
                                <p className="card-text"> أول متوسط </p>
                            </div>
                        </div>

                        <div className="row align-items-center justify-content-start mb-3 pb-2 border-bottom border-primary" >
                            <div className="col-lg-3  col-5">
                                <p className="card-text"> رقم الفصل </p>
                            </div>
                            <div className="col-1">
                                <p className="card-text"> : </p>
                            </div>
                            <div className="col-lg-8  col-sm-12">
                                <p className="card-text"> 5 </p>
                            </div>
                        </div>

                        <form action="">
                            <div className="row">
                                <label for="requestReason" className="form-label col-3"> سبب الاستئذان  </label>
                                <p className="col-1">:</p>
                            </div>
                            <textarea name="" id="requestReason" cols="30" rows="5" className="form-control border-primary" required></textarea>

                            <div className="mb-3">
                                <label for="formFile" className="form-label"> ارفاق مستند <span className="fs-6 text-opacity-50 text-danger">*اختياري</span> </label>
                                <input className="form-control border-primary" type="file" id="formFile" placeholder="اختر ملف" />
                            </div>

                            <button type="button" className="btn btn-primary text-center m-auto d-block"> ارسال </button>
                            
                        </form>
                    </div>
                
                    <div className="loader ">
                        <div className="typewriter">
                            <div className="slide"><i></i></div>
                            <div className="paper"></div>
                            <div className="keyboard"></div>
                        </div>
                    </div>

                    <div className="send-done ">
                        <div className="container h-100 d-flex justify-content-center align-items-center ">
                            <div className="row  justify-content-center align-items-center">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <i className="fa-regular fa-circle-check d-block text-center text-success"></i>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="text-center">
                                        <p className=" text-center fs-4 mb-2"> تم ارسال طلبك بنجاح </p>
                                        <a href="reuest.html" className="text-secondary text-decoration-underline"> العودة الى شاشة الاستئذان </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>

            </div>
        </section>

    </main>
  
</>
}


