import { ShieldCheckIcon, DocumentTextIcon, ScaleIcon } from '@heroicons/react/24/solid';

export interface RegulatoryFeature {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    iconClassName?: string;
    listItems: string[];
    delay: string;
}

export const regulatoryFeatures: RegulatoryFeature[] = [
    {
        id: 1,
        title: "Protección al Usuario",
        description: "Cumplimiento estricto de la Ley de Protección y Defensa al Usuario de Servicios Financieros.",
        icon: ShieldCheckIcon,
        iconClassName: "size-8 text-[var(--white)]",
        listItems: [
            "Transparencia en costos y comisiones",
            "Derecho a la información clara",
            "Procedimientos de queja y reclamación",
            "Protección de datos personales",
        ],
        delay: "100",
    },
    {
        id: 2,
        title: "Contratos Transparentes",
        description: "Documentación clara y comprensible según lineamientos CONDUSEF.",
        icon: DocumentTextIcon,
        iconClassName: "size-8 text-[var(--white)]",
        listItems: [
            "Términos y condiciones claros",
            "CAT (Costo Anual Total) visible",
            "Sin letra pequeña engañosa",
            "Periodo de reflexión garantizado",
        ],
        delay: "200",
    },
    {
        id: 3,
        title: "Resolución de Controversias",
        description: "Mecanismos oficiales para resolver conflictos de manera imparcial.",
        icon: ScaleIcon,
        iconClassName: "size-8 text-[var(--white)]",
        listItems: [
            "Conciliación gratuita",
            "Arbitraje especializado",
            "Dictámenes técnicos",
            "Seguimiento de casos",
        ],
        delay: "300",
    },
];