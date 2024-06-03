import React, { useState, useEffect, useRef, useCallback } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from 'p5';


const Menu = ({ isMouseClick, setIsMouseClick }) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    const vantaConfig = {
        el: vantaRef.current,
        p5: p5,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 50.0,
        minWidth: 50.0,
        scale: 0.01,
        scaleMobile: 0.01,
        color: 0x2b4d8c,
        backgroundColor: 0x000000,
        points: 1.0,
        maxDistance: 5.0,
        spacing: 50.0,
        showDots: false,
        showLines: false
    };

    const cleanup = useCallback(() => {
        if (vantaEffect) {
            vantaEffect.destroy();
            setVantaEffect(null);
        }
    }, [vantaEffect]);



    useEffect(() => {
        let vantaTimeout;
        if (isMouseClick && !vantaEffect && vantaRef.current) {
            vantaTimeout = setTimeout(() => {
                const effect = TOPOLOGY({
                    ...vantaConfig,
                    el: vantaRef.current
                });
                setVantaEffect(effect);
            }, 500);
        }

        if (!isMouseClick && vantaEffect) {
            cleanup();
        }

        return () => {
            if (vantaTimeout) clearTimeout(vantaTimeout);
            cleanup();
        };
    }, [isMouseClick, vantaEffect, cleanup]);


    const [hoverButton, setHoverButton] = useState('')




    return (
        <div
            ref={vantaRef}
            className={`bg-black fixed transition-all duration-500 overflow-hidden
            ${isMouseClick ? 'h-screen w-full bottom-0' : 'h-0 w-full top-0'}`}>
            <div className="w-full h-full flex justify-center items-center flex-col -ml-8">
                <div

                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-14 h-1  rounded-full" >
                        <div ></div>
                    </div>
                    <button className="text-gray-400 text-sm"
                    >Menu</button>
                </div>
                <div
                    onMouseOver={() => setHoverButton('projects')}
                    onMouseOut={() => setHoverButton('')}
                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-14 h-1  rounded-full" >
                        <div className={` h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'projects' ? 'w-14 ml-4' : 'w-0'}`}></div>
                    </div>
                    <button className={` text-4xl lg:text-6xl font-bold ${hoverButton === 'projects' ? 'text-white' : 'text-gray-400'}`}
                    >Projects</button>
                </div>
                <div
                    onMouseOver={() => setHoverButton('About')}
                    onMouseOut={() => setHoverButton('')}
                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-14 h-1  rounded-full" >
                        <div className={` h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'About' ? 'w-14 ml-4' : 'w-0'}`}></div>

                    </div>
                    <button className={` text-4xl lg:text-6xl font-bold ${hoverButton === 'About' ? 'text-white' : 'text-gray-400'}`}>About me</button>
                </div>
                <div
                    onMouseOver={() => setHoverButton('Contact')}
                    onMouseOut={() => setHoverButton('')}
                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-14 h-1  rounded-full" >
                        <div className={` h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'Contact' ? 'w-14 ml-4' : 'w-0'}`}></div>

                    </div>
                    <button className={` text-4xl lg:text-6xl font-bold ${hoverButton === 'Contact' ? 'text-white' : 'text-gray-400'}`}>Contact</button>
                </div>
                <div
                    onMouseOver={() => setHoverButton('Dribbble')}
                    onMouseOut={() => setHoverButton('')}
                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-14 h-1  rounded-full" >
                        <div className={` h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'Dribbble' ? 'w-14 ml-4' : 'w-0'}`}></div>

                    </div>
                    <button className={` text-4xl lg:text-6xl font-bold ${hoverButton === 'Dribbble' ? 'text-white' : 'text-gray-400'}`}>Dribbble</button>
                </div>
                <div
                    onMouseOver={() => setHoverButton('Instagram')}
                    onMouseOut={() => setHoverButton('')}
                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-14 h-1  rounded-full" >
                        <div className={` h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'Instagram' ? 'w-14 ml-4' : 'w-0'}`}></div>

                    </div>
                    <button className={` text-4xl lg:text-6xl font-bold ${hoverButton === 'Instagram' ? 'text-white' : 'text-gray-400'}`}>Instagram</button>
                </div>
                <div
                    onMouseOver={() => setHoverButton('Behance')}
                    onMouseOut={() => setHoverButton('')}
                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-14 h-1  rounded-full" >
                        <div className={` h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'Behance' ? 'w-14 ml-4' : 'w-0'}`}></div>

                    </div>
                    <button className={` text-4xl lg:text-6xl font-bold ${hoverButton === 'Behance' ? 'text-white' : 'text-gray-400'}`}>Behance</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;