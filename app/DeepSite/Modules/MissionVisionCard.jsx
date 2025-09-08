import React from 'react';

const MissionVisionCard = ({ title, description }) => {
    return (
        <div className="bg-[var(--cards)] p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-bold text-[var(--black)] mb-2">{title}</h3>
            <p className="text-[var(--color-text-light)]">{description}</p>
        </div>
    );
};

const ValuesCard = ({ title, items }) => {
    return (
        <div className="bg-[var(--color-primary-dark)] text-[var(--white)] p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index}>
                        <p className="font-semibold mb-1">{item.name}</p>
                        <p className="text-[var(---light)]">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    const values = [
        { name: 'Integridad', description: 'Actuamos con honestidad y transparencia en todas nuestras recomendaciones.' },
        { name: 'Excelencia', description: 'Buscamos constantemente la mejora en nuestros servicios y actualización profesional.' },
        { name: 'Responsabilidad', description: 'Asumimos el compromiso con el bienestar financiero de nuestros clientes.' },
        { name: 'Confidencialidad', description: 'Resguardamos con total seguridad la información que nos confían.' },
    ];

    return (
        <div className="bg-[var(--light)] py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-in">
                <h2 className="text-4xl font-extrabold text-[var(--color-primary-dark)] mb-2">Nuestra Empresa</h2>
                <p className="text-lg text-[var(--color-text-light)]">Profesionales comprometidos con tu éxito financiero.</p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="space-y-8 flex flex-col justify-start" data-aos="fade-up" data-aos-delay="200">
                    <MissionVisionCard
                        title="Misión"
                        description="Brindar asesoría financiera personalizada y transparente, ayudando a nuestros clientes a tomar decisiones informadas que mejoren su calidad de vida y seguridad patrimonial."
                    />
                    <MissionVisionCard
                        title="Visión"
                        description="Ser reconocidos como la firma de consultoría financiera más confiable de México, destacando por nuestro profesionalismo, ética e impacto positivo en la economía familiar."
                    />
                </div>

                <div className="flex flex-col justify-start" data-aos="fade-up" data-aos-delay="400">
                    <ValuesCard
                        title="Valores"
                        items={values}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
