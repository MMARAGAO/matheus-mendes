import React, { useEffect, useState } from "react";

import CNI from '../assets/clientes/CNI.png';
import Compacto from '../assets/clientes/Compacto.png';
import Global from '../assets/clientes/Global.png';
import Luxo from '../assets/clientes/Luxo.png';
import LC from '../assets/clientes/LC.png';

import Image1 from '../assets/carrocel/Image1.jpg';
import Image2 from '../assets/carrocel/Image2.jpg';
import Image3 from '../assets/carrocel/Image3.jpg';

// icone do font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icone de seta para direita e para esquerda chevron-right e chevron-left
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AboutSection1 = () => {
    const [active, setActive] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const incrementActive = () => {
        setActive(prevActive => (prevActive < 3 ? prevActive + 1 : 1));
    };

    const decrementActive = () => {
        setActive(prevActive => (prevActive > 1 ? prevActive - 1 : prevActive));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                incrementActive();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="px-4 md:px-8 lg:px-40 2xl:px-96 py-8 space-y-16">
            <div className="flex flex-col items-center">
                <div className="w-full space-y-4 text-center">
                    <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-gray-600">Algumas palavras sobre mim</h1>
                    <h1 className="text-md md:text-2xl lg:text-3xl font-bold px-2">
                        Eu sou Matheus Mendes, um desenvolvedor full stack e designer multidisciplinar que se concentra em traduzir as ideias dos meus clientes em soluções visuais envolventes e funcionais. Eu me especializo em sites responsivos e interfaces de usuário funcionais.
                    </h1>
                    <h1 className="text-sm md:text-lg lg:text-xl text-gray-600 font-semibold">
                        Nos últimos 5 anos, tenho trabalhado com empresas como Global Advising, CNI, Compacto Tecnologia e também prestando serviços a terceiros. Adoro colaborar em equipe e contribuir com meu conhecimento técnico e criativo. No meu tempo livre, gosto de praticar atividades físicas, o que me ajuda a manter o equilíbrio e a criatividade no dia a dia.
                    </h1>
                </div>
            </div>
            <div className="space-y-4">
                <div
                    id="carrocel"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative flex justify-center items-center">
                    <button
                        onClick={() => decrementActive()}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className={`h-40 md:h-80 lg:h-96 ${active === 1 ? 'w-full' : 'w-0'} bg-gray-200 transition-all duration-300`}>
                        <img src={Image1} alt="Image1" className="w-full h-full object-cover" />
                    </div>
                    <div className={`h-40 md:h-80 lg:h-96 ${active === 2 ? 'w-full' : 'w-0'} bg-red-200 transition-all duration-300`}>
                        <img src={Image2} alt="Image2" className="w-full h-full object-cover" />
                    </div>
                    <div className={`h-40 md:h-80 lg:h-96 ${active === 3 ? 'w-full' : 'w-0'} bg-blue-200 transition-all duration-300`}>
                        <img src={Image3} alt="Image3" className="w-full h-full object-cover" />
                    </div>
                    <button
                        onClick={() => incrementActive()}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    {[1, 2, 3].map(num => (
                        <button
                            key={num}
                            onClick={() => setActive(num)}
                            className="flex flex-col items-center space-y-1">
                            <h1 className="text-sm">{num < 10 ? `0${num}` : num}</h1>
                            <div className={`h-0.5 bg-black mt-1 transition-all duration-300 ${active === num ? 'w-10' : 'w-0'}`}></div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mt-4">
                <div className="flex-1">
                    <h1 className="text-gray-400 text-sm text-center ">Serviços oferecidos</h1>
                    <h1 className="text-center  font-semibold text-sm lg:text-base">
                        Desenvolvimento de sites <span className="text-gray-200">/</span> Aplicativos móveis <span className="text-gray-200">/</span> Sistemas personalizados <span className="text-gray-200">/</span> Integração de equipamentos <span className="text-gray-200">/</span> Segurança da informação <span className="text-gray-200">/</span> Gestão de TI <span className="text-gray-200">/</span> Coordenação de equipes <span className="text-gray-200">/</span> Desenvolvimento full stack <span className="text-gray-200">/</span> UX/UI Design <span className="text-gray-200">/</span> Ciência da computação <span className="text-gray-200">/</span> Inteligência artificial <span className="text-gray-200">/</span> Machine Learning <span className="text-gray-200">/</span> Ciência de dados
                    </h1>
                </div>
                <div className="flex-1">
                    <h1 className="text-gray-400 text-sm text-center ">Ferramentas e tecnologias</h1>
                    <h1 className="text-center  font-semibold text-sm lg:text-base ">
                        React <span className="text-gray-200">/</span> React Native <span className="text-gray-200">/</span> Expo <span className="text-gray-200">/</span> JavaScript <span className="text-gray-200">/</span> PHP <span className="text-gray-200">/</span> Django <span className="text-gray-200">/</span> C++ <span className="text-gray-200">/</span> Node.js <span className="text-gray-200">/</span> Python <span className="text-gray-200">/</span> SQL <span className="text-gray-200">/</span> APIs <span className="text-gray-200">/</span> Figma <span className="text-gray-200">/</span> UX/UI Design
                    </h1>
                </div>
            </div>

            <section id="experiencia" className="space-y-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">Experiência</h2>
                <p className="text-base md:text-lg lg:text-xl text-black pl-4 md:pl-6 lg:pl-8 lg:indent-20 indent-10">
                    Com mais de 6 anos de atuação no setor de tecnologia, acumulei vasta experiência em diferentes áreas, desde o desenvolvimento de soluções completas até a gestão de infraestrutura de TI. Durante minha jornada profissional, colaborei com diversas empresas, sempre buscando inovar e oferecer as melhores soluções para os desafios apresentados. Meu trabalho é focado na criação de experiências eficientes e intuitivas, que impactam diretamente a performance e a satisfação dos clientes. Para mais informações sobre minha trajetória, visite meu perfil no <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black">LinkedIn</a>.
                </p>

                <div className="space-y-6">
                    <article className="space-y-2">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black">Global Access (CNI)</h3>
                        <p className="text-gray-400 font-semibold pl-4 md:pl-6 lg:pl-8"><strong>Função:</strong> Supervisor Administrativo / Desenvolvedor Full-Stack Pleno</p>
                        <p className="text-gray-400 font-semibold pl-4 md:pl-6 lg:pl-8"><strong>Período:</strong> 2022 — Presente</p>
                        <p className="text-base md:text-lg lg:text-xl text-black pl-8 md:pl-12 lg:pl-16 lg:indent-20 indent-10">
                            Atualmente, atuo na Global Access (CNI), onde sou contratado como Supervisor Administrativo, com foco no desenvolvimento Full-Stack. Minhas responsabilidades incluem a criação e manutenção de sistemas complexos, atuando em diferentes camadas da aplicação e garantindo a integridade e performance dos projetos.
                        </p>
                    </article>

                    <article className="space-y-2">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black">Compacto Tecnologia</h3>
                        <p className="text-gray-400 font-semibold pl-4 md:pl-6 lg:pl-8"><strong>Função:</strong> Infraestrutura</p>
                        <p className="text-gray-400 font-semibold pl-4 md:pl-6 lg:pl-8"><strong>Período:</strong> 2019 — 2022</p>
                        <p className="text-base md:text-lg lg:text-xl text-black pl-8 md:pl-12 lg:pl-16 lg:indent-20 indent-10">
                            Na Compacto Tecnologia, trabalhei no setor de infraestrutura, onde fui responsável por gerenciar e otimizar a infraestrutura de TI, além de colaborar no desenvolvimento de soluções que atendem às necessidades dos clientes e garantem a eficiência operacional da empresa.
                        </p>
                    </article>

                    <article className="space-y-2">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black">EMBRAPA</h3>
                        <p className="text-gray-400 font-semibold pl-4 md:pl-6 lg:pl-8"><strong>Função:</strong> Estagiário</p>
                        <p className="text-gray-400 font-semibold pl-4 md:pl-6 lg:pl-8"><strong>Período:</strong> 2017 — 2019</p>
                        <p className="text-base md:text-lg lg:text-xl text-black pl-8 md:pl-12 lg:pl-16 lg:indent-20 indent-10">
                            Durante meu estágio na EMBRAPA, adquiri experiência prática em diversos projetos de tecnologia, contribuindo para o desenvolvimento e implementação de soluções voltadas para a pesquisa e inovação na área agrícola.
                        </p>
                    </article>
                </div>
            </section>


            <section id="clientes" className="space-y-6 py-10">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black">Clientes</h2>
                <p className="text-sm md:text-base lg:text-lg text-black lg:pl-10 pl-4 lg:indent-20 indent-10">
                    Ao longo dos últimos 8 anos, tive o privilégio de colaborar com empresas de diferentes setores, desenvolvendo soluções inovadoras e personalizadas. Cada projeto foi uma oportunidade de criar impacto real e duradouro.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-black lg:indent-20 indent-10">
                    Confira algumas das marcas com as quais trabalhei, onde contribuí com minha expertise em tecnologia para transformar seus desafios em soluções:
                </p>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
                    <div className="flex justify-center">
                        <img src={CNI} alt="CNI Logo" className="lg:h-20 h-10 object-contain" />
                    </div>
                    <div className="flex justify-center">
                        <img src={Compacto} alt="Compacto Tecnologia Logo" className="lg:h-20 h-10 object-contain" />
                    </div>
                    <div className="flex justify-center">
                        <img src={Global} alt="Global Advising Logo" className="lg:h-20 h-10 object-contain" />
                    </div>
                    <div className="flex justify-center">
                        <img src={Luxo} alt="Luxo in Box Logo" className="lg:h-20 h-10 object-contain" />
                    </div>
                    <div className="flex justify-center">
                        <img src={LC} alt="LC Logo" className="lg:h-20 h-10 object-contain" />
                    </div>
                </div>
            </section>

        </section>
    );
};

export default AboutSection1;
