"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Willy Octavianus Personal Web",
    period: "09/2025 – Present",
    description:
      "Personal branding site built with Next.js and TypeScript. Managed end-to-end including full-stack development, content writing, UI/UX design, and deployment.",
    image: "/pageshots_willy.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://willy-octavianus-web-app.vercel.app/",
    githubUrl: "https://github.com/irh-nr/Willy-Octavianus-Web-App",
  },
  {
    title: "Quick Recipe",
    period: "06/2025 – 07/2025",
    description:
      "Full-stack recipe app using Next.js + Supabase + PostgreSQL. Features SSR, ISR, lazy-loaded images, SEO optimization, and accessibility enhancements.",
    image: "/pageshots_quickrecipe.png",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://quick-recipe-app.vercel.app/",
    githubUrl: "https://github.com/irh-nr/quick-recipe",
  },
];

export function Projects() {
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
      id="projects"
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container">
        <div className="mb-12">
          <span className="monolead">{"// Projects"}</span>
          <h2 className="heading2">Featured Work</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="grid md:grid-cols-[400px_1fr] gap-0">
                <div className="relative h-64 md:h-full overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.period}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-foreground text-sm rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-secondary transition-all text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
