import React, { useState } from "react";

import CNI from '../assets/clientes/CNI.png';
import Compacto from '../assets/clientes/Compacto.png';
import Global from '../assets/clientes/Global.png';
import Luxo from '../assets/clientes/Luxo.png';
import LC from '../assets/clientes/LC.png';

// icone do font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icone de seta para direita e para esquerda chevron-right e chevron-left
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';




const AboutSection1 = () => {

    const [active, setActive] = useState(1);

    const incrementActive = () => {
        setActive(prevActive => (prevActive < 5 ? prevActive + 1 : prevActive));
    };

    const decrementActive = () => {
        setActive(prevActive => (prevActive > 1 ? prevActive - 1 : prevActive));
    };

    return (
        <section className="px-2 lg:px-40 2xl:px-96 py-8 space-y-16">
            <div className="flex justify-center items-center">
                <div className="w-full md:w-full lg:w-full space-y-4">
                    <h1 className="text-md text-gray-600 font-semibold text-left lg:text-center">Algumas palavras sobre mim</h1>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left lg:text-center px-2">
                        Eu sou Matheus Mendes, um desenvolvedor full stack e designer multidisciplinar que se concentra em traduzir as ideias dos meus clientes em soluções visuais envolventes e funcionais. Eu me especializo em sites responsivos e interfaces de usuário funcionais.
                    </h1>
                    <h1 className="text-sm md:text-base lg:text-lg text-gray-600 font-semibold text-left lg:text-center">
                        Nos últimos 5 anos, tenho trabalhado com empresas como Global Advising, CNI, Compacto Tecnologia e também prestando serviços a terceiros. Adoro colaborar em equipe e contribuir com meu conhecimento técnico e criativo. No meu tempo livre, gosto de praticar atividades físicas, o que me ajuda a manter o equilíbrio e a criatividade no dia a dia.
                    </h1>
                </div>
            </div>
            <div className="space-y-4">
                <div className="w-full justify-center items-center flex relative">
                    <button
                        onClick={() => decrementActive()}
                        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronLeft} />

                    </button>
                    <div className={` h-96 bg-gray-200  ${active === 1 ? 'w-full' : 'w-0'} transition-all duration-300`}> </div>
                    <div className={` h-96 bg-red-200 ${active === 2 ? 'w-full' : 'w-0'} transition-all duration-300`}> </div>
                    <div className={` h-96 bg-green-200  ${active === 3 ? 'w-full' : 'w-0'} transition-all duration-300`}> </div>
                    <div className={` h-96 bg-purple-200  ${active === 4 ? 'w-full' : 'w-0'} transition-all duration-300`}> </div>
                    <div className={` h-96 bg-yellow-200  ${active === 5 ? 'w-full' : 'w-0'} transition-all duration-300`}> </div>
                    <button
                        onClick={() => incrementActive()}
                        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button
                        onClick={() => setActive(1)}
                        className="flex justify-center items-center space-x-2"><h1>01</h1><div className={`h-0.5 bg-black mt-1 transition-all duration-300 ${active === 1 ? 'w-10' : 'w-0'}`}> </div> </button>
                    <button
                        onClick={() => setActive(2)}
                        className="flex justify-center items-center space-x-2"><h1>02</h1><div className={`h-0.5 bg-black mt-1 transition-all duration-300  ${active === 2 ? 'w-10' : 'w-0'}`}> </div> </button>
                    <button
                        onClick={() => setActive(3)}

                        className="flex justify-center items-center space-x-2"><h1>03</h1><div className={`h-0.5 bg-black mt-1  transition-all duration-300 ${active === 3 ? 'w-10' : 'w-0'}`}> </div> </button>
                    <button
                        onClick={() => setActive(4)}
                        className="flex justify-center items-center space-x-2"><h1>04</h1><div className={`h-0.5 bg-black mt-1  transition-all duration-300 ${active === 4 ? 'w-10' : 'w-0'}`}> </div> </button>
                    <button
                        onClick={() => setActive(5)}
                        className="flex justify-center items-center space-x-2"><h1>05</h1><div className={`h-0.5 bg-black mt-1 transition-all duration-300  ${active === 5 ? 'w-10' : 'w-0'}`}> </div> </button>
                </div>

            </div>

            <div className="justify-center items-center w-full flex">
                <div className="grid lg:grid-cols-2 gap-4 mt-4 grid-cols-1 w-full">
                    <div>
                        <h1 className="text-left lg:text-center text-gray-400 text-sm">Serviços oferecidos</h1>
                        <h1 className="text-left lg:text-center font-semibold">
                            Desenvolvimento de sites <span className="text-gray-200">/</span> Aplicativos móveis <span className="text-gray-200">/</span> Sistemas personalizados <span className="text-gray-200">/</span> Integração de equipamentos <span className="text-gray-200">/</span> Segurança da informação <span className="text-gray-200">/</span> Gestão de TI <span className="text-gray-200">/</span> Coordenação de equipes <span className="text-gray-200">/</span> Desenvolvimento full stack <span className="text-gray-200">/</span> UX/UI Design <span className="text-gray-200">/</span> Ciência da computação <span className="text-gray-200">/</span> Inteligência artificial <span className="text-gray-200">/</span> Machine Learning <span className="text-gray-200">/</span> Ciência de dados
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-left lg:text-center text-gray-400 text-sm">Ferramentas e tecnologias</h1>
                        <h1 className="text-left lg:text-center font-semibold">
                            React <span className="text-gray-200">/</span> React Native <span className="text-gray-200">/</span> Expo <span className="text-gray-200">/</span> JavaScript <span className="text-gray-200">/</span> PHP <span className="text-gray-200">/</span> Django <span className="text-gray-200">/</span> C++ <span className="text-gray-200">/</span> Node.js <span className="text-gray-200">/</span> Python <span className="text-gray-200">/</span> SQL <span className="text-gray-200">/</span> APIs <span className="text-gray-200">/</span> Figma <span className="text-gray-200">/</span> UX/UI Design
                        </h1>
                    </div>
                </div>

            </div>

            <section id="experiencia" className="space-y-6">
                <h2 className="text-lg font-bold text-black">Experiência</h2>
                <p className="text-black">
                    Com mais de 6 anos de atuação no setor de tecnologia, acumulei vasta experiência em diferentes áreas, desde o desenvolvimento de soluções completas até a gestão de infraestrutura de TI. Durante minha jornada profissional, colaborei com diversas empresas, sempre buscando inovar e oferecer as melhores soluções para os desafios apresentados. Meu trabalho é focado na criação de experiências eficientes e intuitivas, que impactam diretamente a performance e a satisfação dos clientes. Para mais informações sobre minha trajetória, visite meu perfil no <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black">LinkedIn</a>.
                </p>

                <div className="lg:pl-10 pl-4 space-y-6">
                    {/* Global Access (CNI) - Destaque pela posição atual e relevância */}
                    <article className="space-y-2">
                        <h3 className="font-bold text-black">Global Access (CNI)</h3>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Função:</strong> Supervisor Administrativo / Desenvolvedor Full-Stack Pleno</p>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Período:</strong> 2022 — Presente</p>
                        <p className="text-black lg:pl-16 pl-6">
                            Atualmente, atuo na Global Access (CNI), onde sou contratado como Supervisor Administrativo, com foco no desenvolvimento Full-Stack. Minhas responsabilidades incluem a criação e manutenção de sistemas complexos, atuando tanto no front-end quanto no back-end, além de supervisionar a infraestrutura de TI. Trabalho em colaboração com equipes multidisciplinares para garantir a implementação de soluções seguras, escaláveis e eficientes que atendam às necessidades da empresa e de seus clientes.
                        </p>
                    </article>

                    {/* Formação Acadêmica - Importante para mostrar qualificações */}
                    <article className="space-y-2">
                        <h3 className="font-bold text-black">Formação Acadêmica</h3>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Bacharelado em Ciência da Computação:</strong> UniCEUB, Brasília, 2019 — 2023</p>
                        <p className="text-black lg:pl-16 pl-6">
                            Durante o curso de Ciência da Computação no UniCEUB, aprofundei meus conhecimentos em diversas áreas da computação, como desenvolvimento de software, arquitetura de sistemas, redes e segurança da informação. Participei de projetos acadêmicos que envolviam tanto a teoria quanto a prática, além de estágios que me permitiram aplicar diretamente o conhecimento adquirido. Essa formação me proporcionou uma base sólida para atuar em projetos complexos, focados em inovação tecnológica e solução de problemas.
                        </p>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Pós-Graduação em Inteligência Artificial, Machine Learning e Ciência de Dados:</strong> UniCEUB, Brasília, 2024 — 2025</p>
                        <p className="text-black lg:pl-16 pl-6">
                            Atualmente, estou cursando uma especialização em Inteligência Artificial, Machine Learning e Ciência de Dados, com o objetivo de expandir minhas competências nessas áreas de ponta. A formação tem me permitido explorar algoritmos avançados e técnicas de análise de dados, preparando-me para desenvolver soluções inteligentes e eficientes em diversos setores.
                        </p>
                    </article>

                    {/* Compacto Tecnologia - Experiência relevante em infraestrutura */}
                    <article className="space-y-2">
                        <h3 className="font-bold text-black">Compacto Tecnologia</h3>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Função:</strong> Analista de Infraestrutura</p>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Período:</strong> 2019 — 2022</p>
                        <p className="text-black lg:pl-16 pl-6">
                            Na Compacto Tecnologia, trabalhei diretamente na gestão e manutenção da infraestrutura de TI, garantindo que todos os sistemas estivessem funcionando de forma eficiente e segura. Fui responsável por análise de desempenho de redes, configuração de servidores e implementação de políticas de segurança. Essa experiência consolidou minhas habilidades em ambientes corporativos e aprimorou minhas capacidades de liderança.
                        </p>
                    </article>

                    {/* EMBRAPA - Primeira experiência profissional */}
                    <article className="space-y-2">
                        <h3 className="font-bold text-black">EMBRAPA</h3>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Função:</strong> Estagiário</p>
                        <p className="text-gray-400 font-semibold lg:pl-10 pl-4"><strong>Período:</strong> 2017 — 2019</p>
                        <p className="text-black lg:pl-16 pl-6">
                            Durante meu estágio na EMBRAPA, fui responsável por auxiliar na implementação de soluções tecnológicas para otimizar processos internos. Essa experiência me proporcionou um profundo entendimento sobre a aplicação da tecnologia em setores estratégicos e contribuiu significativamente para o desenvolvimento das minhas habilidades técnicas e de comunicação.
                        </p>
                    </article>
                </div>
            </section>


            <section id="clientes" className="space-y-6 py-10">
                <h2 className="text-lg font-bold text-black">Clientes</h2>
                <p className="text-black lg:pl-10 pl-4">
                    Ao longo dos últimos 8 anos, tive o privilégio de colaborar com empresas de diferentes setores, desenvolvendo soluções inovadoras e personalizadas. Cada projeto foi uma oportunidade de criar impacto real e duradouro.
                </p>
                <p className="text-black">
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
