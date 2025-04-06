"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/images/logo.png"
                alt="KuhmDev Logo"
                width={180}
                height={60}
                priority
                className="h-auto"
            />
        </Link>
    );
};

export default Logo; 