import React from 'react';
import pic1 from '../img/pic-1.png'
import pic2 from '../img/pic-2.png'
import pic3 from '../img/pic-3.png'

const Reviews = () => {
    return (
        <section className="py-20" id="reviews">
            <h1 className="title">What People Say</h1>

            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 md:gap-10 gap-8 ">
                    <article data-aos="fade-right" data-aos-duration="1000">
                        <p className="text p-6 text-lg italic bg-slate-200 rounded-md leading-relaxed relative z-0 mb-10  before:absolute before:-bottom-5 before:left-3 before:h-10 before:w-10 before:bg-slate-200 before:transform before:rotate-45 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                        <div className="user flex items-center gap-4">
                            <img className="w-24 h-24 rounded-full" src={pic1} alt="" />
                            <div className="info">
                                <h3 className="text-2xl text-grayDark">
                                    Catherine Williams</h3>
                                <span className="text-primary text-xl">Regular client</span>
                            </div>
                        </div>
                    </article>
                    <article data-aos="fade-up" data-aos-duration="1000">
                        <p className="text p-6 text-lg italic bg-slate-200 rounded-md leading-relaxed relative z-0 mb-10  before:absolute before:-bottom-5 before:left-3 before:h-10 before:w-10 before:bg-slate-200 before:transform before:rotate-45 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                        <div className="user flex items-center gap-4">
                            <img className="w-24 h-24 rounded-full" src={pic2} alt="" />
                            <div className="info">
                                <h3 className="text-2xl text-grayDark">
                                    Catherine Williams</h3>
                                <span className="text-primary text-xl">Regular client</span>
                            </div>
                        </div>
                    </article>
                    <article data-aos="fade-left" data-aos-duration="1000">
                        <p className="text p-6 text-lg italic bg-slate-200 rounded-md leading-relaxed relative z-0 mb-10  before:absolute before:-bottom-5 before:left-3 before:h-10 before:w-10 before:bg-slate-200 before:transform before:rotate-45 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                        <div className="user flex items-center gap-4">
                            <img className="w-24 h-24 rounded-full" src={pic3} alt="" />
                            <div className="info">
                                <h3 className="text-2xl text-grayDark">
                                    Catherine Williams</h3>
                                <span className="text-primary text-xl">Regular client</span>
                            </div>
                        </div>
                    </article>
                    
                </div>
            </div>
        </section>
    );
};

export default Reviews;