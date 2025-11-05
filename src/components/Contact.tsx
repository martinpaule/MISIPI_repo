import { useState } from "react";
import { Mail, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <footer id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4 text-foreground">
              Let's Connect
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Available for commissions, exhibitions, and collaborations
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 mb-12 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-display text-sm font-medium text-foreground mb-2 block"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-display text-sm font-medium text-foreground mb-2 block"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-display text-sm font-medium text-foreground mb-2 block"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  required
                  className="rounded-xl resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:artist@example.com"
                className="flex items-center gap-2 font-body text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                artist@example.com
              </a>
              <a
                href="https://www.instagram.com/martinaemisipi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @martinaemisipi
              </a>
            </div>

            {/* Abstract Motif */}
            <div className="flex justify-center py-6">
              <div className="w-16 h-16 rounded-full bg-gradient-sunset opacity-60" />
            </div>

            {/* Copyright */}
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} Martina Pauleová. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
