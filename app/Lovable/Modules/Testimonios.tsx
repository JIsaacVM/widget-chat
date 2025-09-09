import React from 'react';
import { ShieldCheckIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { testimonialsData, TestimonialData } from './../Data/Testimonios_data'; // Importa los datos y el tipo desde el archivo .ts

const StarRating = ({ rating }: { rating: number }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon
            key={index}
            className={`h-5 w-5 ${index < rating ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-light)]'}`}
        />
    ));
    return <div className="flex">{stars}</div>;
};

const Testimonial = ({ rating, text, name, title, index }: TestimonialData & { index: number }) => (
    <div
        data-aos="fade-up"
        data-aos-delay={index * 100}
    >
        <StarRating rating={rating} />
        <p className="mt-2 text-[var(--color-text-light)] italic">{text}</p>
        <p className="mt-2 font-semibold text-[var(--color-text-dark)]">{name}</p>
        <p className="text-sm text-[var(--color-text-light)]">{title}</p>
    </div>
);

export default function ContactTestimonials() {
    return (
        <div className="bg-[var(--white)] text-[var(--black)] py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
            {/* Título y Subtítulo de la Sección */}
            <div data-aos="fade-up" className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                    Contacto y Testimonios
                </h1>
                <p className="max-w-xl text-center text-[var(--color-text-light)]">
                    Estamos aquí para ayudarte con todas tus necesidades financieras. Conoce lo que
                    dicen nuestros clientes sobre nuestros servicios regulados.
                </p>
            </div>

            {/* Contenedor Principal de la Sección */}
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Columna Izquierda: Formulario de Contacto */}
                <div
                    data-aos="fade-up"
                    className="p-8 bg-[var(--bg-light)] rounded-xl shadow-lg h-fit"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 text-[var(--bg-circle)] rounded-full">
                            <ShieldCheckIcon className="w-6 h-6 text-[var(--color-secondary)]" />
                        </div>
                        <h2 className="text-xl font-bold text-[var(--color-text-dark)]">Consulta Gratuita</h2>
                    </div>
                    <p className="text-[var(--color-text-light)] mb-6">
                        Recibe asesoría personalizada sin compromiso. Nuestros expertos
                        te guiarán siguiendo todas las regulaciones de CONDUSEF.
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--color-text-dark)]">Nombre completo</label>
                                <input type="text" placeholder="Tu nombre" className="mt-1 block w-full rounded-md border-[var(--border)] shadow-sm focus:border-[var(--color-secondary)] focus:ring-[var(--color-primary)]" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--color-text-dark)]">Teléfono</label>
                                <input type="tel" placeholder="Tu teléfono" className="mt-1 block w-full rounded-md border-[var(--border)] shadow-sm focus:border-[var(--color-secondary)] focus:ring-[var(--color-primary)]" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-dark)]">Correo electrónico</label>
                            <input type="email" placeholder="tu@email.com" className="mt-1 block w-full rounded-md border-[var(--border)] shadow-sm focus:border-[var(--color-secondary)] focus:ring-[var(--color-primary)]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-dark)]">Servicio de interés</label>
                            <select className="mt-1 block w-full rounded-md border-[var(--border)] shadow-sm focus:border-[var(--color-secondary)] focus:ring-[var(--color-primary)]">
                                <option>Crédito Personal</option>
                                <option>Otro servicio...</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-dark)]">Mensaje</label>
                            <textarea placeholder="Cuéntanos sobre tu situación financiera..." rows={4} className="mt-1 block w-full rounded-md border-[var(--border)] shadow-sm focus:border-blue-500 focus:ring-[var(--color-primary)]"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-[var(--color-primary)] text-[var(--white)] font-semibold rounded-lg shadow-md hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 transition-colors"
                        >
                            Solicitar Consulta Gratuita
                        </button>
                        <p className="text-xs text-[var(--color-text-light)] text-center mt-4">
                            Al enviar este formulario, aceptas nuestros términos y condiciones regulados por
                            CONDUSEF. Tus datos están protegidos.
                        </p>
                    </form>
                </div>

                {/* Columna Derecha: Información de Contacto y Testimonios */}
                <div
                    data-aos="fade-up"
                    className="flex flex-col justify-between"
                >
                    <div>
                        {/* Información de Contacto */}
                        <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">Información de Contacto</h2>
                        <div className="space-y-4 text-[var(--color-text-light)]">
                            <div className="flex items-start gap-3">
                                <PhoneIcon className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-[var(--color-text-dark)]">Teléfono</p>
                                    <p>01 800 999 8080</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <EnvelopeIcon className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-[var(--color-text-dark)]">Email</p>
                                    <p>info@finanpro.mx</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPinIcon className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-[var(--color-text-dark)]">Dirección</p>
                                    <p>Av. Reforma 123, Col. Centro<br />Ciudad de México, 06000</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ClockIcon className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-[var(--color-text-dark)]">Horarios</p>
                                    <p>Lun-Vie: 9:00-18:00<br />Sáb: 9:00-14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        {/* Testimonios (ahora mapeados) */}
                        <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">Lo que dicen nuestros clientes</h2>
                        <div className="space-y-8">
                            {testimonialsData.map((testimonial, index) => (
                                <Testimonial
                                    key={index}
                                    rating={testimonial.rating}
                                    text={testimonial.text}
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}