"use client";

import React from 'react';

// Este componente carga los estilos críticos de manera inline
// para evitar que bloqueen el renderizado inicial
export default function Head() {
  return (
    <>
      {/* Estilos críticos incrustados para evitar bloqueo de renderizado */}
      <style jsx global>{`
        :root {
          --primary: #FF6B49;
          --primary-dark: #E55A3D;
          --secondary: #4E295B;
          --accent: #743F87;
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
          background: rgb(var(--background-start-rgb));
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, var(--secondary), var(--primary));
        }
        
        .container-custom {
          width: 100%;
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        h1 {
          font-weight: bold;
          line-height: 1.2;
        }
      `}</style>
    </>
  );
} 