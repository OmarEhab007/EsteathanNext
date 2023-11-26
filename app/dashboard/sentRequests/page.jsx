"use client";
import React from 'react';
import { useState, useEffect } from 'react';

export default function SendRequests() {
  return <>
  
    <section className="SentRequests">
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mt-5 mb-5 "> <i> الطلبات المرسلة  </i></h2>
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
        
                                <div>
                                    <h6> سبب الاستئذان </h6>
                                    <p className="card-text premationReson "> ذهاب الطالب الى المستشفى </p>
                                </div>

                                <div className="replyButtons mt-3 text-center">
                                    <button type="button" className="btn btn-outline-success me-3"> قبول الطلب </button>
                                    <button type="button" className="btn btn-outline-danger"> رفض الطلب </button>
                                </div>

                            </div>
                        </div>

                    </div>
                    

                </div>

            </div>
    </section>
  
  </>
}
