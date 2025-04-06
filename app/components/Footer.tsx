"use client";

import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="mb-4">
                            <OptimizedImage
                                src="/images/logo.webp"
                                alt="KuhmDev Logo"
                                width={180}
                                height={60}
                                className="h-auto"
                            />
                        </div>
                        <p className="text-gray-300 mb-6">
                            Transformando ideas en soluciones digitales innovadoras que impulsan el éxito de tu negocio.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/TecnoDespegueLive"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                                aria-label="Visitar página de Facebook de KuhmDev"
                            >
                                <FaFacebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ren%C3%A9-kuhm-1aa88818a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                                aria-label="Conectar con René Kuhm en LinkedIn"
                            >
                                <FiLinkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/Rene-Kuhm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                                aria-label="Ver repositorios de código en GitHub"
                            >
                                <FiGithub size={20} />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://www.instagram.com/renekuhm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                                aria-label="Seguir a René Kuhm en Instagram"
                            >
                                <FiInstagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            <li><Link href="#servicios" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Diseño Web</Link></li>
                            <li><Link href="#servicios" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Desarrollo Móvil</Link></li>
                            <li><Link href="#servicios" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Comercio Electrónico</Link></li>
                            <li><Link href="#servicios" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">SEO y Marketing Digital</Link></li>
                            <li><Link href="#servicios" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Consultoría Tecnológica</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Enlaces</h4>
                        <ul className="space-y-2">
                            <li><Link href="#home" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Inicio</Link></li>
                            <li><Link href="#servicios" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Servicios</Link></li>
                            <li><Link href="#proyectos" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Proyectos</Link></li>
                            <li><Link href="#proceso" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Proceso</Link></li>
                            <li><Link href="#sobre-nosotros" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Sobre Nosotros</Link></li>
                            <li><Link href="#contacto" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Contacto</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Plan 5000</li>
                            <li>Calle 11 bis, Eduardo Castex (LP) Argentina</li>
                            <li>renekuhm2@gmail.com</li>
                            <li>+54 2334 409838</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} KuhmDev. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center space-x-6">
                        <Link href="/terminos" className="text-gray-300 hover:text-white text-sm transition-colors focus:outline-none focus:underline">
                            Términos y condiciones
                        </Link>
                        <Link href="/privacidad" className="text-gray-300 hover:text-white text-sm transition-colors focus:outline-none focus:underline">
                            Política de privacidad
                        </Link>
                        <button
                            onClick={scrollToTop}
                            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                            aria-label="Volver arriba"
                        >
                            <FiArrowUp size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 