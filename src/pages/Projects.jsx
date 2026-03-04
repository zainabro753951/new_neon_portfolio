import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  Code,
  Palette,
  Zap,
} from "lucide-react";

import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  // Scroll-triggered animation for project cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(projectsRef);

      gsap.fromTo(
        q(".project-card"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    }, projectsRef);

    return () => ctx.revert();
  }, [filter]); // refresh animation on filter change

  const projects = [
    {
      id: 1,
      title: "Ethereal Visions",
      category: "web",
      description:
        "A stunning 3D visualization platform showcasing abstract art with immersive interactions.",
      image: project1,
      tags: ["React", "Three.js", "GSAP"],
      link: "#",
      github: "#",
      icon: Code,
      color: "from-neon-blue to-neon-cyan",
    },
    {
      id: 2,
      title: "Neon Dreams",
      category: "design",
      description:
        "Brand identity and visual design for a futuristic tech startup.",
      image: project2,
      tags: ["Figma", "Illustrator", "After Effects"],
      link: "#",
      github: "#",
      icon: Palette,
      color: "from-neon-purple to-pink-500",
    },
    {
      id: 3,
      title: "Cyber Portal",
      category: "web",
      description:
        "High-performance dashboard with real-time data visualization and analytics.",
      image: project3,
      tags: ["Next.js", "TypeScript", "D3.js"],
      link: "#",
      github: "#",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 4,
      title: "Crystal Flow",
      category: "motion",
      description:
        "Motion graphics and animations for a premium product launch campaign.",
      image: project4,
      tags: ["After Effects", "Cinema 4D", "Lottie"],
      link: "#",
      github: "#",
      icon: Zap,
      color: "from-purple-400 to-pink-500",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Dev" },
    { key: "design", label: "Design" },
    { key: "motion", label: "Motion" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-dark-void min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
              My Work
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              Featured <span className="text-neon-blue">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my recent work showcasing web development, design,
              and motion graphics projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section ref={projectsRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((f) => (
              <motion.button
                key={f.key}
                onClick={() => setFilter(f.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === f.key
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                    : "glass text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card group relative will-change-transform"
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-white/5 hover:border-neon-cyan/30 transition-all cursor-pointer">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-void via-dark-void/50 to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <project.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 rounded-full glass text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="flex items-center gap-2 text-neon-cyan text-sm font-medium">
                          <span>View Project</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-dark-void/95 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-3xl glass-strong border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-neon-cyan transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-void to-transparent" />
              </div>

              <div className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${selectedProject.color} flex items-center justify-center mb-6`}
                >
                  <selectedProject.icon size={28} className="text-white" />
                </div>

                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full glass text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.link}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={selectedProject.github}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-medium border border-white/10"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Have a Project in <span className="text-neon-cyan">Mind?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. I'm
              always open to discussing new projects.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-white text-dark-void font-semibold"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
