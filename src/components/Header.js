import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/1.png";
import logo2 from "../assets/2.png";

const Header = ({ isHovered, setIsHovered, isMouseClick, setIsMouseClick, isLoadding, isScroll }) => {
    return (
        <header className={`z-50 w-full bg-white p-5 flex justify-between items-center ${isScroll ? 'sticky top-0 opacity-90 ' : ''}`} >
            <Link
                to="/"
                className={`z-20 relative cursor-pointer font-bold transition-colors duration-500 hover:text-gray-400 ${isLoadding ? 'text-white' : isMouseClick ? 'text-white' : 'text-gray-900'}`}
            >
                <img src={isLoadding ? logo2 : isMouseClick ? logo2 : logo} alt="logo" className="w-52" />
            </Link>
            <div className="z-10 cursor-pointer flex justify-center items-center space-x-2" onClick={() => setIsMouseClick(!isMouseClick)}
                onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <h1 className={`mb-1 font-bold transition-colors duration-500 ${isHovered ? 'text-gray-400' : isMouseClick ? 'text-white' : ''
                    }`}>
                    {isMouseClick ? 'Close' : 'Menu'}
                </h1>
                <div className={` cursor-pointer transition-all duration-500 transform w-10 h-10 flex flex-col justify-center items-center
                    ${isMouseClick && isHovered ? 'rotate-180' : ''}`}

                >
                    <h1 className={` h-1 w-6 rounded-full transition-colors duration-500 ${isMouseClick ? 'rotate-45 bg-white' : 'bg-gray-900'} ${isHovered ? 'bg-gray-500' : ''}`}></h1>
                    <h1 className={` h-1 w-6 bg-gray-900 rounded-full transition-all duration-500 ${isHovered ? 'mt-2 mb-2 bg-gray-500' : 'mt-1 mb-1'} ${isMouseClick ? 'hidden' : ''}`}></h1>
                    <h1 className={` h-1 w-6 rounded-full transition-colors duration-500 ${isMouseClick ? '-rotate-45 -mt-1  bg-white' : 'bg-gray-900'} ${isHovered ? 'bg-gray-500' : ''}`}></h1>

                </div>
            </div>
        </header >
    );
}

export default Header;