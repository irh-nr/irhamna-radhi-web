"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CodeBackground } from "../ui/code-background";
import { AspectRatio } from "../ui/aspect-ratio";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <CodeBackground />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

        <div className="container w-full relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="monolead">{"// Full-Stack Developer"}</span>
                </div>
                <h1 className="heading">Irhamna Radhi</h1>
                <p className="subheading1">
                  Building responsive, SEO-optimized, and accessible web
                  experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 hover:scale-102 transition-all group"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-secondary transition-all"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src="/irhamna-pic2.png"
                      alt="Irhamna Radhi - Full-Stack Web Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
