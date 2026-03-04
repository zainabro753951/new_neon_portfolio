import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";
import review1 from "../assets/images/review-1.jpg";
import review2 from "../assets/images/review-2.jpg";
import review3 from "../assets/images/review-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const reviewsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".review-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 75%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: review1,
      rating: 5,
      text: "Working with Alex was an absolute pleasure. The attention to detail and creativity brought to our project exceeded all expectations. Our website traffic increased by 150% after the redesign!",
      project: "Website Redesign",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      image: review2,
      rating: 5,
      text: "Alex has an incredible ability to understand client needs and translate them into beautiful, functional designs. The animations and interactions added a whole new level of polish to our product.",
      project: "SaaS Dashboard",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, Brandify",
      image: review3,
      rating: 5,
      text: "The brand identity Alex created for us perfectly captures our company vision. Professional, creative, and always delivered on time. Highly recommend for any design project!",
      project: "Brand Identity",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: ThumbsUp },
    { value: "30+", label: "Happy Clients", icon: MessageCircle },
    { value: "5.0", label: "Average Rating", icon: Star },
    { value: "100%", label: "Satisfaction Rate", icon: ThumbsUp },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

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
              Testimonials
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              Client <span className="text-neon-blue">Reviews</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say
              about working together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[150px]" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-purple text-sm font-medium mb-4">
              Featured Review
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              What Clients <span className="text-neon-purple">Say</span>
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative glass-strong rounded-3xl p-8 md:p-12 border border-white/10">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                <Quote size={24} className="text-white" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    "{testimonials[activeIndex].text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-neon-cyan"
                    />
                    <div>
                      <h4 className="text-lg font-display font-semibold text-white">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-400">
                        {testimonials[activeIndex].role}
                      </p>
                      <span className="inline-block mt-1 px-3 py-1 rounded-full glass text-xs text-neon-cyan">
                        {testimonials[activeIndex].project}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-neon-cyan w-8"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-neon-cyan transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-neon-cyan transition-colors"
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section ref={reviewsRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-blue text-sm font-medium mb-4">
              All Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              More <span className="text-neon-blue">Testimonials</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="glass rounded-2xl p-6 border border-white/5 hover:border-neon-cyan/30 transition-all h-full">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    "{testimonial.text.substring(0, 120)}..."
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-display font-semibold text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              By The Numbers
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Client <span className="text-neon-cyan">Satisfaction</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center border border-white/5"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
              Join My <span className="text-neon-cyan">Happy Clients</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's work together and create something amazing. Your
              satisfaction is my top priority.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-white text-dark-void font-semibold"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
