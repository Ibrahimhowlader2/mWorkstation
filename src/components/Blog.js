import React from 'react';
import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';
import blog4 from '../img/blog4.jpg';

const Blog = () => {
    return (
        <section className="py-20" id="blog">
            <h1 className="title">Latest Blog Posts</h1>
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-8">
                    <article data-aos="fade-right" data-aos-duration="600" className="box text-center rounded  shadow-3xl">
                        <div className="image h-80 w-full rounded overflow-hidden">
                            <img className=" h-full w-full object-cover  transform hover:scale-110" src={blog1} alt="" />
                        </div>
                        <div class="content p-6">
                            <div class="icons relative -top-3 rounded p-2 inline-block border">
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-calendar pr-1 text-primary"></i> 21st may, 2021 </a>
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-user pr-1 text-primary"></i> by admin </a>
                            </div>
                            <h3 className="text-xl text-grayDark font-normal capitalize">blog title goes here.</h3>
                            <p className="text-sm text-gray py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="#/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </article>
                    <article data-aos="fade-right" data-aos-duration="1000" className="box text-center rounded  shadow-3xl">
                        <div className="image h-80 w-full rounded overflow-hidden">
                            <img className=" h-full w-full object-cover  transform hover:scale-110" src={blog2} alt="" />
                        </div>
                        <div class="content p-6">
                            <div class="icons relative -top-3 rounded p-2 inline-block border">
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-calendar pr-1 text-primary"></i> 21st may, 2021 </a>
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-user pr-1 text-primary"></i> by admin </a>
                            </div>
                            <h3 className="text-xl text-grayDark font-normal capitalize">blog title goes here.</h3>
                            <p className="text-sm text-gray py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="#/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </article>
                    <article data-aos="fade-right" data-aos-duration="1400" className="box text-center rounded  shadow-3xl">
                        <div className="image h-80 w-full rounded overflow-hidden">
                            <img className=" h-full w-full object-cover  transform hover:scale-110" src={blog3} alt="" />
                        </div>
                        <div class="content p-6">
                            <div class="icons relative -top-3 rounded p-2 inline-block border">
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-calendar pr-1 text-primary"></i> 21st may, 2021 </a>
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-user pr-1 text-primary"></i> by admin </a>
                            </div>
                            <h3 className="text-xl text-grayDark font-normal capitalize">blog title goes here.</h3>
                            <p className="text-sm text-gray py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="#/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </article>
                    <article data-aos="fade-right" data-aos-duration="1800" className="box text-center rounded  shadow-3xl">
                        <div className="image h-80 w-full rounded overflow-hidden">
                            <img className=" h-full w-full object-cover  transform hover:scale-110" src={blog4} alt="" />
                        </div>
                        <div class="content p-6">
                            <div class="icons relative -top-3 rounded p-2 inline-block border">
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-calendar pr-1 text-primary"></i> 21st may, 2021 </a>
                                <a className="text-base hover:text-primary mx-3 text-grayDark" href="#/"> <i class="fas fa-user pr-1 text-primary"></i> by admin </a>
                            </div>
                            <h3 className="text-xl text-grayDark font-normal capitalize">blog title goes here.</h3>
                            <p className="text-sm text-gray py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="#/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blog;