"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const Terminos = () => {
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
                        Términos y <span className="text-gradient">Condiciones</span>
                    </h1>

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="mb-4">
                            Fecha de última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introducción</h2>
                        <p>
                            Bienvenido a KuhmDev. Estos términos y condiciones rigen el uso de nuestros servicios
                            de desarrollo web, programación y consultoría. Al utilizar nuestros servicios, usted acepta
                            estos términos en su totalidad.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Definiciones</h2>
                        <p>
                            &quot;KuhmDev&quot; o &quot;nosotros&quot; se refiere a nuestra agencia de desarrollo.
                            &quot;Cliente&quot; o &quot;usted&quot; se refiere a la persona o entidad que contrata nuestros servicios.
                            &quot;Servicios&quot; se refiere a cualquier trabajo de desarrollo web, programación o consultoría que proporcionamos.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Servicios</h2>
                        <p>
                            Proporcionamos servicios de desarrollo web, programación y consultoría tecnológica.
                            La naturaleza exacta de estos servicios será acordada por escrito antes del inicio del proyecto.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Cotizaciones y Pagos</h2>
                        <p>
                            Las cotizaciones son válidas por 30 días desde su emisión. Los pagos deben realizarse
                            según lo acordado en el contrato. Normalmente requerimos un depósito inicial antes de
                            comenzar el trabajo.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">5. Plazos</h2>
                        <p>
                            Nos esforzamos por cumplir con todos los plazos acordados, pero no podemos ser
                            responsables de retrasos causados por factores fuera de nuestro control o por la falta
                            de provisión oportuna de información o materiales por parte del cliente.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">6. Propiedad Intelectual</h2>
                        <p>
                            Una vez completado el pago final, el cliente posee todos los derechos de propiedad
                            intelectual del trabajo entregado, excepto por componentes de terceros o soluciones
                            propias que se licencian pero no se venden.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">7. Confidencialidad</h2>
                        <p>
                            Ambas partes acuerdan mantener confidencial toda la información compartida durante
                            la relación comercial, incluyendo detalles del proyecto, datos del cliente y estrategias empresariales.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitación de Responsabilidad</h2>
                        <p>
                            Nuestra responsabilidad se limita al valor del contrato. No somos responsables de
                            daños indirectos, consecuentes o pérdidas de datos o ingresos.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">9. Terminación</h2>
                        <p>
                            Cualquiera de las partes puede terminar el contrato con un aviso por escrito de 30 días.
                            El cliente debe pagar por todo el trabajo completado hasta la fecha de terminación.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">10. Ley Aplicable</h2>
                        <p>
                            Estos términos se rigen por las leyes de Argentina y cualquier disputa será resuelta
                            en los tribunales de esa jurisdicción.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">11. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre estos términos, puede contactarnos a través de:
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

export default Terminos; 