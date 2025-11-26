import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Code, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Mi Portafolio Personal',
      description: 'Sitio web personal desarrollado con HTML, CSS y JavaScript, mostrando mis habilidades y proyectos.',
      image: '/images/portafoliomg.png',
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://miguelangelfuentesalvis.github.io/mp-miguel-fuentes/',
      githubUrl: 'https://github.com/miguelangelfuentesalvis/mp-miguel-fuentes',
      featured: true
    },
    {
      id: 2,
      title: 'Campaña E-commerce con IA',
      description: 'Gestión completa de campaña publicitaria para tienda online, optimizada con IA para un ROI del 300%.',
      image: '/images/portafoliomg.png',
      category: 'marketing',
      technologies: ['Google Ads', 'Facebook Ads', 'IA', 'Analytics'],
      results: '+300% ROI, +150% Conversiones',
      featured: true
    },
    {
      id: 3,
      title: 'Landing Page Corporativa Avanzada',
      description: 'Desarrollo de landing page optimizada para conversión con diseño responsivo y micro-interacciones IA.',
      image: '/images/portafoliomg.png',
      category: 'web',
      technologies: ['React', 'TailwindCSS', 'Framer Motion', 'IA'],
      featured: false
    },
    {
      id: 4,
      title: 'Optimización de Conversiones con ML',
      description: 'Análisis y optimización de funnel de ventas, mejorando la tasa de conversión en 85% con Machine Learning.',
      image: '/images/portafoliomg.png',
      category: 'marketing',
      technologies: ['Google Analytics', 'Hotjar', 'A/B Testing', 'Machine Learning'],
      results: '+85% Tasa de Conversión',
      featured: false
    },
    {
      id: 5,
      title: 'App Web React con RSC',
      description: 'Aplicación web interactiva desarrollada con React Server Components y integración de APIs.',
      image: '/images/portafoliomg.png',
      category: 'web',
      technologies: ['React', 'Next.js', 'Node.js', 'MySQL', 'RSC'],
      featured: false
    },
    {
      id: 6,
      title: 'Estrategia Multi-canal Automatizada',
      description: 'Implementación de estrategia de marketing digital en múltiples canales con automatización IA.',
      image: '/images/portafoliomg.png',
      category: 'marketing',
      technologies: ['Google Ads', 'Facebook', 'Email Marketing', 'Automatización IA'],
      results: '+200% Alcance, +120% Leads',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: Globe },
    { id: 'web', label: 'Desarrollo Web', icon: Code },
    { id: 'marketing', label: 'Marketing Digital', icon: TrendingUp }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mi Portafolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos que demuestran mi experiencia en desarrollo web y marketing digital
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="flex items-center space-x-2"
            >
              <filter.icon className="h-4 w-4" />
              <span>{filter.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {project.category === 'web' ? (
                  <Code className="h-16 w-16 text-primary/60" />
                ) : (
                  <TrendingUp className="h-16 w-16 text-accent/60" />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Destacado
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results (for marketing projects) */}
                {project.results && (
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm font-medium text-accent">Resultados:</p>
                    <p className="text-sm text-foreground">{project.results}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center space-x-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Ver Sitio</span>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center space-x-1"
                    >
                      <Github className="h-3 w-3" />
                      <span>Código</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90"
          >
            Iniciar Proyecto
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

