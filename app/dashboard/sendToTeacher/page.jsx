import React from 'react'

export default function SendToTeasher() {
  return <>
  
    <section className="sendToTeacher">
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mt-5 mb-5 "> <i> ارسال لمعلم </i></h2>
                </div>
                
                <div className="col-md-6 mb-3">

                    <div className="card border-primary" >
                        <div className="card-header border-primary"> 
                            <div className="row justify-content-start align-items-center" >
                                <div className="col-lg-3  col-5">
                                    <h6 className="mb-0"> اسم الطالب  </h6>
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
                                    <h6 className="card-text"> هوية الطالب </h6>
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
                                    <h6 className="card-text"> السنة الدراسية </h6>
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
                                    <h6 className="card-text"> رقم الفصل </h6>
                                </div>
                                <div className="col-1">
                                    <p className="card-text"> : </p>
                                </div>
                                <div className="col-lg-8  col-sm-12">
                                    <p className="card-text"> 5 </p>
                                </div>
                            </div>
                            
                            <form action="">

                                <div className="row align-items-center justify-content-start mb-3 mt-3" >
                                    <div className="col-lg-3  col-5">
                                        <h6 className="card-text"> اسم المعلم </h6>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>اختر المعلم</option>
                                            <option value="1">معلم 1</option>
                                            <option value="2">معلم 2</option>
                                            <option value="3">معلم 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-start " >
                                    <div className="col-lg-3  col-5">
                                        <label for="exampleFormControlTextarea1" className="card-text fw-semibold"> تفاصيل الطلب </label>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"> آمل السماح للطالب أحمد محمد عزيزي بالخروج من الفصل بكتبه. </textarea>
                                    </div>
                                    <div className="sendToteacherButton text-center">
                                        <button type="button" className="btn btn-primary  mt-3 ">ارسال</button>
                                    </div>
                                </div>

                            </form>
                            

                        </div>
                    </div>

                </div>

                <div className="col-md-6 mb-3">

                    <div className="card border-primary" >
                        <div className="card-header border-primary"> 
                            <div className="row justify-content-start align-items-center" >
                                <div className="col-lg-3  col-5">
                                    <h6 className="mb-0"> اسم الطالب  </h6>
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
                                    <h6 className="card-text"> هوية الطالب </h6>
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
                                    <h6 className="card-text"> السنة الدراسية </h6>
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
                                    <h6 className="card-text"> رقم الفصل </h6>
                                </div>
                                <div className="col-1">
                                    <p className="card-text"> : </p>
                                </div>
                                <div className="col-lg-8  col-sm-12">
                                    <p className="card-text"> 5 </p>
                                </div>
                            </div>
                            
                            <form action="">

                                <div className="row align-items-center justify-content-start mb-3 mt-3" >
                                    <div className="col-lg-3  col-5">
                                        <h6 className="card-text"> اسم المعلم </h6>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>اختر المعلم</option>
                                            <option value="1">معلم 1</option>
                                            <option value="2">معلم 2</option>
                                            <option value="3">معلم 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-start " >
                                    <div className="col-lg-3  col-5">
                                        <label for="exampleFormControlTextarea1" className="card-text fw-semibold"> تفاصيل الطلب </label>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"> آمل السماح للطالب أحمد محمد عزيزي بالخروج من الفصل بكتبه. </textarea>
                                    </div>
                                    <div className="sendToteacherButton text-center">
                                        <button type="button" className="btn btn-primary  mt-3 ">ارسال</button>
                                    </div>
                                </div>

                            </form>
                            

                        </div>
                    </div>

                </div>

                <div className="col-md-6 mb-3">

                    <div className="card border-primary" >
                        <div className="card-header border-primary"> 
                            <div className="row justify-content-start align-items-center" >
                                <div className="col-lg-3  col-5">
                                    <h6 className="mb-0"> اسم الطالب  </h6>
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
                                    <h6 className="card-text"> هوية الطالب </h6>
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
                                    <h6 className="card-text"> السنة الدراسية </h6>
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
                                    <h6 className="card-text"> رقم الفصل </h6>
                                </div>
                                <div className="col-1">
                                    <p className="card-text"> : </p>
                                </div>
                                <div className="col-lg-8  col-sm-12">
                                    <p className="card-text"> 5 </p>
                                </div>
                            </div>
                            
                            <form action="">

                                <div className="row align-items-center justify-content-start mb-3 mt-3" >
                                    <div className="col-lg-3  col-5">
                                        <h6 className="card-text"> اسم المعلم </h6>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>اختر المعلم</option>
                                            <option value="1">معلم 1</option>
                                            <option value="2">معلم 2</option>
                                            <option value="3">معلم 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-start" >
                                    <div className="col-lg-3  col-5">
                                        <label for="exampleFormControlTextarea1" className="card-text fw-semibold"> تفاصيل الطلب </label>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"> نرجو منكم الموافقة على طلب الطالب للخروج من المدرسة لظروف خاصة </textarea>
                                    </div>
                                    <div className="sendToteacherButton text-center">
                                        <button type="button" className="btn btn-primary  mt-3 ">ارسال</button>
                                    </div>
                                </div>

                            </form>
                            

                        </div>
                    </div>

                </div>

                <div className="col-md-6 mb-3">

                    <div className="card border-primary" >
                        <div className="card-header border-primary"> 
                            <div className="row justify-content-start align-items-center" >
                                <div className="col-lg-3  col-5">
                                    <h6 className="mb-0"> اسم الطالب  </h6>
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
                                    <h6 className="card-text"> هوية الطالب </h6>
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
                                    <h6 className="card-text"> السنة الدراسية </h6>
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
                                    <h6 className="card-text"> رقم الفصل </h6>
                                </div>
                                <div className="col-1">
                                    <p className="card-text"> : </p>
                                </div>
                                <div className="col-lg-8  col-sm-12">
                                    <p className="card-text"> 5 </p>
                                </div>
                            </div>
                            
                            <form action="">

                                <div className="row align-items-center justify-content-start mb-3 mt-3" >
                                    <div className="col-lg-3  col-5">
                                        <h6 className="card-text"> اسم المعلم </h6>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>اختر المعلم</option>
                                            <option value="1">معلم 1</option>
                                            <option value="2">معلم 2</option>
                                            <option value="3">معلم 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-start " >
                                    <div className="col-lg-3  col-5">
                                        <label for="exampleFormControlTextarea1" className="card-text fw-semibold"> تفاصيل الطلب </label>
                                    </div>
                                    <div className="col-1">
                                        <p className="card-text"> : </p>
                                    </div>
                                    <div className="col-lg-8  col-sm-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"> نرجو منكم الموافقة على طلب الطالب للخروج من المدرسة لظروف خاصة </textarea>
                                    </div>
                                    <div className="sendToteacherButton text-center">
                                        <button type="button" className="btn btn-primary  mt-3 ">ارسال</button>
                                    </div>
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
