"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import ContactForm from "../ui/contact-form";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`bg-secondary/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container !max-w-4xl">
        <div className="mb-12 text-center">
          <span className="monolead">{"// Contact"}</span>
          <h2 className="heading2">{"Let's Work Together"}</h2>
          <p className="text-lg text-muted-foreground mt-4">
            {"Have a project in mind? Let's create something amazing."}
          </p>
        </div>

        {/*Form*/}
        <div>
          <ContactForm />
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Irhamna Radhi</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
