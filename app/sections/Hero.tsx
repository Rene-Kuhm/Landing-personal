"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiCheck } from 'react-icons/fi';
import Button from '../components/Button';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9],
            },
        },
    };

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
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4"
                        >
                            Agencia de Desarrollo Web & Consultoría
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Transformamos <span className="text-gradient">ideas</span> en <span className="text-gradient">experiencias digitales</span> excepcionales
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Somos expertos en desarrollo web, programación y consultoría digital.
                            Creamos soluciones a medida que impulsan el crecimiento de tu negocio.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                        >
                            <Button href="#contacto" variant="primary">
                                Solicita una consulta <FiArrowRight className="ml-2" />
                            </Button>
                            <Button href="#proyectos" variant="outline">
                                Ver proyectos
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0"
                        >
                            {benefitItems.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <FiCheck className="text-[var(--primary)] mr-2 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
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
                                        <span className="text-yellow-500">'Excepcional'</span><span className="text-gray-500">,</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-green-500 mr-2">funcionalidad:</span>
                                        <span className="text-yellow-500">'Perfecta'</span><span className="text-gray-500">,</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-green-500 mr-2">optimización:</span>
                                        <span className="text-yellow-500">'Al máximo'</span><span className="text-gray-500">,</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-green-500 mr-2">experiencia:</span>
                                        <span className="text-yellow-500">'Inolvidable'</span>
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 