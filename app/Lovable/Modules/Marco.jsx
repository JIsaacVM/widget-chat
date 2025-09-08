import Image from "next/image";
import { CheckBadgeIcon, ShieldCheckIcon, DocumentTextIcon, ScaleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Home() {
    return (
        <div className="bg-[var(--white)] text-black p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center">
            {/* Contenedor del encabezado con animación "fade-up" */}
            <div data-aos="fade-up" className="flex flex-col items-center">
                <div className="bg-[var(--bg-circle)] w-fit px-5 py-2 rounded-full flex items-center gap-2 text-[var(--color-primary-dark)] border-2 border-blue-300 mt-8 mb-8">
                    <CheckBadgeIcon className="size-5" />
                    <p className="text-sm font-medium">Certificado CONDUSEF</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
                    Marco Regulatorio y Transparencia
                </h1>
                <p className="max-w-md text-center text-[var(--color-text-light)] mb-12">
                    Operamos bajo la supervisión y regulación de CONDUSEF, garantizando el cumplimiento de todas las disposiciones para la protección de usuarios de servicios financieros.
                </p>
            </div>

            {/* Contenedor de las 3 Columnas con animaciones escalonadas */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {/* Protección al Usuario */}
                <div data-aos="fade-up" data-aos-delay="100" className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center md:justify-start">
                        <div className="p-3 mb-4 text-[var(--color-primary)] rounded-2xl inline-flex">
                            <ShieldCheckIcon className="size-8 text-[var(--white)]" />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 text-center md:text-left mb-2">Protección al Usuario</h2>
                    <p className="text-[var(--color-text-light)] text-center md:text-left mb-4">
                        Cumplimiento estricto de la Ley de Protección y Defensa al Usuario de Servicios Financieros.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Transparencia en costos y comisiones</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Derecho a la información clara</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Procedimientos de queja y reclamación</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Protección de datos personales</span>
                        </li>
                    </ul>
                </div>

                {/* Contratos Transparentes */}
                <div data-aos="fade-up" data-aos-delay="200" className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center md:justify-start">
                        <div className="p-3 mb-4 text-[var(--color-primary)] rounded-2xl inline-flex">
                            <DocumentTextIcon className="size-8 text-[var(--white)]" />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 text-center md:text-left mb-2">Contratos Transparentes</h2>
                    <p className="text-[var(--color-text-light)] text-center md:text-left mb-4">
                        Documentación clara y comprensible según lineamientos CONDUSEF.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Términos y condiciones claros</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>CAT (Costo Anual Total) visible</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Sin letra pequeña engañosa</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Periodo de reflexión garantizado</span>
                        </li>
                    </ul>
                </div>

                {/* Resolución de Controversias */}
                <div data-aos="fade-up" data-aos-delay="300" className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center md:justify-start">
                        <div className="p-3 mb-4 text-[var(--color-primary)] rounded-2xl inline-flex">
                            <ScaleIcon className="size-8 text-[var(--white)]" />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 text-center md:text-left mb-2">Resolución de Controversias</h2>
                    <p className="text-[var(--color-text-light)] text-center md:text-left mb-4">
                        Mecanismos oficiales para resolver conflictos de manera imparcial.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Conciliación gratuita</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Arbitraje especializado</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Dictámenes técnicos</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                            <CheckCircleIcon className="size-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Seguimiento de casos</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}