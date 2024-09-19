import React, { useState, useEffect, useRef, useCallback } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from 'p5';
// navegação
import { Link, useLocation } from 'react-router-dom';


const Menu = ({ isMouseClick, setIsMouseClick }) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);



    const vantaConfig = {
        el: vantaRef.current,
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
    const location = useLocation();


    return (
        <div
            ref={vantaRef}
            className={`bg-black fixed transition-all duration-500 overflow-hidden
            ${isMouseClick ? 'h-screen w-full bottom-0' : 'h-0 w-full top-0'}`}>
            <div className="w-full h-full flex justify-center items-center flex-col -ml-8 space-y-2">
                <div

                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-20 h-1  rounded-full" >
                        <div ></div>
                    </div>
                    <button className="text-gray-400 text-base"
                    >Menu</button>
                </div>
                <Link
                    to='/'
                    onMouseOver={() => setHoverButton('projects')}
                    onMouseOut={() => setHoverButton('')}
                    className={`flex justify-center items-center space-x-4 ${location.pathname === '/' ? 'active' : ''}`}>
                    <div className="flex justify-between w-20 h-1 rounded-full">
                        <div className={`h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'projects' || location.pathname === '/' ? 'w-20 ml-4' : 'w-0'}`}></div>
                    </div>
                    <button className={`text-4xl lg:text-6xl font-bold ${hoverButton === 'projects' || location.pathname === '/' ? 'text-white' : 'text-gray-400'}`}>Projects</button>
                </Link>
                <div
                    onMouseOver={() => setHoverButton('About')}
                    onMouseOut={() => setHoverButton('')}
                    className={`flex justify-center items-center space-x-4 ${location.pathname === '/about' ? 'active' : ''}`}>
                    <div className="flex justify-between w-20 h-1 rounded-full">
                        <div className={`h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'About' || location.pathname === '/about' ? 'w-20 ml-4' : 'w-0'}`}></div>
                    </div>
                    <Link
                        to='/about'
                        className={`text-4xl lg:text-6xl font-bold ${hoverButton === 'About' || location.pathname === '/about' ? 'text-white' : 'text-gray-400'}`}>About me</Link>
                </div>
                <Link
                    to='/contact'
                    onMouseOver={() => setHoverButton('Contact')}
                    onMouseOut={() => setHoverButton('')}
                    className={`flex justify-center items-center space-x-4 ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <div className="flex justify-between w-20 h-1 rounded-full">
                        <div className={`h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'Contact' || location.pathname === '/contact' ? 'w-20 ml-4' : 'w-0'}`}></div>
                    </div>
                    <button className={`text-4xl lg:text-6xl font-bold ${hoverButton === 'Contact' || location.pathname === '/contact' ? 'text-white' : 'text-gray-400'}`}>Contact</button>
                </Link>
                <div
                    onMouseOver={() => setHoverButton('Instagram')}
                    onMouseOut={() => setHoverButton('')}
                    onClick={() => window.location.href = 'https://www.instagram.com/mm_aragao?igsh=eXY2c3RzczkzMGNi'}
                    className="flex justify-center items-center space-x-4">
                    <div className="flex justify-between w-20 h-1 rounded-full">
                        <div className={`h-full bg-white rounded-full transition-all duration-500 ease-in-out ${hoverButton === 'Instagram' ? 'w-20 ml-4' : 'w-0'}`}></div>
                    </div>
                    <button className={`text-4xl lg:text-6xl font-bold ${hoverButton === 'Instagram' ? 'text-white' : 'text-gray-400'}`}>Instagram</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;