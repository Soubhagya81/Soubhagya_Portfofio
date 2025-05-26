import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "RESTful APIs"],
  "Tools": ["Git", "Docker", "AWS", "CI/CD"],
  "Soft Skills": ["Problem Solving", "Team Leadership", "Communication", "Agile"]
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
              <ul className="space-y-2">
                {items.map(skill => (
                  <li 
                    key={skill}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}