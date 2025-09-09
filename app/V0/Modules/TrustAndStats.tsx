import React from 'react';
import { ShieldCheckIcon, DocumentIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { trustFeatures, stats } from './../Data/TrustAndStats_data'; // Importa los datos

// Mapeo de nombres de string a componentes de íconos
const iconComponents = {
    ShieldCheckIcon,
    DocumentIcon,
    CheckBadgeIcon,
};

export default function TrustAndStats() {
    return (
        <div className="bg-[var(--white)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-12">
                {/* Left Section con animación "fade-up" */}
                <div
                    data-aos="fade-up"
                    className="lg:w-1/2 mb-12 lg:mb-0"
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                        Confianza y Transparencia
                    </h2>
                    <p className="text-lg text-[var(--color-text-light)] mb-8">
                        Cumplimos con todas las regulaciones de CONDUSEF y mantenemos los más altos estándares de seguridad para proteger tus datos e inversiones.
                    </p>
                    <div className="space-y-6">
                        {trustFeatures.map((item, index) => {
                            const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];
                            return (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150} // Retraso escalonado
                                    className="flex items-center text-gray-700"
                                >
                                    <IconComponent className="w-6 h-6 text-[var(--color-secondary)] mr-3 flex-shrink-0" />
                                    <p className="text-lg">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Section con animación "fade-up" */}
                <div
                    data-aos="fade-up"
                    className="lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-lg border border-[var(--border)] grid grid-cols-2 gap-8 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 col-span-2 mb-4">Nuestros Números</h3>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 150} // Retraso escalonado
                        >
                            <p className="text-4xl font-extrabold text-teal-600 mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}