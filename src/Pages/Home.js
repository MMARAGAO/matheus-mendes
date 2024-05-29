import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Header from "../components/Header";
import Menu from "../components/Menu";
import Loadding from "../components/Loadding";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMouseClick, setIsMouseClick] = useState(false);
    const [isLoadding, setIsLoadding] = useState(true);
    const [isScroll, setIsScroll] = useState(false);

    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });
    const [ref4, inView4] = useInView({ triggerOnce: true });

    setTimeout(() => {
        setIsLoadding(false);
    }, 1000);

    // pegar quando o usuario usar o scroll
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
    }, []);

    return (
        <div>
            <Loadding isLoadding={isLoadding} />
            <Header isHovered={isHovered} setIsHovered={setIsHovered} isMouseClick={isMouseClick} setIsMouseClick={setIsMouseClick} isLoadding={isLoadding} isScroll={isScroll} />
            <Menu isHovered={isHovered} setIsHovered={setIsHovered} isMouseClick={isMouseClick} setIsMouseClick={setIsMouseClick} />
            <div className={`container mx-auto space-y-20 px-4 ${isMouseClick ? 'hidden' : ''} ${isLoadding ? 'hidden' : ''}`}>
                <div ref={ref1} className={inView1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0 transition-opacity duration-1000'}><Section1 /></div>
                <div ref={ref2} className={inView2 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0 transition-opacity duration-1000'}><Section2 /></div>
                <div ref={ref3} className={inView3 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0 transition-opacity duration-1000'}><Section3 /></div>
                <div ref={ref4} className={inView4 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0 transition-opacity duration-1000'}><Section4 /></div>
            </div>
            <div className={`${isMouseClick ? 'hidden' : ''} ${isLoadding ? 'hidden' : ''}`}>
                <Footer />
            </div>
        </div>
    );
}

export default Home;