import ExperienceSection from "@/components/ExperienceSection";
import ExperientialJourneysHub from "@/components/ExperientialJourneysHub";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { allHotels } from "@/data/hotels";
import { useSiteSettings, useTestimonials } from "@/hooks/useContent";
import { ArrowRight, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Jewel of the East",
      subtitle: "Premium family hotels in the heart of the Himalayas",
    },
    {
      title: "Jewel Himalayan Heights — Gangtok, Sikkim",
      subtitle:
        "Steps from MG Marg loop · Paljor Stadium Road overlooks · Private balconies facing Kanchenjunga",
    },
    {
      title: "Jewel Kongchen Retreat — Lachung, Sikkim",
      subtitle:
        "In-house Asiatic Grill · Gateway to Yumthang Valley & Zero Point · 24/7 dedicated heating & hot water utilities",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden media-frame">
      <img
        src="/assets/images/hero-static.jpg"
        alt="Jewel of the East - Himalayan View"
        className="image-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/80 via-[#0B2B1B]/30 to-[#0B2B1B]/20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl w-full">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
                i === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-[#FDFBF7] drop-shadow-2xl tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-[#FDFBF7]/90 max-w-xl mx-auto mb-8 font-body">
                {slide.subtitle}
              </p>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mt-8"
          >
            <Link
              to="/hotels/jewel-himalayan-heights"
              data-ocid="home.hero.gangtok_button"
            >
              <Button
                size="lg"
                className="bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold"
              >
                Explore Gangtok
              </Button>
            </Link>
            <Link
              to="/hotels/jewel-kongchen-retreat"
              data-ocid="home.hero.lachung_button"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-[#FDFBF7] text-[#FDFBF7] hover:bg-[#FDFBF7]/20"
              >
                Explore Lachung
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={`hero-dot-${slide.title}`}
            type="button"
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === currentSlide ? "bg-[#c9a96e] w-6" : "bg-[#FDFBF7]/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PropertyCards() {
  const properties = allHotels;

  return (
    <section className="py-16 bg-[#0B2B1B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-3">
            Our Properties
          </h2>
          <p className="text-[#FDFBF7]/60 max-w-2xl mx-auto">
            Experience the warmth of Himalayan hospitality at our two premium
            locations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/hotels/${property.slug}`}
                data-ocid={`home.property.${i + 1}.card`}
              >
                <Card className="overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 h-full bg-[#FDFBF7] border-0">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <h3 className="font-display text-2xl font-bold text-[#FDFBF7] drop-shadow-lg">
                        {property.name}
                      </h3>
                      <p className="text-[#FDFBF7]/80 text-sm flex items-center gap-1 mt-1">
                        <MapPin className="size-3" />
                        {property.location}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-[#0B2B1B]/70 line-clamp-3 mb-4 leading-relaxed">
                      {property.shortDescription}
                    </p>
                    <div className="flex items-center text-[#0B2B1B] font-medium group-hover:gap-2 transition-all">
                      View Details
                      <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { data: testimonials = [] } = useTestimonials();
  const [current, setCurrent] = useState(0);

  const activeTestimonials = testimonials.filter((t) => t.isActive);

  useEffect(() => {
    if (activeTestimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % activeTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeTestimonials.length]);

  if (activeTestimonials.length === 0) return null;

  return (
    <section className="py-16 bg-[#072015]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-3">
            What Our Guests Say
          </h2>
          <p className="text-[#FDFBF7]/60 max-w-2xl mx-auto">
            Real experiences from families who stayed with us
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {activeTestimonials.map((t) => (
                <div key={t.id.toString()} className="w-full shrink-0 px-4">
                  <Card className="p-8 text-center bg-[#FDFBF7] border-0 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: Number(t.rating) }).map(
                        (_, starIdx) => (
                          <Star
                            // biome-ignore lint/suspicious/noArrayIndexKey: static star rating display
                            key={`star-${starIdx}`}
                            className="size-5 fill-[#c9a96e] text-[#c9a96e]"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-[#0B2B1B] text-lg leading-relaxed mb-6 italic font-display">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      {t.avatar ? (
                        <img
                          src={t.avatar.getDirectURL()}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#0B2B1B]/10 flex items-center justify-center">
                          <span className="font-display text-[#0B2B1B] font-bold">
                            {t.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="text-left">
                        <p className="font-semibold text-[#0B2B1B]">{t.name}</p>
                        {t.location && (
                          <p className="text-sm text-[#0B2B1B]/60">
                            {t.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {activeTestimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {activeTestimonials.map((tDot, tIdx) => (
                <button
                  key={`testimonial-dot-${tDot.id}`}
                  type="button"
                  data-ocid={`home.testimonial.dot.${tIdx + 1}`}
                  onClick={() => setCurrent(tIdx)}
                  className={`w-2.5 h-2.5 rounded-full transition-smooth ${
                    tIdx === current ? "bg-[#c9a96e]" : "bg-[#FDFBF7]/30"
                  }`}
                  aria-label={`Go to testimonial ${tIdx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const { data: settings } = useSiteSettings();
  const contact = settings?.contactInfo;

  return (
    <section className="py-16 bg-[#0B2B1B] border-t border-[#1a4a2e]/40">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#FDFBF7]">
            Plan Your Himalayan Getaway
          </h2>
          <p className="text-[#FDFBF7]/70 max-w-xl mx-auto mb-8">
            Get in touch with us directly for the best rates and personalized
            service
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {contact?.phone && (
              <a
                href={`tel:${contact.phone}`}
                data-ocid="home.cta.phone_button"
              >
                <Button
                  size="lg"
                  className="bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold"
                >
                  <Phone className="size-4 mr-2" />
                  Call Now
                </Button>
              </a>
            )}
            {contact?.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="home.cta.whatsapp_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FDFBF7] text-[#FDFBF7] hover:bg-[#FDFBF7]/20"
                >
                  <MessageCircle className="size-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            )}
            <Link to="/contact" data-ocid="home.cta.contact_button">
              <Button
                size="lg"
                variant="outline"
                className="border-[#FDFBF7] text-[#FDFBF7] hover:bg-[#FDFBF7]/20"
              >
                Contact Info
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <PropertyCards />
      <ExperientialJourneysHub />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}
