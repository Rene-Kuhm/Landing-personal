import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Términos y Condiciones | KuhmDev',
    description: 'Términos y condiciones de uso de los servicios de KuhmDev. Información sobre nuestros acuerdos, responsabilidades y políticas de servicio.',
};

export default function TerminosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
        </>
    );
} 