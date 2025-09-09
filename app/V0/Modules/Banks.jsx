
const institutions = [
    'BBVA',
    'Santander',
    'Banamex',
    'Banorte',
    'HSBC',
    'Scotiabank',
    'Inbursa',
    'Azteca',
    'Banregio',
    'Multiva',
    'Actinver',
    'GBM',
];

export default function Banks() {

    return (
        <div className="bg-[var(--white)] py-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Encabezado con animación de fade-down */}
                <div data-aos="fade-down">
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-dark)] sm:text-4xl">
                        Integrado con las Mejores Plataformas
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
                        Conectamos con más de 50 instituciones financieras para ofrecerte la mejor experiencia
                    </p>
                </div>
            </div>

            {/* Grid de las instituciones con animación y retrasos */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {institutions.map((institution, index) => (
                    <div
                        key={institution}
                        data-aos="zoom-in"
                        data-aos-delay={index * 50} // Retraso escalonado para un efecto de aparición secuencial
                        className="flex items-center justify-center h-20 bg-[var(--white)] border border-[var(--color-text-light)] rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-200"
                    >
                        <p className="text-[var(--color-primary)]  font-extrabold ">{institution}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};