import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 500) {
                if (!isVisible) {
                    setIsVisible(true);
                }
            } else {
                if (isVisible) {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <footer className="bg-white text-gray-800 py-10 border-t border-gray-300">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-5">
                <div>
                    <h4 className="text-xl font-semibold mb-4">Sobre Mim</h4>
                    <p className="text-gray-600">Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Contato</h4>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-600"><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />matheusmoxil@gmail.com</p>
                        <p className="text-gray-600"><FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-600" />(61) 9 8292-8478</p>
                        <p className="text-gray-600"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-600" />Brasilia - DF, Brasil</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Disponibilidade</h4>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-600"><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-600" />Seg - Sex: 5h - 18h</p>
                        <p className="text-gray-600"><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-600" />Sáb: 10h - 14h</p>
                        <p className="text-gray-600"><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-600" />Dom: Fechado</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
                    <div className="flex space-x-4">
                        <a href="https://github.com/MMARAGAO" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/matheus-mendes-816572207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/mm_aragao?igsh=eXY2c3RzczkzMGNi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10 border-t border-gray-300 pt-5 px-2">
                <div className="flex flex-wrap justify-between items-center">
                    <p className="text-gray-600">&copy; 2024 Matheus Mendes. Todos os direitos reservados.</p>
                    <div>
                        <a href="/privacy" className="text-gray-600 hover:text-gray-900">Política de Privacidade</a>
                        <span className="mx-3 text-gray-600">|</span>
                        <a href="/terms" className="text-gray-600 hover:text-gray-900">Termos de Serviço</a>
                    </div>
                </div>
            </div>
            <div className="opacity-50 ">
                <button
                    onClick={scrollToTop}
                    className={`opacity-50 fixed bottom-4 right-4 bg-gray-800 text-white p-4 flex justify-center items-center rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition-opacity duration-500 ${isVisible ? 'animate-fadeInUp' : 'animate-fadeOut'}`}>
                    <FontAwesomeIcon className="w-5 h-5" icon={faArrowUp} />
                </button>
            </div>
        </footer>

    );
}

export default Footer;
