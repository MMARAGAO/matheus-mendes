import React from "react";

const Menu = ({ isHovered, setIsHovered, isMouseClick, setIsMouseClick }) => {
    return (
        <div className={`bg-gray-900  fixed  transition-all duration-500
         ${isMouseClick ? 'h-screen w-full bottom-0' : 'h-0 w-full top-0'}`}>

        </div>

    );
}

export default Menu;