import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Markdown Editor",
    description: "A real-time collaborative Markdown editor with live preview",
    tech: ["React", "Javascript", "WebSocket", "Tailwind CSS"],
    image: "https://cdn.jsdelivr.net/gh/Soubhagya81/Soubhagya_Portfofio@main/src/assets/Mark-down.png"
  },
  {
    title: "NetFlix Clone",
    description: "A clone of the popular streaming service with a modern UI",
    tech: ["React", "Redux", "Firebase", "Tailwind CSS", "Javascript", "TMDB API"],
    image: "https://cdn.jsdelivr.net/gh/Soubhagya81/Soubhagya_Portfofio@main/src/assets/netflix.png"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-700  px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}