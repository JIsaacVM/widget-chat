
import { CalculatorIcon, ChartBarIcon, ShieldExclamationIcon, CreditCardIcon, UsersIcon, DocumentTextIcon } from '@heroicons/react/24/outline';


const features = [
    { icon: CalculatorIcon, title: "Calculadora de Metas", description: "Planifica tu jubilación, compra de casa o educación de tus hijos con precisión matemática" },
    { icon: ChartBarIcon, title: "Análisis Predictivo", description: "Proyecciones basadas en IA que te muestran escenarios futuros de tu patrimonio" },
    { icon: ShieldExclamationIcon, title: "Seguros Inteligentes", description: "Cobertura que se adapta automáticamente a cambios en tu situación financiera" },
    { icon: CreditCardIcon, title: "Crédito Dinámico", description: "Líneas de crédito que crecen con tu patrimonio y se ajustan a tu perfil de riesgo" },
    { icon: UsersIcon, title: "Asesoría 24/7", description: "Expertos certificados disponibles por chat, video o teléfono cuando los necesites" },
    { icon: DocumentTextIcon, title: "Reportes Ejecutivos", description: "Informes detallados con insights accionables para optimizar tu estrategia financiera" }
];

export default function Features() {


    return (
        <div className="bg-[var(--white)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Encabezado con animación fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-dark)] sm:text-4xl">
                        Características Principales
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-light)]">
                        Todo lo que necesitas para tomar control total de tus finanzas
                    </p>
                </div>
            </div>

            {/* Grid de características con animaciones fade-up y retrasos escalonados */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // Retraso de 100ms entre cada tarjeta
                        className="bg-[var(--bg-cards)] p-8 rounded-xl shadow-lg  "
                    >
                        <feature.icon className="w-12 h-12 text-[var(--color-secondary)] mb-4" />
                        <h3 className="text-xl font-semibold text-[var(--color-text-dark)] mb-2">{feature.title}</h3>
                        <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}