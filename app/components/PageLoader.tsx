"use client"

import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento inicial da página
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Círculo animado */}
          <div className="w-24 h-24 border-4 border-primary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>

          {/* Logo no centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 rounded-full bg-linear-to-br from-primary to-purple-600">
              <Code2 className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">
          Carregando
          <span className="inline-block animate-bounce">.</span>
          <span className="inline-block animate-bounce animation-delay-200">.</span>
          <span className="inline-block animate-bounce animation-delay-400">.</span>
        </h2>
        <p className="text-foreground/60">Preparando portfolio</p>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
