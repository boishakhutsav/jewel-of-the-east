import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  useProperties,
  useRoomTypesByProperty,
  useSiteSettings,
} from "@/hooks/useContent";
import {
  ArrowRight,
  ArrowUpDown,
  Car,
  Check,
  Flame,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  UtensilsCrossed,
  Wifi,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = {
  "all rooms heated": Flame,
  elevator: ArrowUpDown,
  "power backup": Zap,
  "multi cuisine restaurant": UtensilsCrossed,
  wifi: Wifi,
  parking: Car,
  "mountain view": Mountain,
};

function getIconForAmenity(amenity: string) {
  const key = amenity.toLowerCase();
  return iconMap[key] ?? Check;
}

export default function PropertyPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: properties = [], isLoading: propsLoading } = useProperties();
  const { data: settings } = useSiteSettings();

  const property = useMemo(() => {
    return properties.find(
      (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug,
    );
  }, [properties, slug]);

  const propertyId = property?.id ?? BigInt(0);
  const { data: roomTypes = [], isLoading: roomsLoading } =
    useRoomTypesByProperty(propertyId);

  if (propsLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">
          Property Not Found
        </h1>
        <Link to="/" data-ocid="property.not_found.home_link">
          <Button>Go Home</Button>
        </Link>
      </div>
    );
  }

  const contact = settings?.contactInfo;

  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        {property.heroImage ? (
          <img
            src={property.heroImage.getDirectURL()}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <MapPin className="size-20 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg"
            >
              {property.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg"
            >
              Sikkim, India
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-[#0B2B1B] mb-4">
                  About the Property
                </h2>
                <div
                  className="prose max-w-none text-[#0B2B1B]/70 leading-relaxed mb-8"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: admin-managed rich text
                  dangerouslySetInnerHTML={{ __html: property.description }}
                />
              </motion.div>

              {property.highlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="font-display text-xl font-bold text-[#0B2B1B] mb-4">
                    Key Highlights
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {property.highlights.map((h) => (
                      <Badge
                        key={`highlight-${h}`}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm"
                      >
                        <Check className="size-3.5 mr-1.5" />
                        {h}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {property.amenities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-display text-xl font-bold text-[#0B2B1B] mb-4">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((a) => {
                      const Icon = getIconForAmenity(a);
                      return (
                        <div
                          key={`amenity-${a}`}
                          className="flex items-center gap-2 p-3 rounded-lg bg-card border"
                        >
                          <Icon className="size-4 text-primary shrink-0" />
                          <span className="text-sm text-[#0B2B1B]">{a}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="sticky top-24 bg-[#0B2B1B] border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display text-lg font-bold text-[#FDFBF7]">
                      Book Your Stay
                    </h3>
                    <p className="text-sm text-[#FDFBF7]/70">
                      Contact us directly for the best rates and personalized
                      service.
                    </p>
                    {contact?.phone && (
                      <a
                        href={`tel:${contact.phone}`}
                        data-ocid="property.book.phone_link"
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Phone className="size-4" />
                        {contact.phone}
                      </a>
                    )}
                    {contact?.whatsapp && (
                      <a
                        href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="property.book.whatsapp_link"
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <MessageCircle className="size-4" />
                        WhatsApp
                      </a>
                    )}
                    {property.bookingUrl && (
                      <a
                        href={property.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="property.book.external_link"
                      >
                        <Button className="w-full">
                          Book Online
                          <ArrowRight className="size-4 ml-2" />
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0B2B1B]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-[#FDFBF7] mb-3">
              Room Types
            </h2>
            <p className="text-[#FDFBF7]/70 max-w-2xl mx-auto">
              Comfortable accommodations designed for families
            </p>
          </motion.div>

          {roomsLoading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : roomTypes.length === 0 ? (
            <div className="text-center py-8 text-[#FDFBF7]/70">
              Room information coming soon
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomTypes.map((room, i) => (
                <motion.div
                  key={room.id.toString()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden group hover:shadow-elevated transition-smooth bg-[#FDFBF7] border-0">
                    <div className="relative h-48 overflow-hidden">
                      {room.thumbnail ? (
                        <img
                          src={room.thumbnail.getDirectURL()}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <MapPin className="size-10 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-display font-semibold text-[#0B2B1B] mb-2">
                        {room.name}
                      </h3>
                      <p className="text-sm text-[#0B2B1B]/70 line-clamp-2 mb-3">
                        {room.description}
                      </p>
                      {room.capacity && (
                        <p className="text-sm text-[#0B2B1B]/70 mb-3">
                          Capacity: {room.capacity}
                        </p>
                      )}
                      {room.pricePerNight && (
                        <p className="text-lg font-semibold text-[#c9a96e]">
                          {room.pricePerNight}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
