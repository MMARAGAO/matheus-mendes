import React, { useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from 'p5';

const Loadding = ({ isLoadding }) => {
    const vantaref = useRef(null);

    useEffect(() => {
        let vantaEffect;
        if (isLoadding && !vantaEffect && vantaref.current) {
            vantaEffect = TOPOLOGY({
                el: vantaref.current,
                p5: p5,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 0.01,
                scaleMobile: 0.01,
                color: 0x2b4d8c,
                backgroundColor: 0x000000,
            });
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [isLoadding]);


    return (
        <div ref={vantaref}
            className={`text-white z-20 fixed bg-black transition-all duration-500 overflow-hidden  ${isLoadding ? 'h-screen w-full top-0' : 'h-0 w-full top-0'}`}>
            <div className="h-full flex justify-center items-center animate-bounce animate-ping">
                <div className="bg-gray-700 h-10 w-10 rounded-full"></div>
            </div>
            <div className={`flex flex-col bottom-10 left-10 justify-left animate-slideIn ${isLoadding ? 'fixed' : 'hidden'}`}>
                <h1 className="text-gray-500">Bem vindo</h1>
                <h2 className="font-bold text-2xl">Espere um pouco</h2>
            </div>
        </div>
    );
}

export default Loadding;