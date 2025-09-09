"use client";
import React from "react";
import { financialServices } from "./../Data/Modulox_data";
import { AiFillSafetyCertificate } from "react-icons/ai";



export default function Home() {
  return (
    <div className="bg-[var(--bg-light)] text-[var(--black)]">
      <div className="flex flex-col items-center pt-16 py-2">
        <div className="bg-[var(--bg-light)] py-16">
          <div className="container mx-auto px-4 text-center">
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-2">
                Servicios Financieros Regulados
              </h2>
              <p className="text-[var(--color-text-light)] text-lg mb-10 max-w-2xl mx-auto">
                Todos nuestros productos cumplen estrictamente con las disposiciones de CONDUSEF, garantizando transparencia, seguridad y protección al usuario financiero.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
              {financialServices.map((service) => (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                  className="relative p-6 bg-[var(--white)] rounded-3xl flex flex-col justify-between shadow-lg hover:shadow-xl hover:border-2 hover:border-[var(--color-secondary)] transition-transform duration-500 hover:scale-105"
                >
                  {service.popular && (
                    <div className="absolute top-0 right-8 transform -translate-y-1/2">
                      <span className="bg-[var(--color-warning)] text-[var(--color-warning)] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-[var(--bg-circle)] bg-[var(--color-primary)]">
                      {service.icon && <service.icon />}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-light)] mb-2 text-left">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] mb-4 text-left">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6 text-left">
                      {service.listItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 rounded-full mt-1 mr-2 flex-shrink-0 text-[var(--color-primary)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={service.buttonLink}
                    className="inline-flex items-center justify-center text-sm font-medium rounded-xl border-2 border-blue-500 text-[var(--color-secondary)] px-6 py-3 transition-colors duration-200 hover:bg-blue-50"
                  >
                    {service.buttonText}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div
              data-aos="zoom-in"
              className="bg-[var(--white)] p-8 sm:p-12 rounded-3xl shadow-lg border border-[var(--border)] w-full text-center max-w-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[var(--white)] shadow-lg relative">
                <div className="h-12 flex items-center justify-center rounded-xl text-[var(--bg-circle)] relative z-10">
                  <AiFillSafetyCertificate className="h-8 w-8 text-[var(--color-primary)]" />
                </div>
                <div className="absolute inset-0 rounded-2xl text-[var(--color-primary)] opacity-20 filter blur-lg"></div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
                Garantía CONDUSEF
              </h3>
              <p className="text-sm text-[var(--color-text-light)] max-w-md mx-auto mb-6">
                Todos nuestros servicios están respaldados por las regulaciones de la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center text-sm font-medium rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-secondary)] px-6 py-3 transition-colors duration-200 hover:bg-[var(--bg-circle)]"
              >
                Ver Certificaciones →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}