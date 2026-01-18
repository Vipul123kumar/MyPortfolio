import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully functional online shopping platform with user authentication, product filtering, sorting, pagination, and an admin panel for inventory management.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
      date: "July 2025",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Food Recipe Website",
      description: "Responsive food recipe website allowing users to browse and filter recipes with clean layout, intuitive navigation, and cross-browser compatibility.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      date: "May 2025",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Memes Generator",
      description: "Interactive web app that fetches random meme templates from API with text overlay feature for custom top and bottom text positioning.",
      tech: ["React", "JavaScript", "CSS", "REST API"],
      date: "June 2025",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Gemini API Website",
      description: "Interactive platform powered by advanced AI to answer user queries quickly and accurately with a user-friendly interface.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Gemini API"],
      date: "April 2025",
      gradient: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                  <span className="text-sm font-mono text-primary">{project.date}</span>
                  <div className="flex gap-2">
                    <button className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 rounded text-xs font-mono text-primary"
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
};

export default Projects;
