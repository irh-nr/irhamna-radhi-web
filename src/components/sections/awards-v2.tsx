import { GraduationCap, Trophy } from "lucide-react";

const timeline = [
  {
    type: "education",
    year: "Expected 04/2026",
    title: "High School Diploma",
    organization: "Current Studies",
    description:
      "Focus on Technology, Physics, and Economy/Accounting. Building analytical and problem-solving skills while actively developing expertise in web development and programming.",
  },
  {
    type: "award",
    year: "2025",
    title: "Finalist – Website Development Competition",
    organization: "Jak-Space Goes to School, Jakarta Satu Festival",
    description:
      "Recognized for innovative web development skills in a competitive Jakarta-wide event.",
  },
  {
    type: "award",
    year: "2025",
    title: "Finalist – FLS3N Guitar Solo Competition",
    organization: "National Arts and Science Competition",
    description:
      "Demonstrated excellence in classical and modern guitar performance.",
  },
  {
    type: "award",
    year: "2024",
    title: "Best Design Award – C4 Cloud Computing Competition",
    organization: "Sagasitas in partnership with AWS",
    description: "Awarded for outstanding design in cloud computing solutions.",
  },
  {
    type: "award",
    year: "2024",
    title: "Top 6 Grand Finalist – JakBee Business Competition",
    organization: "Jakarta-Wide Competition",
    description:
      "Reached the grand finals among the best business proposals across Jakarta.",
  },
  {
    type: "award",
    year: "2024",
    title: "Top 5 Finalist – JakBee Business Competition",
    organization: "North Jakarta Region",
    description: "Secured top 5 position in regional business competition.",
  },
  {
    type: "award",
    year: "2023",
    title: "2nd Place – JakBee Business Competition",
    organization: "North Jakarta Region",
    description:
      "Achieved second place in competitive business proposal competition.",
  },
];

export function Awards() {
  return (
    <section id="awards" className="bg-secondary/30 relative">
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Awards & Education
        </h2>
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

                <div className="glass-card rounded-xl p-6 hover:glow-blue transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {item.type === "education" ? (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      ) : (
                        <Trophy className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-medium mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary/80 font-medium mb-2">
                        {item.organization}
                      </p>
                      <p className="text-muted-foreground">
                        {item.description}
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
