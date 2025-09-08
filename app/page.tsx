import Image from "next/image";
import { SparklesIcon, CodeBracketIcon, BoltIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="bg-[var(--white)] text-black p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center">
      {/* Encabezado Principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
        Plataformas de IA para Desarrolladores
      </h1>
      <p className="max-w-md text-center text-[var(--color-text-light)] mb-12">
        Descubre herramientas de vanguardia para generar código, crear interfaces de usuario y construir aplicaciones completas con inteligencia artificial.
      </p>

      {/* Contenedor de las 3 Tarjetas */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

        {/* Tarjeta de Lovable */}
        <a
          href="./Lovable"

          rel="noopener noreferrer"
          className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
        >
          <div className="p-3 mb-4 bg-purple-500 rounded-2xl inline-flex">
            <SparklesIcon className="size-8 text-[var(--white)]" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Lovable</h2>
          <p className="text-[var(--color-text-light)] mb-4">
            Genera aplicaciones web completas a partir de una simple descripción en lenguaje natural.
          </p>
        </a>

        {/* Tarjeta de V0 */}
        <a
          href="/V0"
          rel="noopener noreferrer"
          className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
        >
          <div className="p-3 mb-4 text-[var(--color-primary)] rounded-2xl inline-flex">
            <CodeBracketIcon className="size-8 text-[var(--white)]" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">V0</h2>
          <p className="text-[var(--color-text-light)] mb-4">
            Crea código React de manera instantánea y componentes UI de alta calidad con IA.
          </p>
        </a>

        {/* Tarjeta de DeepSite */}
        <a
          href="./DeepSite"

          rel="noopener noreferrer"
          className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
        >
          <div className="p-3 mb-4 bg-green-500 rounded-2xl inline-flex">
            <BoltIcon className="size-8 text-[var(--white)]" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">DeepSite</h2>
          <p className="text-[var(--color-text-light)] mb-4">
            Diseña y construye sitios web visualmente impresionantes con el poder de la inteligencia artificial.
          </p>
        </a>

      </div>
    </div>
  );
}