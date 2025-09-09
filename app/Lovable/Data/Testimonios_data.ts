// Define la interfaz para asegurar que los datos de los testimonios tengan una estructura consistente.
export interface TestimonialData {
    rating: number;
    text: string;
    name: string;
    title: string;
}

// Los datos de los testimonios se almacenan aquí.
export const testimonialsData: TestimonialData[] = [
    {
        rating: 5,
        text: 'Excelente servicio y total transparencia. El proceso fue muy claro y cumplieron todo lo prometido.',
        name: 'María González',
        title: 'Empresaria',
    },
    {
        rating: 5,
        text: 'Me ayudaron a resolver mi situación crediticia de manera profesional y siguiendo todas las regulaciones.',
        name: 'Carlos Hernández',
        title: 'Comerciante',
    },
    {
        rating: 5,
        text: 'La asesoría fue excepcional y siempre me mantuvieron informada sobre las regulaciones de CONDUSEF.',
        name: 'Ana Martínez',
        title: 'Profesionista',
    },
    {
        rating: 4,
        text: 'Muy buen servicio, aunque me hubiera gustado un poco más de seguimiento durante el proceso.',
        name: 'Juan Carlos',
        title: 'Investigador',
    },
];