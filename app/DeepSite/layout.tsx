"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ChatWidget from '../ChatWidget/ChatWidget';
import Footer from "./Footer";
import Menu from "./Menu";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Nota: La metadata debe estar en un Server Component.
// Si tu layout es 'use client', Next.js recomienda mover la metadata
// a un archivo 'layout.js' superior o a un archivo 'page.js'.
// Por simplicidad, la eliminamos de aquí.

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Inicializa AOS en el useEffect. Se ejecutará una sola vez
    // cuando el layout se monte en el lado del cliente.
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',

        });
    }, []);
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                <Menu />
                {children}
                <ChatWidget />
                <Footer />

            </body>
        </html>
    );
}
