import React from 'react';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';
const OurTeam = () => {
    return (
        <section className="py-20 2xl:h-[50rem]" id="team">
            <h1 className="title">Meet The Team</h1>
           
            <div className="container">
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-8 items-start">

                    <article data-aos="fade-left" data-aos-duration="600" className="box shadow-3xl overflow-hidden text-center grayscale hover:filter-none group">
                        <img src={team1} className="w-full" alt="" />
                        <div className="content group-hover:mb-0 p-6 mb-[-6rem]">
                            <h3 className="text-3xl capitalize text-grayDark">Sam Robinson</h3>
                            <p className="text-lg  text-gray py-2">Senior Developer</p>
                            <div className="share mt-5">
                                <a href="#/" className="fab fa-facebook-f h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-twitter h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-instagram h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-linkedin h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                            </div>
                        </div>
                    </article>
                    <article data-aos="fade-left" data-aos-duration="1000" className="box shadow-3xl overflow-hidden text-center grayscale hover:filter-none group">
                        <img src={team2} className="w-full" alt="" />
                        <div className="content group-hover:mb-0 p-6 mb-[-6rem]">
                            <h3 className="text-3xl capitalize text-grayDark">Ryan Wilson</h3>
                            <p className="text-lg  text-gray py-2">Software Developer</p>
                            <div className="share mt-5">
                                <a href="#/" className="fab fa-facebook-f h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-twitter h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-instagram h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-linkedin h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                            </div>
                        </div>
                    </article>
                    <article data-aos="fade-left" data-aos-duration="1400" className="box shadow-3xl overflow-hidden text-center grayscale hover:filter-none group">
                        <img src={team3} className="w-full" alt="" />
                        <div className="content group-hover:mb-0 p-6 mb-[-6rem]">
                            <h3 className="text-3xl capitalize text-grayDark">john deo</h3>
                            <p className="text-lg  text-gray py-2">UI Designer</p>
                            <div className="share mt-5">
                                <a href="#/" className="fab fa-facebook-f h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-twitter h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-instagram h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-linkedin h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                            </div>
                        </div>
                    </article>
                    <article data-aos="fade-left" data-aos-duration="1800" className="box shadow-3xl overflow-hidden text-center grayscale hover:filter-none group">
                        <img src={team4} className="w-full" alt="" />
                        <div className="content group-hover:mb-0 p-6 mb-[-6rem]">
                            <h3 className="text-3xl capitalize text-grayDark">Ibrahim Howlader</h3>
                            <p className="text-lg  text-gray py-2">Front End Developer (Intern)</p>
                            <div className="share mt-5">
                                <a href="#/" className="fab fa-facebook-f h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-twitter h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-instagram h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                                <a href="#/" className="fab fa-linkedin h-12 w-12 leading-[3rem] bg-grayDark m-2 text-white hover:bg-primary"> </a>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default OurTeam;