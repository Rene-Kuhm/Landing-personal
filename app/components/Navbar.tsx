"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';
import OptimizedImage from './OptimizedImage';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-[#0f0f1e]/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`;

    const navItems = [
        { title: 'Inicio', href: '#home' },
        { title: 'Servicios', href: '#servicios' },
        { title: 'Proyectos', href: '#proyectos' },
        { title: 'Proceso', href: '#proceso' },
        { title: 'Sobre Nosotros', href: '#sobre-nosotros' },
    ];

    return (
        <nav className={navbarClasses}>
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <OptimizedImage
                        src="/images/logo.webp"
                        alt="KuhmDev"
                        width={150}
                        height={50}
                        priority={true}
                        className="h-auto"
                    />
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="font-medium hover:text-[var(--primary)] transition-colors"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <Button href="#contacto" variant="primary" className="ml-4">
                        Contáctanos
                    </Button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menú"
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div
                    className="md:hidden bg-white dark:bg-[#0f0f1e] shadow-lg"
                    style={{
                        animation: 'slideDown 0.3s ease-out forwards'
                    }}
                >
                    <div className="container-custom py-4 flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="font-medium py-2 hover:text-[var(--primary)] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Button href="#contacto" variant="primary" className="mt-4 w-full">
                            Contáctanos
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 