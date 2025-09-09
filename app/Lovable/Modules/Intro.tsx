import React from 'react';
import { features, statistics } from './../Data/Intro_data';

const Home = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden pt-16">
            {/* Fondo de Video y Overlay de Gradiente */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
                loop
                muted
                autoPlay
                playsInline
                src="../video/bg-landing.mp4"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary-dark)] opacity-80 z-[-1]"></div>

            {/* Contenido Principal */}
            <main className="relative z-10 p-8 md:p-12 lg:p-20 text-[var(--white)] flex flex-col items-center lg:items-start lg:flex-row gap-12 lg:gap-20">
                {/* Bloque de Texto y Acciones */}
                <div
                    className="flex-1 max-w-xl text-center lg:text-left"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <p className="bg-[var(--white)]/20 rounded-full px-4 py-1 inline-block text-sm font-semibold mb-4">
                        Regulado y supervisado por CONDUSEF
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[var(--white)]">
                        <p>Servicios Financieros</p>
                        <p className="text-[var(--color-primary)]">Confiables</p>
                    </h1>
                    <p className="text-base md:text-xl mt-4 max-w-lg text-[var(--white)]/90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis odio officiis
                        placeat nulla dolorem aliquid, vero voluptatibus. Odio commodi reiciendis veritatis
                        enim deserunt, saepe repellendus dignissimos harum error quaerat!
                    </p>

                    {/* Lista de características (mapeada) */}
                    <div className="mt-8 space-y-2 text-lg text-[var(--white)]/90">
                        {features.map((feature, index) => (
                            <p
                                key={index}
                                className="flex items-center justify-center lg:justify-start"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="size-6 stroke-2 stroke-[var(--color-primary)] mr-2"
                                >
                                    <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                                {feature.text}
                            </p>
                        ))}
                    </div>

                    {/* Botones de acción */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center lg:justify-start">
                        <a
                            className="bg-[var(--color-primary)] text-[var(--white)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
                            href="#"
                        >
                            Consulta especializada
                        </a>
                        <a
                            className="bg-[var(--white)]/20 text-[var(--white)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--white)]/30 transition-colors"
                            href="#"
                        >
                            Ver regulaciones
                        </a>
                    </div>

                    {/* Entidades Certificadoras */}
                    <div className="flex flex-wrap gap-4 mt-6 text-sm text-[var(--white)] justify-center lg:justify-start">
                        <p>Certificado por:</p>
                        <p>CONDUSEF</p>
                        <p>CNBV</p>
                        <p>BANXICO</p>
                    </div>
                </div>

                {/* Bloque de Estadísticas (mapeado) */}
                <div className="grid grid-cols-2 gap-6 mt-12 lg:mt-0 w-full max-w-lg lg:max-w-xl">
                    {statistics.map((stat, index) => (
                        <div
                            key={index}
                            className="border border-[var(--white-half)] rounded-3xl p-6 text-center flex flex-col items-center justify-center bg-[var(--white)]/10 backdrop-blur-sm"
                            data-aos="zoom-in"
                            data-aos-delay={stat.delay}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="size-16 stroke-[var(--color-primary)] mb-2"
                            >
                                <path d={stat.iconPath} />
                            </svg>
                            <p className="text-2xl lg:text-4xl font-extrabold text-[var(--white)]">{stat.value}</p>
                            <p className="text-[var(--white)]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;