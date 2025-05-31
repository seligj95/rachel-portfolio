"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to a backend service or email service
  };

  return (
    <div className="pt-24 pb-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-accent/80 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let&apos;s start a conversation about 
            your next creative project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <h2 className="text-2xl font-light tracking-wide mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-accent mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-accent/50 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-accent mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-accent/50 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-light text-accent mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="brand-identity">Brand Identity</option>
                  <option value="illustration">Illustration</option>
                  <option value="packaging">Packaging Design</option>
                  <option value="editorial">Editorial Design</option>
                  <option value="art-direction">Art Direction</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light text-accent mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-accent/50 focus:border-foreground focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and budget range..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-light tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-slide-up lg:pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-8">Let&apos;s Connect</h2>
            
            <div className="space-y-8">              <div>
                <h3 className="text-lg font-light tracking-wide mb-4">Email</h3>
                <a 
                  href="mailto:rachel@rachelthompsondesign.com"
                  className="text-accent hover:text-foreground transition-colors"
                >
                  rachel@rachelthompsondesign.com
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-light tracking-wide mb-4">Location</h3>
                <p className="text-accent">
                  Portland, Oregon<br />
                  Available for remote collaboration worldwide
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-light tracking-wide mb-4">Response Time</h3>
                <p className="text-accent">
                  I typically respond within 24 hours.<br />
                  For urgent projects, please mention it in your message.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-light tracking-wide mb-4">Follow</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://instagram.com/rachelthompsondesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground transition-colors text-sm tracking-wide"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://behance.net/rachelthompson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground transition-colors text-sm tracking-wide"
                  >
                    Behance
                  </a>
                  <a 
                    href="https://linkedin.com/in/rachelthompsondesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground transition-colors text-sm tracking-wide"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://dribbble.com/rachelthompson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground transition-colors text-sm tracking-wide"
                  >
                    Dribbble
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 border border-border">
              <h3 className="text-lg font-light tracking-wide mb-4">Working Together</h3>
              <div className="space-y-3 text-sm text-accent/80">
                <p>• Project timelines typically range from 2-8 weeks</p>
                <p>• 50% deposit required to begin work</p>
                <p>• 2-3 rounds of revisions included</p>
                <p>• Final files delivered in all necessary formats</p>
                <p>• Ongoing support and consultation available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
