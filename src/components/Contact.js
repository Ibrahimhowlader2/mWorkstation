import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';

const Contact = () => {
    return (
        <section className="py-20" id="contact">
            <h1 className="title">Contact</h1>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-6">
                    <article data-aos="fade-right" data-aos-duration="1000" className="shadow-3xl p-10 text-center group">
                        <FaMobileAlt className="text-5xl text-primary w-full m-auto" />

                        <div className=" w-28 group-hover:bg-primary group-hover:w-40 h-0.5 bg-gray m-auto my-6"></div>
                        <p class="text-gray">
                            <a className="block hover:text-primary text-grayDark text-lg mb-2" href="tel:+8801629161451">+8801629161451</a>
                            <a className="block hover:text-primary text-grayDark text-lg" href="tel:+8801629161451">+8801629161451</a>
                        </p>
                    </article>
                    <article data-aos="zoom-in" data-aos-duration="1000" className="shadow-3xl p-10 text-center group">
                        <AiOutlineMail className="text-5xl text-primary w-full m-auto" />

                        <div className=" w-28 group-hover:bg-primary group-hover:w-40 h-0.5 bg-gray m-auto my-6"></div>
                        <p class="text-gray">
                            <a className="block hover:text-primary text-grayDark text-lg mb-2" href="mailto:sibrahim.ih@gmail.com">sibrahim.ih@gmail.com</a>
                            <a className="block hover:text-primary text-grayDark text-lg" href="mailto:sibrahim.ih2@gmail.com">sibrahim.ih2@gmail.com</a>
                        </p>
                    </article>
                    <article data-aos="fade-left" data-aos-duration="1000" className="shadow-3xl p-10 text-center group">
                        <FiHome className="text-5xl text-primary w-full m-auto" />

                        <div className=" w-28 group-hover:bg-primary group-hover:w-40 h-0.5 bg-gray m-auto my-6"></div>
                        <p class="text-gray">
                            <a className="block hover:text-primary text-grayDark text-lg mb-2" href="#//">22 No. Distilary Rd, Gandaria Dhupkhola, Dhaka
                                Postal code (1204)</a>
                        </p>
                    </article>
                </div>
                <div className="max-w-5xl m-auto">
                    <h2 className="text-3xl text-grayDark inline-block mr-6 my-6">Get In Touch</h2>
                    <div className="inline-block w-[1px] h-6 bg-slate-300"></div> <span className="md:ml-6 text-gray md:inline-block block my-2">If you have any questions, just fill in the contact form, and we will answer you shortly.</span>
                    <form action="" className="">
                        <div className="flex flex-wrap justify-between">
                            <input type="text" name="name" placeholder="enter your name" className="box md:w-[49%] w-full p-4 text-xl transform-none border border-grayDark my-3" />
                            <input type="email" name="email" placeholder="enter your email" className="box md:w-[49%] w-full p-4 text-xl transform-none border border-grayDark my-3" />
                        </div>
                        <input type="number" min="0" name="number" placeholder="enter your number" className="box w-full p-4 text-xl transform-none border border-grayDark my-3" />
                        <textarea name="" id="" className="box w-full p-4 text-xl transform-none border border-grayDark my-3 h-72 resize-none" cols="30" rows="10" placeholder="enter your message" ></textarea>
                        <input type="submit" value="send message" name="send" className="btn cursor-pointer flex order-last" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;