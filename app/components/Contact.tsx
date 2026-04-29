"use client"

import { Github, Linkedin, Mail, Download, Send, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
export function Contact() {
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

  const contacts = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'Dev-Nadson',
      link: 'https://github.com/Dev-Nadson',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Nadson Alex',
      link: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'nadson.pros@gmail.com',
      link: 'mailto:nadson.pros@gmail.com',
      color: 'from-red-500 to-pink-600',
    },
  ];

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Vamos <span className="text-primary">Conversar?</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{
                  animation: isVisible
                    ? `slideUp 0.6s ease-out ${index * 0.15}s both`
                    : 'none',
                }}
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-lg`}
                  >
                    <contact.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-sm text-foreground/70 break-all">
                    {contact.value}
                  </p>

                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nadson.pros@gmail.com"
              className="px-8 py-3 rounded-xl bg-linear-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-xl bg-card border border-border hover:border-primary/30 font-medium transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Baixar CV
            </a>
          </div>

        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes slideUp {
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
