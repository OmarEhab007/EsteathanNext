import React from 'react'

export default function Reports() {
  return <>
  
    <section className='reports'>

        <div className="container">
        
            <div className="row justify-content-center align-items-center mt-5 mb-3">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4> تقرير الاستئذان </h4>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="startDate" className="form-label"> من </label>
                                            <input type="date" className="form-control" id="startDate" />
                                         </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="endDate" className="form-label"> إلى </label>
                                            <input type="date" className="form-control" id="endDate" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-primary"> عرض </button>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <button type="button" className="btn btn-warning ms-auto d-block"> طباعة </button>
                                        </div>
                                    </div>

                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reportPrint">

                <div className="row justify-content-center align-items-center mt-5 mb-3">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4> تقرير الاستئذان </h4>
                            </div>
                            <div className="card-body">
                                <div className="row border-secondary  reportDate mb-3">
                                    <div className="col-5 ">
                                        <div className="mb-3 text-center">
                                            <p><span className='fw-bold' > من : </span> 3/10/2032 </p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="mb-3 text-center">
                                            <p> : </p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="mb-3 text-center">
                                            <p><span className='fw-bold' > إلى : </span> 20/10/2032 </p>
                                        </div>
                                </div>
                                </div>

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"> م </th>
                                            <th scope="col">الاسم</th>
                                            <th scope="col">هوية الطالب</th>
                                            <th scope="col"> السنة الدراسية </th>
                                            <th scope="col">  الفصل </th>
                                            <th scope="col">  رقم ولي الأمر </th>
                                            <th scope="col">  تاريخ الاستئذان </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>أحمد محمد محمود</td>
                                            <td>0123456789</td>
                                            <td> أول متوسط </td>
                                            <td> 5 </td>
                                            <td> 0123456789 </td>
                                            <td> 2021-10-10 </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>أحمد محمد محمود</td>
                                            <td>0123456789</td>
                                            <td> أول متوسط </td>
                                            <td> 5 </td>
                                            <td> 0123456789 </td>
                                            <td> 2021-10-10 </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>أحمد محمد محمود</td>
                                            <td>0123456789</td>
                                            <td> أول متوسط </td>
                                            <td> 5 </td>
                                            <td> 0123456789 </td>
                                            <td> 2021-10-10 </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                

            </div>

            

        </div>

    </section>
  
  </>
}
