import React, { useState } from "react";

const Section2 = () => {
    const cards = [
        {
            id: 1,
            imageUrl: 'https://picsum.photos/3840/2160?random=1',
            year: '2024 — 2024',
            title: 'UX básica — recursos de design para InVision Studio',
            isNew: true
        },
        {
            id: 2,
            imageUrl: 'https://picsum.photos/3840/2160?random=2',
            year: '2018 — 2019',
            title: 'UX básica — recursos de design para InVision Studio',
            isNew: false
        },
        {
            id: 3,
            imageUrl: 'https://picsum.photos/3840/2160?random=3',
            year: '2016 — 2018',
            title: 'UX básica — recursos de design para InVision Studio',
            isNew: false
        },
        {
            id: 4,
            imageUrl: 'https://picsum.photos/3840/2160?random=4',
            year: '2020 — 2022',
            title: 'UX básica — recursos de design para InVision Studio',
            isNew: false
        }
    ];

    const imageStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    const [hoverStates, setHoverStates] = useState({});

    const handleMouseEnter = (id) => {
        setHoverStates((prevState) => ({ ...prevState, [id]: true }));
    };

    const handleMouseLeave = (id) => {
        setHoverStates((prevState) => ({ ...prevState, [id]: false }));
    };

    return (
        <section className="space-y-3 mt-20">
            <div>
                <h1 className=" text-gray-500">Projetos Selecionados</h1>
                <h1 className="font-bold text-4xl">Meu Portfólio</h1>
            </div>
            <div className="flex flex-wrap w-full justify-center">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={() => handleMouseLeave(card.id)}
                        className="relative cursor-pointer lg:w-1/3 m-4 h-100 p-6"
                        style={{
                            ...imageStyle,
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${card.imageUrl})`
                        }}
                    >
                        <div className={`absolute left-0 bottom-0 w-full bg-gray-900/80 z-10 transition-all duration-500 ${hoverStates[card.id] ? 'h-full' : 'h-0'}`}></div>
                        <div className="relative z-20 flex space-x-8">
                            <div className="space-y-2">
                                <h1 className={`text-gray-400 ${hoverStates[card.id] ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.1s' }}>{card.year}</h1>
                                <h1 className={`text-white text-2xl ${hoverStates[card.id] ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.2s' }}>{card.title}</h1>
                                <a className={`transition-colors duration-4000 ${hoverStates[card.id] ? 'text-gray-400' : 'text-transparent'}`} style={{ animationDelay: '0.3s' }}>Ver Projeto</a>
                            </div>
                            {card.isNew && (
                                <div className="">
                                    <h1 className={`bg-gray-700 flex rounded-full w-14 h-14 justify-center items-center text-white ${hoverStates[card.id] ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.4s' }}>Novo</h1>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section2;
