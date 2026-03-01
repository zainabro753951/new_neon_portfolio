import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { 
  Mail, MapPin, Phone, Send, 
  Github, Linkedin, Twitter, Instagram,
  CheckCircle, Loader2
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const contactRef = useRef(null)
  const formRef = useRef(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact info animation
      gsap.fromTo(
        '.contact-info-item',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 75%',
          },
        }
      )

      // Form animation
      gsap.fromTo(
        '.form-container',
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@portfolio.com',
      href: 'mailto:hello@portfolio.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

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
              Get In Touch
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              Let's <span className="text-neon-blue">Talk</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                  Contact <span className="text-neon-purple">Information</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Feel free to reach out through any of these channels. 
                  I'm always open to discussing new projects and opportunities.
                </p>
              </motion.div>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="contact-info-item flex items-center gap-4 p-4 rounded-2xl glass border border-white/5 hover:border-neon-cyan/30 transition-all group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-neon-cyan transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-display font-semibold text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 border border-transparent transition-all"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div ref={formRef}>
              <motion.div
                className="form-container glass-strong rounded-3xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focusedField === 'name' || formState.name ? -24 : 0,
                          scale: focusedField === 'name' || formState.name ? 0.85 : 1,
                          color: focusedField === 'name' ? '#00d4ff' : '#999999',
                        }}
                        className="absolute left-0 top-3 origin-left pointer-events-none text-gray-500"
                      >
                        Your Name
                      </motion.label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-transparent border-b-2 border-white/10 focus:border-neon-cyan outline-none py-3 text-white transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focusedField === 'email' || formState.email ? -24 : 0,
                          scale: focusedField === 'email' || formState.email ? 0.85 : 1,
                          color: focusedField === 'email' ? '#00d4ff' : '#999999',
                        }}
                        className="absolute left-0 top-3 origin-left pointer-events-none text-gray-500"
                      >
                        Your Email
                      </motion.label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-transparent border-b-2 border-white/10 focus:border-neon-cyan outline-none py-3 text-white transition-colors"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focusedField === 'subject' || formState.subject ? -24 : 0,
                          scale: focusedField === 'subject' || formState.subject ? 0.85 : 1,
                          color: focusedField === 'subject' ? '#00d4ff' : '#999999',
                        }}
                        className="absolute left-0 top-3 origin-left pointer-events-none text-gray-500"
                      >
                        Subject
                      </motion.label>
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-transparent border-b-2 border-white/10 focus:border-neon-cyan outline-none py-3 text-white transition-colors"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focusedField === 'message' || formState.message ? -24 : 0,
                          scale: focusedField === 'message' || formState.message ? 0.85 : 1,
                          color: focusedField === 'message' ? '#00d4ff' : '#999999',
                        }}
                        className="absolute left-0 top-3 origin-left pointer-events-none text-gray-500"
                      >
                        Your Message
                      </motion.label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-white/10 focus:border-neon-cyan outline-none py-3 text-white transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Frequently Asked <span className="text-neon-cyan">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex applications may take 4-8 weeks.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! I offer maintenance packages to keep your website running smoothly with regular updates and support.',
              },
              {
                q: 'What are your payment terms?',
                a: 'I typically require a 50% deposit to start, with the remaining 50% due upon project completion.',
              },
              {
                q: 'Can you work with existing designs?',
                a: 'Absolutely! I can work with your existing designs or create new ones from scratch based on your requirements.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/5"
              >
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
