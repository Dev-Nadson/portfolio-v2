"use client"

import { Download, ExternalLink, Code2, Rocket, Coffee } from 'lucide-react';

export function Hero() {
  const stats = [
    { value: '3+', label: 'Projetos' },
    { value: '12+', label: 'Tecnologias' },
    { value: '2+', label: 'Anos Estudando' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-primary/10 to-purple-500/10 border border-primary/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7 xl font-bold leading-tight">
                Olá, meu nome é{' '}
                <span className="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Nadson Alex!
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Desenvolvedor{' '}
                <span className="text-primary font-bold">Fullstack</span>
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg text-foreground/70 max-w-xl">
              Transformando ideias em realidade de forma elegante e escalável!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projetos')}
                className="px-6 py-3 rounded-xl bg-linear-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Veja meus Projetos
              </button>
              <a
                href="#"
                className="px-6 py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:ring-2 hover:ring-primary/75 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated Circle */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-purple-600/20"></div>

              {/* Avatar Container */}
              <div className="absolute inset-8 rounded-full bg-linear-to-br from-primary to-purple-600 p-1 shadow-2xl shadow-primary/30">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  {/* Developer Icon */}
                  <div className="relative">
                    <Code2 className="w-32 h-32 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 p-3 rounded-xl bg-card shadow-lg animate-float-delayed">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-card shadow-lg animate-float">
                <Code2 className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
