import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Header from "../components/Header";
import Menu from "../components/Menu";
import Loadding from "../components/Loadding";
import AboutSection1 from "../components/AboutSection1";

import Footer from "../components/Footer";

const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMouseClick, setIsMouseClick] = useState(false);
    const [isLoadding, setIsLoadding] = useState(true);
    const [isScroll, setIsScroll] = useState(false);

    setTimeout(() => {
        setIsLoadding(false);
    }, 2000);

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
            <div className={`${isMouseClick ? 'hidden' : ''} ${isLoadding ? 'hidden' : ''}`}>
                <AboutSection1 />
            </div>

            <div className={`${isMouseClick ? 'hidden' : ''} ${isLoadding ? 'hidden' : ''}`}>
                <Footer />
            </div>
        </div>
    );
}

export default About;