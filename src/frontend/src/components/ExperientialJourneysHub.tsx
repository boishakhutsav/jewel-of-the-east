import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Church,
  Compass,
  Flame,
  MapPin,
  Mountain,
  Snowflake,
  Thermometer,
  TreePine,
  Utensils,
  Waves,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const gangtokHighlights = [
  {
    icon: MapPin,
    title: "Paljor Stadium Road",
    description:
      "Prime location in the heart of Gangtok, steps from MG Marg and local markets.",
  },
  {
    icon: Thermometer,
    title: "Premium Room Heaters",
    description:
      "All rooms feature premium heating systems for cozy Himalayan nights.",
  },
  {
    icon: Utensils,
    title: "Local Dining Options",
    description:
      "Savor authentic Sikkimese cuisine and continental favorites at our in-house restaurant.",
  },
  {
    icon: Mountain,
    title: "Kanchenjunga Views",
    description:
      "Wake up to breathtaking valley viewpoints and the majestic Kanchenjunga range.",
  },
];

const lachungHighlights = [
  {
    icon: Flame,
    title: "4-Star Mountain Sanctuary",
    description:
      "A refined alpine retreat with elegant styling and warm Himalayan hospitality.",
  },
  {
    icon: Utensils,
    title: "The Asiatic Grill",
    description:
      "Gourmet dining experience featuring local and international flavors by the fire.",
  },
  {
    icon: Waves,
    title: "Backup Power Infrastructure",
    description:
      "Uninterrupted comfort with robust 24-hour power backup systems.",
  },
  {
    icon: Thermometer,
    title: "Round-the-Clock Hot Water",
    description:
      "Enjoy soothing hot water systems available at any hour of the day.",
  },
];

const gangtokStops = [
  { name: "MG Marg", tag: "Shopping & Culture", distance: "0.5 km" },
  { name: "Chogyal Memorial Park", tag: "Heritage", distance: "0.4 km" },
  { name: "Flower Exhibition Centre", tag: "Nature", distance: "0.4 km" },
  { name: "Shri Thakurbari Temple", tag: "Spiritual", distance: "0.5 km" },
  { name: "Paljor Stadium", tag: "Local Life", distance: "0.2 km" },
];

const alpineStops = [
  { name: "Yumthang Valley", tag: "Valley of Flowers", distance: "25 km" },
  { name: "Zero Point (Yumesamdong)", tag: "Snow Point", distance: "50 km" },
  { name: "Lachung Monastery", tag: "Spiritual", distance: "0.5 km" },
  { name: "Shingba Rhododendron Sanctuary", tag: "Nature", distance: "20 km" },
  { name: "Bhima Falls", tag: "Waterfall", distance: "2 km" },
];

export default function ExperientialJourneysHub() {
  return (
    <section className="py-20 bg-[#0B2B1B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a96e]/10 text-[#c9a96e] text-sm font-medium tracking-wide uppercase mb-4">
            Curated Experiences
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#FDFBF7] mb-4">
            Experiential Journeys Hub
          </h2>
          <p className="text-[#FDFBF7]/60 max-w-2xl mx-auto text-lg">
            Discover hand-crafted itineraries that connect you to the soul of
            Sikkim
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="gangtok" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-10 bg-[#FDFBF7]/10 border border-[#FDFBF7]/10 p-1 rounded-full h-auto">
              <TabsTrigger
                value="gangtok"
                className="flex-1 rounded-full py-3 text-sm font-medium text-[#FDFBF7]/70 data-[state=active]:bg-[#c9a96e] data-[state=active]:text-[#0B2B1B] transition-all duration-300"
                data-ocid="journeys.tab.gangtok"
              >
                <Compass className="size-4 mr-2" />
                Gangtok Urban / Cultural Loop
              </TabsTrigger>
              <TabsTrigger
                value="alpine"
                className="flex-1 rounded-full py-3 text-sm font-medium text-[#FDFBF7]/70 data-[state=active]:bg-[#c9a96e] data-[state=active]:text-[#0B2B1B] transition-all duration-300"
                data-ocid="journeys.tab.alpine"
              >
                <TreePine className="size-4 mr-2" />
                North Sikkim Alpine Circuit
              </TabsTrigger>
            </TabsList>

            {/* Gangtok Tab */}
            <TabsContent value="gangtok" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left: Route Map Visual */}
                <Card className="bg-[#FDFBF7] border-0 overflow-hidden">
                  <div className="relative h-72 md:h-96 overflow-hidden">
                    <img
                      src="/assets/gangtok-urban-cultural-loop.jpg"
                      alt="Gangtok Urban Cultural Loop"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/80 via-[#0B2B1B]/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#FDFBF7] mb-2">
                        Gangtok Urban / Cultural Loop
                      </h3>
                      <p className="text-[#FDFBF7]/80 text-sm">
                        A curated journey through Gangtok&apos;s vibrant
                        streets, heritage sites, and mountain viewpoints —
                        anchored at Jewel Himalayan Heights.
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {gangtokStops.map((stop, i) => (
                        <div
                          key={stop.name}
                          className="flex items-center gap-4 p-3 rounded-lg bg-[#0B2B1B]/5 hover:bg-[#0B2B1B]/10 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#c9a96e]/20 flex items-center justify-center shrink-0">
                            <span className="text-[#c9a96e] font-bold text-sm">
                              {i + 1}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-[#0B2B1B] truncate">
                              {stop.name}
                            </p>
                            <p className="text-xs text-[#0B2B1B]/50">
                              {stop.tag}
                            </p>
                          </div>
                          <span className="text-xs text-[#0B2B1B]/60 shrink-0">
                            {stop.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#0B2B1B]/10">
                      <Link
                        to="/hotels/jewel-himalayan-heights"
                        data-ocid="journeys.gangtok.book_button"
                      >
                        <Button className="w-full bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold">
                          Stay at Jewel Himalayan Heights
                          <ArrowRight className="size-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Right: Property Highlights */}
                <div className="space-y-6">
                  <div className="bg-[#FDFBF7]/5 border border-[#FDFBF7]/10 rounded-2xl p-6">
                    <h4 className="font-display text-xl font-bold text-[#FDFBF7] mb-4 flex items-center gap-2">
                      <MapPin className="size-5 text-[#c9a96e]" />
                      Jewel Himalayan Heights Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {gangtokHighlights.map((item) => (
                        <div
                          key={item.title}
                          className="p-4 rounded-xl bg-[#0B2B1B] border border-[#FDFBF7]/10 hover:border-[#c9a96e]/30 transition-colors"
                        >
                          <item.icon className="size-5 text-[#c9a96e] mb-2" />
                          <h5 className="font-semibold text-[#FDFBF7] text-sm mb-1">
                            {item.title}
                          </h5>
                          <p className="text-[#FDFBF7]/50 text-xs leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-2xl p-6">
                    <h4 className="font-display text-lg font-bold text-[#c9a96e] mb-3">
                      Why This Loop?
                    </h4>
                    <p className="text-[#FDFBF7]/70 text-sm leading-relaxed">
                      The Gangtok Urban/Cultural Loop is designed for travelers
                      who want to immerse themselves in the capital&apos;s
                      unique blend of Tibetan Buddhist heritage, bustling
                      bazaars, and panoramic Himalayan vistas. Every stop is
                      walkable or a short drive from Jewel Himalayan Heights,
                      making it the perfect home base for your Sikkim adventure.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Alpine Tab */}
            <TabsContent value="alpine" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left: Route Map Visual */}
                <Card className="bg-[#FDFBF7] border-0 overflow-hidden">
                  <div className="relative h-72 md:h-96 overflow-hidden">
                    <img
                      src="/assets/yumthang-valley.jpg"
                      alt="North Sikkim Alpine Circuit"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/80 via-[#0B2B1B]/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#FDFBF7] mb-2">
                        North Sikkim Alpine Circuit
                      </h3>
                      <p className="text-[#FDFBF7]/80 text-sm">
                        Journey into the high-altitude wonderland of North
                        Sikkim — from Yumthang Valley to Zero Point, anchored at
                        Jewel Kongchen Retreat.
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {alpineStops.map((stop, i) => (
                        <div
                          key={stop.name}
                          className="flex items-center gap-4 p-3 rounded-lg bg-[#0B2B1B]/5 hover:bg-[#0B2B1B]/10 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#c9a96e]/20 flex items-center justify-center shrink-0">
                            <span className="text-[#c9a96e] font-bold text-sm">
                              {i + 1}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-[#0B2B1B] truncate">
                              {stop.name}
                            </p>
                            <p className="text-xs text-[#0B2B1B]/50">
                              {stop.tag}
                            </p>
                          </div>
                          <span className="text-xs text-[#0B2B1B]/60 shrink-0">
                            {stop.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#0B2B1B]/10">
                      <Link
                        to="/hotels/jewel-kongchen-retreat"
                        data-ocid="journeys.alpine.book_button"
                      >
                        <Button className="w-full bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold">
                          Stay at Jewel Kongchen Retreat
                          <ArrowRight className="size-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Right: Property Highlights */}
                <div className="space-y-6">
                  <div className="bg-[#FDFBF7]/5 border border-[#FDFBF7]/10 rounded-2xl p-6">
                    <h4 className="font-display text-xl font-bold text-[#FDFBF7] mb-4 flex items-center gap-2">
                      <Snowflake className="size-5 text-[#c9a96e]" />
                      Jewel Kongchen Retreat Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {lachungHighlights.map((item) => (
                        <div
                          key={item.title}
                          className="p-4 rounded-xl bg-[#0B2B1B] border border-[#FDFBF7]/10 hover:border-[#c9a96e]/30 transition-colors"
                        >
                          <item.icon className="size-5 text-[#c9a96e] mb-2" />
                          <h5 className="font-semibold text-[#FDFBF7] text-sm mb-1">
                            {item.title}
                          </h5>
                          <p className="text-[#FDFBF7]/50 text-xs leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-2xl p-6">
                    <h4 className="font-display text-lg font-bold text-[#c9a96e] mb-3">
                      Why This Circuit?
                    </h4>
                    <p className="text-[#FDFBF7]/70 text-sm leading-relaxed">
                      The North Sikkim Alpine Circuit is for the true Himalayan
                      explorer. Starting from Jewel Kongchen Retreat in Lachung,
                      this route takes you through the legendary Yumthang Valley
                      — the Valley of Flowers — and up to Zero Point, where snow
                      blankets the landscape year-round. Ancient monasteries and
                      rhododendron sanctuaries add spiritual and natural depth
                      to this unforgettable journey.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
