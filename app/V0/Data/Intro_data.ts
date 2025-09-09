// src/data/financeData.ts

// Tipos de datos para una mejor seguridad
export interface Metric {
    value: string;
    label: string;
    icon: string; // Nombre del icono de Heroicons
    colorClass: string; // Clase de Tailwind para el color
}

export interface Stat {
    value: string;
    label: string;
    delay?: number;
}

export interface Feature {
    title: string;
    description: string;
    delay?: number;
}

// Datos de la sección de métricas del hero
export const heroMetrics: Metric[] = [
    {
        value: '+12.5%',
        label: 'Rendimiento Anual',
        icon: 'ChartBarIcon',
        colorClass: 'text-[var(--color-primary)]',
    },
    {
        value: '$2.4M',
        label: 'Patrimonio Total',
        icon: 'ScaleIcon',
        colorClass: 'text-[var(--color-tertiary)]',
    },
    {
        value: '100%',
        label: 'Protegido',
        icon: 'ShieldCheckIcon',
        colorClass: 'text-[var(--color-primary)]',
    },
];

// Datos de la sección de estadísticas generales
export const companyStats: Stat[] = [
    {
        value: '50K+',
        label: 'Clientes Activos',
        delay: 0,
    },
    {
        value: '$2.4B',
        label: 'Activos Gestionados',
        delay: 100,
    },
    {
        value: '15.8%',
        label: 'Rendimiento Promedio',
        delay: 200,
    },
    {
        value: '99.9%',
        label: 'Uptime Garantizado',
        delay: 300,
    },
];

// Datos para la sección de características
export const features: Feature[] = [
    {
        title: 'IA Predictiva Avanzada',
        description: 'Algoritmos que analizan 10,000+ variables del mercado en tiempo real',
        delay: 100,
    },
    {
        title: 'Rebalanceo Automático',
        description: 'Tu portafolio se optimiza automáticamente según condiciones del mercado',
        delay: 200,
    },
    {
        title: 'Diversificación Global',
        description: 'Acceso a mercados internacionales y activos alternativos',
        delay: 300,
    },
];

// Contenido general del componente
export const heroContent = {
    regulations: 'Regulado por CONDUSEF • Prueba Gratis 30 días',
    title: 'FinancePro - La Plataforma Todo-en-Uno para tu Futuro Financiero',
    description: 'Gestiona inversiones, seguros y créditos desde una sola plataforma inteligente. Con IA avanzada, reportes en tiempo real y asesoría personalizada 24/7.',
    demoButtonText: 'Ver Demo en Vivo',
    trialButtonText: 'Comenzar Prueba Gratis',
    appDomain: 'app.financesecure.mx',
    featuresTitle: 'Gestión Inteligente de Portafolios',
    performanceTitle: 'FinancePro: Tu Asistente Financiero Inteligente',
    performanceSubtitle: 'Una plataforma revolucionaria que combina tecnología de punta con expertise financiero para maximizar tu patrimonio',
    performanceCardLabel: 'Rendimiento vs Mercado',
    performanceCardValue: '15.8%',
    performanceCardSublabel: 'Rendimiento Anual',
    performanceCardSuperiority: '+8.3% superior',
};