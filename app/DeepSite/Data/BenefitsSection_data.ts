import { Users, CheckCircle, Clock } from 'lucide-react';
// Define la interfaz para los datos de los beneficios
export interface BenefitData {
    id: number;
    title: string;
    subtitle: string;
    features: string[];
    icon: React.ElementType;
    iconClassName: string;

}


// Los datos para la sección de beneficios
export const benefitsData: BenefitData[] = [
    {
        id: 1,
        title: "Protección al Consumidor",
        subtitle: "Cumplimos con todos los requisitos establecidos por la CONDUSEF para garantizar la protección de tus derechos como consumidor financiero.",
        features: [
            "Información clara y veraz sobre los productos",
            "Transparencia en comisiones y costos",
            "Asesoría imparcial y profesional"
        ],
        icon: Users,
        iconClassName: "text-[var(--color-primary)] h-24 w-24",

    },
    {
        id: 2,
        title: "Soluciones Personalizadas",
        subtitle: "Analizamos tu situación financiera y objetivos para recomendarte únicamente los productos que realmente necesitas.",
        features: [
            "Diagnóstico financiero sin costo",
            "Plan de acción con pasos claros",
            "Seguimiento continuo a tu evolución"
        ],
        icon: CheckCircle,
        iconClassName: "text-[var(--color-primary)] h-24 w-24",

    },
    {
        id: 3,
        title: "Asesoría 24/7",
        subtitle: "Nos encargamos de ayudarte a tomar decisiones informadas sobre tus inversiones y tus riesgos.",
        features: [
            "Asesoría personalizada",
            "Consultas en tiempo real",
            "Plan de acción con pasos claros"
        ],
        icon: Clock,
        iconClassName: "text-[var(--color-primary)] h-24 w-24",
    }
];
