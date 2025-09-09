import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { testimonials, Testimonial } from '../Data/Testimonials_data'; // Importa la interfaz y los datos

// Función auxiliar para generar un color de fondo basado en las iniciales
const getBgColor = (initials: string): string => {
    const colors = ['bg-[var(--bg-circle)]', 'bg-teal-200', 'bg-pink-200', 'bg-purple-200'];
    const index = (initials.charCodeAt(0) + initials.charCodeAt(1)) % colors.length;
    return colors[index];
};

// Componente para el rating de estrellas
const StarRating = () => (
    <div className="flex text-[var(--color-warning)] mb-4">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5" />
        ))}
    </div>
);

// Componente individual de la tarjeta de testimonio
const TestimonialCard: React.FC<{ testimonial: Testimonial; delay: number }> = ({ testimonial, delay }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="bg-[var(--white)] p-8 rounded-xl shadow-lg border border-[var(--border)]"
        >
            <StarRating />
            <p className="text-[var(--color-text-dark)] text-lg italic leading-relaxed mb-6">{testimonial.text}</p>
            <div className="flex items-center">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-[var(--white)] ${getBgColor(testimonial.initials)}`}>
                    {testimonial.initials}
                </div>
                <div className="ml-4 text-left">
                    <p className="font-semibold text-[var(--color-text-dark)]">{testimonial.name}</p>
                    <p className="text-sm text-[var(--color-text-light)]">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};

// Componente principal de testimonios
export default function Testimonials() {
    return (
        <div className="bg-[var(--bg-cards)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Contenedor del encabezado con animación de fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-dark)] sm:text-4xl">
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
                    <TestimonialCard
                        key={index}
                        testimonial={t}
                        delay={index * 150} // Retraso de 150ms entre cada testimonio
                    />
                ))}
            </div>
        </div>
    );
}