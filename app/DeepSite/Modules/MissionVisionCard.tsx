
import { companyData, CardData } from './../Data/MissionVisionCard_data';

// Componente para Misión y Visión
const MissionVisionCard = ({ title, description }: { title: string; description: string }) => {
    return (
        <div
            className="bg-[var(--cards)] p-6 rounded-lg shadow-md"
            data-aos="fade-up" // Animación para la tarjeta
            data-aos-duration="1000" // Duración de la animación
        >
            <h3 className="text-xl font-bold text-[var(--black)] mb-2">{title}</h3>
            <p className="text-[var(--color-text-light)]">{description}</p>
        </div>
    );
};

// Componente para Valores
const ValuesCard = ({ title, items }: { title: string; items: { name: string; description: string }[] }) => {
    return (
        <div
            className="bg-[var(--color-primary-dark)] text-[var(--white)] p-6 rounded-lg shadow-md"
            data-aos="fade-left" // Animación para la tarjeta
            data-aos-duration="1000" // Duración de la animación
            data-aos-delay="200" // Un pequeño retraso para que aparezca después de la misión y visión
        >
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


    const missionVisionData = companyData.filter(card => card.type === 'mission' || card.type === 'vision');
    const valuesData = companyData.find(card => card.type === 'values');

    return (
        <div className="bg-[var(--light)] py-16 px-6">
            <div
                className="max-w-7xl mx-auto text-center mb-12"
                data-aos="fade-down" // Animación para el título principal
                data-aos-duration="800"
            >
                <h2 className="text-4xl font-extrabold text-[var(--color-primary-dark)] mb-2">Nuestra Empresa</h2>
                <p className="text-lg text-[var(--color-text-light)]">Profesionales comprometidos con tu éxito financiero.</p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="space-y-8 flex flex-col justify-start">
                    {missionVisionData.map((data: CardData) => (
                        <MissionVisionCard
                            key={data.id}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>

                <div className="flex flex-col justify-start">
                    {valuesData && (
                        <ValuesCard
                            title={valuesData.title}
                            items={valuesData.items || []}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;