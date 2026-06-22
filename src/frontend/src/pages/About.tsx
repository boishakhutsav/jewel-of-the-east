import { useAboutUs } from "@/hooks/useContent";
import { Award, Heart, MapPin, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  const { data: about, isLoading } = useAboutUs();

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const values = [
    {
      icon: Heart,
      title: "Family First",
      desc: "We create warm, welcoming spaces where families can make lasting memories together.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      desc: "Your comfort and security are our top priorities, with 24/7 support and modern amenities.",
    },
    {
      icon: Award,
      title: "Himalayan Heritage",
      desc: "We blend local Sikkimese culture with contemporary hospitality for an authentic experience.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      desc: "Strategically located in Gangtok and Lachung for easy access to the best of Sikkim.",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-[#0B2B1B]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4">
              {about?.title ?? "About Us"}
            </h1>
            <div className="w-20 h-1 bg-[#c9a96e] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {about?.teamImage ? (
                <img
                  src={about.teamImage.getDirectURL()}
                  alt="Our team"
                  className="rounded-2xl shadow-elevated w-full h-80 object-cover"
                />
              ) : (
                <div className="rounded-2xl bg-[#0B2B1B]/10 w-full h-80 flex items-center justify-center">
                  <MapPin className="size-16 text-[#0B2B1B]/30" />
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="prose prose-lg max-w-none text-[#0B2B1B]"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: admin-managed rich text
                dangerouslySetInnerHTML={{
                  __html:
                    about?.content ??
                    "<p>Jewel of the East is a family-owned hospitality group dedicated to providing premium accommodation experiences in the pristine Himalayan region of Sikkim. With properties in both Gangtok and Lachung, we offer travelers the perfect blend of comfort, culture, and natural beauty.</p>",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {(about?.mission || about?.vision) && (
        <section className="py-16 bg-[#0B2B1B]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {about.mission && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#FDFBF7] p-8 rounded-2xl border-0 shadow-card"
                >
                  <h3 className="font-display text-2xl font-bold text-[#0B2B1B] mb-4">
                    Our Mission
                  </h3>
                  <p className="text-[#0B2B1B]/70 leading-relaxed">
                    {about.mission}
                  </p>
                </motion.div>
              )}
              {about.vision && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#FDFBF7] p-8 rounded-2xl border-0 shadow-card"
                >
                  <h3 className="font-display text-2xl font-bold text-[#0B2B1B] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-[#0B2B1B]/70 leading-relaxed">
                    {about.vision}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-[#0B2B1B] mb-3">
              Our Values
            </h2>
            <p className="text-[#0B2B1B]/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={`value-${value.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0B2B1B] p-6 rounded-xl border-0 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="size-6 text-[#c9a96e]" />
                </div>
                <h3 className="font-display font-semibold text-[#FDFBF7] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#FDFBF7]/70">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
