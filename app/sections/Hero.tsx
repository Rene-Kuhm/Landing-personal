"use client";

import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Button from '../components/Button';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Marcar como cargado después del montaje inicial
        setIsLoaded(true);
    }, []);

    const benefitItems = [
        'Expertos en desarrollo web',
        'Soluciones personalizadas',
        'Optimización para buscadores',
        'Soporte técnico 24/7',
    ];

    return (
        <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <span
                            className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4"
                            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
                        >
                            Agencia de Desarrollo Web & Consultoría
                        </span>

                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ opacity: 1 }}
                        >
                            Transformamos <span className="text-gradient">ideas</span> en <span className="text-gradient">experiencias digitales</span> excepcionales
                        </h1>

                        <p
                            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
                            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease 0.2s' }}
                        >
                            Somos expertos en desarrollo web, programación y consultoría digital.
                            Creamos soluciones a medida que impulsan el crecimiento de tu negocio.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease 0.3s' }}
                        >
                            <Button href="#contacto" variant="primary">
                                Solicita una consulta <FiArrowRight className="ml-2" />
                            </Button>
                            <Button href="#proyectos" variant="outline">
                                Ver proyectos
                            </Button>
                        </div>

                        <div
                            className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0"
                            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease 0.4s' }}
                        >
                            {benefitItems.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <FiCheck className="text-[var(--primary)] mr-2 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="relative"
                        style={{ opacity: isLoaded ? 1 : 0, transform: `scale(${isLoaded ? 1 : 0.9})`, transition: 'opacity 0.6s, transform 0.6s' }}
                    >
                        <div className="relative z-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-1 rounded-2xl shadow-2xl">
                            <div className="bg-white dark:bg-[#0f0f1e] rounded-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-2 font-mono text-sm">
                                    <div className="flex">
                                        <span className="text-pink-500 mr-2">const</span>
                                        <span className="text-blue-500 mr-2">tuProyecto</span>
                                        <span className="mr-2">=</span>
                                        <span className="text-purple-500">{`{`}</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-green-500 mr-2">diseño:</span>
                                        <span className="text-yellow-500">&apos;Excepcional&apos;</span><span className="text-gray-500">,</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-green-500 mr-2">funcionalidad:</span>
                                        <span className="text-yellow-500">&apos;Perfecta&apos;</span><span className="text-gray-500">,</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-green-500 mr-2">optimización:</span>
                                        <span className="text-yellow-500">&apos;Al máximo&apos;</span><span className="text-gray-500">,</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-green-500 mr-2">experiencia:</span>
                                        <span className="text-yellow-500">&apos;Inolvidable&apos;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-purple-500">{`}`}</span><span className="text-gray-500">;</span>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <span className="text-blue-500 mr-2">tuProyecto</span>
                                        <span className="text-gray-500 mr-2">.</span>
                                        <span className="text-purple-500 mr-2">iniciar</span>
                                        <span className="text-pink-500">{`( )`}</span><span className="text-gray-500">;</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-[var(--secondary)] opacity-20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--accent)] opacity-20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 