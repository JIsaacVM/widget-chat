import React from 'react';

const faqs = [
    { question: "¿Cómo garantizan la seguridad de mis inversiones?", answer: "Estamos regulados por CONDUSEF y utilizamos encriptación de grado bancario. Tus fondos están protegidos por el IPAB hasta por 400,000 UDIS por cuenta." },
    { question: "¿Puedo retirar mi dinero en cualquier momento?", answer: "Sí, tienes acceso completo a tus fondos. Los retiros se procesan en 1-3 días hábiles dependiendo del tipo de inversión." },
    { question: "¿Qué comisiones cobran?", answer: "Nuestras comisiones son transparentes y competitivas. Van del 0.5% al 1.2% anual según el plan, sin comisiones ocultas." },
    { question: "¿Necesito experiencia previa en inversiones?", answer: "No es necesario. Nuestro equipo de asesores y la IA te guían paso a paso, adaptándose a tu nivel de conocimiento." }
];

export default function FAQs() {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Encabezado con animación de fade-up */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Preguntas Frecuentes
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-light)]">
                        Resolvemos las dudas más comunes sobre FinancePro
                    </p>
                </div>
            </div>

            {/* Contenedor de preguntas con animaciones escalonadas */}
            <div className="mt-12 space-y-4 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // Retraso escalonado para un efecto dinámico
                        className="bg-[var(--white)] p-6 rounded-xl shadow-md border border-[var(--border)]"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                        <p className="text-sm text-[var(--color-text-light)]">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}