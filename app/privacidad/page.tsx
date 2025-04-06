"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const Privacidad = () => {
    return (
        <div className="min-h-screen py-20 bg-gray-50 dark:bg-[#0a0a14]">
            <div className="container-custom">
                <Link
                    href="/#home"
                    className="inline-flex items-center text-[var(--primary)] hover:underline mb-8"
                >
                    <FiArrowLeft className="mr-2" /> Volver al inicio
                </Link>

                <div className="bg-white dark:bg-[#1a1a2e] rounded-xl p-8 shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Política de <span className="text-gradient">Privacidad</span>
                    </h1>

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="mb-4">
                            Fecha de última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introducción</h2>
                        <p>
                            En KuhmDev, respetamos su privacidad y nos comprometemos a proteger sus datos personales.
                            Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando
                            visita nuestro sitio web y le informará sobre sus derechos de privacidad.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Datos que recopilamos</h2>
                        <p>
                            Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Datos de identidad: nombre, apellido, nombre de usuario o identificador similar</li>
                            <li>Datos de contacto: dirección de correo electrónico, número de teléfono, dirección</li>
                            <li>Datos técnicos: dirección IP, datos de inicio de sesión, tipo y versión del navegador</li>
                            <li>Datos de uso: información sobre cómo utiliza nuestro sitio web y servicios</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Cómo recopilamos sus datos</h2>
                        <p>
                            Utilizamos diferentes métodos para recopilar datos, incluyendo:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Interacciones directas: datos que nos proporciona al completar formularios, corresponder con nosotros o solicitar nuestros servicios</li>
                            <li>Tecnologías automatizadas: a medida que interactúa con nuestro sitio, podemos recopilar automáticamente datos técnicos sobre su equipo y patrones de navegación</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Cómo utilizamos sus datos</h2>
                        <p>
                            Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, usaremos sus datos personales en las siguientes circunstancias:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Para proporcionarle nuestros servicios</li>
                            <li>Para responder a sus consultas</li>
                            <li>Para mejorar nuestro sitio web y servicios</li>
                            <li>Para cumplir con obligaciones legales</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">5. Divulgación de sus datos personales</h2>
                        <p>
                            Podemos compartir sus datos personales con terceros en las siguientes situaciones:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                            <li>Asesores profesionales como abogados, banqueros y aseguradores</li>
                            <li>Autoridades fiscales, reguladoras u otras cuando sea requerido por ley</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">6. Seguridad de datos</h2>
                        <p>
                            Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales
                            se pierdan, se usen o se acceda a ellos de forma no autorizada.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">7. Retención de datos</h2>
                        <p>
                            Solo conservaremos sus datos personales durante el tiempo necesario para cumplir con los
                            fines para los que los recopilamos, incluyendo el cumplimiento de requisitos legales,
                            contables o de informes.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">8. Sus derechos legales</h2>
                        <p>
                            Bajo ciertas circunstancias, usted tiene derechos en relación con sus datos personales,
                            incluyendo el derecho a solicitar acceso, corrección o eliminación de sus datos personales.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">9. Cambios a esta política</h2>
                        <p>
                            Podemos actualizar esta política de privacidad de vez en cuando. La versión actualizada
                            se indicará con una fecha de revisión actualizada y la versión actualizada entrará en
                            vigencia tan pronto como sea accesible.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">10. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos a través de:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Email: renekuhm2@gmail.com</li>
                            <li>Teléfono: +54 2334 409838</li>
                            <li>Dirección: Plan 5000, Calle 15 bis, Eduardo Castex (LP) Argentina</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacidad; 