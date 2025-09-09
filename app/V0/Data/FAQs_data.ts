// src/data/faqData.ts

// Definimos la interfaz para el tipo de datos de una FAQ
export interface FAQItem {
    question: string;
    answer: string;
}

// Array con la data de las preguntas y respuestas
export const faqs: FAQItem[] = [
    {
        question: "¿Cómo garantizan la seguridad de mis inversiones?",
        answer: "Estamos regulados por CONDUSEF y utilizamos encriptación de grado bancario. Tus fondos están protegidos por el IPAB hasta por 400,000 UDIS por cuenta."
    },
    {
        question: "¿Puedo retirar mi dinero en cualquier momento?",
        answer: "Sí, tienes acceso completo a tus fondos. Los retiros se procesan en 1-3 días hábiles dependiendo del tipo de inversión."
    },
    {
        question: "¿Qué comisiones cobran?",
        answer: "Nuestras comisiones son transparentes y competitivas. Van del 0.5% al 1.2% anual según el plan, sin comisiones ocultas."
    },
    {
        question: "¿Necesito experiencia previa en inversiones?",
        answer: "No es necesario. Nuestro equipo de asesores y la IA te guían paso a paso, adaptándose a tu nivel de conocimiento."
    },
];