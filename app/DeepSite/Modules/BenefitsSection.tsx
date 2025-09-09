import { benefitsData } from './../Data/BenefitsSection_data';
import { CheckCircle } from 'lucide-react';

interface BenefitCardProps {
    title: string;
    subtitle: string;
    features: string[];
    icon: React.ElementType;
    iconClassName: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, subtitle, features, icon: Icon, iconClassName }) => {
    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between p-8 bg-[var(--bg-cards)] rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
        >
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2">{title}</h3>
                <p className="text-[var(--color-text-light)] mb-4">{subtitle}</p>
                <ul className="space-y-3 mt-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            {/* Usa el icono de check de forma estática, ya que no cambia */}
                            <CheckCircle className="text-[var(--color-primary)] h-5 w-5 mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center bg-[var(--bg-light)] mx-auto rounded-3xl py-16">
                {/* Renderiza el componente de ícono pasado por props */}
                {Icon && <Icon className={iconClassName} />}
            </div>
        </div>
    );
};

// Componente principal
const App = () => {
    return (
        <div>
            <section className="py-16 px-6 bg-[var(--white)]" >
                <h2
                    className="text-4xl font-extrabold text-center text-[var(--color-primary-dark)] mb-4"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    Beneficios de Asesorarte con Nosotros
                </h2>
                <p
                    className="text-center text-[var(--color-text-light)] text-lg mb-12"
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    Trabajamos con transparencia y en cumplimiento de la normatividad financiera.
                </p>
                <div className="space-y-12">
                    {/* Renderiza el componente BenefitCard para cada item del array */}
                    {benefitsData.map((benefit) => (
                        <BenefitCard
                            key={benefit.id}
                            title={benefit.title}
                            subtitle={benefit.subtitle}
                            features={benefit.features}
                            icon={benefit.icon}
                            iconClassName={benefit.iconClassName}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default App;