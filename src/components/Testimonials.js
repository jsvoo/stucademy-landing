
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap"; 

import testImage from "../assets/images/hero_img.svg";

export default function Testimonials(){
    const scroller = useSwiper()
    return (
        <div className="testimonials-container">

            <button onClick={()=>scroller.slideNext()} >Next</button>
            <button onClick={()=>scroller.slidePrev()} >Previous</button> 
              <Row>
          <Col>
            <div className="screen-slider overflow-hidden swiper-initialized swiper-horizontal swiper-pointer-events">
              {/* swiper */}
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                centeredSlides={true}
                loop={true}
                
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: ".swiper-pagination" }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 3.5,
                  },
                  // 991: {
                  //   slidesPerView: 3,
                  // },
                  1024: {
                    slidesPerView: 4.2,
                  },
                }}
                className="py-5"
              >
                <div className="swiper-wrapper">

                  
                  <SwiperSlide className="swiper-slide ">
                    {/* <Row className="justify-content-center"> */}
                      <div className="p-3">
                        <div className="testimonial-box text-center">
                          <p className="text-muted mb-2">
                            “Itaque earum us tenetur sapiente delectus asperiores repellat.”
                          </p>
                          <p className="fs-10 fw-semibold lh-base mb-4 pb-3">
                            At vero eos et accusamus iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atqued corrupti as
                            quos dolores quas molestias excepturi occaecati provident.
                          </p>
                          <img
                            src={testImage}
                            alt=""
                            className="shadow rounded-circle"
                            width="70"
                            height={"70"}
                            style={{ objectFit: "cover" }}
                          />
                          <h5 className="fs-18 fw-semibold mt-4 mb-0">Mayra Vasquez</h5>
                          <p className="text-muted fs-14">Web Development, USA</p>
                        </div>
                      </div>
                    {/* </Row> */}
                  </SwiperSlide>



                  
                  <SwiperSlide className="swiper-slide">
                    {/* <Row className="justify-content-center"> */}
                      <div className="p-3">
                        <div className="testimonial-box text-center">
                          <p className="text-muted mb-2">
                            “Itaque earum us tenetur sapiente delectus asperiores repellat.”
                          </p>
                          <p className="fs-10 fw-semibold lh-base mb-4 pb-3">
                            At vero eos et accusamus iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atqued corrupti as
                            quos dolores quas molestias excepturi occaecati provident.
                          </p>
                          <img
                            src={testImage}
                            alt=""
                            className="shadow rounded-circle"
                            width="70"
                            height={"70"}
                            style={{ objectFit: "cover" }}
                          />
                          <h5 className="fs-18 fw-semibold mt-4 mb-0">Mayra Vasquez</h5>
                          <p className="text-muted fs-14">Web Development, USA</p>
                        </div>
                      </div>
                    {/* </Row> */}
                  </SwiperSlide>



                  
                  <SwiperSlide className="swiper-slide">
                    {/* <Row className="justify-content-center"> */}
                      <div className="p-3">
                        <div className="testimonial-box text-center">
                          <p className="text-muted mb-2">
                            “Itaque earum us tenetur sapiente delectus asperiores repellat.”
                          </p>
                          <p className="fs-10 fw-semibold lh-base mb-4 pb-3">
                            At vero eos et accusamus iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atqued corrupti as
                            quos dolores quas molestias excepturi occaecati provident.
                          </p>
                          <img
                            src={testImage}
                            alt=""
                            className="shadow rounded-circle"
                            width="70"
                            height={"70"}
                            style={{ objectFit: "cover" }}
                          />
                          <h5 className="fs-18 fw-semibold mt-4 mb-0">Mayra Vasquez</h5>
                          <p className="text-muted fs-14">Web Development, USA</p>
                        </div>
                      </div>
                    {/* </Row> */}
                  </SwiperSlide>



                  
                  <SwiperSlide className="swiper-slide">
                    {/* <Row className="justify-content-center"> */}
                      <div className="p-3">
                        <div className="testimonial-box text-center">
                          <p className="text-muted mb-2">
                            “Itaque earum us tenetur sapiente delectus asperiores repellat.”
                          </p>
                          <p className="fs-10 fw-semibold lh-base mb-4 pb-3">
                            At vero eos et accusamus iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atqued corrupti as
                            quos dolores quas molestias excepturi occaecati provident.
                          </p>
                          <img
                            src={testImage}
                            alt=""
                            className="shadow rounded-circle"
                            width="70"
                            height={"70"}
                            style={{ objectFit: "cover" }}
                          />
                          <h5 className="fs-18 fw-semibold mt-4 mb-0">Mayra Vasquez</h5>
                          <p className="text-muted fs-14">Web Development, USA</p>
                        </div>
                      </div>
                    {/* </Row> */}
                  </SwiperSlide>



                  
                  <SwiperSlide className="swiper-slide">
                    {/* <Row className="justify-content-center"> */}
                      <div className="p-3">
                        <div className="testimonial-box text-center">
                          <p className="text-muted mb-2">
                            “Itaque earum us tenetur sapiente delectus asperiores repellat.”
                          </p>
                          <p className="fs-10 fw-semibold lh-base mb-4 pb-3">
                            At vero eos et accusamus iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atqued corrupti as
                            quos dolores quas molestias excepturi occaecati provident.
                          </p>
                          <img
                            src={testImage}
                            alt=""
                            className="shadow rounded-circle"
                            width="70"
                            height={"70"}
                            style={{ objectFit: "cover" }}
                          />
                          <h5 className="fs-18 fw-semibold mt-4 mb-0">Mayra Vasquez</h5>
                          <p className="text-muted fs-14">Web Development, USA</p>
                        </div>
                      </div>
                    {/* </Row> */}
                  </SwiperSlide>



                  
                  <SwiperSlide className="swiper-slide">
                    {/* <Row className="justify-content-center"> */}
                      <div className="p-3">
                        <div className="testimonial-box text-center">
                          <p className="text-muted mb-2">
                            “Itaque earum us tenetur sapiente delectus asperiores repellat.”
                          </p>
                          <p className="fs-10 fw-semibold lh-base mb-4 pb-3">
                            At vero eos et accusamus iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atqued corrupti as
                            quos dolores quas molestias excepturi occaecati provident.
                          </p>
                          <img
                            src={testImage}
                            alt=""
                            className="shadow rounded-circle"
                            width="70"
                            height={"70"}
                            style={{ objectFit: "cover" }}
                          />
                          <h5 className="fs-18 fw-semibold mt-4 mb-0">Mayra Vasquez</h5>
                          <p className="text-muted fs-14">Web Development, USA</p>
                        </div>
                      </div>
                    {/* </Row> */}
                  </SwiperSlide>






                  {/* <SwiperSlide className="swiper-slide">
                    <img src={screenShot6} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot3} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot5} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot2} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot4} alt="" className="img-fluid" />
                  </SwiperSlide> */}

                  {/* duplicate slide */}
                  {/* <SwiperSlide className="swiper-slide">
                    <img src={screenShot1} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot6} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot3} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot5} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot2} alt="" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src={screenShot4} alt="" className="img-fluid" />
                  </SwiperSlide> */}
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </Swiper>
            </div>
          </Col>
        </Row>
        </div>
    )
}