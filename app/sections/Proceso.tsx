"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCoffee, FiEdit3, FiCode, FiLayers, FiServer, FiCheckCircle } from 'react-icons/fi';

const Proceso = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const steps = [
        {
            icon: <FiCoffee />,
            title: 'Reunión inicial',
            description: 'Nos reunimos contigo para entender tus objetivos, necesidades y expectativas del proyecto.'
        },
        {
            icon: <FiEdit3 />,
            title: 'Planificación',
            description: 'Diseñamos una estrategia a medida y establecemos plazos claros para las diferentes etapas.'
        },
        {
            icon: <FiLayers />,
            title: 'Diseño UX/UI',
            description: 'Creamos diseños intuitivos y atractivos enfocados en la experiencia del usuario.'
        },
        {
            icon: <FiCode />,
            title: 'Desarrollo',
            description: 'Convertimos los diseños en código utilizando tecnologías modernas y eficientes.'
        },
        {
            icon: <FiServer />,
            title: 'Pruebas y despliegue',
            description: 'Realizamos pruebas exhaustivas y desplegamos tu proyecto en un entorno seguro.'
        },
        {
            icon: <FiCheckCircle />,
            title: 'Soporte continuo',
            description: 'Te acompañamos después del lanzamiento para garantizar el éxito de tu proyecto.'
        }
    ];

    return (
        <section id="proceso" className="py-20 bg-gray-50 dark:bg-[#0a0a14]">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4">
                        Metodología
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Nuestro <span className="text-gradient">proceso</span> de trabajo
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Seguimos una metodología clara y estructurada que garantiza resultados de alta calidad,
                        comunicación constante y entrega a tiempo.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-[#1a1a2e] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="relative mb-6">
                                <div className="w-14 h-14 bg-[var(--primary)]/10 flex items-center justify-center rounded-xl text-[var(--primary)] text-2xl">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Nuestro enfoque ágil nos permite adaptarnos a cambios y nuevos requerimientos durante el proceso,
                        asegurando que el producto final cumpla con tus expectativas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Proceso; 