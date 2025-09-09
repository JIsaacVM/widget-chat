// Define la interfaz para los datos de un testimonio
export interface Testimonial {
    text: string;
    name: string;
    title: string;
    initials: string;
}

// Array con la información de los testimonios
export const testimonials: Testimonial[] = [
    {
        text: "En 2 años, FinancePro me ayudó a aumentar mi patrimonio en un 45%. La IA predictiva es increíble.",
        name: "María Rodríguez",
        title: "Empresaria, CDMX",
        initials: "MR"
    },
    {
        text: "La asesoría 24/7 es un game-changer. Siempre hay alguien experto disponible cuando lo necesito.",
        name: "Carlos López",
        title: "Director Financiero",
        initials: "CL"
    },
    {
        text: "Finalmente encontré una plataforma que entiende mis necesidades como inversionista sofisticada.",
        name: "Ana Sánchez",
        title: "Inversionista Angel",
        initials: "AS"
    }
];