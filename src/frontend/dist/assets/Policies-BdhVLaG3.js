import { aq as usePolicies, ar as useUpdatePolicy, r as reactExports, j as jsxRuntimeExports, m as motion, C as Card, a as CardContent, B as Button, D as Label, E as Input } from "./index-BUTaEtEs.js";
import { S as Shield } from "./shield-CRVKEkAD.js";
import { F as FileText } from "./file-text-DyEU1EHV.js";
import { S as Save } from "./save-BcvWBMUK.js";
const POLICY_SLUGS = [
  { slug: "privacy", label: "Privacy Policy", defaultTitle: "Privacy Policy" },
  {
    slug: "terms",
    label: "Terms & Conditions",
    defaultTitle: "Terms & Conditions"
  },
  {
    slug: "booking-policy",
    label: "Booking & Refund Policy",
    defaultTitle: "Booking & Refund Policy"
  }
];
function PolicyEditor({
  policy,
  onSave,
  isSaving
}) {
  const [title, setTitle] = reactExports.useState(policy.title);
  const [body, setBody] = reactExports.useState(policy.body);
  reactExports.useEffect(() => {
    setTitle(policy.title);
    setBody(policy.body);
  }, [policy.title, policy.body]);
  const handleSave = () => {
    onSave({
      ...policy,
      title,
      body,
      lastUpdated: BigInt(Math.floor(Date.now() / 1e3))
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `policy-title-${policy.slug}`, children: "Title" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: `policy-title-${policy.slug}`,
          value: title,
          onChange: (e) => setTitle(e.target.value),
          "data-ocid": `admin.policy.${policy.slug}.title_input`
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `policy-body-${policy.slug}`, children: "Content (HTML supported)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: `policy-body-${policy.slug}`,
          value: body,
          onChange: (e) => setBody(e.target.value),
          rows: 12,
          className: "w-full mt-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring min-h-[200px]",
          "data-ocid": `admin.policy.${policy.slug}.body_input`
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: handleSave,
        disabled: isSaving,
        "data-ocid": `admin.policy.${policy.slug}.save_button`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-4 mr-2" }),
          isSaving ? "Saving..." : "Save Changes"
        ]
      }
    ) })
  ] }) });
}
function PoliciesManager() {
  const { data: policies = [], isLoading } = usePolicies();
  const updatePolicy = useUpdatePolicy();
  const [editingSlug, setEditingSlug] = reactExports.useState(null);
  const getPolicy = (slug) => {
    const found = policies.find((p) => p.slug === slug);
    if (found) return found;
    const config = POLICY_SLUGS.find((p) => p.slug === slug);
    return {
      id: BigInt(0),
      slug,
      title: config.defaultTitle,
      body: "",
      lastUpdated: BigInt(0)
    };
  };
  const handleSave = async (policy) => {
    await updatePolicy.mutateAsync(policy);
    setEditingSlug(null);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Policies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage Privacy Policy, Terms & Conditions, and Booking & Refund Policy" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: POLICY_SLUGS.map((config, index) => {
      const policy = getPolicy(config.slug);
      const isEditing = editingSlug === config.slug;
      const lastUpdated = policy.lastUpdated ? new Date(Number(policy.lastUpdated) * 1e3).toLocaleDateString(
        "en-IN",
        { year: "numeric", month: "short", day: "numeric" }
      ) : "Not set";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            PolicyEditor,
            {
              policy,
              onSave: handleSave,
              isSaving: updatePolicy.isPending
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hover:shadow-card transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground truncate", children: policy.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  "Last updated: ",
                  lastUpdated
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setEditingSlug(config.slug),
                "data-ocid": `admin.policy.${config.slug}.edit_button`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 mr-2" }),
                  "Edit"
                ]
              }
            )
          ] }) })
        },
        config.slug
      );
    }) })
  ] });
}
export {
  PoliciesManager as default
};
