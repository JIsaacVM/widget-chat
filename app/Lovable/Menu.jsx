import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import "./style.css";

const Footer = () => {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="z-20 fixed top-0 left-0 w-full p-2 bg-[var(--bg-cards   )] backdrop-blur-sm text-black shadow-lg">
            <div className="flex justify-between items-center h-16 px-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="/img/logo1.webp" alt="logo" className="w-fit h-10" />
                </div>

                {/* Botón del menú móvil (visible solo en pantallas pequeñas) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Contenedor del menú principal */}
                <div className="hidden md:flex flex-row items-center space-x-4 lg:space-x-8">
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Servicios</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Regulación</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Transparencia</a>
                    <p className="text-[var(--color-text-light)]">(+55) 911 911 911</p>
                    <a className="text-[var(--color-primary)] text-[var(--white)] px-4 py-2 rounded-full hover:text-[var(--color-primary)] transition-colors" href="#">Contacto</a>
                </div>
            </div>

            {/* Menú móvil (visible solo cuando se abre) */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 border-t border-[var(--border)]">
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Servicios</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Regulación</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Transparencia</a>
                    <p className="text-[var(--color-text-light)]">(+55) 911 911 911</p>
                    <a className="text-[var(--color-primary)] text-[var(--white)] px-4 py-2 rounded-full w-full text-center hover:text-[var(--color-primary)] transition-colors" href="#">Contacto</a>
                </div>
            )}
        </div>
    );
};

export default Footer;
