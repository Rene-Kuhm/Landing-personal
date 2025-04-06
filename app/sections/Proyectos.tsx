"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiPlus, FiGithub } from 'react-icons/fi';

// Proyectos funcionales con imágenes reales
const proyectos = [
    {
        id: 1,
        title: 'KuhmDev Website',
        description: 'Portafolio profesional con proyectos destacados, tecnologías y experiencia laboral.',
        category: 'sitio-web',
        image: '/images/kuhmdev-web.avif',
        fallbackImage: 'https://via.placeholder.com/600x400/FF6B49/ffffff?text=Portfolio',
        link: 'https://kuhmdev-orsc.vercel.app/',
        deployment: 'https://kuhmdev-orsc.vercel.app/',
        isActive: true
    },
    {
        id: 2,
        title: 'Systema Reclamos Dashboard',
        description: 'Sistema administrativo para gestión de reclamos con visualización de datos y paneles interactivos.',
        category: 'aplicacion',
        image: '/images/cospec.avif',
        fallbackImage: 'https://via.placeholder.com/600x400/4E295B/ffffff?text=Dashboard+App',
        link: 'https://prueba-systema.vercel.app/',
        deployment: 'prueba-systema-3cera2o2o-rene-kuhms-projects.vercel.app',
        isActive: true
    },
    {
        id: 3,
        title: 'Agencia plataforma',
        description: 'Plataforma web para agencias con gestión de proyectos, clientes y servicios integrados.',
        category: 'e-commerce',
        image: '/images/agencia.avif',
        fallbackImage: 'https://via.placeholder.com/600x400/FF6B49/ffffff?text=E-commerce',
        link: 'https://nextjs-jmqhnb4fe-rene-kuhms-projects.vercel.app/',
        deployment: 'https://nextjs-jmqhnb4fe-rene-kuhms-projects.vercel.app/',
        isActive: true
    },
    {
        id: 6,
        title: 'Desarrollo web agencia',
        description: 'Sitio web corporativo para agencia de desarrollo con presentación de servicios y portafolio.',
        category: 'sitio-web',
        image: '/images/Desarrollo-web-agencia.avif',
        fallbackImage: 'https://via.placeholder.com/600x400/4E295B/ffffff?text=Landing+Page',
        link: 'https://webhtml-astro.vercel.app/',
        deployment: 'https://webhtml-astro.vercel.app/',
        isActive: true
    }
];

const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'sitio-web', label: 'Sitios Web' },
    { id: 'e-commerce', label: 'E-commerce' },
    { id: 'aplicacion', label: 'Aplicaciones' }
];

const Proyectos = () => {
    const [filter, setFilter] = useState('todos');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Estado para controlar errores de carga de imágenes
    const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

    const handleImageError = (id: number) => {
        setImageErrors(prev => ({ ...prev, [id]: true }));
    };

    const filteredProjects = filter === 'todos'
        ? proyectos
        : proyectos.filter(project => project.category === filter);

    return (
        <section id="proyectos" className="py-20">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4">
                        Nuestro Portafolio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Proyectos <span className="text-gradient">destacados</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-10">
                        Descubre algunos de nuestros mejores trabajos. Cada proyecto ha sido desarrollado con atención al detalle, pensando en la experiencia del usuario y aplicando las mejores prácticas.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category.id
                                    ? 'bg-[var(--primary)] text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((proyecto) => (
                        <motion.div
                            key={proyecto.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group bg-white dark:bg-[#1a1a2e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden h-64">
                                <Image
                                    src={imageErrors[proyecto.id] ? proyecto.fallbackImage : proyecto.image}
                                    alt={proyecto.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                    onError={() => handleImageError(proyecto.id)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6 w-full">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-white font-bold text-xl">{proyecto.title}</h3>
                                            <div className="flex gap-2">
                                                <a
                                                    href={proyecto.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[var(--primary)] transition-colors"
                                                    title="Ver en Vercel"
                                                >
                                                    <FiGithub />
                                                </a>
                                                <a
                                                    href={proyecto.deployment}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[var(--primary)] transition-colors"
                                                    title="Ver sitio web"
                                                >
                                                    <FiExternalLink />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{proyecto.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{proyecto.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <a
                        href="https://vercel.com/rene-kuhms-projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
                    >
                        Ver más proyectos <FiPlus />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Proyectos; 