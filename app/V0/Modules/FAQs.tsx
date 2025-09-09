// src/components/FAQs.tsx

import React from 'react';
import { faqs, FAQItem } from './../Data/FAQs_data'; // Importamos la data y el tipo

export default function FAQs() {
    return (
        <div className="bg-[var(--bg-cards)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Encabezado con animación de fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-dark)] sm:text-4xl">
                        Preguntas Frecuentes
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-light)]">
                        Resolvemos las dudas más comunes sobre FinancePro
                    </p>
                </div>
            </div>

            {/* Contenedor de preguntas con animaciones escalonadas */}
            <div className="mt-12 space-y-4 max-w-4xl mx-auto">
                {faqs.map((faq: FAQItem, index: number) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // Retraso escalonado para un efecto dinámico
                        className="bg-[var(--white)] p-6 rounded-xl shadow-md border border-[var(--border)]"
                    >
                        <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-2">{faq.question}</h3>
                        <p className="text-sm text-[var(--color-text-light)]">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}