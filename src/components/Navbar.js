import React from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="top-0 left-0 w-full bg-teal-500 text-white shadow-lg z-10">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
               
                <ul className="flex space-x-4">
                    <li className="cursor-pointer">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            About
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link
                            to="internship_partners"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Internship Partners
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
