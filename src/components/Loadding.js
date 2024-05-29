import React from "react";

const Loadding = ({ isLoadding }) => {

    return (
        <div className={`text-white z-20 fixed bg-gray-900 transition-all duration-500 overflow-hidden  ${isLoadding ? 'h-screen w-full top-0' : 'h-0 w-full top-0'}`}>
            <div className="h-full flex justify-center items-center animate-bounce animate-ping">
                <div className="bg-white h-10 w-10 rounded-full"></div>
            </div>
            <div className={`flex flex-col bottom-10 left-10 justify-left animate-slideIn ${isLoadding ? 'fixed' : 'hidden'}`}>
                <h1 className="text-gray-500">Bem vindo</h1>
                <h2 className="font-bold text-2xl">Espere um pouco</h2>
            </div>
        </div>
    );
}

export default Loadding;