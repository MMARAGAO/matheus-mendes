import React from "react";

const Section1 = () => {
    return (
        <section className="space-y-3 mt-60">
            <h2 className="text-gray-500 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Matheus Mendes</h2>
            <h1 className="font-bold text-4xl opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Designer de sites e interface do usuário</h1>
            <h1 className="text-gray-600 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Nos últimos 9 anos, como diretor de arte e designer, trabalhei com grandes empresas e startups em ascensão para ajudá-las a alcançar todo o seu potencial e atrair novos clientes
            </h1>
            <div className="flex space-x-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <button className="font-bold border-b border-transparent hover:border-gray-900 transition-all duration-500">
                    Ver Projetos
                </button>
                <h1 className="text-gray-500">ou</h1>
                <button className="font-bold border-b border-transparent hover:border-gray-900 transition-all duration-500">
                    Leia Sobre Mim
                </button>
            </div>
        </section>
    );
}

export default Section1;
