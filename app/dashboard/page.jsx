import React from 'react'

export default function Dashboard() {
  return<>
  
    <section>
        <div className="container mt-5">
            <div className="row index-row align-items-center justify-content-center">

                <div className=" reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">

                    <div className="card text-center">
                        <div className="card-header">
                            <h3><i className="fa-solid fa-person-walking-arrow-right text-primary"></i></h3>
                            <h6> طلبات بانتظار الرد عليها </h6>
                        </div>
                        <div className="card-body">
                            <p className="fs-1">0</p>
                        </div>
                    </div>

                </div>

                <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">

                    <div className="card text-center">
                        <div className="card-header">
                            <h3><i className="fa-solid fa-envelope-circle-check text-info"></i></h3>
                            <h6> طلبات منتظرة الارسال الى المعلم </h6>
                        </div>
                        <div className="card-body">
                            <p className="fs-1">0</p>
                        </div>
                    </div>

                </div>

                <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3" >

                    <div className="card text-center">
                        <div className="card-header">
                            <h3><i className="fa-solid fa-list-check text-success"></i></h3>
                            <h6> عدد الطلبات المستلمة اليوم </h6>
                        </div>
                        <div className="card-body">
                            <p className="fs-1">0</p>
                        </div>
                    </div>

                </div>

                <div className="reqInfo col-lg-3 col-md-4 col-sm-6 mb-3">

                    <div className="card text-center">
                        <div className="card-header">
                            <h3><i className="fa-solid fa-coins text-warning"></i></h3>
                            <h6> الرصيد المتبقي </h6>
                        </div>
                        <div className="card-body">
                            <p className="fs-1">0</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  
  </>
}
