import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { pricingPlans } from './../Data/Pricing_data'; // Importa los datos de precios

export default function Pricing() {
    return (
        <div className="bg-[var(--white)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Contenedor del encabezado con animación fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-dark)] sm:text-4xl">
                        Planes Diseñados para Ti
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-light)]">
                        Desde emprendedores hasta grandes patrimonios, tenemos el plan perfecto
                    </p>
                </div>
            </div>

            {/* Grid de las tarjetas de precios con animaciones escalonadas */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150} // Retraso de 150ms para cada tarjeta
                        className={`bg-[var(--white)] p-8 rounded-xl shadow-lg flex flex-col items-center relative 
                        ${plan.isPopular ? 'border-2 border-[var(--color-primary)]' : 'border border-[var(--border)]'}`}
                    >
                        {plan.isPopular && (
                            <span className="absolute -top-4 bg-[var(--color-primary)] text-[var(--white)] text-xs font-semibold px-4 py-1 rounded-full">
                                Más Popular
                            </span>
                        )}
                        <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">{plan.name}</h3>
                        <p className="text-sm text-[var(--color-text-light)] mb-6">{plan.description}</p>
                        <p className="text-4xl font-extrabold text-[var(--color-text-dark)] mb-8">{plan.price}</p>

                        <ul className="space-y-4 text-left w-full">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-[var(--color-text-light)]">
                                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-secondary)] mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`mt-10 px-6 py-3 rounded-md font-semibold text-lg w-full transition-colors duration-300 ${plan.isPopular ? 'bg-[var(--color-primary)] text-[var(--white)] hover:bg-[var(--color-primary-dark)]' : 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]'}`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}