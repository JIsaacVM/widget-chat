import React from 'react';
import {
    ShieldCheck,
    DollarSign,
    Users
} from 'lucide-react';
import "../style.css";

// Data mapeada para las características del hero
const featuresData = [
    {
        icon: <ShieldCheck className="text-green-500 h-8 w-8" />,
        text: 'Autorizados por CONDUSEF'
    },
    {
        icon: <DollarSign className="text-[var(--color-primary)] h-8 w-8" />,
        text: 'Sin comisiones ocultas'
    },
    {
        icon: <Users className="text-purple-500 h-8 w-8" />,
        text: '5,000 clientes satisfechos'
    }
];

const App = () => {
    return (
        <div className=" font-sans p-4">
            <section
                className="relative flex flex-col md:flex-row items-center justify-between py-16 px-6 bg-[var(--color-primary-dark)] rounded-xl shadow-md my-8 md:my-16"
                data-aos="fade-in"
            >
                <div
                    className="md:w-1/2 text-center md:text-left"
                    data-aos="fade-up"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--white)] leading-tight mb-4">
                        Soluciones Financieras Certificadas
                    </h1>
                    <p className="text-lg text-[var(--white)] mb-8">
                        Asesoría profesional en cumplimiento con los estándares de la CONDUSEF para proteger tus intereses.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-8">
                        <a href="#contacto" className="bg-[var(--color-secondary)] text-[var(--white)] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[var(--color-primary)] transition-colors shadow-lg">
                            Contactar Asesor
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 text-[var(--white)]">
                                {feature.icon}
                                <span className="font-semibold text-xl">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
                    data-aos="fade-down"
                >
                    <img
                        src="https://placehold.co/500x350/E0E7FF/3B82F6?text=Finanzas+Seguras"
                        alt="Finanzas Seguras"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </section>
        </div>
    );
};

export default App;