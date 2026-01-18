import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer dedicated to building modern, scalable applications with great user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">B.Tech - Computer Science & Engineering</h4>
                <p className="text-muted-foreground">Lakshmi Narain College of Technology Excellence</p>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" /> Bhopal, MP
                  </span>
                  <span className="text-primary">•</span>
                  <span className="text-primary font-mono">2022 - 2025</span>
                  <span className="text-primary">•</span>
                  <span className="text-primary font-semibold">CGPA: 7.92</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Frontend Developer</h4>
                <p className="text-muted-foreground">SoftDef</p>
                <p className="text-primary font-mono text-sm mt-1">Aug 2025 – Present</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Developed responsive UIs using React.js, HTML, CSS, and JavaScript
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Integrated RESTful APIs for dynamic data handling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Implemented authentication and search functionality
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-8 glass-card rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-6">Certifications</h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              CISCO Virtual Internship
            </span>
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Infosys Spring Board Java Certification
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;