import { Card, CardContent } from "@/components/ui/card";
import {
  useGalleryImages,
  useHeroSlides,
  useProperties,
  useRoomTypes,
  useTestimonials,
} from "@/hooks/useContent";
import {
  ArrowRight,
  BedDouble,
  Building2,
  FileText,
  Image,
  Images,
  MessageSquareQuote,
  Settings,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const adminCards = [
  {
    label: "Hero Carousel",
    href: "/admin/hero",
    icon: Image,
    desc: "Manage homepage hero images",
    queryKey: "heroSlides",
  },
  {
    label: "Gallery",
    href: "/admin/gallery",
    icon: Images,
    desc: "Manage photo gallery images",
    queryKey: "galleryImages",
  },
  {
    label: "Properties",
    href: "/admin/properties",
    icon: Building2,
    desc: "Edit property descriptions",
    queryKey: "properties",
  },
  {
    label: "Room Types",
    href: "/admin/rooms",
    icon: BedDouble,
    desc: "Manage room types and pricing",
    queryKey: "roomTypes",
  },
  {
    label: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
    desc: "Manage guest reviews",
    queryKey: "testimonials",
  },
  {
    label: "About Us",
    href: "/admin/about",
    icon: FileText,
    desc: "Edit about page content",
    queryKey: null,
  },
  {
    label: "Policies",
    href: "/admin/policies",
    icon: Shield,
    desc: "Edit privacy, terms & booking policy",
    queryKey: null,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
    desc: "Site settings and contact info",
    queryKey: null,
  },
];

export default function AdminDashboard() {
  const { data: heroSlides = [] } = useHeroSlides();
  const { data: galleryImages = [] } = useGalleryImages();
  const { data: properties = [] } = useProperties();
  const { data: roomTypes = [] } = useRoomTypes();
  const { data: testimonials = [] } = useTestimonials();

  const counts: Record<string, number> = {
    heroSlides: heroSlides.length,
    galleryImages: galleryImages.length,
    properties: properties.length,
    roomTypes: roomTypes.length,
    testimonials: testimonials.length,
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Dashboard
        </h2>
        <p className="text-muted-foreground">
          Manage your hotel website content from one place
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {adminCards.map((card, i) => (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={card.href}
              data-ocid={`admin.dashboard.${card.label.toLowerCase().replace(/\s+/g, "_")}_card`}
            >
              <Card className="h-full hover:shadow-elevated transition-smooth group">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <card.icon className="size-5 text-primary" />
                    </div>
                    {card.queryKey && (
                      <span className="text-2xl font-bold text-foreground">
                        {counts[card.queryKey] ?? 0}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {card.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {card.desc}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Manage
                    <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
