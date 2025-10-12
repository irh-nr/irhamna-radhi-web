"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container">
        <div className="mb-12">
          <span className="monolead">{"// About"}</span>
          <h2 className="heading2">What am I</h2>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-lg">
            <AspectRatio ratio={7 / 8}>
              <Image
                src="/codepic_dof.png"
                alt="Irhamna Radhi"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Im a Dynamic Full Stack Web Developer, specializing in{" "}
              <span className="text-foreground font-semibold">Next.js</span>.
              Expert in crafting responsive, SEO-optimized and SSR-optimized
              applications while enhancing user experience through accessibility
              improvements.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adept at performance optimization and Git version control,
              combining technical proficiency with strong project management
              skills. Experienced with developing comprehensive web solutions
              using modern frameworks and languages.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proficient in AI-assisted research and prompt engineering for
              content optimization. Utilizes both front-end and back-end skills
              to create seamless and responsive applications. Knowledge of
              debugging and optimizing code to ensure high performance and user
              satisfaction.
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Supabase",
                  "UI/UX Optimization",
                  "CI/CD",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm font-medium rounded-lg border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
