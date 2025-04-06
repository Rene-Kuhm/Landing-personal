"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMonitor, FiSmartphone, FiShoppingCart, FiSearch, FiServer, FiCode } from 'react-icons/fi';

const servicios = [
    {
        icon: <FiMonitor className="w-8 h-8" />,
        title: 'Diseño Web',
        description: 'Creamos sitios web modernos, responsivos y visualmente impactantes que reflejan la identidad de tu marca.',
    },
    {
        icon: <FiSmartphone className="w-8 h-8" />,
        title: 'Desarrollo Móvil',
        description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android que mejoran la experiencia de tus usuarios.',
    },
    {
        icon: <FiShoppingCart className="w-8 h-8" />,
        title: 'Comercio Electrónico',
        description: 'Implementamos tiendas online completas con pasarelas de pago seguras y experiencias de compra optimizadas.',
    },
    {
        icon: <FiSearch className="w-8 h-8" />,
        title: 'SEO y Marketing Digital',
        description: 'Optimizamos tu presencia en buscadores y creamos estrategias de marketing digital para aumentar tu visibilidad.',
    },
    {
        icon: <FiServer className="w-8 h-8" />,
        title: 'Desarrollo Backend',
        description: 'Construimos APIs robustas, servicios web y sistemas de gestión con las últimas tecnologías.',
    },
    {
        icon: <FiCode className="w-8 h-8" />,
        title: 'Consultoría Tecnológica',
        description: 'Asesoramos en la selección de tecnologías y arquitecturas para optimizar tus proyectos digitales.',
    },
];

const Servicios = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section id="servicios" className="py-20 bg-gray-50 dark:bg-[#0a0a14]">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4">
                        Nuestros Servicios
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Soluciones <span className="text-gradient">tecnológicas</span> a medida
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Ofrecemos una amplia gama de servicios digitales para ayudar a tu negocio a destacar en el mundo digital.
                        Desde el diseño hasta la implementación y mantenimiento.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-[#1a1a2e] rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                                {servicio.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{servicio.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{servicio.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Servicios; 