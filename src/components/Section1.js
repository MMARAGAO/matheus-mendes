import React from "react";

const Section1 = () => {
    return (
        <section className="space-y-4 lg:h-screen mt-60 lg:justify-end lg:flex lg:flex-col lg:-mt-32">
            <div className="lg:w-1/2 space-y-4">
                <h2 className="text-gray-500 opacity-0 animate-fadeInUp 2xl:text-2xl" style={{ animationDelay: '0.1s' }}>Matheus Mendes</h2>
                <h1 className="font-bold text-4xl opacity-0 animate-fadeInUp 2xl:text-5xl" style={{ animationDelay: '0.2s' }}>Designer de sites e interface do usuário</h1>
                <h1 className="text-gray-600 opacity-0 animate-fadeInUp 2xl:text-xl" style={{ animationDelay: '0.3s' }}>
                    Nos últimos cinco anos, tenho trabalhado como desenvolvedor full-stack, colaborando com grandes empresas e startups em ascensão. Minha atuação tem sido focada em ajudar essas organizações a alcançar seu potencial máximo, desenvolvendo soluções eficientes e atraindo novos clientes.                </h1>
                <div className="flex space-x-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <button className="font-bold border-b border-transparent hover:border-gray-900 transition-all duration-500 2xl:text-xl">
                        Ver Projetos
                    </button>
                    <h1 className="text-gray-500 2xl:text-xl">ou</h1>
                    <button className="font-bold border-b border-transparent hover:border-gray-900 transition-all duration-500 2xl:text-xl">
                        Leia Sobre Mim
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center border-2 border-black w-5 h-7 rounded-full">
                    <div className="animate-up-down bg-black w-1 h-1.5 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}

export default Section1;
