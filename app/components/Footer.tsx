"use client"

import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-purple-600">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">Nadson Alex</span>
          </div>

          {/* Center - Copyright */}
          <div className="flex items-center gap-2 text-foreground/60 text-sm">
            <span>© {currentYear} Nadson Alex. Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>e muito ☕</span>
          </div>

          {/* Right - Tech Stack */}
          <div className="text-sm text-foreground/60">
            <span>React • TypeScript • Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
