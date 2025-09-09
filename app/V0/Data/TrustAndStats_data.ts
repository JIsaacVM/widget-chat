// Define la interfaz para los datos de una característica
export interface TrustFeature {
    text: string;
    icon: string; // Se usa string para el nombre del ícono
}

// Define la interfaz para las estadísticas
export interface Stat {
    value: string;
    label: string;
}

// Array con la información de las características de confianza
export const trustFeatures: TrustFeature[] = [
    { text: "Regulado por CONDUSEF", icon: "ShieldCheckIcon" },
    { text: "Transparencia total en operaciones", icon: "DocumentIcon" },
    { text: "Certificaciones internacionales", icon: "CheckBadgeIcon" }
];

// Array con las estadísticas
export const stats: Stat[] = [
    { value: "15+", label: "Años de experiencia" },
    { value: "50K+", label: "Clientes satisfechos" },
    { value: "$2B+", label: "Activos administrados" },
    { value: "99.9%", label: "Disponibilidad" }
];