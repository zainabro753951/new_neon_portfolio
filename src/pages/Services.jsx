import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import {
  Code,
  Palette,
  Zap,
  TrendingUp,
  Smartphone,
  Globe,
  Layers,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Services = () => {
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  useGSAP(
    (context) => {
      const q = context.selector;

      // 🔥 Service cards fan-out animation (SAME animation)
      gsap.fromTo(
        q(".service-card-main"),
        { y: 80, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );

      // 🔥 Process steps animation (SAME animation)
      gsap.fromTo(
        q(".process-step"),
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    },
    {
      scope: servicesRef, // Scoped for better performance
    },
  );

  const mainServices = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable web applications using modern technologies like React, Next.js, and Node.js.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "CMS Integration",
        "API Development",
        "Performance Optimization",
      ],
      color: "from-neon-blue to-neon-cyan",
      gradient: "bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually stunning user interfaces that provide exceptional user experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Design Systems",
      ],
      color: "from-neon-purple to-pink-500",
      gradient: "bg-gradient-to-br from-neon-purple/20 to-pink-500/20",
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description:
        "Bringing designs to life with smooth animations and engaging interactions that captivate users.",
      features: [
        "Micro-interactions",
        "Page Transitions",
        "Scroll Animations",
        "Loading Animations",
        "Lottie Animations",
      ],
      color: "from-yellow-400 to-orange-500",
      gradient: "bg-gradient-to-br from-yellow-400/20 to-orange-500/20",
    },
    {
      icon: TrendingUp,
      title: "Brand Strategy",
      description:
        "Developing comprehensive brand identities that stand out and resonate with your target audience.",
      features: [
        "Brand Identity",
        "Logo Design",
        "Brand Guidelines",
        "Marketing Materials",
        "Social Media Design",
      ],
      color: "from-green-400 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
    },
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating responsive mobile-first experiences and progressive web apps.",
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description:
        "Improving your website visibility and ranking on search engines.",
    },
    {
      icon: Layers,
      title: "3D Design",
      description:
        "Adding depth to your projects with stunning 3D elements and animations.",
    },
    {
      icon: Sparkles,
      title: "Consulting",
      description:
        "Expert advice to help you make the right technical decisions.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your goals, target audience, and project requirements through in-depth discussions.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Developing a comprehensive plan with timelines, milestones, and deliverables.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Creating wireframes, mockups, and prototypes to visualize the final product.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Building the solution with clean code and modern technologies.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "Deploying your project and ensuring everything runs smoothly.",
    },
  ];

  return (
    <div className="bg-dark-void min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
              What I Offer
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              My <span className="text-neon-blue">Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs. From
              concept to launch, I'll help you build something amazing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-purple text-sm font-medium mb-4">
              Core Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              How Can I <span className="text-neon-purple">Help You</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card-main group"
                whileHover={{ y: -10 }}
                style={{ perspective: "1000px" }}
              >
                <div
                  className={`relative p-8 rounded-3xl ${service.gradient} border border-white/5 hover:border-white/20 transition-all duration-500 h-full overflow-hidden`}
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-[80px] group-hover:opacity-20 transition-opacity`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-neon-cyan font-medium group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              More Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Additional <span className="text-neon-cyan">Offerings</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-neon-cyan/30 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-blue text-sm font-medium mb-4">
              My Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              How I <span className="text-neon-blue">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven process that ensures every project is delivered on time,
              within budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step flex items-start gap-6"
                whileHover={{ x: 10 }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 glass rounded-2xl p-6 border border-white/5">
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Start Your{" "}
              <span className="text-neon-cyan">Project?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life. Get in
              touch for a free consultation.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-white text-dark-void font-semibold"
            >
              Get a Free Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
