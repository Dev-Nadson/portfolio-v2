"use client"
import { GraduationCap, MessageCircle, Users, Zap, MapPin, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2022', event: 'Início da jornada como desenvolvedor' },
    { year: '2023', event: 'Ingresso em Ciência da Computação - PROUNI' },
    { year: '2024', event: 'Foco no ecossistema Node.js' },
    { year: '2026', event: 'Desenvolvendo projetos fullstack complexos' },
  ];

  const softSkills = [
    { icon: MessageCircle, label: 'Comunicação', color: 'text-blue-500' },
    { icon: Users, label: 'Trabalho em equipe', color: 'text-green-500' },
    { icon: Zap, label: 'Aprendizado rápido', color: 'text-yellow-500' },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio & Skills */}
            <div className="space-y-6">
              {/* Bio */}
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Desenvolvedor Fullstack</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Desenvolvedor fullstack pernambucano focado em criar aplicações
                      escaláveis e com alta performance. Apaixonado por tecnologia e
                      sempre buscando as melhores práticas de desenvolvimento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Bio 2 */}
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Desenvolvedor Fullstack</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Desenvolvedor fullstack pernambucano focado em criar aplicações
                        escaláveis e com alta performance. Apaixonado por tecnologia e
                        sempre buscando as melhores práticas de desenvolvimento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Formação Acadêmica</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Estudante de <strong>Ciência da Computação</strong> na{' '}
                      <strong>Unifavip Wyden</strong> com bolsa integral pelo PROUNI.
                      Foco atual: ecossistema Node.js e desenvolvimento fullstack.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Linha do Tempo
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-purple-500 to-purple-600"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="relative pl-12"
                      style={{
                        animation: isVisible
                          ? `slideIn 0.5s ease-out ${index * 0.1}s both`
                          : 'none',
                      }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-linear-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>

                      {/* Timeline Content */}
                      <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                        <div className="text-sm font-semibold text-primary mb-1">
                          {item.year}
                        </div>
                        <div className="text-foreground/80">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
