import { J as usePolicy, j as jsxRuntimeExports } from "./index-DmFk9ZaG.js";
import { m as motion } from "./proxy-BYN7GoPn.js";
function TermsConditionsPage() {
  const { data: policy, isLoading } = usePolicy("terms");
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[50vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  const lastUpdated = (policy == null ? void 0 : policy.lastUpdated) ? new Date(Number(policy.lastUpdated) * 1e3).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#0B2B1B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4", children: (policy == null ? void 0 : policy.title) ?? "Terms & Conditions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-[#c9a96e] mx-auto rounded-full mb-4" }),
          lastUpdated && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#FDFBF7]/70", children: [
            "Last updated: ",
            lastUpdated
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-[#FDFBF7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "prose prose-lg max-w-none text-[#0B2B1B]",
        dangerouslySetInnerHTML: {
          __html: (policy == null ? void 0 : policy.body) ?? "<p>Our terms and conditions will be updated soon. Please check back later.</p>"
        }
      }
    ) }) })
  ] });
}
export {
  TermsConditionsPage as default
};
