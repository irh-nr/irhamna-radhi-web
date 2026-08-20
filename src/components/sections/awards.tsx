"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award } from "lucide-react";

const achievements = [
  {
    type: "award",
    year: "2025",
    title: "Website Development Finalist",
    organization: "Jakarta Satu Festival",
    description: "Jak-Space Goes to School competition",
  },
  {
    type: "award",
    year: "2025",
    title: "FLS3N Guitar Solo Finalist",
    organization: "National Arts Competition",
    description: "Classical and modern guitar performance",
  },
  {
    type: "award",
    year: "2024",
    title: "Best Design Award",
    organization: "AWS (Sagasitas)",
    description: "C4 Cloud Computing Competition",
  },
  {
    type: "award",
    year: "2024",
    title: "JakBee Grand Finalist",
    organization: "Jakarta Region",
    description: "Business Competition",
  },
  {
    type: "award",
    year: "2023",
    title: "JakBee 2nd Place",
    organization: "North Jakarta Region",
    description: "Business Competition",
  },
];

const education = [
  {
    year: "2020 - 2023",
    title: "Junior High School Diploma",
    institution: "SMP Negeri 151 Jakarta",
    description:
      "Built a strong foundation in mathematics and science, with an interest in biophysics.",
    logo: "/Logo_SMPN151.png", // Add your school logo URL here
  },
  {
    year: "2023 - 2026",
    title: "Senior High School Diploma",
    institution: "SMA Negeri 75 Jakarta",
    description:
      "Focused on technology, physics, and economics/accounting while developing analytical and problem-solving skills.",
    logo: "/Logo_SMAN75.png", // Add your school logo URL here
  },
  {
    year: "2026 - Present",
    title: "Bachelor's Degree",
    institution: "IPB University",
    description:
      "Majoring in Artificial Intelligence, with a focus on machine learning, programming, and computational problem-solving.",
    logo: "/Logo_IPB.png", // Add your university logo URL here
  },
];

export function Awards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="awards"
      ref={sectionRef}
      className={`bg-secondary/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container">
        <div className="mb-12">
          <span className="monolead">{"// Awards"}</span>
          <h2 className="heading2">Recognition & Education</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            {education.map((edu, index) => (
              <div
                className="flex items-center text-center gap-6 pb-12 flex-col md:text-start md:flex-row md:items-start"
                key={index}
              >
                <div className="w-20 h-20  rounded-xl flex justify-center flex-shrink-0 overflow-hidden relative">
                  {edu.logo ? (
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={84}
                      height={84}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-xs text-primary/50 text-center px-2">
                      {edu.institution}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-primary font-medium mb-2">
                    {edu.year}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-primary/70 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Grid */}
          <div className="space-y-4">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[0.2fr_2fr] items-center"
              >
                {/* Kolom kiri: Titik + Garis */}
                <div className="flex justify-center">
                  {/* Garis timeline */}
                  {index !== achievements.length - 1 && (
                    <div className="absolute w-[2px] bg-gradient-to-t from-transparent via-primary to-transparent h-1/5" />
                  )}

                  {/* Titik */}
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 hover:shadow-primary hover:scale-105 transition-all z-10" />
                </div>

                <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs text-primary font-medium">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.organization} • {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
