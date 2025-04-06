"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

const SobreNosotros = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="sobre-nosotros" className="py-20 bg-white dark:bg-[#0a0a14]">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4">
                        Sobre Nosotros
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Conoce nuestro <span className="text-gradient">equipo</span> y filosofía
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Somos un equipo apasionado de desarrolladores y diseñadores comprometidos con la creación
                        de soluciones digitales innovadoras y de alto impacto.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-80"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Nuestra Misión</h3>
                            <p className="text-lg mb-6">
                                Transformar ideas en soluciones digitales que generen valor real para nuestros clientes,
                                combinando tecnología de vanguardia con diseño centrado en el usuario.
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-4">Nuestra Visión</h3>
                            <p className="text-lg">
                                Ser referentes en el desarrollo de soluciones digitales innovadoras que impulsen
                                la transformación digital de empresas en Argentina y Latinoamérica.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                                    <FiCheck className="text-[var(--primary)] text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Experiencia y especialización</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Contamos con años de experiencia desarrollando soluciones digitales personalizadas
                                        para diversos sectores y necesidades.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                                    <FiCheck className="text-[var(--primary)] text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Enfoque personalizado</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Trabajamos estrechamente con cada cliente para entender sus necesidades específicas
                                        y ofrecer soluciones a medida.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                                    <FiCheck className="text-[var(--primary)] text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Tecnología de vanguardia</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Utilizamos las tecnologías más modernas y eficientes para garantizar
                                        productos de alta calidad, rendimiento y seguridad.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                                    <FiCheck className="text-[var(--primary)] text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Soporte continuo</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Ofrecemos acompañamiento y soporte técnico después de la entrega del proyecto
                                        para asegurar su éxito continuo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SobreNosotros; 