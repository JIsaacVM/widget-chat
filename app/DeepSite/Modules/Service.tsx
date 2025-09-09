
"use client";
import React from 'react';
import { servicesData } from '../Data/Service_data';
// Datos para la tarjeta de Asesoría Profesional


// Componente para la tarjeta de servicio individual
interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
    return (
        <div
            className="flex flex-col items-center text-center p-6 bg-[var(--bg-cards)] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
        >
            <div className="p-4 bg-[var(--bg-cirlce)] rounded-full mb-4">
                <Icon className="text-[var(--color-primary)] h-8 w-8" />
            </div>
            <p className="text-2xl font-bold text-[var(--color-primary-dark)] mb-2">{title}</p>
            <p className="text-[var(--color-text-light)]">{description}</p>
        </div>
    );
};

// Componente principal para la sección de servicios
const ServiceSection = () => {
    return (
        <div className="p-8 space-y-8 bg-[var(--white)] text-[var(--black)]">
            <p className="text-4xl font-bold text-center">Nuestros Servicios Financieros</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
