import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "KuhmDev",
        "url": "https://kuhmdev.com",
        "logo": "https://kuhmdev.com/images/logo.png",
        "description": "Expertos en desarrollo web, programación y consultoría digital. Creamos soluciones a medida que impulsan el crecimiento de tu negocio.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plan 5000, Calle 15 bis",
            "addressLocality": "Eduardo Castex",
            "addressRegion": "La Pampa",
            "postalCode": "6380",
            "addressCountry": "Argentina"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+54-2334-409838",
            "contactType": "customer service",
            "email": "renekuhm2@gmail.com",
            "availableLanguage": ["Spanish"]
        },
        "sameAs": [
            "https://www.facebook.com/TecnoDespegueLive",
            "https://www.linkedin.com/in/rené-kuhm-1aa88818a/",
            "https://github.com/Rene-Kuhm",
            "https://www.instagram.com/renekuhm/"
        ],
        "offers": {
            "@type": "Offer",
            "description": "Servicios de desarrollo web y consultoría digital"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd; 