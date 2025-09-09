
const footerLinks = [
    { title: "Producto", items: ["Inversiones IA", "Seguros Inteligentes", "Crédito Dinámico", "Asesoría 24/7"] },
    { title: "Legal", items: ["Aviso de Privacidad", "Términos y Condiciones", "UNE", "CONDUSEF"] },
    { title: "Contacto", items: ["+52 55 1234 5678", "contacto@financesecure.mx", "Av. Reforma 123, CDMX"] }
];

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-footer)] text-[var(--color-text-light)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section */}
                <div>
                    <h3 className="text-2xl font-bold text-[var(--white)] mb-2">FinanceSecure</h3>
                    <p className="text-sm">
                        La plataforma financiera más avanzada de México. Regulada por CONDUSEF.
                    </p>
                    <div className="mt-4 flex space-x-2">
                        <span className="bg-[var(--color-primary)] text-[var(--white)] text-xs font-semibold px-3 py-1 rounded-full">
                            50K+ Clientes
                        </span>
                        <span className="bg-[var(--color-tertiary)] text-[var(--white)] text-xs font-semibold px-3 py-1 rounded-full">
                            $2B+ Gestionados
                        </span>
                    </div>
                </div>

                {/* Links Sections */}
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <h4 className="text-lg font-semibold text-[var(--white)] mb-4">{section.title}</h4>
                        <ul className="space-y-2 text-sm">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center text-[var(--color-text-light)] text-sm border-t border-[var(--color-text-light)] pt-8">
                © 2024 FinanceSecure. Todos los derechos reservados. Registro CONDUSEF: 12345-2024
            </div>
        </footer>
    );
}