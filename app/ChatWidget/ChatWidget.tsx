// components/ChatWidget.tsx
"use client";

import { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function ChatWidget(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleChat = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón de la burbuja */}
      <motion.button
        onClick={toggleChat}
        className="bg-[var(--color-primary)] text-[var(--white)] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      > 
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaCommentDots size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Recuadro de chat con animaciones de Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-xs md:w-80 bg-[var(--white)] rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5, damping: 20, stiffness: 300 }}
          >
            {/* Header del chat */}
            <div className="bg-[var(--color-primary)] text-[var(--white)] p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Asistente Virtual</h2>
              <motion.button
                onClick={toggleChat}
                className="text-[var(--white)] hover:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={20} />
              </motion.button>
            </div>
            {/* Cuerpo del chat */}
            <div className="p-4 space-y-4 max-h-72 overflow-y-auto">
              {/* Mensaje del bot */}
              <div className="bg-[var( --bg-light)] p-3 rounded-xl rounded-bl-none max-w-[85%]">
                <p className="text-gray-800">
                  ¡Hola! Bienvenido a nuestro chat de soporte. ¿Cómo podemos ayudarte hoy?
                </p>
              </div>
              {/* Mensaje del usuario */}
              <div className="flex justify-end">
                <div className="text-[var(--bg-circle)] text-[var(--color-primary-dark)] p-3 rounded-xl rounded-br-none max-w-[85%]">
                  <p>
                    Hola, tengo una pregunta sobre mi pedido.
                  </p>
                </div>
              </div>
            </div>
            {/* Input para escribir */}
            <div className="p-4 border-t border-[var(--border)]">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 p-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <button
                  className="text-[var(--color-primary)] text-[var(--white)] p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}