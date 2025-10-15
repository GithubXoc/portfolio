import { motion } from "framer-motion";
import { Github, MoveRight } from "lucide-react";
import Section from "./Section";

const projectData = [
  {
    title: "Sales report analysis",
    image: "https://placehold.co/600x400/0a0a0a/00ffff?text=Project+1",
    tech: ["Python FastAPI", "React Typescript", "PostgreSQL", "MCP"],
    github: "#",
    demo: "#"
  },
  {
    title: "Chatting app",
    image: "https://placehold.co/600x400/0a0a0a/00ffff?text=Project+2",
    tech: ["Java", "React", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Project 3",
    image: "https://placehold.co/600x400/0a0a0a/00ffff?text=Project+3",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
];

const ProjectsSection = () => {
  return (
    <Section>
       <div>
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                    <Github size={20} /> Code
                  </a>
                   <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                    <MoveRight size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default ProjectsSection;