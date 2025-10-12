import { GlowEffect } from "../motion-primitives/glow-effect";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactButton() {
  return (
    <div className="relative">
      <GlowEffect
        colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
        mode="colorShift"
        blur="soft"
        duration={3}
        scale={0.9}
      />
      <Link href={"/#contact"}>
        <button className="relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 group hover:scale-105 transition-all">
          Contact{" "}
          <ArrowRight className="h4 w-4 group-hover:translate-x-1 group transition-transform" />
        </button>
      </Link>
    </div>
  );
}
