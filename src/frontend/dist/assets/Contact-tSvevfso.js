import { o as useSiteSettings, j as jsxRuntimeExports, m as motion } from "./index-DR0Be3dU.js";
function ContactPage() {
  const { data: settings, isLoading } = useSiteSettings();
  settings == null ? void 0 : settings.contactInfo;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[50vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "font-display text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4",
          children: "Contact Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#FDFBF7]/70 max-w-2xl mx-auto", children: "We would love to hear from you. Reach out directly for bookings, inquiries, or just to say hello." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "font-display text-3xl md:text-4xl font-bold text-[#FDFBF7] text-center mb-4",
          children: "Find Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#FDFBF7]/70 text-center max-w-2xl mx-auto mb-12", children: "We would like to hear from you. Visit our properties in the heart of the Himalayas." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-[#FDFBF7] mb-4 text-center", children: "Jewel Himalayan Heights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg overflow-hidden shadow-lg border border-[#c9a96e]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.1113798316323!2d88.61322899999999!3d27.3344161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a53f9c34e2bb%3A0xc55e75c31de7414c!2sHimalayan%20Heights%20Hotel%20(Jewel%20of%20the%20East%20Group)!5e1!3m2!1sen!2sin!4v1782112185953!5m2!1sen!2sin",
                  width: "100%",
                  height: "400",
                  style: { border: 0 },
                  allowFullScreen: true,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                  title: "Jewel Himalayan Heights Location",
                  className: "w-full",
                  "data-ocid": "contact.map_gangtok"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-[#FDFBF7] mb-4 text-center", children: "Jewel Kongchen Retreat" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg overflow-hidden shadow-lg border border-[#c9a96e]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.2095937494363!2d88.73500086550432!3d27.67800147619938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6cd30859a1af3%3A0xc300f3944720cac1!2sJewel%20Kongchen%20Retreat%20%26%20Spa!5e1!3m2!1sen!2sin!4v1782112348236!5m2!1sen!2sin",
                  width: "100%",
                  height: "400",
                  style: { border: 0 },
                  allowFullScreen: true,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                  title: "Jewel Kongchen Retreat Location",
                  className: "w-full",
                  "data-ocid": "contact.map_lachung"
                }
              ) })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as default
};
