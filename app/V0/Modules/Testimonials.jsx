import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
    { text: "En 2 años, FinancePro me ayudó a aumentar mi patrimonio en un 45%. La IA predictiva es increíble.", name: "María Rodríguez", title: "Empresaria, CDMX", initials: "MR" },
    { text: "La asesoría 24/7 es un game-changer. Siempre hay alguien experto disponible cuando lo necesito.", name: "Carlos López", title: "Director Financiero", initials: "CL" },
    { text: "Finalmente encontré una plataforma que entiende mis necesidades como inversionista sofisticada.", name: "Ana Sánchez", title: "Inversionista Angel", initials: "AS" }
];

const getBgColor = (initials) => {
    const colors = ['bg-[var(--bg-circle)]', 'bg-teal-200', 'bg-pink-200', 'bg-purple-200'];
    const index = (initials.charCodeAt(0) + initials.charCodeAt(1)) % colors.length;
    return colors[index];
};

export default function Testimonials() {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Contenedor del encabezado con animación de fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-light)]">
                        Más de 50,000 clientes confían en FinancePro para gestionar su patrimonio
                    </p>
                </div>
            </div>

            {/* Grid de los testimonios con animaciones escalonadas */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150} // Retraso de 150ms entre cada testimonio
                        className="bg-[var(--white)] p-8 rounded-xl shadow-lg border border-[var(--border)]"
                    >
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5" />
                            ))}
                        </div>
                        <p className="text-gray-700 text-lg italic leading-relaxed mb-6">"{t.text}"</p>
                        <div className="flex items-center">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-[var(--white)] ${getBgColor(t.initials)}`}>
                                {t.initials}
                            </div>
                            <div className="ml-4 text-left">
                                <p className="font-semibold text-gray-900">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}