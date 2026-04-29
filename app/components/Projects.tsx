"use client"

import { Github, ExternalLink, Filter } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');
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

  const projects = [
    {
      title: 'Counter-Project',
      description:
        'Contador simples e elegante desenvolvido com React, TypeScript e Tailwind CSS. Implementa hook useState, componentes modulares e tema claro/escuro com transições suaves.',
      category: 'Frontend',
      tags: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/Dev-Nadson/counter-project',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'PsyApp - API',
      description:
        'API robusta de anamnese psicológica com autenticação JWT, rotas protegidas e validação Zod. Sistema completo de cadastro de pacientes, profissionais e anamneses com soft delete para proteção de dados sensíveis.',
      category: 'Backend',
      tags: ['Node.js', 'PostgreSQL', 'Docker', 'JWT'],
      github: 'https://github.com/Dev-Nadson/psyapp',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Digital Wallet - API',
      description:
        'API de carteira digital com foco em segurança e integridade de transações. Implementa validações de saldo, transferências entre contas e histórico completo usando SQLite, Knex e Zod.',
      category: 'Backend',
      tags: ['Node.js', 'SQLite', 'Knex', 'Zod'],
      github: 'https://github.com/Dev-Nadson/digital-wallet',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const filters = ['Todos', 'Frontend', 'Backend'];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi aplicando as melhores práticas
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Filtrar:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${activeFilter === filter
                  ? 'bg-linear-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group"
                style={{
                  animation: isVisible
                    ? `scaleIn 0.5s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                  {/* Project Header */}
                  <div
                    className={`w-full h-40 rounded-xl bg-linear-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                    <div className="relative">
                      <ExternalLink className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-all" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-foreground/70 text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-linear-to-r from-primary/10 to-purple-500/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="pt-4 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Código Fonte
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
