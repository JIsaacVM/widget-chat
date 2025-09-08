import React from 'react';
import { ShieldCheck, Users, CheckCircle } from 'lucide-react';

const BenefitCard = ({ title, subtitle, features, icon }) => {
    return (
        // Solo el contenedor principal de la tarjeta tendrá la animación
        <div
            className="flex flex-col md:flex-row items-center justify-between p-8 bg-[var( --bg-light)] rounded-xl shadow-lg"
            data-aos="fade-up" // Animación de entrada suave desde abajo
        >
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2">{title}</h3>
                <p className="text-[var(--color-text-light)] mb-4">{subtitle}</p>
                <ul className="space-y-3 mt-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <CheckCircle className="text-[var(--color-primary)] h-5 w-5 mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center bg-[var(--bg-light)] mx-auto rounded-3xl py-16">
                {icon}
            </div>
        </div>
    );
};

const BenefitsSection = () => {
    const consumerProtectionFeatures = [
        "Información clara y veraz sobre los productos",
        "Transparencia en comisiones y costos",
        "Asesoría imparcial y profesional"
    ];

    const personalizedSolutionsFeatures = [
        "Diagnóstico financiero sin costo",
        "Plan de acción con pasos claros",
        "Seguimiento continuo a tu evolución"
    ];

    return (
        <section className="py-16 px-6 bg-[var(--white)]">
            <h2 className="text-4xl font-extrabold text-center text-[var(--color-primary-dark)] mb-4">
                Beneficios de Asesorarte con Nosotros
            </h2>
            <p className="text-center text-[var(--color-text-light)] text-lg mb-12">
                Trabajamos con transparencia y en cumplimiento de la normatividad financiera.
            </p>
            <div className="space-y-12">
                <BenefitCard
                    title="Protección al Consumidor"
                    subtitle="Cumplimos con todos los requisitos establecidos por la CONDUSEF para garantizar la protección de tus derechos como consumidor financiero."
                    features={consumerProtectionFeatures}
                    icon={<ShieldCheck className="text-[var(--color-primary)] h-24 w-24" />}
                />
                <div className="border-t-2 border-[var(--border)]"></div>
                <BenefitCard
                    title="Soluciones Personalizadas"
                    subtitle="Analizamos tu situación financiera y objetivos para recomendarte únicamente los productos que realmente necesitas."
                    features={personalizedSolutionsFeatures}
                    icon={<Users className="text-[var(--color-primary)] h-24 w-24" />}
                />
            </div>
        </section>
    );
};

export default BenefitsSection;