import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./HomeBanner.css"

// import required modules
import { Autoplay, Pagination } from "swiper";

const HomeBanner = () => {


    return (
        <>
            <section className="home">

                <Swiper
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}

                    className="swiper w-full h-[50rem] home-slider">

                    <div className="swiper-wrapper">

                        <SwiperSlide data-aos className="swiper-slide slide flex items-center justify-center text-center"
                            style={{
                                backgroundImage: `url(${require('../img/slider-1.jpg')})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="content ">

                                <h3
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className="lg:text-7xl md:text-5xl text-3xl"

                                >Award-Winning Software!</h3>

                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="1500"
                                    className=" w-3/4 m-auto text-base font-semibold mt-5 mb-8 text-gray">We are a team of qualified software developers, aimed at creating unique and powerful tools for your business and everyday life.</p>

                                <a href="#/" className="btn">get in touch</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide data-aos className="swiper-slide slide flex items-center justify-center text-center"
                            style={{
                                backgroundImage: `url(${require('../img/slider-2.jpg')})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="content">
                                <h3 className="lg:text-7xl md:text-5xl text-3xl">Experienced Team!</h3>
                                <p className=" w-3/4 m-auto text-base font-semibold mt-5 mb-8 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                                <a href="#/" className="btn">get in touch</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide flex items-center justify-center text-center"
                            style={{
                                backgroundImage: `url(${require('../img/slider-3.jpg')})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="content">
                                <h3 className="lg:text-7xl md:text-5xl text-3xl">Mobile App Development</h3>
                                <p className=" w-3/4 m-auto text-base font-semibold mt-5 mb-8 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                                <a href="#/" className="btn">get in touch</a>
                            </div>
                        </SwiperSlide>

                    </div>

                    <div className="swiper-pagination"></div>

                </Swiper>

            </section>
        </>
    );
};

export default HomeBanner;