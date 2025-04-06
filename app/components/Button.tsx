"use client";

import React from 'react';
import Link from 'next/link';

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};

const Button = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
    disabled = false
}: ButtonProps) => {
    // Clases base según el variante
    const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 ease-in-out';

    // Clases específicas por variante
    const variantClasses = {
        primary: 'bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white shadow-md hover:shadow-lg',
        secondary: 'bg-[var(--secondary)] hover:bg-[var(--accent)] text-white shadow-md hover:shadow-lg',
        outline: 'bg-transparent border-2 border-current text-[var(--primary)] hover:text-[var(--primary-dark)]',
        ghost: 'bg-transparent text-[var(--primary)] hover:text-[var(--primary-dark)] hover:bg-[var(--primary)]/10 px-4'
    };

    // Clases para estado deshabilitado
    const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';

    // Combinación de todas las clases
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className} ${disabledClasses}`;

    // Renderizar como link o botón
    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClasses}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button; 