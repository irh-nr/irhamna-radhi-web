"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Database, Wrench, Users, AppWindow } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "C#", "Python", "Php"],
  },
  {
    title: "Frontend",
    icon: AppWindow,
    skills: ["React", "Next.js", "Tailwind CSS", "ShadCN"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Supabase", "Laravel", "PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "GitBash", "Visual Studio", "Visual Studio Code"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Communicative",
      "Analytical Thinking",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

export function Skills() {
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
      id="skills"
      ref={sectionRef}
      className={`bg-secondary/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container">
        <div className="mb-12">
          <span className="monolead">{"// Skills"}</span>
          <h2 className="heading2">My Power</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
