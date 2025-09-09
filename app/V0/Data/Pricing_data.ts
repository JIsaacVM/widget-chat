
// Define la interfaz para la estructura de un plan de precios
export interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonClass: string;
    isPopular: boolean;
}

// Array con la información de los planes de precios
export const pricingPlans: PricingPlan[] = [
    {
        name: "Starter",
        price: "$299/mes",
        description: "Perfecto para comenzar tu journey financiero",
        features: ["Hasta $100K en inversiones", "3 productos financieros", "Asesoría por chat", "Reportes mensuales"],
        buttonText: "Comenzar Prueba",
        buttonClass: "border-teal-500 text-teal-600 hover:bg-teal-50",
        isPopular: false
    },
    {
        name: "Professional",
        price: "$799/mes",
        description: "Para profesionales que buscan maximizar su patrimonio",
        features: ["Hasta $1M en inversiones", "Productos ilimitados", "Asesor personal dedicado", "Reportes semanales + IA", "Acceso a mercados globales"],
        buttonText: "Comenzar Ahora",
        buttonClass: "bg-teal-600 text-[var(--white)] hover:bg-teal-700",
        isPopular: true
    },
    {
        name: "Enterprise",
        price: "$2,499/mes",
        description: "Para grandes patrimonios y family offices",
        features: ["Patrimonio ilimitado", "Equipo de asesores", "Estrategias personalizadas", "Reportes en tiempo real", "Conserje financiero"],
        buttonText: "Contactar Ventas",
        buttonClass: "border-gray-500 text-[var(--color-text-light)] hover:bg-gray-50",
        isPopular: false
    }
];