const Footer = () => {
    return (
        <footer className="bg-blue-900 text-[var(--white)] py-12 px-6  w-full 
        ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Finanzas Seguras</h3>
                    <p className="text-gray-300">
                        Profesionales comprometidos con tu éxito financiero.
                    </p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Servicios</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#servicios" className="hover:text-[var(--white)] transition-colors">Inversiones</a></li>
                        <li><a href="#servicios" className="hover:text-[var(--white)] transition-colors">Créditos</a></li>
                        <li><a href="#servicios" className="hover:text-[var(--white)] transition-colors">Planeación Financiera</a></li>
                        <li><a href="#servicios" className="hover:text-[var(--white)] transition-colors">Buró de Crédito</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Legal</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-[var(--white)] transition-colors">Aviso de Privacidad</a></li>
                        <li><a href="#" className="hover:text-[var(--white)] transition-colors">Términos y Condiciones</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Contacto</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="tel:+525512345678" className="hover:text-[var(--white)] transition-colors">+52 55 12345678</a></li>
                        <li><a href="mailto:contacto@finanzasseguras.com" className="hover:text-[var(--white)] transition-colors break-words ">contacto@finanzasseguras.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
                <p> {new Date().getFullYear()} Finanzas Seguras. Todos los derechos reservados.</p>
                <p>Autorizado por CONDUSEF</p>
            </div>
        </footer>
    );
};

export default Footer;