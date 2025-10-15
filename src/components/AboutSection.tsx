import { Cloud, Code, Database, Frame, Server } from "lucide-react";
import Section from "./Section";

const techStack = {
  frontend: [
    { name: "React", icon: <Code size={24} /> },
    { name: "TypeScript", icon: <Code size={24} /> },
    { name: "Vue JS", icon: <Code size={24} /> },
    { name: "TailwindCSS", icon: <Code size={24} /> },
    { name: "Vanilla JS", icon: <Code size={24} /> },
  ],
  backend: [
    { name: "Python", icon: <Server size={24} /> },
    { name: "C", icon: <Server size={24} /> },
    { name: "PHP", icon: <Server size={24} /> },
  ],
  database: [
    { name: "MySQL", icon: <Database size={24} /> },
    { name: "PostgreSQL", icon: <Database size={24} /> },
    { name: "Aurora RDS", icon: <Database size={24} /> },
  ],
  Cloud: [
    { name: "AWS", icon: <Cloud size={24} /> },
    { name: "Vercel", icon: <Cloud size={24} /> },
  ],
  Frameworks: [
    { name: "Django", icon: <Frame size={24} /> },
    { name: "FastAPI", icon: <Frame size={24} /> },
    { name: "Laravel", icon: <Frame size={24} /> },
  ],
};

const AboutSection = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-accent">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, natus laboriosam excepturi obcaecati nulla, praesentium, commodi sint saepe sed unde est molestias vel eveniet exercitationem voluptatibus non impedit culpa nobis!
          </p>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iste vel impedit deserunt earum, repellat libero numquam, tenetur doloribus nihil et eaque eum ab est unde accusantium aspernatur ea. Eum!
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 space-y-6 animate-subtle-pulse">
            <h3 className="text-2xl font-semibold text-center text-accent/80 mb-4">My Tech Stack</h3>
            {Object.entries(techStack).map(([category, techs]) => (
                <div key={category}>
                    <h4 className="font-bold capitalize text-gray-400 mb-3 border-b border-gray-600 pb-1">{category}</h4>
                    <div className="flex flex-wrap gap-4">
                        {techs.map(tech => (
                            <div key={tech.name} className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-lg hover:bg-accent/20 transition-colors duration-300 cursor-pointer">
                                {tech.icon}
                                <span className="text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};
export default AboutSection;