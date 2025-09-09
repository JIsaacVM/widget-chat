import { ShieldCheck, DollarSign, Users } from 'lucide-react';

export interface Feature {
    icon: React.ElementType;
    iconClassName: string;
    text: string;
}

export const featuresData: Feature[] = [
    {
        icon: ShieldCheck,
        iconClassName: 'text-green-500 h-8 w-8',
        text: 'Autorizados por CONDUSEF'
    },
    {
        icon: DollarSign,
        iconClassName: 'text-[var(--color-primary)] h-8 w-8',
        text: 'Sin comisiones ocultas'
    },
    {
        icon: Users,
        iconClassName: 'text-purple-500 h-8 w-8',
        text: '5,000 clientes satisfechos'
    }
];
