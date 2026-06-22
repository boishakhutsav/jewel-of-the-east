import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { HardcodedHotel } from "@/data/hotels";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface HotelPageLayoutProps {
  hotel: HardcodedHotel;
}

function HeroSection({ hotel }: { hotel: HardcodedHotel }) {
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-full object-cover"
      />
      {/* Strong dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/95 via-[#0B2B1B]/60 to-[#0B2B1B]/20" />
      <div className="absolute inset-0 bg-black/30" />
      {/* Text content with safe padding and z-index */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full p-8 pb-12 md:p-16 md:pb-16">
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="flex items-center gap-1.5 bg-[#c9a96e]/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#c9a96e]/40">
                  <Star className="size-4 fill-[#c9a96e] text-[#c9a96e]" />
                  <span className="text-[#FDFBF7] text-sm font-medium">
                    4.5
                  </span>
                  <span className="text-[#FDFBF7]/80 text-xs">
                    (608 Reviews)
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-[#FDFBF7]/15 text-[#FDFBF7] border-0 backdrop-blur-md rounded-full px-3 py-1"
                >
                  <MapPin className="size-3 mr-1.5" />
                  {hotel.location}
                </Badge>
              </div>
              <h1 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFBF7] mb-4 tracking-tight leading-[1.1] drop-shadow-lg">
                {hotel.name}
              </h1>
              <p className="text-[#FDFBF7]/90 text-base md:text-lg max-w-2xl mb-8 font-body leading-relaxed drop-shadow-md">
                {hotel.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                {hotel.bookingUrl && (
                  <a
                    href={hotel.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hotel.hero.book_now_button"
                  >
                    <Button
                      size="lg"
                      className="bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold rounded-full px-8 shadow-lg"
                    >
                      Book Now
                      <ArrowRight className="size-4 ml-2" />
                    </Button>
                  </a>
                )}
                {hotel.contactPhone && (
                  <a
                    href={`tel:${hotel.contactPhone}`}
                    data-ocid="hotel.hero.phone_button"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#FDFBF7]/40 text-[#FDFBF7] hover:bg-[#FDFBF7]/15 bg-[#0B2B1B]/40 backdrop-blur-sm rounded-full"
                    >
                      <Phone className="size-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ hotel }: { hotel: HardcodedHotel }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 bg-[#0B2B1B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-6 tracking-tight">
            Overview
          </h2>
          <div
            className={`prose max-w-none text-[#FDFBF7]/70 leading-[1.8] text-base md:text-lg ${expanded ? "" : "line-clamp-4"}`}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: admin-managed rich text
            dangerouslySetInnerHTML={{ __html: hotel.description }}
          />
          <button
            type="button"
            data-ocid="hotel.overview.toggle_button"
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-[#c9a96e] text-sm font-medium flex items-center gap-1.5 hover:underline tracking-wide uppercase"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="size-4" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="size-4" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function FacilitiesSection({ amenities }: { amenities: string[] }) {
  const iconMap: Record<string, string> = {
    "all rooms heated": "🔥",
    elevator: "🛗",
    "power backup": "⚡",
    "multi cuisine restaurant": "🍽️",
    wifi: "📶",
    parking: "🅿️",
    "mountain view": "🏔️",
    spa: "💆",
    "24h front desk": "🛎️",
    "room service": "🛎️",
    "daily housekeeping": "🧹",
    laundry: "👕",
    "hot water": "🚿",
    "satellite tv": "📺",
    "tea/coffee maker": "☕",
    "hair dryer": "💨",
    "iron & ironing board": "🧹",
    "safety deposit locker": "🔒",
    "key card entry": "🔑",
    "air conditioning": "❄️",
    "free breakfast": "🍳",
    "car rental": "🚗",
    "meeting rooms": "📊",
    "baggage storage": "🧳",
    "doctor on call": "👨‍⚕️",
    "fire alarm": "🚨",
    "security camera": "📹",
    "kids friendly": "👶",
    "couple friendly": "💑",
    "smoking area": "🚬",
    garden: "🌿",
    bonfire: "🔥",
    "indoor games": "🎮",
    bar: "🍸",
    lounge: "🛋️",
    "butler services": "🤵",
  };

  function getIcon(amenity: string) {
    const key = amenity.toLowerCase();
    for (const [k, v] of Object.entries(iconMap)) {
      if (key.includes(k)) return v;
    }
    return "✓";
  }

  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-8 tracking-tight">
            Facilities & Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, i) => (
              <motion.div
                key={`facility-${amenity}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#0B2B1B]/5 hover:bg-[#0B2B1B]/10 transition-all duration-300"
              >
                <span className="text-xl shrink-0">{getIcon(amenity)}</span>
                <span className="text-sm text-[#0B2B1B]/80 font-medium">
                  {amenity}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RoomTypesSection({
  roomTypes,
  bookingUrl,
}: {
  roomTypes: HardcodedHotel["roomTypes"];
  bookingUrl?: string;
}) {
  return (
    <section className="py-16 bg-[#0B2B1B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-3 tracking-tight">
            Rooms
          </h2>
          <p className="text-[#FDFBF7]/60 text-base md:text-lg">
            Comfortable accommodations designed for families and travelers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-[#FDFBF7] border-0 rounded-2xl">
                <div className="relative h-64 overflow-hidden">
                  {room.image ? (
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0B2B1B]/10 flex items-center justify-center">
                      <MapPin className="size-12 text-[#0B2B1B]/20" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-[#c9a96e] text-[#0B2B1B] px-3 py-1 rounded-full text-sm font-semibold">
                    {room.price}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-editorial font-semibold text-[#0B2B1B] text-xl mb-2">
                    {room.name}
                  </h3>
                  <p className="text-sm text-[#0B2B1B]/60 line-clamp-3 mb-4 flex-1 leading-relaxed">
                    {room.description}
                  </p>
                  {room.amenities.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.amenities.slice(0, 4).map((a) => (
                        <Badge
                          key={`room-amenity-${a}`}
                          variant="outline"
                          className="text-xs border-[#0B2B1B]/20 text-[#0B2B1B]/70 rounded-full"
                        >
                          {a}
                        </Badge>
                      ))}
                      {room.amenities.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-[#0B2B1B]/20 text-[#0B2B1B]/70 rounded-full"
                        >
                          +{room.amenities.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#0B2B1B]/10">
                    <div>
                      <span className="text-xs text-[#0B2B1B]/50 uppercase tracking-wider">
                        per night
                      </span>
                    </div>
                    {bookingUrl && (
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid={`hotel.room.${i + 1}.book_button`}
                      >
                        <Button
                          size="sm"
                          className="bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 rounded-full px-6"
                        >
                          Book Now
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NearbyAttractionsSection({
  attractions,
}: {
  attractions: { name: string; distance: string }[];
}) {
  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-8 tracking-tight">
            Nearby Attractions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {attractions.map((attr, i) => (
              <motion.div
                key={`attr-${attr.name}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-5 rounded-xl bg-[#0B2B1B]/5 hover:bg-[#0B2B1B]/10 transition-all duration-300"
              >
                <span className="text-[#0B2B1B] font-medium">{attr.name}</span>
                <Badge
                  variant="secondary"
                  className="bg-[#c9a96e]/20 text-[#0B2B1B] border-0 rounded-full px-3"
                >
                  {attr.distance}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewsSection({ reviews }: { reviews: HardcodedHotel["reviews"] }) {
  if (reviews.length === 0) return null;

  return (
    <section className="py-16 bg-[#0B2B1B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-3 tracking-tight">
            Guest Reviews
          </h2>
          <p className="text-[#FDFBF7]/60 text-base md:text-lg">
            Real experiences from families who stayed with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((review, i) => (
            <motion.div
              key={`review-${review.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="h-full bg-[#FDFBF7] border-0 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, si) => (
                      <Star
                        // biome-ignore lint/suspicious/noArrayIndexKey: static star display
                        key={`review-star-${si}`}
                        className="size-4 fill-[#c9a96e] text-[#c9a96e]"
                      />
                    ))}
                  </div>
                  <p className="text-[#0B2B1B]/80 text-sm leading-relaxed mb-6 italic font-body">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0B2B1B]/10 flex items-center justify-center">
                      <span className="font-editorial text-[#0B2B1B] font-bold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2B1B] text-sm">
                        {review.name}
                      </p>
                      <p className="text-xs text-[#0B2B1B]/50">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({
  faqs,
}: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#0B2B1B]/60 text-base md:text-lg">
            Everything you need to know about your stay
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={`faq-${faq.question.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-[#0B2B1B]/5 overflow-hidden"
            >
              <button
                type="button"
                data-ocid={`hotel.faq.${i + 1}.toggle`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#0B2B1B]/10 transition-all duration-300"
              >
                <span className="font-medium text-[#0B2B1B] text-sm pr-4">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="size-4 text-[#c9a96e] shrink-0" />
                ) : (
                  <ChevronDown className="size-4 text-[#0B2B1B]/40 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-[#0B2B1B]/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyRulesSection({ rules }: { rules: string[] }) {
  return (
    <section className="py-16 bg-[#0B2B1B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-8 tracking-tight">
            Property Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {rules.map((rule, i) => (
              <motion.div
                key={`rule-${rule.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-3"
              >
                <Check className="size-4 text-[#c9a96e] shrink-0 mt-0.5" />
                <span className="text-sm text-[#FDFBF7]/70">{rule}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BookingCTASection({ hotel }: { hotel: HardcodedHotel }) {
  return (
    <section className="py-20 bg-[#0B2B1B] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a96e] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a96e] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#FDFBF7] mb-4 tracking-tight">
            Book Your Stay at {hotel.name}
          </h2>
          <p className="text-[#FDFBF7]/60 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Get the best rates and personalized service when you book directly
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {hotel.bookingUrl && (
              <a
                href={hotel.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hotel.cta.book_button"
              >
                <Button
                  size="lg"
                  className="bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold rounded-full px-10"
                >
                  Book Online
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </a>
            )}
            {hotel.contactPhone && (
              <a
                href={`tel:${hotel.contactPhone}`}
                data-ocid="hotel.cta.phone_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FDFBF7]/30 text-[#FDFBF7] hover:bg-[#FDFBF7]/10 bg-transparent rounded-full"
                >
                  <Phone className="size-4 mr-2" />
                  Call Now
                </Button>
              </a>
            )}
            {hotel.contactWhatsApp && (
              <a
                href={`https://wa.me/${hotel.contactWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hotel.cta.whatsapp_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FDFBF7]/30 text-[#FDFBF7] hover:bg-[#FDFBF7]/10 bg-transparent rounded-full"
                >
                  <MessageCircle className="size-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection({ gallery }: { gallery: string[] }) {
  if (gallery.length === 0) return null;

  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-3 tracking-tight">
            Photo Gallery
          </h2>
          <p className="text-[#0B2B1B]/60 text-base md:text-lg">
            A glimpse of your stay with us
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={`gallery-${img}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HotelPageLayout({ hotel }: HotelPageLayoutProps) {
  return (
    <div>
      <HeroSection hotel={hotel} />
      <OverviewSection hotel={hotel} />
      {hotel.amenities.length > 0 && (
        <FacilitiesSection amenities={hotel.amenities} />
      )}
      {hotel.gallery.length > 0 && <GallerySection gallery={hotel.gallery} />}
      {hotel.roomTypes.length > 0 && (
        <RoomTypesSection
          roomTypes={hotel.roomTypes}
          bookingUrl={hotel.bookingUrl}
        />
      )}
      {hotel.nearbyAttractions.length > 0 && (
        <NearbyAttractionsSection attractions={hotel.nearbyAttractions} />
      )}
      {hotel.reviews.length > 0 && <ReviewsSection reviews={hotel.reviews} />}
      {hotel.faqs.length > 0 && <FAQSection faqs={hotel.faqs} />}
      {hotel.propertyRules.length > 0 && (
        <PropertyRulesSection rules={hotel.propertyRules} />
      )}
      <BookingCTASection hotel={hotel} />
    </div>
  );
}
