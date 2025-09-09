import { BarChart, CreditCard, PieChart, Users, Coins } from 'lucide-react';
export interface ServiceData {
    title: string;
    description: string;
    icon: React.ElementType;
}

// Datos mapeados para los servicios
export const servicesData: ServiceData[] = [
    {
        title: 'Inversiones',
        description: 'Construye tu portafolio de inversión.',
        icon: BarChart,
    },
    {
        title: 'Créditos',
        description: 'Encuentra el mejor crédito para ti.',
        icon: CreditCard,
    },
    {
        title: 'Planeación',
        description: 'Alcanza tus metas financieras.',
        icon: PieChart,
    },
    {
        title: 'Asesoría Profesional',
        description: 'Protege tus intereses con nuestros expertos.',
        icon: BarChart,
    },
    {
        title: 'Gestión de Clientes',
        description: 'Gestiona tus clientes con nuestra plataforma de chat.',
        icon: Users,
    },
    {
        title: 'Gestión de Inversiones',
        description: 'Gestiona tus inversiones con nuestra plataforma de chat.',
        icon: Coins,
    }
];