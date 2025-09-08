import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const pricingPlans = [
    {
        name: "Starter",
        price: "$299/mes",
        description: "Perfecto para comenzar tu journey financiero",
        features: ["Hasta $100K en inversiones", "3 productos financieros", "Asesoría por chat", "Reportes mensuales"],
        buttonText: "Comenzar Prueba",
        buttonClass: "border-teal-500 text-teal-600 hover:bg-teal-50",
        isPopular: false
    },
    {
        name: "Professional",
        price: "$799/mes",
        description: "Para profesionales que buscan maximizar su patrimonio",
        features: ["Hasta $1M en inversiones", "Productos ilimitados", "Asesor personal dedicado", "Reportes semanales + IA", "Acceso a mercados globales"],
        buttonText: "Comenzar Ahora",
        buttonClass: "bg-teal-600 text-[var(--white)] hover:bg-teal-700",
        isPopular: true
    },
    {
        name: "Enterprise",
        price: "$2,499/mes",
        description: "Para grandes patrimonios y family offices",
        features: ["Patrimonio ilimitado", "Equipo de asesores", "Estrategias personalizadas", "Reportes en tiempo real", "Conserje financiero"],
        buttonText: "Contactar Ventas",
        buttonClass: "border-gray-500 text-[var(--color-text-light)] hover:bg-gray-50",
        isPopular: false
    }
];

export default function Pricing() {
    return (
        <div className="bg-[var(--white)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Contenedor del encabezado con animación fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
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
                        ${plan.isPopular ? 'border-2 border-blue-500' : 'border border-[var(--border)]'}`}
                    >
                        {plan.isPopular && (
                            <span className="absolute -top-4 text-[var(--color-primary)] text-[var(--white)] text-xs font-semibold px-4 py-1 rounded-full">
                                Más Popular
                            </span>
                        )}
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                        <p className="text-4xl font-extrabold text-gray-900 mb-8">{plan.price}</p>

                        <ul className="space-y-4 text-left w-full">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-[var(--color-text-light)]">
                                    <CheckCircleIcon className="w-5 h-5 text-[var(--color-secondary)] mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`mt-10 px-6 py-3 rounded-md font-semibold text-lg w-full transition-colors duration-300 ${plan.isPopular ? 'bg-teal-600 text-[var(--white)] hover:bg-teal-700' : 'border border-teal-500 text-teal-600 hover:bg-teal-50'}`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}