/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import "./style.css"

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="z-10 fixed top-0 left-0 w-full p-2 bg-[var(--bg-light)] backdrop-blur-sm text-[var(--color-text-dark)] shadow-lg">
            <div className="flex justify-between items-center h-16 px-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    {/* SVG en línea para el logo */}
                    <img src="/img/logo3.webp" alt="logo" className="w-fit h-10" width={100} height={100} />
                </div>

                {/* Botón del menú móvil (visible solo en pantallas pequeñas) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Contenedor del menú principal */}
                <div className="hidden md:flex flex-row items-center space-x-4 lg:space-x-8">
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Producto</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Caracteristicas</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Precio</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Testimonio</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors" href="#">Contacto</a>
                    <div className="flex gap-4">
                        <a className="px-4 bg-[var(--color-primary)] text-[var(--white)] rounded-md flex items-center hover:bg-[var(--color-primary-dark)] transition-colors" href="#">Iniciar Sesión</a>
                        <a className="px-4 bg-[var(--color-secondary)] text-[var(--white)] rounded-md flex items-center hover:bg-[var(--color-primary-dark)]  transition-colors" href="#">Prueba Gratis</a>
                    </div>
                </div>
            </div>

            {/* Menú móvil (visible solo cuando se abre) */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 border-t border-[var(--border)]">
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Producto</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Caracteristicas</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Precio</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Testimonio</a>
                    <a className="hover:text-[var(--color-secondary)] transition-colors w-full text-center" href="#">Contacto</a>
                    <a className="px-4 bg-[var(--color-primary)] text-[var(--white)] rounded-md w-full text-center hover:bg-[var(--color-primary-dark)] transition-colors py-2" href="#">Iniciar Sesión</a>
                    <a className="px-4 bg-[var(--color-secondary)] text-[var(--white)] rounded-md w-full text-center hover:bg-[var(--color-primary-dark)] transition-colors" href="#">Prueba Gratis</a>
                </div>
            )}
        </header>
    );
};

export default Footer;
