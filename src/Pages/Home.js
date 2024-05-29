import React, { useEffect, useState } from "react";
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
    }
        , []);


    return (
        <div>
            <Loadding isLoadding={isLoadding} />
            <Header isHovered={isHovered} setIsHovered={setIsHovered} isMouseClick={isMouseClick} setIsMouseClick={setIsMouseClick} isLoadding={isLoadding} isScroll={isScroll} />
            <Menu isHovered={isHovered} setIsHovered={setIsHovered} isMouseClick={isMouseClick} setIsMouseClick={setIsMouseClick} />
            <div className={`container mx-auto space-y-20 px-4 ${isMouseClick ? 'hidden' : ''} ${isLoadding ? 'hidden' : ''}`}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
            <div className={`${isMouseClick ? 'hidden' : ''} ${isLoadding ? 'hidden' : ''}`}>
                <Footer />
            </div>

        </div>
    );
}

export default Home;
