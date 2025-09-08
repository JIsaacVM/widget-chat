import React from 'react';
import { BarChart, CreditCard, PieChart } from 'lucide-react';

const FinanceProHero = ({ title, description, icon }) => {
    return (
        <div
            className="flex flex-col items-center text-center p-6 bg-[var(--bg-cards)] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up" // Animación para el contenedor principal
        >
            <div className="p-4 bg-[var(--bg-cirlce)] rounded-full mb-4">
                {icon}
            </div>
            <p className="text-2xl font-bold text-[var(--color-primary-dark)] mb-2">{title}</p>
            <p className="text-[var(--color-text-light)]">{description}</p>
        </div>
    );
};

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div
            className="flex flex-col items-center text-center p-6 bg-[var(--bg-cards)] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up" // Animación para cada tarjeta de servicio
        >
            <div className="p-4 bg-[var(--bg-cirlce)] rounded-full mb-4">
                {icon}
            </div>
            <p className="text-2xl font-bold text-[var(--color-primary-dark)] mb-2">{title}</p>
            <p className="text-[var(--color-text-light)]">{description}</p>
        </div>
    );
};

const Service = () => {
    return (
        <div className="p-8 space-y-8 bg-[var(--white)] text-[var(--black)]">
            <p className="text-4xl font-bold text-center">Nuestros Servicios Financieros</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                    title="Inversiones"
                    description="Construye tu portafolio de inversión."
                    icon={<BarChart className="text-[var(--color-primary)] h-8 w-8" />}
                />
                <ServiceCard
                    title="Créditos"
                    description="Encuentra el mejor crédito para ti."
                    icon={<CreditCard className="text-[var(--color-primary)] h-8 w-8" />}
                />
                <ServiceCard
                    title="Planeación"
                    description="Alcanza tus metas financieras."
                    icon={<PieChart className="text-[var(--color-primary)] h-8 w-8" />}
                />
            </div>
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <FinanceProHero
                    title="Asesoría Profesional"
                    description="Protege tus intereses con nuestros expertos."
                    icon={<BarChart className="text-[var(--color-primary)] h-8 w-8" />}
                />
            </div>
        </div>
    );
};

export default Service;
