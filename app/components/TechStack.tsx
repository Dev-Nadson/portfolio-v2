"use client"

import { Server, Globe, Box } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function TechStack() {
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

  const techCategories = [
    {
      category: '🔧 Backend',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      techs: [
        { name: 'Node.js', level: 90 },
        { name: 'Fastify', level: 85 },
        { name: 'Knex.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'FastAPI', level: 70 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'SQLite', level: 80 },
      ],
    },
    {
      category: '🎨 Frontend',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      techs: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ],
    },
    {
      category: '⚙️ DevOps',
      icon: Box,
      color: 'from-orange-500 to-red-500',
      techs: [
        { name: 'Docker', level: 80 },
        { name: 'Ubuntu', level: 75 },
      ],
    },
  ];

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="py-20 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="space-y-4"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${categoryIndex * 0.2}s both`
                    : 'none',
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-linear-to-br ${category.color} shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>

                {/* Tech Cards */}
                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-sm text-foreground/60">{tech.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-linear-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${tech.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2 + techIndex * 0.1)}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Linguagens', value: '5+' },
              { label: 'Frameworks', value: '8+' },
              { label: 'Databases', value: '2+' },
              { label: 'Ferramentas', value: '10+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/30 hover:scale-105 transition-all"
              >
                <div className="text-3xl font-bold bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
