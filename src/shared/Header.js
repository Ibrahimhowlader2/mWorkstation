import React, { useState } from 'react';
import { links } from "../Data/Data"
import { AiOutlineSetting } from 'react-icons/ai';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#");
    return (
        <>
            <header className="header sticky top-0 left-0 right-0 z-[1000] bg-white flex items-center justify-between py-4 px-[9%] border-b border-primary">
            <a href="/" className="logo mr-auto text-2xl text-primaryGray font-semibold"> <AiOutlineSetting className="text-primary inline-block"/> mWorkstation </a>
                {isMenuOpen ?
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-btn" className="fas fa-times text-2xl text-primaryGray cursor-pointer hidden"></div>
                    :
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-btn" className="fas fa-bars text-2xl text-primaryGray cursor-pointer hidden"></div>
                }
                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="">
                    {
                            links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id} className="relative float-left">
                                        <a onClick={()=> setActiveNav(`${url}`)} className={activeNav === `${url}` ? "activeLink" : "navLink"} href={url}>{text}</a>

                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
// relative float-left
