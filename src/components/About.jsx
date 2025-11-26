import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  TrendingUp, 
  Database, 
  Globe, 
  GitBranch, 
  Smartphone,
  BarChart3,
  Target
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML5', icon: Code, level: 95 },
    { name: 'CSS3/TailwindCSS', icon: Code, level: 90 },
    { name: 'JavaScript (ES6+)', icon: Code, level: 85 },
    { name: 'React.js', icon: Code, level: 80 },
    { name: 'Node.js', icon: Database, level: 70 },
    { name: 'MySQL', icon: Database, level: 75 },
    { name: 'Git/GitHub', icon: GitBranch, level: 85 },
    { name: 'Marketing Digital', icon: TrendingUp, level: 90 },
    { name: 'Google Ads', icon: Target, level: 85 },
    { name: 'Analytics', icon: BarChart3, level: 80 }
  ];

  const experience = [
    {
      title: 'Trafficker Digital',
      company: 'Independiente',
      period: 'Marzo 2021 - Abril 2023',
      description: 'Gestión de campañas digitales, desarrollo de capacidad analítica y orientación a resultados.'
    },
    {
      title: 'Desarrollador Web Front-End',
      company: 'Funval Internacional',
      period: 'Febrero - Mayo 2025',
      description: 'Formación intensiva en desarrollo web con enfoque en React, Node.js y bases de datos.'
    },
    {
      title: 'Administrador Logístico',
      company: 'DHL Supply Chain Chile',
      period: 'Febrero 2017 - Septiembre 2019',
      description: 'Coordinación de operaciones, organización y resolución de problemas en entorno de alta demanda.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desarrollador Web Frontend con sólida experiencia en marketing digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Mi Historia</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Soy un especialista en tecnologías emergentes que combina inteligencia artificial, 
                  marketing digital avanzado y desarrollo web moderno. Me enfoco en crear soluciones 
                  automatizadas que generan resultados medibles y escalables para los negocios.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Mi experiencia única en la intersección de IA, React Server Components, automatización 
                  de marketing y análisis predictivo me permite ofrecer soluciones que están años 
                  adelante de la competencia tradicional.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/images/yomg.png" 
                  alt="Miguel Fuentes trabajando" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Frontend</p>
                <p className="text-sm text-muted-foreground">Especialista</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-semibold">Marketing</p>
                <p className="text-sm text-muted-foreground">Digital</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Habilidades Técnicas</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certificaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <img src="/images/trafficker-certificate.jpeg" alt="Certificado Trafficker Digital" className="w-full h-auto max-h-64 object-contain mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Máster Experto en Trafficker Digital</h4>
              <p className="text-primary font-medium">Instituto de Tráfico Online</p>
              <p className="text-sm text-muted-foreground">Expedido en Madrid, 15 de Marzo de 2021</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <img src="/images/web-certificate.jpeg" alt="Certificado Desarrollador Web Frontend" className="w-full h-auto max-h-64 object-contain mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Técnico Desarrollador Web Front End</h4>
              <p className="text-primary font-medium">FUNVAL Internacional</p>
              <p className="text-sm text-muted-foreground">18 de Junio de 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Experiencia Profesional
          </h3>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-l-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}\
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
