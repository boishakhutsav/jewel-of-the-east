import { j as jsxRuntimeExports, m as motion, M as MapPin, B as Button, p as Phone, r as reactExports, s as ChevronUp, t as ChevronDown, v as usePropertyGalleryImages, C as Card, a as CardContent, w as Check } from "./index-BtlS8pqB.js";
import { B as Badge } from "./badge-CY-YpFov.js";
import { S as Star } from "./star-DXF4ns88.js";
import { A as ArrowRight } from "./arrow-right-CtYZkfwV.js";
import { M as MessageCircle } from "./message-circle-DXojn-jQ.js";
function HeroSection({ hotel }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[520px] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: hotel.image,
        alt: hotel.name,
        className: "w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/95 via-[#0B2B1B]/60 to-[#0B2B1B]/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-8 pb-12 md:p-16 md:pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-[#c9a96e]/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#c9a96e]/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-[#c9a96e] text-[#c9a96e]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FDFBF7] text-sm font-medium", children: "4.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FDFBF7]/80 text-xs", children: "(608 Reviews)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "bg-[#FDFBF7]/15 text-[#FDFBF7] border-0 backdrop-blur-md rounded-full px-3 py-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3 mr-1.5" }),
                  hotel.location
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-editorial text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFBF7] mb-4 tracking-tight leading-[1.1] drop-shadow-lg", children: hotel.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#FDFBF7]/90 text-base md:text-lg max-w-2xl mb-8 font-body leading-relaxed drop-shadow-md", children: hotel.shortDescription }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
            hotel.bookingUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: hotel.bookingUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "hotel.hero.book_now_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold rounded-full px-8 shadow-lg",
                    children: [
                      "Book Now",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-2" })
                    ]
                  }
                )
              }
            ),
            hotel.contactPhone && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${hotel.contactPhone}`,
                "data-ocid": "hotel.hero.phone_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-[#FDFBF7]/40 text-[#FDFBF7] hover:bg-[#FDFBF7]/15 bg-[#0B2B1B]/40 backdrop-blur-sm rounded-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 mr-2" }),
                      "Call Now"
                    ]
                  }
                )
              }
            )
          ] })
        ]
      }
    ) }) }) })
  ] });
}
function OverviewSection({ hotel }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-6 tracking-tight", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `prose max-w-none text-[#FDFBF7]/70 leading-[1.8] text-base md:text-lg ${expanded ? "" : "line-clamp-4"}`,
            dangerouslySetInnerHTML: { __html: hotel.description }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "hotel.overview.toggle_button",
            onClick: () => setExpanded(!expanded),
            className: "mt-4 text-[#c9a96e] text-sm font-medium flex items-center gap-1.5 hover:underline tracking-wide uppercase",
            children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Show Less ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Show More ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
            ] })
          }
        )
      ]
    }
  ) }) });
}
function FacilitiesSection({ amenities }) {
  const iconMap = {
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
    "butler services": "🤵"
  };
  function getIcon(amenity) {
    const key = amenity.toLowerCase();
    for (const [k, v] of Object.entries(iconMap)) {
      if (key.includes(k)) return v;
    }
    return "✓";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#FDFBF7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-8 tracking-tight", children: "Facilities & Amenities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: amenities.map((amenity, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.05 },
            className: "flex items-center gap-3 p-4 rounded-xl bg-[#0B2B1B]/5 hover:bg-[#0B2B1B]/10 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: getIcon(amenity) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-[#0B2B1B]/80 font-medium", children: amenity })
            ]
          },
          `facility-${amenity}`
        )) })
      ]
    }
  ) }) });
}
function RoomTypesSection({
  roomTypes,
  bookingUrl,
  contactPhone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mb-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-3 tracking-tight", children: "Rooms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#FDFBF7]/60 text-base md:text-lg", children: "Comfortable accommodations designed for families and travelers" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: roomTypes.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.15, duration: 0.6 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-[#FDFBF7] border-0 rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden", children: [
            room.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: room.image,
                alt: room.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-[#0B2B1B]/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-12 text-[#0B2B1B]/20" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 bg-[#c9a96e] text-[#0B2B1B] px-3 py-1 rounded-full text-sm font-semibold", children: room.price }),
            room.price === "Contact Us" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 bg-[#0B2B1B]/80 backdrop-blur-sm text-[#FDFBF7] px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Call ",
                contactPhone
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-editorial font-semibold text-[#0B2B1B] text-xl mb-2", children: room.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#0B2B1B]/60 line-clamp-3 mb-4 flex-1 leading-relaxed", children: room.description }),
            room.amenities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
              room.amenities.slice(0, 4).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs border-[#0B2B1B]/20 text-[#0B2B1B]/70 rounded-full",
                  children: a
                },
                `room-amenity-${a}`
              )),
              room.amenities.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs border-[#0B2B1B]/20 text-[#0B2B1B]/70 rounded-full",
                  children: [
                    "+",
                    room.amenities.length - 4
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-4 border-t border-[#0B2B1B]/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[#0B2B1B]/50 uppercase tracking-wider", children: room.price === "Contact Us" ? "Enquire for pricing" : "per night" }) }),
              bookingUrl && room.price !== "Contact Us" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: bookingUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": `hotel.room.${i + 1}.book_button`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 rounded-full px-6",
                      children: "Book Now"
                    }
                  )
                }
              ),
              room.price === "Contact Us" && contactPhone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `tel:${contactPhone}`,
                  "data-ocid": `hotel.room.${i + 1}.phone_button`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "border-[#0B2B1B]/30 text-[#0B2B1B] hover:bg-[#0B2B1B]/10 rounded-full px-6",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5 mr-1.5" }),
                        "Call Now"
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
        ] })
      },
      room.id
    )) })
  ] }) });
}
function NearbyAttractionsSection({
  attractions
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#FDFBF7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-8 tracking-tight", children: "Nearby Attractions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: attractions.map((attr, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "flex items-center justify-between p-5 rounded-xl bg-[#0B2B1B]/5 hover:bg-[#0B2B1B]/10 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0B2B1B] font-medium", children: attr.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "bg-[#c9a96e]/20 text-[#0B2B1B] border-0 rounded-full px-3",
                  children: attr.distance
                }
              )
            ]
          },
          `attr-${attr.name}`
        )) })
      ]
    }
  ) }) });
}
function ReviewsSection({ reviews }) {
  if (reviews.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mb-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-3 tracking-tight", children: "Guest Reviews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#FDFBF7]/60 text-base md:text-lg", children: "Real experiences from families who stayed with us" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: reviews.slice(0, 6).map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.6 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full bg-[#FDFBF7] border-0 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 mb-4", children: Array.from({ length: review.rating }).map((_, si) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: "size-4 fill-[#c9a96e] text-[#c9a96e]"
            },
            `review-star-${si}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[#0B2B1B]/80 text-sm leading-relaxed mb-6 italic font-body", children: [
            "“",
            review.comment,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-[#0B2B1B]/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-editorial text-[#0B2B1B] font-bold text-sm", children: review.name.charAt(0) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-[#0B2B1B] text-sm", children: review.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#0B2B1B]/50", children: review.date })
            ] })
          ] })
        ] }) })
      },
      `review-${review.name}-${i}`
    )) })
  ] }) });
}
function FAQSection({
  faqs
}) {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#FDFBF7]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mb-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-3 tracking-tight", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0B2B1B]/60 text-base md:text-lg", children: "Everything you need to know about your stay" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "rounded-xl bg-[#0B2B1B]/5 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `hotel.faq.${i + 1}.toggle`,
              onClick: () => setOpenIndex(openIndex === i ? null : i),
              className: "w-full flex items-center justify-between p-5 text-left hover:bg-[#0B2B1B]/10 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#0B2B1B] text-sm pr-4", children: faq.question }),
                openIndex === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4 text-[#c9a96e] shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 text-[#0B2B1B]/40 shrink-0" })
              ]
            }
          ),
          openIndex === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-[#0B2B1B]/70 leading-relaxed", children: faq.answer })
        ]
      },
      `faq-${faq.question.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`
    )) })
  ] }) });
}
function PropertyRulesSection({ rules }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#FDFBF7] mb-8 tracking-tight", children: "Property Rules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4 max-w-3xl", children: rules.map((rule, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.05 },
            className: "flex items-start gap-3 p-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-[#c9a96e] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-[#FDFBF7]/70", children: rule })
            ]
          },
          `rule-${rule.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`
        )) })
      ]
    }
  ) }) });
}
function BookingCTASection({ hotel }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-[#0B2B1B] relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-[#c9a96e] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-[#c9a96e] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-editorial text-3xl md:text-5xl font-bold text-[#FDFBF7] mb-4 tracking-tight", children: [
            "Book Your Stay at ",
            hotel.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#FDFBF7]/60 max-w-xl mx-auto mb-8 text-base md:text-lg", children: "Get the best rates and personalized service when you book directly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            hotel.bookingUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: hotel.bookingUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "hotel.cta.book_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-[#c9a96e] text-[#0B2B1B] hover:bg-[#c9a96e]/90 font-semibold rounded-full px-10",
                    children: [
                      "Book Online",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-2" })
                    ]
                  }
                )
              }
            ),
            hotel.contactPhone && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${hotel.contactPhone}`,
                "data-ocid": "hotel.cta.phone_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-[#FDFBF7]/30 text-[#FDFBF7] hover:bg-[#FDFBF7]/10 bg-transparent rounded-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 mr-2" }),
                      "Call Now"
                    ]
                  }
                )
              }
            ),
            hotel.contactWhatsApp && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://wa.me/${hotel.contactWhatsApp}`,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "hotel.cta.whatsapp_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-[#FDFBF7]/30 text-[#FDFBF7] hover:bg-[#FDFBF7]/10 bg-transparent rounded-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4 mr-2" }),
                      "WhatsApp"
                    ]
                  }
                )
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
function GallerySection({
  gallery,
  propertyId
}) {
  const { data: dynamicImages = [], isLoading } = usePropertyGalleryImages(
    propertyId ?? ""
  );
  const hasDynamicImages = dynamicImages.length > 0;
  const displayImages = hasDynamicImages ? dynamicImages.map((img, i) => ({
    src: img.image.getDirectURL(),
    alt: img.caption ?? `Gallery ${i + 1}`
  })) : gallery.map((img, i) => ({
    src: img,
    alt: `Gallery ${i + 1}`
  }));
  if (displayImages.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#FDFBF7]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mb-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-editorial text-3xl md:text-4xl font-bold text-[#0B2B1B] mb-3 tracking-tight", children: "Photo Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0B2B1B]/60 text-base md:text-lg", children: "A glimpse of your stay with us" })
        ]
      }
    ),
    isLoading && !hasDynamicImages ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: Array.from({ length: 4 }).map((_, _i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "aspect-[4/3] rounded-xl bg-[#0B2B1B]/10 animate-pulse"
      },
      "gallery-skeleton"
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: displayImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        className: "aspect-[4/3] rounded-xl overflow-hidden group",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: img.src,
            alt: img.alt,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          }
        )
      },
      `gallery-${img.src}-${i}`
    )) })
  ] }) });
}
function HotelPageLayout({
  hotel,
  propertyId
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, { hotel }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewSection, { hotel }),
    hotel.amenities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(FacilitiesSection, { amenities: hotel.amenities }),
    (hotel.gallery.length > 0 || !!propertyId) && /* @__PURE__ */ jsxRuntimeExports.jsx(GallerySection, { gallery: hotel.gallery, propertyId }),
    hotel.roomTypes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RoomTypesSection,
      {
        roomTypes: hotel.roomTypes,
        bookingUrl: hotel.bookingUrl,
        contactPhone: hotel.contactPhone
      }
    ),
    hotel.nearbyAttractions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(NearbyAttractionsSection, { attractions: hotel.nearbyAttractions }),
    hotel.reviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, { reviews: hotel.reviews }),
    hotel.faqs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, { faqs: hotel.faqs }),
    hotel.propertyRules.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyRulesSection, { rules: hotel.propertyRules }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCTASection, { hotel })
  ] });
}
export {
  HotelPageLayout as H
};
