import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad | KuhmDev',
    description: 'Política de privacidad de KuhmDev. Información sobre cómo recopilamos, utilizamos y protegemos sus datos personales.',
};

export default function PrivacidadLayout({
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