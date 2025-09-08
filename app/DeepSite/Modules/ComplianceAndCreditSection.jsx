import React from 'react';
import {
    Phone,
    ClipboardList
} from 'lucide-react';

const ComplianceAndCreditSection = () => {
    return (
        <section
            className="flex flex-col md:flex-row items-stretch justify-between bg-[var(--color-primary-dark)] text-[var(--white)] p-8 md:p-12"

        >

            {/* Sección de Cumplimiento con la CONDUSEF */}
            <div
                className="flex flex-col justify-center md:w-1/2 p-4 md:p-8"
                data-aos="fade-up" // Animación para el contenedor de la izquierda
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Cumplimiento con la CONDUSEF
                </h2>
                <p className="text-lg text-[var(--light)] mb-6">
                    Como empresa autorizada, garantizamos el estricto cumplimiento de
                    las disposiciones de la Comisión Nacional para la Protección y Defensa
                    de los Usuarios de Servicios Financieros.
                </p>
                <ul className="space-y-4 text-[var(--light)]">
                    <li className="flex items-center space-x-2">
                        <ClipboardList className="h-6 w-6 text-[var(--light)]" />
                        <span>Registro CONDUSEF: F-12345678</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <ClipboardList className="h-6 w-6 text-[var(--light)]" />
                        <span>Contrato de adhesión autorizado conforme al artículo 95 de la LPPF</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Phone className="h-6 w-6 text-[var(--light)]" />
                        <span>Datos de contacto de la CONDUSEF: 55 5340 0999 / 800 999 8080</span>
                    </li>
                </ul>
            </div>

            {/* Sección del Formulario de Buró de Crédito */}
            <div
                className="md:w-1/2 mt-8 md:mt-0 md:ml-12 p-8 bg-[var(--white)] text-[var(--color-text-dark)] rounded-lg shadow-xl"
                data-aos="fade-up" // Animación para el contenedor de la derecha
            >
                <h3 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-4">
                    Consulta tu Buró de Crédito
                </h3>
                <p className="text-[var(--color-text-light)] mb-6">
                    Te ayudamos a obtener tu reporte de crédito
                    especial sin costo.
                </p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Nombre completo"
                            className="mt-1 block w-full p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-dark)]">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Correo electrónico"
                            className="mt-1 block w-full p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-dark)]">Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Teléfono"
                            className="mt-1 block w-full p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                    </div>
                    <div className="flex items-start mt-4">
                        <input
                            type="checkbox"
                            id="privacy"
                            className="h-4 w-4 text-[var(--color-primary)] border-[var(--border)] rounded focus:ring-[var(--color-primary)]"
                        />
                        <label htmlFor="privacy" className="ml-2 block text-sm text-[var(--color-text-light)]">
                            Acepto el <a href="#" className="underline hover:text-[var(--color-secondary)]">Aviso de Privacidad</a> y autorizo el tratamiento de mis datos.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[var(--color-primary)] text-[var(--white)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary)] transition-colors shadow-lg mt-6"
                    >
                        Enviar solicitud
                    </button>
                </form>
            </div>

        </section>
    );
};

export default ComplianceAndCreditSection;
