'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit] = useForm("myzpjopy");

  // Close modal after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);
    }
  }, [state.succeeded]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-stagger');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container">
          <div className="text-center">
            <div className="mb-12 animate-fade-in">
              <div className="relative inline-block mb-8">
                <div className="profile-image-container">
                  <Image
                    src="/profilePic.jpeg"
                    alt="Julian Koch - Software Developer & Sales Engineer"
                    width={300}
                    height={300}
                    className="profile-image rounded-full object-cover shadow-2xl"
                    priority
                    sizes="(max-width: 480px) 140px, (max-width: 768px) 160px, 200px"
                  />
                  <div className="profile-glow"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight animate-fade-in-up gradient-text">
              Julian Tim Koch
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-secondary mb-8 mx-auto text-center leading-relaxed font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 1 }}>
              Software Developer & Sales Engineer
            </p>
            
            <p className="text-lg md:text-xl text-secondary/80 mb-12 mx-auto text-center leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 1 }}>
              Bridging the gap between complex technology and human understanding. <br />
              From coding at 13 to empowering enterprise solutions today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s', marginTop: '1.5rem' }}>
              <a 
                href="#journey" 
                className="bg-accent text-white btn-primary btn-ripple"
              >
                Explore My Journey
              </a>
              <a 
                href="#skills" 
                className="border-foreground/30 text-foreground btn-secondary btn-ripple"
              >
                View Skills
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="section-padding bg-foreground/[0.02]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight scroll-animate">
              My Journey
            </h2>
            <p className="text-xl md:text-2xl text-secondary mx-auto scroll-animate">
              A path driven by curiosity, shaped by challenges, and focused on impact.
            </p>
          </div>

          <div className="timeline-grid">
            {/* Age 13 - Beginning */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2 scroll-animate-left">
                <div className="text-accent font-bold text-lg md:text-xl mb-2 md:mb-3">Age 13</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-4 tracking-tight">The Spark</h3>
                <div className="md:hidden mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-4 h-4 rounded-full bg-accent animate-pulse-gentle"></div>
              </div>
              <div className="md:col-span-2 scroll-animate-right">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-background/50 backdrop-blur-sm border border-foreground/5 hover-lift">
                  <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
                    Discovered my passion for technology and physics. Started programming video games 
                    and creating Minecraft plugins, laying the foundation for a lifelong love of 
                    problem-solving through code.
                  </p>
                </div>
              </div>
            </div>

            {/* Age 17 - Ausbildung */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2 md:order-2 scroll-animate-right">
                <div className="text-accent font-bold text-lg md:text-xl mb-2 md:mb-3">Age 17</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-4 tracking-tight">Professional Foundation</h3>
                <div className="md:hidden mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:order-1">
                <div className="w-4 h-4 rounded-full bg-accent animate-pulse-gentle"></div>
              </div>
              <div className="md:col-span-2 md:order-0 scroll-animate-left">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-background/50 backdrop-blur-sm border border-foreground/5 hover-lift">
                  <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
                    Completed my Ausbildung as Fachinformatiker Anwendungsentwicklung, 
                    transforming my passion into professional expertise and establishing 
                    a solid foundation in software development methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Years Development */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2 scroll-animate-left">
                <div className="text-accent font-bold text-lg md:text-xl mb-2 md:mb-3">3 Years</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-4 tracking-tight">Enterprise Development</h3>
                <div className="md:hidden mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-4 h-4 rounded-full bg-accent animate-pulse-gentle"></div>
              </div>
              <div className="md:col-span-2 scroll-animate-right">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-background/50 backdrop-blur-sm border border-foreground/5 hover-lift">
                  <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
                    Worked full-time as a Software Developer, serving as a technical consultant 
                    for major corporations and developing solutions in the medical sector. 
                    Gained deep expertise in enterprise-level software architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Cognex Sales */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2 md:order-2 scroll-animate-right">
                <div className="text-accent font-bold text-lg md:text-xl mb-2 md:mb-3">Current</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-4 tracking-tight">Sales Engineering</h3>
                <div className="md:hidden mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:order-1">
                <div className="w-4 h-4 rounded-full bg-accent animate-pulse-gentle"></div>
              </div>
              <div className="md:col-span-2 md:order-0 scroll-animate-left">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-background/50 backdrop-blur-sm border border-foreground/5 hover-lift">
                  <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
                    Transitioned to Sales Engineer at Cognex, combining technical expertise 
                    with communication skills. From new customer acquisition to enterprise 
                    account management, I bridge complex technology with business solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight scroll-animate">
              Core Competencies
            </h2>
            <p className="text-xl md:text-2xl text-secondary mx-auto scroll-animate">
              Technical depth meets human connection.
            </p>
          </div>

          <div className="skills-grid">
            {/* Technical Skills */}
            <div className="scroll-animate-left">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-light mb-6 text-accent tracking-tight">Technical Expertise</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-all duration-300 hover-lift scroll-animate-stagger border border-foreground/5">
                  <h4 className="text-xl font-medium mb-3">Software Development</h4>
                  <p className="text-secondary text-lg leading-relaxed">Full-stack development, enterprise architecture, medical sector solutions</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-all duration-300 hover-lift scroll-animate-stagger border border-foreground/5">
                  <h4 className="text-xl font-medium mb-3">Game Development</h4>
                  <p className="text-secondary text-lg leading-relaxed">Video games, Minecraft plugins, interactive experiences</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-all duration-300 hover-lift scroll-animate-stagger border border-foreground/5">
                  <h4 className="text-xl font-medium mb-3">Technology Integration</h4>
                  <p className="text-secondary text-lg leading-relaxed">Complex system integration, API development, scalable solutions</p>
                </div>
              </div>
            </div>

            {/* Communication Skills */}
            <div className="scroll-animate-right">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-light mb-6 text-accent tracking-tight">Communication Skills</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-all duration-300 hover-lift scroll-animate-stagger border border-foreground/5">
                  <h4 className="text-xl font-medium mb-3">Customer Acquisition</h4>
                  <p className="text-secondary text-lg leading-relaxed">New business development, technical presentations, solution consulting</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-all duration-300 hover-lift scroll-animate-stagger border border-foreground/5">
                  <h4 className="text-xl font-medium mb-3">Enterprise Relations</h4>
                  <p className="text-secondary text-lg leading-relaxed">Large account management, stakeholder alignment, strategic partnerships</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-all duration-300 hover-lift scroll-animate-stagger border border-foreground/5">
                  <h4 className="text-xl font-medium mb-3">Technical Translation</h4>
                  <p className="text-secondary text-lg leading-relaxed">Converting complex technology into business value and actionable insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-foreground/[0.02]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight scroll-animate">
              Let&apos;s Connect
            </h2>
            <p className="text-xl md:text-2xl text-secondary mb-12 mx-auto leading-relaxed scroll-animate">
              Ready to bring technical expertise and human understanding to your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center scroll-animate-scale" style={{marginTop: '1.5rem'}}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-white btn-primary btn-ripple"
                style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', minWidth: '240px' }}
              >
                Get in Touch
              </button>
              <a 
                href="https://linkedin.com/in/julian-koch-335a98210" 
                className="border-foreground/30 text-foreground btn-secondary btn-ripple"
                style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', minWidth: '240px' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">Get in Touch</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="modal-close"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            
            {state.succeeded ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                <p className="text-secondary">Thanks for reaching out! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-input"
                      placeholder="Your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="What's this about?"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <div className="modal-actions">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn-cancel"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-accent text-white btn-primary btn-ripple"
                    style={{ fontSize: '1rem', padding: '0.875rem 2rem', minWidth: '140px' }}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
