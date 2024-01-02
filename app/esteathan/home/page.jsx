import Link from "next/link";
import React from "react";
import Image from "next/image";
import PriceTag from "../Price.png";

export default function Home() {
  return (
    <>
      <section className="home d-flex justify-content-center align-items-center my-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 ">
              <div className="landing">
                <h1 className="text-lg-start text-md-center text-sm-center text-center mb-4">مرحبا بكم في <span className="markUs">استئذان</span></h1>
                <p className="text-lg-start text-md-center text-sm-center text-center mb-3">
                  برنامج استئذان يسهل عملية خروج الطالب من المدرسة بكل يسير وسهولة من خلال استخدام التقنية للتيسير على أولياء الامور دون الحضور للمدرسة ، فهو يخدم عملية الخروج بداية من ولي أمر الطالب وهو  في بيته إلى خروج الطالب من المدرسة بخطوات يسيره ومثبته للرجوع إليها عند الحاجة 
                </p>
                <p className="text-center markUs">
                 برنامج استئذان من أي مكان
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="video text-center">
                <iframe
                  width="100%"  
                  src="https://www.youtube.com/embed/nLEumLwBUVI?si=8I5QjOUOAaqX-0a0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

         {/* subscription buttons */}
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-6">
              <div className="subscription">
                <div className="d-flex justify-content-center align-items-center">
                  
                  <Link href="/signin" className="btn esteathan-btn me-3 py-1">
                     تسجيل الدخول
                  </Link>
                  <Link href="/esteathan/home/subscription" className="btn esteathan-outline-btn py-1">
                    اشتراك جديد
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-12">
              <div className="subscription">
                <div className="d-flex justify-content-center align-items-center">
                  <h2 className="text-lg-start text-md-center mb-4 fs-1">اشتراكاتنا</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="subscription-card  text-center">
                <div className="card subscription-card-1">
                  <div className="card-body">
                    <h5 className="card-title"> الإشتراك البرونزي </h5>
                    <p className="card-text">
                      يمكنك الاشتراك لمدة فصل دراسي واحد   
                    </p>
                    <div className="d-flex justify-content-center mb-3 position-relative">
                      <Image
                        src={PriceTag}
                        alt="icon"
                        placeholder="blur"
                        width={120}
                      />{" "}
                      <p className="card-text position-absolute top-50 end-50 price"> 150 ريال </p>
                    </div>
                    
                    <Link href="/esteathan/home/subscription" className="btn esteathan-btn py-1">
                      اشترك الان
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="subscription-card  text-center">
                <div className="card subscription-card-2">
                  <div className="card-body">
                    <h5 className="card-title"> الإشتراك الفضي </h5>
                    <p className="card-text">
                      يمكنك الاشتراك لمدة فصلان دراسي واحد   
                    </p>
                    <div className="d-flex justify-content-center mb-3 position-relative">
                      <Image
                        src={PriceTag}
                        alt="icon"
                        placeholder="blur"
                        width={120}
                      />{" "}
                      <p className="card-text position-absolute top-50 end-50 price"> 250 ريال </p>
                    </div>
                    
                    <Link href="/esteathan/home/subscription" className="btn esteathan-btn py-1">
                      اشترك الان
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="subscription-card  text-center">
                <div className="card subscription-card-3">
                  <div className="card-body">
                    <h5 className="card-title"> الإشتراك الذهبي </h5>
                    <p className="card-text">
                      يمكنك الاشتراك لمدة سنة كاملة   
                    </p>
                    <div className="d-flex justify-content-center mb-3 position-relative">
                      <Image
                        src={PriceTag}
                        alt="icon"
                        placeholder="blur"
                        width={120}
                      />{" "}
                      <p className="card-text position-absolute top-50 end-50 price"> 350 ريال </p>
                    </div>
                    
                    <Link href="/esteathan/home/subscription" className="btn esteathan-btn py-1">
                      اشترك الان
                    </Link>
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
