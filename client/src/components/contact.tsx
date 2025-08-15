import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { validateContactForm, type ContactMessage } from "@/types";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    const errors = validateContactForm(formData as ContactMessage);
    
    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors[0],
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission - in a real app, you'd send to a service like Formspree or Netlify Forms
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto" data-testid="contact-description">
            Ready to create something amazing together? Let's discuss your next project and how my skills can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="card-elevated p-8 rounded-2xl" data-testid="contact-form-container">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="bg-slate-700/50 border-slate-600"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-slate-700/50 border-slate-600"
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  className="bg-slate-700/50 border-slate-600"
                  data-testid="input-subject"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="bg-slate-700/50 border-slate-600 resize-none"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elevated p-6 rounded-xl" data-testid="contact-info-email">
              <div className="flex items-center mb-4">
                <Mail className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">{personalInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6 rounded-xl" data-testid="contact-info-phone">
              <div className="flex items-center mb-4">
                <Phone className="text-purple-500 text-2xl mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6 rounded-xl" data-testid="contact-info-location">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-400 text-2xl mr-4" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-elevated p-6 rounded-xl" data-testid="contact-social-links">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.portfolio}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-colors"
                  data-testid="social-portfolio"
                >
                  <Globe className="text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
