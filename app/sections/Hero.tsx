"use client";

import React from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Button from '../components/Button';

// Cargar en primer lugar el contenido crucial (LCP)
const Hero = () => {
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
                        >
                            Agencia de Desarrollo Web & Consultoría
                        </span>

                        {/* Esta es la parte principal que debe cargarse primero (LCP) */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Transformamos <span className="text-gradient">ideas</span> en <span className="text-gradient">experiencias digitales</span> excepcionales
                        </h1>

                        <p
                            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Somos expertos en desarrollo web, programación y consultoría digital.
                            Creamos soluciones a medida que impulsan el crecimiento de tu negocio.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                        >
                            <Button href="#contacto" variant="primary">
                                Solicita una consulta <FiArrowRight className="ml-2" />
                            </Button>
                            <Button href="#proyectos" variant="outline">
                                Ver proyectos
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                            {benefitItems.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <FiCheck className="text-[var(--primary)] mr-2 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Esta parte es secundaria, puede cargarse después */}
                    <div
                        className="relative hidden lg:block"
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