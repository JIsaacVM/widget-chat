import React from 'react';
import { UserCircle, Star } from 'lucide-react';

const TestimonialCard = ({ name, rating, text }) => {
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
            <p className="text-[var(--color-text-light)] italic">"{text}"</p>
        </div>
    );
};



const App = () => {
    const testimonials = [
        {
            name: "María G.",
            rating: 5,
            text: "Gracias a su asesoría pude consolidar mis deudas con mejores tasas de interés. El proceso fue claro y siempre estuvieron disponibles para resolver mis dudas."
        },
        {
            name: "Roberto H.",
            rating: 5,
            text: "Finalmente encontré un asesor financiero en quien confiar. Me ayudaron a planear mi retiro con inversiones seguras y adecuadas a mi perfil."
        },
        {
            name: "Ana L.",
            rating: 5,
            text: "Como empresaria necesitaba organizar mis finanzas personales y empresariales. Su equipo hizo un excelente trabajo identificando áreas de oportunidad."
        }
    ];

    return (
        <section className="bg-[var(--bg-cards)] py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[var(--black)] mb-2">Testimonios</h2>
                <p className="text-lg text-[var(--color-text-light)]">Lo que dicen nuestros clientes sobre nosotros</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        rating={testimonial.rating}
                        text={testimonial.text}
                    />
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="#" className="text-[var(--color-primary)] font-semibold hover:underline flex items-center justify-center">
                    Ver más testimonios
                    <span className="ml-1">&gt;</span>
                </a>
            </div>

        </section>
    );
};

export default App;
