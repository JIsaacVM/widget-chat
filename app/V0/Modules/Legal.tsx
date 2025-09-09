import React from 'react';
import { legalSections } from './../Data/Legal_data'; // Importa los datos de las secciones legales

export default function Legal() {
    return (
        <div className="bg-[var(--bg-cards)] py-16 px-4 sm:px-6 lg:px-8">
            {/* Sección de avisos legales con animación fade-up */}
            <div
                data-aos="fade-up"
                className="max-w-5xl mx-auto bg-[var(--white)] p-8 rounded-xl shadow-lg border border-[var(--border)]"
            >
                <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                    Avisos Legales y Regulatorios
                </h2>
                <div className="space-y-6">
                    {legalSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-1">{section.title}</h3>
                            <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sección de "Mantente Informado" con animación fade-up */}
            <div
                data-aos="fade-up"
                data-aos-delay="200" // Un pequeño retraso para un efecto de entrada más suave
                className="text-center mt-16"
            >
                <h2 className="text-3xl font-extrabold text-[var(--color-text-dark)] sm:text-4xl">
                    Mantente Informado
                </h2>
                <p className="mt-4 text-lg text-[var(--color-text-light)]">
                    Recibe insights semanales sobre mercados financieros y estrategias de inversión
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full text-[var(--color-text-dark)] sm:w-auto px-4 py-3 border border-[var(--border)] rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                    />
                    <button className="w-full sm:w-auto px-6 py-3 border border-transparent text-[var(--white)] bg-[var(--color-primary)] rounded-md font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-300">
                        Suscribirme
                    </button>
                </div>
                <p className="mt-4 text-sm text-[var(--color-text-light)]">Sin spam. Cancela cuando quieras.</p>
            </div>
        </div>
    );
}