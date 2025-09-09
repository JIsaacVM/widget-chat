import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react'; // Necesitas instalar lucide-react para estos íconos

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Columna 1: Logo y Descripción */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="bg-[var(--white)] p-2 rounded-full">
                            <span className="font-bold text-lg text-[var(--color-primary)]">F</span>
                        </div>
                        <div>
                            <p className="font-semibold text-[var(--white)]">FinanPro</p>
                            <p className="text-sm text-gray-400">Regulado por CONDUSEF</p>
                        </div>
                    </div>
                    <p className="text-sm">
                        Servicios financieros confiables, transparentes y regulados. Comprometidos con la protección y satisfacción de nuestros clientes.
                    </p>
                    <div className="flex space-x-4 text-[var(--white)]">
                        <a href="#" aria-label="Facebook"><FacebookIcon className="w-5 h-5 hover:text-[var(--color-secondary)] transition-colors" /></a>
                        <a href="#" aria-label="Twitter"><TwitterIcon className="w-5 h-5 hover:text-[var(--color-secondary)] transition-colors" /></a>
                        <a href="#" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5 hover:text-[var(--color-secondary)] transition-colors" /></a>
                    </div>
                </div>

                {/* Columna 2: Servicios */}
                <div>
                    <h4 className="font-semibold text-[var(--white)] mb-4">Servicios</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Créditos Personales</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Cuentas de Ahorro</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Inversiones</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Seguros</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Asesoría Financiera</a></li>
                    </ul>
                </div>

                {/* Columna 3: Legal y Regulación */}
                <div>
                    <h4 className="font-semibold text-[var(--white)] mb-4">Legal y Regulación</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Términos y Condiciones</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Políticas de Privacidad</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Registros CONDUSEF</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Estados Financieros</a></li>
                        <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Código de Ética</a></li>
                    </ul>
                </div>

                {/* Columna 4: Contacto */}
                <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold text-[var(--white)] mb-4">Contacto</h4>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                            <PhoneIcon className="w-4 h-4 text-[var(--color-primary)]" />
                            <p>01 800 999 8080</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="w-4 h-4 text-[var(--color-primary)]" />
                            <p>info@finanpro.mx</p>
                        </div>
                        <div className="flex items-start space-x-2">
                            <MapPinIcon className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                            <p>Av. Reforma 123, Col. Centro<br />Ciudad de México, 06000</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <h5 className="font-semibold text-[var(--white)] mb-2">Horario de Atención</h5>
                        <p className="text-sm">Lunes a Viernes: 9:00 - 18:00</p>
                        <p className="text-sm">Sábados: 9:00 - 14:00</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;