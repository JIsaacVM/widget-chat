import React from "react";
import { PhoneIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function CondusefSection() {
    return (
        <div className="bg-[var(--white)] p-8 md:p-12 lg:p-16 flex justify-center">
            <div className="bg-[var(--cards)] p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-4xl flex flex-col lg:flex-row gap-8 items-start">
                {/* Contenido Izquierdo: Información y Contacto */}
                <div className="flex-1 flex flex-col justify-between space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es CONDUSEF?</h2>
                        <p className="text-[var(--color-text-light)] mb-6 leading-relaxed">
                            La Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros es el organismo público descentralizado que regula y supervisa las instituciones financieras en México para proteger los derechos de los usuarios.
                        </p>
                    </div>

                    {/* Detalles de Contacto */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <PhoneIcon className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-[var(--color-text-light)] text-lg">Teléfono CONDUSEF</p>
                                <p className="text-[var(--color-text-light)]">55 5340 0999</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-[var(--color-text-light)] text-lg">¿Tienes una queja?</p>
                                <p className="text-[var(--color-text-light)]">Presenta tu reclamación directamente ante CONDUSEF</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenido Derecho: Registros y Botón */}
                <div className="flex-1 flex flex-col justify-between w-full lg:w-auto">
                    <div className="bg-[var(--white)] p-8 rounded-2xl border border-[var(--border)] mb-6 shadow-md">
                        <h3 className="font-bold text-xl text-[var(--color-text-light)] mb-4">Nuestros Registros</h3>
                        <div className="space-y-3 text-[var(--color-text-light)]">
                            <p className="flex justify-between items-center">
                                <span className="font-medium">Registro CONDUSEF:</span>{" "}
                                <span className="text-[var(--color-text-light)] font-mono">REG-2024-001234</span>
                            </p>
                            <p className="flex justify-between items-center">
                                <span className="font-medium">CNBV:</span>{" "}
                                <span className="text-[var(--color-text-light)] font-mono">CNBV-5678-2024</span>
                            </p>
                            <p className="flex justify-between items-center">
                                <span className="font-medium">Última supervisión:</span>{" "}
                                <span className="text-[var(--color-text-light)]">Enero 2024</span>
                            </p>
                        </div>
                    </div>
                    <button className="w-full py-4 px-6 bg-[var(--color-primary)] text-[var(--white)] font-semibold rounded-xl shadow-lg hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300">
                        Ver Documentos Regulatorios
                    </button>
                </div>
            </div>
        </div>
    );
}
