import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Header from "../components/Header";
import Menu from "../components/Menu";
import Loadding from "../components/Loadding";
import SectionProject from "../components/SectionProjects";
import Footer from "../components/Footer";

const Contact = () => {
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

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (!isMouseClick && !isLoadding) {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 200); // 500ms de atraso
            return () => clearTimeout(timer);
        } else {
            setShowContent(false);
        }
    }, [isMouseClick, isLoadding]);

    return (
        <div>
            <Loadding isLoadding={isLoadding} />
            <Header isHovered={isHovered} setIsHovered={setIsHovered} isMouseClick={isMouseClick} setIsMouseClick={setIsMouseClick} isLoadding={isLoadding} isScroll={isScroll} />
            <Menu isHovered={isHovered} setIsHovered={setIsHovered} isMouseClick={isMouseClick} setIsMouseClick={setIsMouseClick} />
            <div className={`${isMouseClick || isLoadding || !showContent ? 'hidden' : 'transition-opacity duration-500 opacity-100'}`}>
                <SectionProject />
            </div>

            <div className={`${isMouseClick ? 'hidden' : ''} ${isLoadding ? 'hidden' : ''}`}>
                <Footer />
            </div>
        </div>
    );
}

export default Contact;