"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import Button from '../components/Button';

const Contacto = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Estado del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    // Estado para manejar errores de validación
    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    // Estado para manejar el estado del envío
    const [submitStatus, setSubmitStatus] = useState({
        sending: false,
        sent: false,
        error: ''
    });

    // Manejar cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Limpiar error cuando el usuario escribe
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }));
        }
    };

    // Validar el formulario
    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Validar nombre
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es obligatorio';
            isValid = false;
        }

        // Validar email
        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Ingresa un email válido';
            isValid = false;
        }

        // Validar asunto
        if (!formData.asunto.trim()) {
            newErrors.asunto = 'El asunto es obligatorio';
            isValid = false;
        }

        // Validar mensaje
        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es obligatorio';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Manejar envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar formulario
        if (!validateForm()) {
            return;
        }

        // Actualizar estado a enviando
        setSubmitStatus({
            sending: true,
            sent: false,
            error: ''
        });

        try {
            // Enviar datos a la API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al enviar el mensaje');
            }

            // Actualizar estado a enviado exitosamente
            setSubmitStatus({
                sending: false,
                sent: true,
                error: ''
            });

            // Limpiar formulario después de envío exitoso
            setFormData({
                nombre: '',
                email: '',
                asunto: '',
                mensaje: ''
            });

            // Después de 5 segundos, quitar el mensaje de éxito
            setTimeout(() => {
                setSubmitStatus(prev => ({
                    ...prev,
                    sent: false
                }));
            }, 5000);

        } catch (error) {
            // Actualizar estado con error
            setSubmitStatus({
                sending: false,
                sent: false,
                error: error instanceof Error ? error.message : 'Ocurrió un error inesperado'
            });
        }
    };

    return (
        <section id="contacto" className="py-20 bg-gray-50 dark:bg-[#0a0a14]">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4">
                        Contacto
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Hagamos <span className="text-gradient">realidad</span> tu proyecto
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Estamos a un mensaje de distancia. Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo para comenzar a trabajar juntos.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    <div className="bg-white dark:bg-[#1a1a2e] rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>

                        {/* Mensaje de éxito */}
                        {submitStatus.sent && (
                            <div className="mb-6 bg-green-100 dark:bg-green-900/20 p-4 rounded-lg flex items-center text-green-800 dark:text-green-200">
                                <FiCheck className="mr-2 text-xl" />
                                ¡Mensaje enviado con éxito! Te contactaremos pronto.
                            </div>
                        )}

                        {/* Mensaje de error */}
                        {submitStatus.error && (
                            <div className="mb-6 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg flex items-center text-red-800 dark:text-red-200">
                                <FiAlertCircle className="mr-2 text-xl" />
                                {submitStatus.error}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.nombre ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white dark:bg-gray-900`}
                                        placeholder="Tu nombre"
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white dark:bg-gray-900`}
                                        placeholder="tu@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="asunto" className="block text-sm font-medium mb-2">
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="asunto"
                                    value={formData.asunto}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.asunto ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white dark:bg-gray-900`}
                                    placeholder="¿En qué podemos ayudarte?"
                                />
                                {errors.asunto && (
                                    <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    rows={4}
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.mensaje ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white dark:bg-gray-900`}
                                    placeholder="Cuéntanos los detalles de tu proyecto..."
                                ></textarea>
                                {errors.mensaje && (
                                    <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
                                )}
                            </div>
                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="px-8"
                                    disabled={submitStatus.sending}
                                >
                                    {submitStatus.sending ? 'Enviando...' : 'Enviar mensaje'}
                                    {!submitStatus.sending && <FiSend className="ml-2" />}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                Estamos disponibles para responder cualquier pregunta que tengas sobre tus proyectos digitales.
                                ¡No dudes en contactarnos!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                                        <FiMail className="text-[var(--primary)] text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-400">renekuhm2@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                                        <FiPhone className="text-[var(--primary)] text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Teléfono</h4>
                                        <p className="text-gray-600 dark:text-gray-400">+54 2334 409838</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                                        <FiMapPin className="text-[var(--primary)] text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Dirección</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Plan 5000<br />
                                            Calle 15 bis, Eduardo Castex (LP) Argentina
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden h-64 relative">
                            {/* En un proyecto real, aquí iría un mapa interactivo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white p-8 text-center">
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Visítanos</h4>
                                    <p>Estamos ubicados en Eduardo Castex (LP), Plan 5000, Calle 15 bis.
                                        Te invitamos a que nos visites y nos conozcas para poder brindarte el mejor servicio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contacto; 