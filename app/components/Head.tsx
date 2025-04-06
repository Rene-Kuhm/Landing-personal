"use client";

import React from 'react';

export default function Head() {
  return (
    <>
      {/* Precargar fuentes críticas */}
      <link
        rel="preload"
        href="/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Preload critical assets */}
      <link
        rel="preload"
        href="/images/optimized/logo-small.avif"
        as="image"
        type="image/avif"
        fetchPriority="high"
      />

      {/* Estilos críticos inlineados */}
      <style jsx global>{`
        :root {
          --primary: #FF6B49;
          --primary-dark: #E55A3D;
          --secondary: #4E295B;
          --foreground-rgb: 33, 33, 33;
          --background-start-rgb: 255, 255, 255;
          --background-end-rgb: 245, 245, 250;
        }
        
        @media (prefers-color-scheme: dark) {
          :root {
            --foreground-rgb: 245, 245, 245;
            --background-start-rgb: 15, 15, 30;
            --background-end-rgb: 25, 25, 40;
          }
        }
        
        body {
          color: rgb(var(--foreground-rgb));
          background: linear-gradient(
              to bottom,
              transparent,
              rgb(var(--background-end-rgb))
            )
            rgb(var(--background-start-rgb));
          min-height: 100vh;
        }
        
        .container-custom {
          width: 100%;
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, var(--secondary), var(--primary));
        }
      `}</style>
    </>
  );
} 