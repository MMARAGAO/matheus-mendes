import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

const Loadding = ({ isLoadding }) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3fafff,
                backgroundColor: 0x0,
                maxDistance: 17.00,
                spacing: 20.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    return (
        <div ref={myRef}
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