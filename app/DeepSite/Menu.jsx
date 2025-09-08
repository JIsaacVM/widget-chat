import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import "./style.css";

const Header = () => {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="z-10 fixed top-0 left-0 w-full bg-[#ffffffd9] backdrop-blur-sm text-black shadow-lg">
            <nav className="flex items-center justify-between py-6 px-4">
                {/* Logo */}
                <div className="text-2xl font-bold ">Finanzas Seguras</div>

                {/* Botón del menú móvil (visible solo en pantallas pequeñas) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-[var(--color-text-light)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)] rounded-md">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Contenedor del menú principal (escritorio) */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#beneficios" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">Beneficios</a>
                    <a href="#servicios" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">Servicios</a>
                    <a href="#testimonios" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">Testimonios</a>
                    <a href="#contacto" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">Contacto</a>
                    <a href="#contacto" className="bg-[var(--color-primary)] text-[var(--white)] px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                        Contactar Asesor
                    </a>
                </div>
            </nav>

            {/* Menú móvil (visible solo cuando se abre) */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 border-t border-[var(--border)]">
                    <a href="#beneficios" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors w-full text-center py-2">Beneficios</a>
                    <a href="#servicios" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors w-full text-center py-2">Servicios</a>
                    <a href="#testimonios" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors w-full text-center py-2">Testimonios</a>
                    <a href="#contacto" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors w-full text-center py-2">Contacto</a>
                    <a href="#contacto" className="bg-[var(--color-primary)] text-[var(--white)] px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full text-center">
                        Contactar Asesor
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
