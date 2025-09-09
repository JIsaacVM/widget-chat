import Image from "next/image";

const financialServices = [
  {
    id: 1,
    title: "Créditos Personales",
    description: "Préstamos con tasas competitivas y términos transparentes, totalmente regulados por CONDUSEF.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[var(--color-primary)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    popular: true,
    listItems: [
      "Tasa fija desde 12%",
      "Sin comisiones ocultas",
      "Aprobación en 24 hrs",
    ],
    buttonText: "Simular Crédito →",
    buttonLink: "#",
    delay: 100,
  },
  {
    id: 2,
    title: "Cuentas de Ahorro",
    description: "Productos de ahorro con garantía gubernamental y rendimientos atractivos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 16v-2.586a1 1 0 01.293-.707l2.414-2.414A1 1 0 0113 10.586V13m-3 3v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2z"
        />
      </svg>
    ),
    popular: false,
    listItems: [
      "Rendimiento hasta 8%",
      "Seguro IPAB",
      "Sin monto mínimo",
    ],
    buttonText: "Abrir Cuenta →",
    buttonLink: "#",
    delay: 200,
  },
  {
    id: 3,
    title: "Inversiones",
    description: "Instrumentos de inversión regulados con diferentes perfiles de riesgo.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    popular: false,
    listItems: [
      "Diversificación",
      "Asesoría experta",
      "Transparencia total",
    ],
    buttonText: "Comenzar a Invertir →",
    buttonLink: "#",
    delay: 300,
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--bg-light)] text-[var(--black)]">
      <div className="flex flex-col items-center pt-16 py-2">
        <div className="bg-[var(--bg-light)] py-16">
          <div className="container mx-auto px-4 text-center">
            {/* Título y subtítulo con animación "fade-up" */}
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-2">
                Servicios Financieros Regulados
              </h2>
              <p className="text-[var(--color-text-light)] text-lg mb-10 max-w-2xl mx-auto">
                Todos nuestros productos cumplen estrictamente con las
                disposiciones de CONDUSEF, garantizando transparencia, seguridad
                y protección al usuario financiero.
              </p>
            </div>

            {/* Contenedor de las tarjetas con animaciones escalonadas */}
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
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-[var(--bg-circle)]">
                      {service.icon}
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

          {/* Sección de garantía con animación "zoom-in" */}
          <div className="mt-12 flex justify-center">
            <div
              data-aos="zoom-in"
              className="bg-[var(--white)] p-8 sm:p-12 rounded-3xl shadow-lg border border-[var(--border)] w-full text-center max-w-lg"
            >
              {/* Contenedor del ícono con sombra */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[var(--white)] shadow-lg relative">
                <div className="h-12 flex items-center justify-center rounded-xl text-[var(--bg-circle)] relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[var(--color-primary)]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.25C6.516 2.25 2.25 6.516 2.25 12s4.266 9.75 9.75 9.75 9.75-4.266 9.75-9.75S17.484 2.25 12 2.25zm0 17.5c-4.28 0-7.75-3.47-7.75-7.75S7.72 4.25 12 4.25s7.75 3.47 7.75 7.75-3.47 7.75-7.75 7.75zM12 7.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM12 15.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" />
                    <path d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                  </svg>
                </div>
                {/* Sombra sutil del ícono */}
                <div className="absolute inset-0 rounded-2xl text-[var(--color-primary)] opacity-20 filter blur-lg"></div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
                Garantía CONDUSEF
              </h3>
              <p className="text-sm text-[var(--color-text-light)] max-w-md mx-auto mb-6">
                Todos nuestros servicios están respaldados por las regulaciones
                de la Comisión Nacional para la Protección y Defensa de los
                Usuarios de Servicios Financieros.
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