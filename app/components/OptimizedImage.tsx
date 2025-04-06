"use client";

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
    src: string;
    fallbackSrc?: string;
    quality?: number;
}

/**
 * Componente que automatiza la carga de imágenes optimizadas
 * Detecta y utiliza formatos modernos (WebP, AVIF) cuando están disponibles
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    fallbackSrc,
    alt,
    quality = 80,
    ...rest
}) => {
    const [imgSrc, setImgSrc] = useState<string>(src);
    const [isError, setIsError] = useState<boolean>(false);

    // Intentar usar la versión WebP si está disponible
    useEffect(() => {
        const checkForWebP = async () => {
            // Verificar si es una imagen PNG o JPG (para convertir a WebP)
            if (
                (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg')) &&
                !src.includes('.webp')
            ) {
                // Crear la ruta del archivo WebP
                const webpSrc = src.substring(0, src.lastIndexOf('.')) + '.webp';

                try {
                    // Intentar cargar la imagen WebP
                    const response = await fetch(webpSrc, { method: 'HEAD' });
                    if (response.ok) {
                        setImgSrc(webpSrc);
                    }
                } catch {
                    // Si hay un error, mantener la fuente original
                    console.log(`Usando imagen original: ${src}`);
                }
            }
        };

        checkForWebP();
    }, [src]);

    // Manejar errores de carga
    const handleError = () => {
        if (!isError && fallbackSrc) {
            setIsError(true);
            setImgSrc(fallbackSrc);
        }
    };

    return (
        <Image
            src={imgSrc}
            alt={alt}
            quality={quality}
            onError={handleError}
            {...rest}
        />
    );
};

export default OptimizedImage; 