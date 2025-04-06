"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    href,
    onClick,
    children,
    variant = 'primary',
    className = '',
    fullWidth = false,
    type = 'button',
    disabled = false,
}) => {
    const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 ease-in-out";

    const variantClasses = {
        primary: "bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white shadow-lg hover:shadow-xl",
        secondary: "bg-[var(--secondary)] hover:opacity-90 text-white shadow-lg hover:shadow-xl",
        outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
    };

    const widthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled ? "opacity-70 cursor-not-allowed" : "";

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`;

    const content = (
        <motion.span
            className="flex items-center gap-2"
            whileHover={{ scale: disabled ? 1 : 1.03 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
            {children}
        </motion.span>
    );

    if (href && !disabled) {
        return (
            <Link href={href} className={buttonClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            type={type}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

export default Button; 