// src/data/featureData.ts

// Definimos la interfaz para el tipo de datos de una característica
export interface FeatureItem {
    iconName: string; // Almacenamos el nombre del icono como string
    title: string;
    description: string;
}

// Array con la data de las características
export const features: FeatureItem[] = [
    {
        iconName: "CalculatorIcon",
        title: "Calculadora de Metas",
        description: "Planifica tu jubilación, compra de casa o educación de tus hijos con precisión matemática"
    },
    {
        iconName: "ChartBarIcon",
        title: "Análisis Predictivo",
        description: "Proyecciones basadas en IA que te muestran escenarios futuros de tu patrimonio"
    },
    {
        iconName: "ShieldExclamationIcon",
        title: "Seguros Inteligentes",
        description: "Cobertura que se adapta automáticamente a cambios en tu situación financiera"
    },
    {
        iconName: "CreditCardIcon",
        title: "Crédito Dinámico",
        description: "Líneas de crédito que crecen con tu patrimonio y se ajustan a tu perfil de riesgo"
    },
    {
        iconName: "UsersIcon",
        title: "Asesoría 24/7",
        description: "Expertos certificados disponibles por chat, video o teléfono cuando los necesites"
    },
    {
        iconName: "DocumentTextIcon",
        title: "Reportes Ejecutivos",
        description: "Informes detallados con insights accionables para optimizar tu estrategia financiera"
    },
];