import { F as useHeroSlides, G as useGalleryImages, H as useProperties, J as useRoomTypes, n as useTestimonials, j as jsxRuntimeExports, m as motion, I as Image, L as Link, C as Card, a as CardContent } from "./index-DR0Be3dU.js";
import { I as Images, B as Building2, a as BedDouble, M as MessageSquareQuote, S as Settings } from "./settings-CUpk-MMp.js";
import { F as FileText } from "./file-text-BLiP1zYL.js";
import { S as Shield } from "./shield-DVk1Bhsh.js";
import { A as ArrowRight } from "./arrow-right-BjiyAAP2.js";
const adminCards = [
  {
    label: "Hero Carousel",
    href: "/admin/hero",
    icon: Image,
    desc: "Manage homepage hero images",
    queryKey: "heroSlides"
  },
  {
    label: "Gallery",
    href: "/admin/gallery",
    icon: Images,
    desc: "Manage photo gallery images",
    queryKey: "galleryImages"
  },
  {
    label: "Properties",
    href: "/admin/properties",
    icon: Building2,
    desc: "Edit property descriptions",
    queryKey: "properties"
  },
  {
    label: "Room Types",
    href: "/admin/rooms",
    icon: BedDouble,
    desc: "Manage room types and pricing",
    queryKey: "roomTypes"
  },
  {
    label: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
    desc: "Manage guest reviews",
    queryKey: "testimonials"
  },
  {
    label: "About Us",
    href: "/admin/about",
    icon: FileText,
    desc: "Edit about page content",
    queryKey: null
  },
  {
    label: "Policies",
    href: "/admin/policies",
    icon: Shield,
    desc: "Edit privacy, terms & booking policy",
    queryKey: null
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
    desc: "Site settings and contact info",
    queryKey: null
  }
];
function AdminDashboard() {
  const { data: heroSlides = [] } = useHeroSlides();
  const { data: galleryImages = [] } = useGalleryImages();
  const { data: properties = [] } = useProperties();
  const { data: roomTypes = [] } = useRoomTypes();
  const { data: testimonials = [] } = useTestimonials();
  const counts = {
    heroSlides: heroSlides.length,
    galleryImages: galleryImages.length,
    properties: properties.length,
    roomTypes: roomTypes.length,
    testimonials: testimonials.length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage your hotel website content from one place" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: adminCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: card.href,
            "data-ocid": `admin.dashboard.${card.label.toLowerCase().replace(/\s+/g, "_")}_card`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full hover:shadow-elevated transition-smooth group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { className: "size-5 text-primary" }) }),
                card.queryKey && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-foreground", children: counts[card.queryKey] ?? 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: card.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: card.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all", children: [
                "Manage",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-1 group-hover:translate-x-1 transition-transform" })
              ] })
            ] }) })
          }
        )
      },
      card.href
    )) })
  ] });
}
export {
  AdminDashboard as default
};
