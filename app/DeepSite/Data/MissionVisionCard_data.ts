// Define la interfaz para asegurar la consistencia del tipo de datos.
export interface CardData {
    id: number;
    title: string;
    description: string;
    items?: { name: string; description: string }[];
    type: 'mission' | 'vision' | 'values';
}

// Los datos de la empresa, listos para ser importados.
export const companyData: CardData[] = [
    {
        id: 1,
        title: 'Misión',
        description: 'Brindar asesoría financiera personalizada y transparente, ayudando a nuestros clientes a tomar decisiones informadas que mejoren su calidad de vida y seguridad patrimonial.',
        type: 'mission'
    },
    {
        id: 2,
        title: 'Visión',
        description: 'Ser reconocidos como la firma de consultoría financiera más confiable de México, destacando por nuestro profesionalismo, ética e impacto positivo en la economía familiar.',
        type: 'vision'
    },
    {
        id: 3,
        title: 'Valores',
        description: 'Actuamos con honestidad y transparencia en todas nuestras recomendaciones.',
        type: 'values',
        items: [
            { name: 'Integridad', description: 'Actuamos con honestidad y transparencia en todas nuestras recomendaciones.' },
            { name: 'Excelencia', description: 'Buscamos constantemente la mejora en nuestros servicios y actualización profesional.' },
            { name: 'Responsabilidad', description: 'Asumimos el compromiso con el bienestar financiero de nuestros clientes.' },
            { name: 'Confidencialidad', description: 'Resguardamos con total seguridad la información que nos confían.' },
        ]
    }
];