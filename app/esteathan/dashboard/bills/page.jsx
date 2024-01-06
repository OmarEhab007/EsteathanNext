"use client"
import React, { useState } from 'react';
import Image from "next/image.js";
import icon from "../../bigIcon.png";

export default function Pills() {

    const [isPrintMode, setIsPrintMode] = useState(false);

    const handlePrint = () => {
        setIsPrintMode(true);
        // Wait for a short time before printing (e.g., 500 milliseconds)
        setTimeout(() => {
            window.print();
            setIsPrintMode(false); // Reset the print mode after printing
        }, 500);
    };

  return (
    <>
      <section className={`bills my-5 ${isPrintMode ? 'printable' : ''}`}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center mt-2"> فاتورة الاشتراك </h4>
                  <button className="btn esteathan-btn p-1 px-3" onClick={handlePrint}> طباعة </button>
                </div>
                <div className="card-body billPrint">
                  <figure className="text-center">
                    <Image
                      src={icon}
                      alt="icon"
                      placeholder="blur"
                      width={150}
                    />
                  </figure>

                  <div className="row align-items-center">

                    <div className="col-6 mb-3">
                        <div className="text-center d-flex justify-content-around align-items-center">
                            <h6 className="col-6"> رقم الفاتورة: </h6>
                            <span className="mb-1"> 123456789 </span>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="text-center d-flex justify-content-around align-items-center">
                            <h6 className="col-6">  تاريخ الفاتورة: </h6>
                            <span className="mb-1"> 20/1/2024 </span>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <div className="d-flex ">
                            <h6 className=" col-3"> عناية / </h6>
                            <span className="col-9"> عبدالحميد عبيد الله الجابري </span>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <div className="d-flex ">
                            <h6 className="col-3"> مدرسة / </h6>
                            <span className="col-9">  ثانوية أبي قتادة الأنصاري </span>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                    
                        <div>

                            <table className="table table-striped table-bordered borderem overflow-hidden">
                                <thead>
                                    <tr>
                                        <th> الوصف </th>
                                        <th> المبلغ </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 
                                            <p>اشتراك في خدمة</p>
                                            <p> برنامج <span className="markUs">استئذان</span> لمدة  </p>
                                            <p><span className="markUs"> (فصل دراسي واحد) </span> </p>
                                         </td>
                                        <td> 150 ريال سعودي </td>
                                    </tr> 
                                </tbody>
                            </table>
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
  );
}
