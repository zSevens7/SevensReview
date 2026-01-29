// src/components/RankingGeral/ExpandableCard.tsx
import React, { useState, ReactNode } from 'react';
import { Maximize2, X, Minimize2 } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode; // O gráfico vai aqui dentro
  className?: string;
}

export function ExpandableCard({ title, icon, children, className = "" }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* --- ESTADO NORMAL (CARD NO GRID) --- */}
      <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col h-full relative group transition-all duration-300 hover:shadow-lg ${className}`}>
        
        {/* Cabeçalho do Card */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            {icon} {title}
          </h3>
          
          {/* Botão de Expandir (Aparece ao passar o mouse ou sempre no mobile) */}
          <button 
            onClick={() => setIsExpanded(true)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Expandir visualização"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo (Gráfico) */}
        <div className="flex-1 min-h-[300px] flex items-center justify-center relative z-0">
          {children}
        </div>
      </div>

      {/* --- ESTADO EXPANDIDO (MODAL / LIGHTBOX) --- */}
      {isExpanded && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Container do Modal */}
          <div className="bg-white dark:bg-gray-900 w-full h-full max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
            
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                {icon} {title}
              </h2>
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-full hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Corpo do Modal (Gráfico Gigante) */}
            <div className="flex-1 p-6 md:p-10 bg-gray-50 dark:bg-gray-900/50 overflow-auto">
              {/* Aqui renderizamos o children novamente, mas num container flexível grande */}
              <div className="w-full h-full min-h-[500px]">
                {children}
              </div>
            </div>

            {/* Footer com dica (Opcional) */}
            <div className="p-4 text-center text-sm text-gray-500 border-t border-gray-100 dark:border-gray-800">
              Pressione ESC ou clique no X para fechar
            </div>
          </div>
        </div>
      )}
    </>
  );
}