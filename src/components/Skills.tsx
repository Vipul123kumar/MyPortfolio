import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Java", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "Git", "GitHub", "Postman", "IntelliJ", "Canva"]
    },
    {
      title: "Concepts",
      skills: ["Data Structures & Algorithms", "REST APIs", "Responsive Design", "UI/UX"]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted rounded-lg text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;