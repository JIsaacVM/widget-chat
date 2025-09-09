import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
    return (
        <section
            id="contacto"
            className="py-16 px-6 bg-[var(--color-primary-dark)] text-[var(--white)] shadow-md"

        >
            <h2 className="text-4xl font-extrabold text-center mb-4">Contacto</h2>
            <p className="text-center text-[var(--light)] text-lg mb-12">Agenda una cita con nuestros asesores certificados. Estamos para ayudarte.</p>

            {/* Contenedor de iconos de contacto */}
            <div
                className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12"
                data-aos="fade-up" // Animación para los íconos
                data-aos-delay="200" // Un ligero retraso para un efecto escalonado
            >
                <div className="flex flex-col items-center text-center">
                    <MapPin className="h-8 w-8 mb-2" />
                    <p className="font-semibold">Dirección</p>
                    <p className="text-[var(--light)]">Av. Paseo de la Reforma 500, CDMX</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Mail className="h-8 w-8 mb-2" />
                    <p className="font-semibold">Correo Electrónico</p>
                    <p className="text-[var(--light)]">contacto@finanzasseguras.com</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Phone className="h-8 w-8 mb-2" />
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-[var(--light)]">+52 55 12345678</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Clock className="h-8 w-8 mb-2" />
                    <p className="font-semibold">Horario de atención</p>
                    <p className="text-[var(--light)]">Lunes a V. 9:00 - 18:00</p>
                </div>
            </div>

            {/* Contenedor del formulario */}
            <div
                className="mt-12 w-full max-w-xl mx-auto"
                data-aos="fade-up" // Animación para el formulario
                data-aos-delay="400" // Más retraso para que aparezca después de los íconos
            >
                <form className="bg-[var(--white)] p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[var(--color-primary-dark)] text-center mb-6">Solicitar información</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--color-text-dark)]">
                        <input type="text" placeholder="Nombre completo" className="p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
                        <input type="email" placeholder="Correo electrónico" className="p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
                        <input type="tel" placeholder="Teléfono" className="p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
                        <select className="p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                            <option>Servicio de interés</option>
                            <option>Inversiones</option>
                            <option>Créditos</option>
                            <option>Planeación Financiera</option>
                            <option>Buró de Crédito</option>
                        </select>
                    </div>
                    <textarea placeholder="Mensaje" className="w-full row-4 p-3 mt-6 border border-[var(--black)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"></textarea>
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-[var(--color-primary)] text-[var(--white)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg">
                            Enviar mensaje
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
