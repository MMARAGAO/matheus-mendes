import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectData from '../Project.json';

const Section2 = () => {
    const navigate = useNavigate();

    const cards = projectData.projetos.map(projeto => ({
        id: projeto.id,
        imageUrl: projeto.imagens[0]?.url || 'https://picsum.photos/3840/2160?random=1',
        year: projeto.ano,
        title: projeto.titulo,
        isNew: false // Adapte conforme necessário
    }));

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

    const handleClick = (id) => {
        navigate('/project', { state: { id } });
    };

    return (
        <section className="space-y-3 mt-20">
            <div>
                <h1 className=" text-gray-500">Projetos Selecionados</h1>
                <h1 className="font-bold text-4xl">Meu Portfólio</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-8">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={() => handleMouseLeave(card.id)}
                        onClick={() => handleClick(card.id)}
                        className="relative cursor-pointer h-100 p-6"
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