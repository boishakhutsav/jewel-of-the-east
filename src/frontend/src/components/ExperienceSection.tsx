import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpDown, Flame, UtensilsCrossed, Zap } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: Flame, label: "All Rooms Heated" },
  { icon: ArrowUpDown, label: "Elevator Access" },
  { icon: Zap, label: "Power Backup" },
  { icon: UtensilsCrossed, label: "Multi Cuisine Restaurant" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-[#0B2B1B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-3">
            Experience the Himalayas
          </h2>
          <p className="text-[#FDFBF7]/60 max-w-2xl mx-auto">
            Breathtaking views and warm hospitality await you at Jewel of the
            East
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((item) => (
            <Card
              key={`highlight-${item.label}`}
              className="bg-[#FDFBF7] border-0 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            >
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <div className="p-3 rounded-full bg-[#0B2B1B]/10">
                  <item.icon className="size-6 text-[#0B2B1B]" />
                </div>
                <span className="text-sm font-medium text-[#0B2B1B] text-center">
                  {item.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
