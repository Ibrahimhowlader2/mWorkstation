import React from 'react';
import index from '../img/index.jpg';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
const Services = () => {
    return (
        <section className="py-20" id="services">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                    <div className="lg:w-2/5 w-full ">
                        <div><img src={index} className="w-2/3 m-auto" alt="" /></div>
                    </div>


                    <div className="lg:w-3/5 w-full grid md:grid-cols-2 gap-10">
                        <article data-aos="fade-left" data-aos-duration="600" className="shadow-3xl p-10 text-center group">

                            <h5 className="text-3xl text-gray text-center my-8">
                                <a href="#/">Se All Services</a>
                            </h5>
                            <div className=" w-28 group-hover:bg-primary group-hover:w-40 h-0.5 bg-gray m-auto mt-6 "></div>
                            <a href="#/" className="btn mt-10 ">All Services</a>

                        </article>
                        <article data-aos="fade-left" data-aos-duration="1000" className="shadow-3xl p-10 text-center group">
                            <BsFillTelephoneInboundFill className="text-5xl text-primary w-full m-auto" />
                            <h5 className="text-xl text-gray text-center my-8">
                                <a href="#/">CORPORATE SOLUTIONS</a>
                            </h5>
                            <div className=" w-28 group-hover:bg-primary group-hover:w-40 h-0.5 bg-gray m-auto my-6"></div>
                            <p class="text-gray">Need specific software for your company? We are ready to develop it!</p>
                        </article>
                        <article data-aos="fade-left" data-aos-duration="1400" className="shadow-3xl p-10 text-center group">
                            <BsFillTelephoneInboundFill className="text-5xl text-primary w-full m-auto" />
                            <h5 className="text-xl text-gray text-center my-8">
                                <a href="#/">CORPORATE SOLUTIONS</a>
                            </h5>
                            <div className=" w-28 group-hover:bg-primary group-hover:w-40 h-0.5 bg-gray m-auto my-6"></div>
                            <p class="text-gray">Need specific software for your company? We are ready to develop it!</p>
                        </article>
                        <article data-aos="fade-left" data-aos-duration="1800" className="shadow-3xl p-10 text-center group">
                            <BsFillTelephoneInboundFill className="text-5xl text-primary w-full m-auto" />
                            <h5 className="text-xl text-gray text-center my-8">
                                <a href="#/">CORPORATE SOLUTIONS</a>
                            </h5>
                            <div className=" w-28 group-hover:bg-primary group-hover:w-40 h-0.5 bg-gray m-auto my-6"></div>
                            <p class="text-gray">Need specific software for your company? We are ready to develop it!</p>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
};
/* <article class="box-icon-modern box-icon-modern-2">
                    <div class="box-icon-modern-icon linearicons-phone-in-out">
                    </div>
                    <h5 class="box-icon-modern-title">
                        <a href="single-service.html">CORPORATE SOLUTIONS</a>
                    </h5>
                    <div class="box-icon-modern-decor">
                    </div>
                    <p class="box-icon-modern-text">Need specific software for your company? We are ready to develop it!</p>
                  </article>
                  
                  .box-icon-modern-decor::before {
    position: absolute;
    content: '';
    height: 100%;
    left: 15px;
    right: 15px;
    background: #d7d7d7;
    transition: all .3s ease;
}
                  */
export default Services;