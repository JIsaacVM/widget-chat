// src/components/FinanceProHero.tsx

import { PlayCircleIcon, ArrowRightIcon, ChartBarIcon, ScaleIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { heroMetrics, companyStats, features, heroContent } from './../Data/Intro_data';

// Un objeto para mapear los nombres de los iconos a los componentes de Heroicons
const iconComponents = {
    ChartBarIcon,
    ScaleIcon,
    ShieldCheckIcon,
};

export default function FinanceProHero() {
    return (
        <div className="bg-[var(--bg-light)] py-16 sm:py-24 lg:py-32 flex flex-col items-center justify-center text-center px-4">

            {/* Etiqueta CONDUSEF */}
            <div
                data-aos="fade-down"
                className="text-sm text-[var(--color-tertiary)] bg-[var(--color-tertiary-light)] px-3 py-1 rounded-full mb-8 inline-block">
                {heroContent.regulations}
            </div>

            {/* Título Principal */}
            <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl">
                {heroContent.title}
            </h1>

            {/* Descripción */}
            <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg sm:text-xl text-[var(--color-text-light)] mb-10 max-w-2xl">
                {heroContent.description}
            </p>

            {/* Botones de Acción */}
            <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[var(--white)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] md:py-4 md:text-lg md:px-10 shadow-lg transition-colors duration-300">
                    <PlayCircleIcon className="size-6 mr-2" />
                    {heroContent.demoButtonText}
                </button>
                <button className="flex items-center justify-center px-8 py-3 border border-[var(--color-primary)] text-base font-medium rounded-md text-[var(--color-primary)] bg-[var(--white)] hover:bg-[var(--color-primary-light)] md:py-4 md:text-lg md:px-10 shadow-lg transition-colors duration-300">
                    {heroContent.trialButtonText}
                    <ArrowRightIcon className="size-6 ml-2" />
                </button>
            </div>

            <div
                data-aos="flip-up"
                data-aos-delay="400"
                className="bg-[var(--white)] p-6 sm:p-10 rounded-2xl shadow-xl border border-[var(--border)]">

                {/* URL y Puntos de estado */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-[var(--color-text-light)] font-mono text-sm">{heroContent.appDomain}</span>
                    <div className="flex space-x-1.5">
                        <span className="w-3 h-3 bg-[var(--color-tertiary)] rounded-full"></span>
                        <span className="w-3 h-3 bg-[var(--color-warning)] rounded-full"></span>
                        <span className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></span>
                    </div>
                </div>

                {/* Tarjetas de Métricas Dinámicas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {heroMetrics.map((metric, index) => {
                        // Un truco para renderizar el icono dinámicamente
                        const Icon = iconComponents[metric.icon as keyof typeof iconComponents];
                        return (
                            <div key={index} data-aos="fade-up" className="p-6 rounded-lg bg-[var(--bg-cards)] text-center">
                                <div className="flex justify-center items-center mb-2">
                                    <Icon className={`size-8 ${metric.colorClass}`} />
                                </div>
                                <p className={`text-3xl font-bold ${metric.colorClass} mb-1`}>{metric.value}</p>
                                <p className="text-sm text-[var(--color-text-light)]">{metric.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Sección de Estadísticas de la compañía */}
            <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-[var(--bg-circle)] w-full mt-16 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {companyStats.map((stat, index) => (
                        <div key={index} data-aos="zoom-in" data-aos-delay={stat.delay} className="p-6">
                            <p className="text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)] mb-2">{stat.value}</p>
                            <p className="text-sm sm:text-base text-[var(--color-text-light)]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sección de Contenido Principal */}
            <div className="container mx-auto px-4 py-16 md:py-24">

                {/* Header Section */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-2">
                        {heroContent.performanceTitle}
                    </h1>
                    <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
                        {heroContent.performanceSubtitle}
                    </p>
                </div>

                {/* Main Content Area: Split layout */}
                <div className="flex flex-col lg:flex-row lg:space-x-8">

                    {/* Left Side: Features List */}
                    <div
                        data-aos="fade-up"
                        className="flex-1 bg-[var(--white)] p-8 rounded-xl shadow-lg mb-8 lg:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-6">
                            {heroContent.featuresTitle}
                        </h2>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={feature.delay}>
                                    <CheckCircleIcon className="w-6 h-6 text-[var(--color-secondary)] mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">{feature.title}</h3>
                                        <p className="text-[var(--color-text-light)] text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Performance Card */}
                    <div
                        data-aos="fade-up"
                        className="flex-1 p-8 rounded-xl shadow-lg relative overflow-hidden text-center bg-[var(--white)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-pink-50 opacity-50 z-0"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="flex justify-between items-center w-full mb-4">
                                <span className="text-[var(--color-text-light)] text-sm">{heroContent.performanceCardLabel}</span>
                                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                    {heroContent.performanceCardSuperiority}
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-5xl font-bold text-gray-900">{heroContent.performanceCardValue}</h3>
                            <p className="text-[var(--color-text-light)] mt-2">{heroContent.performanceCardSublabel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}