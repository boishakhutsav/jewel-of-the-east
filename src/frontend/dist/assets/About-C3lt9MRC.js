import { c as createLucideIcon, q as useAboutUs, j as jsxRuntimeExports, m as motion, M as MapPin } from "./index-DR0Be3dU.js";
import { S as Shield } from "./shield-DVk1Bhsh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
function AboutPage() {
  const { data: about, isLoading } = useAboutUs();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[50vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  const values = [
    {
      icon: Heart,
      title: "Family First",
      desc: "We create warm, welcoming spaces where families can make lasting memories together."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      desc: "Your comfort and security are our top priorities, with 24/7 support and modern amenities."
    },
    {
      icon: Award,
      title: "Himalayan Heritage",
      desc: "We blend local Sikkimese culture with contemporary hospitality for an authentic experience."
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      desc: "Strategically located in Gangtok and Lachung for easy access to the best of Sikkim."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4", children: (about == null ? void 0 : about.title) ?? "About Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-[#c9a96e] mx-auto rounded-full" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#FDFBF7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          children: (about == null ? void 0 : about.teamImage) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: about.teamImage.getDirectURL(),
              alt: "Our team",
              className: "rounded-2xl shadow-elevated w-full h-80 object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-[#0B2B1B]/10 w-full h-80 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-16 text-[#0B2B1B]/30" }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "prose prose-lg max-w-none text-[#0B2B1B]",
              dangerouslySetInnerHTML: {
                __html: (about == null ? void 0 : about.content) ?? "<p>Jewel of the East is a family-owned hospitality group dedicated to providing premium accommodation experiences in the pristine Himalayan region of Sikkim. With properties in both Gangtok and Lachung, we offer travelers the perfect blend of comfort, culture, and natural beauty.</p>"
              }
            }
          )
        }
      )
    ] }) }) }),
    ((about == null ? void 0 : about.mission) || (about == null ? void 0 : about.vision)) && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      about.mission && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "bg-[#FDFBF7] p-8 rounded-2xl border-0 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-[#0B2B1B] mb-4", children: "Our Mission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0B2B1B]/70 leading-relaxed", children: about.mission })
          ]
        }
      ),
      about.vision && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "bg-[#FDFBF7] p-8 rounded-2xl border-0 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-[#0B2B1B] mb-4", children: "Our Vision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0B2B1B]/70 leading-relaxed", children: about.vision })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#FDFBF7]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-[#0B2B1B] mb-3", children: "Our Values" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0B2B1B]/60 max-w-2xl mx-auto", children: "The principles that guide everything we do" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: values.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "bg-[#0B2B1B] p-6 rounded-xl border-0 shadow-card text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(value.icon, { className: "size-6 text-[#c9a96e]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-[#FDFBF7] mb-2", children: value.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#FDFBF7]/70", children: value.desc })
          ]
        },
        `value-${value.title}`
      )) })
    ] }) })
  ] });
}
export {
  AboutPage as default
};
