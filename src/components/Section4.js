import React, { useState } from "react";
// icone do fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Section4 = () => {

    const cards = [
        {
            id: 1,
            imageUrl: require('../assets/instagram.png'),
            title: 'Instagram',
            text: 'Me acompanhe no Facebook para ver mais conteúdo sobre programação e design ✌️.',
            link: 'https://www.instagram.com/mm_aragao?igsh=eXY2c3RzczkzMGNi',
        },
        {
            id: 2,
            imageUrl: require('../assets/linkedin.png'),
            title: 'LinkedIn',
            text: 'Vamos nos conectar no LinkedIn e trocar experiências profissionais 🚀.',
            link: 'https://www.linkedin.com/in/matheus-mendes-816572207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
            id: 3,
            imageUrl: require('../assets/github.png'),
            title: 'GitHub',
            text: 'Confira meus repositórios no GitHub e contribua com projetos open source 🤝.',
            link: 'https://github.com/MMARAGAO',
        },
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
                <h1 className=" text-gray-500">O que há de novo?</h1>
                <h1 className="font-bold text-4xl">Redes Sociais </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <button
                        onClick={() => window.open(card.link, '_blank')}
                        key={card.id} className="text-left">
                        <div
                            onMouseEnter={() => handleMouseEnter(card.id)}
                            onMouseLeave={() => handleMouseLeave(card.id)}
                            className="relative cursor-pointer h-72 lg:h-80 p-6"
                            style={{
                                ...imageStyle,
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${card.imageUrl})`
                            }}
                        >
                            <div className={`absolute left-0 bottom-0 w-full bg-gray-900/80 z-10 transition-all duration-500 ${hoverStates[card.id] ? 'h-full' : 'h-0'}`}></div>
                            <div className="relative z-20 flex space-x-8">
                                <div className="space-y-2">
                                    <h1 className={`text-white text-2xl ${hoverStates[card.id] ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.2s' }}>{card.title}</h1>
                                    <a className={`transition-colors duration-4000 ${hoverStates[card.id] ? 'text-gray-400' : 'text-transparent'}`} style={{ animationDelay: '0.2s' }}>{card.text}</a>

                                </div>
                                {card.isNew && (
                                    <div className="">
                                        <h1 className={`bg-gray-700 flex rounded-full w-14 h-14 justify-center items-center text-white ${hoverStates[card.id] ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.4s' }}>Novo</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            <div className="py-10">
                <h1 className="text-gray-500">Precisa de um programador?</h1>
                <h1 className="font-bold text-2xl">
                    <Link to='/contact'>
                        Vamos trabalhar junto<i><FontAwesomeIcon className="ml-2" icon={faArrowRight} /></i>
                    </Link>
                </h1>
            </div>
        </section>
    );
};

export default Section4;