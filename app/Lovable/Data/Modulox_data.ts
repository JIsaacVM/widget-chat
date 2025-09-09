import { AiFillCreditCard, AiFillDollarCircle, AiOutlineLineChart } from "react-icons/ai";

interface FinancialService {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    iconClassName: string;
    popular: boolean;
    listItems: string[];
    buttonText: string;
    buttonLink: string;
    delay: number;
}

export const financialServices: FinancialService[] = [
    {
        id: 1,
        title: "Créditos Personales",
        description: "Préstamos con tasas competitivas y términos transparentes, totalmente regulados por CONDUSEF.",
        icon: AiFillCreditCard,
        iconClassName: "h-6 w-6 text-[var(--color-primary)]",
        popular: true,
        listItems: ["Tasa fija desde 12%", "Sin comisiones ocultas", "Aprobación en 24 hrs"],
        buttonText: "Simular Crédito →",
        buttonLink: "#",
        delay: 100,
    },
    {
        id: 2,
        title: "Cuentas de Ahorro",
        description: "Productos de ahorro con garantía gubernamental y rendimientos atractivos.",
        icon: AiFillDollarCircle,
        iconClassName: "h-6 w-6 text-green-600",
        popular: false,
        listItems: ["Rendimiento hasta 8%", "Seguro IPAB", "Sin monto mínimo"],
        buttonText: "Abrir Cuenta →",
        buttonLink: "#",
        delay: 200,
    },
    {
        id: 3,
        title: "Inversiones",
        description: "Instrumentos de inversión regulados con diferentes perfiles de riesgo.",
        icon: AiOutlineLineChart,
        iconClassName: "h-6 w-6 text-purple-600",
        popular: false,
        listItems: ["Diversificación", "Asesoría experta", "Transparencia total"],
        buttonText: "Comenzar a Invertir →",
        buttonLink: "#",
        delay: 300,
    },
    {
        id: 4,
        title: "Tarjetas de Crédito",
        description: "Tarjetas de crédito con garantía gubernamental y rendimientos atractivos.",
        icon: AiFillCreditCard,
        iconClassName: "h-6 w-6 text-[var(--color-primary)]",
        popular: false,
        listItems: ["Rendimiento hasta 8%", "Seguro IPAB", "Sin monto mínimo"],
        buttonText: "Abrir Cuenta →",
        buttonLink: "#",
        delay: 400,

    }
];