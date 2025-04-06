"use client";

import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../components/Button';

const Servicios = () => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsInView(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            id: 1,
            title: 'Desarrollo Web',
            description: 'Sitios web y aplicaciones personalizadas con las últimas tecnologías y optimizados para SEO.',
            icon: '/images/icon-web.svg',
        },
        {
            id: 2,
            title: 'Comercio Electrónico',
            description: 'Tiendas online intuitivas y seguras que aumentan tus ventas y mejoran la experiencia de compra.',
            icon: '/images/icon-ecommerce.svg',
        },
        {
            id: 3,
            title: 'Aplicaciones Móviles',
            description: 'Apps nativas y cross-platform que destacan en las tiendas de aplicaciones con experiencias premium.',
            icon: '/images/icon-mobile.svg',
        },
        {
            id: 4,
            title: 'Sistemas a Medida',
            description: 'Software personalizado para optimizar procesos internos y mejorar la productividad empresarial.',
            icon: '/images/icon-software.svg',
        },
        {
            id: 5,
            title: 'Consultoría Digital',
            description: 'Asesoramiento estratégico para mejorar tu presencia online y escalar tu negocio digital.',
            icon: '/images/icon-consulting.svg',
        },
        {
            id: 6,
            title: 'Marketing Digital',
            description: 'Estrategias de posicionamiento, SEO y SEM para aumentar tu visibilidad y conseguir leads.',
            icon: '/images/icon-marketing.svg',
        },
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-50 dark:bg-[#0f1119]">
            <div className="container-custom">
                <div
                    className="text-center max-w-3xl mx-auto mb-16"
                    style={{
                        opacity: isInView ? 1 : 0,
                        transform: `translateY(${isInView ? 0 : 20}px)`,
                        transition: 'opacity 0.5s ease, transform 0.5s ease'
                    }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Ofrecemos soluciones digitales completas para todos los aspectos de tu negocio online
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="bg-white dark:bg-[#1a1c29] rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transform: `translateY(${isInView ? 0 : 20}px)`,
                                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
                            }}
                        >
                            <div className="mb-4 text-[var(--primary)]">
                                {/* Placeholder para ícono */}
                                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                                    <FiArrowRight className="text-2xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {service.description}
                            </p>
                            <Button href="#contacto" variant="ghost" className="mt-2 p-0">
                                Más información <FiArrowRight className="ml-2" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios; 