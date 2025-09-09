import { CheckBadgeIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { regulatoryFeatures } from '../Data/Marco_data';

export default function Home() {
    return (
        <div className="bg-[var(--white)] text-[var(--black)] p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center">
            {/* Contenedor del encabezado con animación "fade-up" */}
            <div data-aos="fade-up" className="flex flex-col items-center">
                <div className="w-fit px-5 py-2 rounded-full flex items-center gap-2 bg-[var(--color-primary)] border-2 border-[var(--color-primary)] mt-8 mb-8">
                    <CheckBadgeIcon className="size-5" />
                    <p className="text-sm font-medium">Certificado CONDUSEF</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--dark)] text-center mb-4">
                    Marco Regulatorio y Transparencia
                </h1>
                <p className="max-w-md text-center text-[var(--color-text-light)] mb-12">
                    Operamos bajo la supervisión y regulación de CONDUSEF, garantizando el cumplimiento de todas las disposiciones para la protección de usuarios de servicios financieros.
                </p>
            </div>
            {/* Contenedor de las 3 Columnas con animaciones escalonadas */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {regulatoryFeatures.map((feature) => (
                    <div
                        key={feature.id}
                        data-aos="fade-up"
                        data-aos-delay={feature.delay}
                        className="p-6 bg-[var(--cards)] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex justify-center md:justify-start">
                            <div className="p-3 mb-4 bg-[var(--color-primary)] rounded-2xl inline-flex">
                                {feature.icon && <feature.icon className={feature.iconClassName} />}
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-[var(--color-text-light)] text-center md:text-left mb-2">
                            {feature.title}
                        </h2>
                        <p className="text-[var(--color-text-light)] text-center md:text-left mb-4">
                            {feature.description}
                        </p>
                        <ul className="space-y-2">
                            {feature.listItems.map((item, index) => (
                                <li key={index} className="flex items-start text-[var(--color-text-light)]">
                                    <CheckCircleIcon className="size-5 text-[var(--color-primary-dark)] mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}