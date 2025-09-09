// Define la interfaz para la estructura de una sección legal
export interface LegalSection {
    title: string;
    content: string;
}

// Array con el contenido de las secciones legales
export const legalSections: LegalSection[] = [
    { title: "Regulación CONDUSEF", content: "FinanceSecure está registrada ante la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF) bajo el registro No. 12345-2024. Cumplimos con todas las disposiciones aplicables." },
    { title: "Advertencias de Riesgo", content: "Las inversiones en instrumentos financieros conllevan riesgos. El valor de las inversiones puede fluctuar y los rendimientos pasados no garantizan resultados futuros. Consulte siempre con un asesor financiero calificado." },
    { title: "Protección de Datos", content: "Sus datos personales están protegidos conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Consulte nuestro aviso de privacidad completo." },
    { title: "Unidad Especializada de Atención (UNE)", content: "Para consultas, aclaraciones o quejas, contacte nuestra UNE al teléfono 800-123-4567 o visite www.financesecure.mx/une" }
];