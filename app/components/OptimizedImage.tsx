"use client";

import React from 'react';
import Image from 'next/image';

type OptimizedImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
};

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 80
}: OptimizedImageProps) {
    // La imagen se usa directamente desde la fuente proporcionada
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority={priority}
            quality={quality}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
    );
} 