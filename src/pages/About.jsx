import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import { motion } from "motion/react";
import {
  Code,
  Palette,
  Lightbulb,
  Rocket,
  Award,
  BookOpen,
  Coffee,
  Heart,
} from "lucide-react";
import aboutImage from "../assets/images/about-portrait.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(
  (context) => {
    const q = context.selector

    // 👉 ABOUT SECTION TIMELINE
    const aboutTL = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
        invalidateOnRefresh: true,
      },
    })

    aboutTL
      .from(q(".about-content"), {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        force3D: true,
      })
      .from(
        q(".about-image"),
        {
          x: 50,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.out",
          force3D: true,
        },
        "-=0.6"
      )

    // 👉 SKILLS TIMELINE
    gsap.from(q(".skill-item"), {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      force3D: true,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    })

    // 👉 TIMELINE SECTION
    gsap.from(q(".timeline-item"), {
      x: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      force3D: true,
      scrollTrigger: {
        trigger: q(".timeline"),
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    })
  },
  { scope: aboutRef }
)

  const skills = [
    { name: "React/Next.js", level: 95, color: "from-neon-blue to-neon-cyan" },
    {
      name: "JavaScript/TypeScript",
      level: 90,
      color: "from-yellow-400 to-orange-500",
    },
    { name: "UI/UX Design", level: 88, color: "from-neon-purple to-pink-500" },
    { name: "Node.js", level: 85, color: "from-green-400 to-emerald-500" },
    {
      name: "GSAP/Framer Motion",
      level: 92,
      color: "from-neon-cyan to-blue-500",
    },
    { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-blue-500" },
  ];

  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading frontend development team, building scalable web applications.",
    },
    {
      year: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed full-stack applications using React and Node.js.",
    },
    {
      year: "2018 - 2020",
      title: "Junior Web Developer",
      company: "Creative Agency",
      description:
        "Started my journey in web development, learning modern technologies.",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Loving what I do and putting my heart into every project.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering high-quality work that exceeds expectations.",
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to meeting deadlines and achieving goals.",
    },
  ];

  return (
    <div className="bg-dark-void min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
              About Me
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              Get To Know <span className="text-neon-blue">Me</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm a passionate developer and designer dedicated to creating
              exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="about-content">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Crafting Digital{" "}
                <span className="text-neon-purple">Experiences</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Hello! I'm Alex, a creative developer and designer with over 5
                  years of experience in building modern web applications. I
                  specialize in creating beautiful, functional, and
                  user-friendly digital experiences.
                </p>
                <p>
                  My journey in web development started with a curiosity for how
                  things work on the internet. That curiosity quickly turned
                  into a passion, and I've been honing my skills ever since.
                </p>
                <p>
                  I believe in the power of clean code, thoughtful design, and
                  smooth animations to create memorable user experiences. Every
                  project I work on is an opportunity to push boundaries and
                  create something unique.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: "50+", label: "Projects" },
                  { value: "30+", label: "Clients" },
                  { value: "5+", label: "Years" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl glass">
                    <div className="text-2xl font-display font-bold text-neon-cyan">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="about-image relative">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan rounded-3xl opacity-30 blur-2xl" />

                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={aboutImage}
                    alt="About Portrait"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-void/50 to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                      <Code size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">5+ Years</div>
                      <div className="text-gray-400 text-sm">Experience</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-blue text-sm font-medium mb-4">
              My Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Skills & <span className="text-neon-blue">Technologies</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-neon-cyan">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-purple text-sm font-medium mb-4">
              My Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Work <span className="text-neon-purple">Experience</span>
            </h2>
          </motion.div>

          <div className="timeline relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan border-4 border-dark-void" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 border border-white/5 hover:border-neon-cyan/30 transition-colors">
                    <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-neon-purple mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              What Drives Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              My <span className="text-neon-cyan">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-neon-cyan/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
