import React from 'react';
import { UserCircle, Star } from 'lucide-react';
import { testimonials } from '../Data/TestimonialCard_data';


// Definimos el tipo (interface) para las props del componente
interface TestimonialCardProps {
    name: string;
    rating: number;
    text: string;
}

// Componente para la tarjeta individual de testimonio con tipado
const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, rating, text }) => {
    return (
        <div className="bg-[var(--white)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
                <UserCircle className="text-[var(--color-secondary)] h-10 w-10 mr-3" />
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                    <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-[var(--color-text-light)] italic">{text}</p>
        </div>
    );
};

// Componente principal que usa los datos para renderizar la sección completa.
const TestimonialsSection = () => {
    return (
        <section className="bg-[var(--bg-cards)] py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[var(--black)] mb-2"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >Testimonios</h2>
                <p className="text-lg text-[var(--color-text-light)]"
                    data-aos="fade-down"
                    data-aos-duration="1000">Lo que dicen nuestros clientes sobre nosotros</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                data-aos="fade-up"
                data-aos-duration="1000">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        rating={testimonial.rating}
                        text={testimonial.text}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
