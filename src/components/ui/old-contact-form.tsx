import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import React, { useState } from "react";

const OldContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className=" bg-background rounded-2xl p-8 border border-border shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
            placeholder="What would you like to discuss..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-border">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <a
            href="mailto:irhamnanr@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">irhamnanr@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5" />
            <span className="text-sm">+62 812 8242 0938</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Jakarta, Indonesia</span>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a
            href="https://github.com/irh-nr/"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/irhamna-radhi-88825b296/"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OldContactForm;
