// src/components/Features.tsx

import React from 'react';
import {
    CalculatorIcon, ChartBarIcon, ShieldExclamationIcon,
    CreditCardIcon, UsersIcon, DocumentTextIcon
} from '@heroicons/react/24/outline';
import { features, FeatureItem } from './../Data/Caracteristicas_data';

const iconComponents = {
    CalculatorIcon,
    ChartBarIcon,
    ShieldExclamationIcon,
    CreditCardIcon,
    UsersIcon,
    DocumentTextIcon,
};

export default function Features() {
    return (
        <div className="bg-[var(--white)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Encabezado con animación fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-dark)] sm:text-4xl">
                        Características Principales
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-light)]">
                        Todo lo que necesitas para tomar control total de tus finanzas
                    </p>
                </div>
            </div>

            {/* Grid de características con animaciones fade-up y retrasos escalonados */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature: FeatureItem, index: number) => {
                    // Obtiene dinámicamente el componente del icono
                    const Icon = iconComponents[feature.iconName as keyof typeof iconComponents];
                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100} // Retraso de 100ms entre cada tarjeta
                            className="bg-[var(--bg-cards)] p-8 rounded-xl shadow-lg"
                        >
                            <Icon className="w-12 h-12 text-[var(--color-secondary)] mb-4" />
                            <h3 className="text-xl font-semibold text-[var(--color-text-dark)] mb-2">{feature.title}</h3>
                            <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}