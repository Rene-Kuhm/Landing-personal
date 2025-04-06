"use client";

import React from 'react';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';

const Logo = () => {
    return (
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
    );
};

export default Logo; 