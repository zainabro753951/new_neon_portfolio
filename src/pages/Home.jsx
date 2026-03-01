import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { 
  Code, Palette, Zap, TrendingUp, 
  Check, ArrowRight, Star, Users, Award 
} from 'lucide-react'
import Hero from '../sections/Hero'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const servicesRef = useRef(null)
  const pricingRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Services cards animation
      gsap.fromTo(
        '.service-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      )

      // Pricing cards animation
      gsap.fromTo(
        '.pricing-card',
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
          },
        }
      )

      // Stats counter animation
      gsap.fromTo(
        '.stat-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building fast, responsive, and scalable web applications with modern technologies.',
      color: 'from-neon-blue to-neon-cyan',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning user interfaces that delight users.',
      color: 'from-neon-purple to-pink-500',
    },
    {
      icon: Zap,
      title: 'Motion Graphics',
      description: 'Bringing designs to life with smooth animations and engaging interactions.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Brand Strategy',
      description: 'Developing comprehensive brand identities that stand out in the market.',
      color: 'from-green-400 to-emerald-500',
    },
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/project',
      description: 'Perfect for small projects and startups',
      features: [
        'Single Page Website',
        'Responsive Design',
        'Basic SEO',
        '2 Revisions',
        '1 Week Delivery',
      ],
      featured: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Standard',
      price: '$199',
      period: '/project',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-Page Website',
        'Advanced UI/UX Design',
        'Full SEO Optimization',
        'Unlimited Revisions',
        '2 Weeks Delivery',
        'Source Files Included',
      ],
      featured: true,
      buttonText: 'Most Popular',
    },
    {
      name: 'Premium',
      price: '$299',
      period: '/project',
      description: 'For enterprises and complex projects',
      features: [
        'Full-Stack Application',
        'Custom Animations',
        'Priority Support',
        'Unlimited Revisions',
        '3 Weeks Delivery',
        'Source Files + Documentation',
        '6 Months Maintenance',
      ],
      featured: false,
      buttonText: 'Contact Us',
    },
  ]

  const stats = [
    { icon: Users, value: '50+', label: 'Projects Completed' },
    { icon: Star, value: '30+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Zap, value: '100%', label: 'Satisfaction Rate' },
  ]

  return (
    <div className="bg-dark-void">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              What I Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              My <span className="text-neon-blue">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I offer a wide range of digital services to help businesses grow and succeed in the digital world.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card group relative"
                whileHover={{ y: -10 }}
              >
                <div className="relative p-8 rounded-2xl glass border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} />
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-4">
                  <stat.icon size={32} className="text-neon-cyan" />
                </div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-purple text-sm font-medium mb-4">
              Pricing Plans
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Choose Your <span className="text-neon-purple">Plan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options designed to fit your needs and budget. Get started today!
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`pricing-card relative ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
                whileHover={{ y: -10 }}
              >
                <div
                  className={`relative p-8 rounded-3xl h-full ${
                    plan.featured
                      ? 'glass-strong border-2 border-neon-purple/50'
                      : 'glass border border-white/5'
                  }`}
                >
                  {/* Featured Badge */}
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-display font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.featured ? 'bg-neon-purple' : 'bg-neon-blue'
                        }`}>
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold transition-all ${
                      plan.featured
                        ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:shadow-lg hover:shadow-neon-purple/25'
                        : 'glass text-white hover:border-neon-cyan/50'
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>

                  {/* Glow Effect for Featured */}
                  {plan.featured && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-purple to-neon-blue opacity-20 blur-xl -z-10" />
                  )}
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
              Ready to Start Your{' '}
              <span className="text-neon-cyan">Project?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life. I'm always excited to work on new and challenging projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-white text-dark-void font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full glass text-white font-semibold border border-white/20"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
