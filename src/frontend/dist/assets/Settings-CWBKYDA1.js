import { c as createLucideIcon, a as useSiteSettings, G as useUpdateSiteSettings, r as reactExports, j as jsxRuntimeExports, P as Phone, H as Mail } from "./index-DmFk9ZaG.js";
import { B as Button } from "./button-CA-Lfrbi.js";
import { C as Card, a as CardContent } from "./card-B72j3Qsx.js";
import { I as Input, L as Label } from "./label-CyHNEkhg.js";
import { T as Textarea } from "./textarea-D51NVThM.js";
import { u as useImageUpload, a as useImagePreview } from "./useImages-DEBfPXQm.js";
import { m as motion } from "./proxy-BYN7GoPn.js";
import { U as Upload } from "./upload-O7F_5fmh.js";
import { M as MessageCircle } from "./message-circle-BKcff6mS.js";
import { S as Save } from "./save-C-e3mb_v.js";
import "./utils-2v2HxlWs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
];
const Link2 = createLucideIcon("link-2", __iconNode);
function SocialLinkEditor({
  links,
  onChange
}) {
  const [newPlatform, setNewPlatform] = reactExports.useState("");
  const [newUrl, setNewUrl] = reactExports.useState("");
  const addLink = () => {
    if (!newPlatform || !newUrl) return;
    onChange([...links, { platform: newPlatform, url: newUrl }]);
    setNewPlatform("");
    setNewUrl("");
  };
  const removeLink = (index) => {
    onChange(links.filter((_, i) => i !== index));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    links.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 p-3 bg-muted/50 rounded-lg",
        "data-ocid": `admin.settings.social_link.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "size-4 text-muted-foreground shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: link.platform }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: link.url })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => removeLink(i),
              className: "p-1.5 rounded-md hover:bg-destructive/10 text-destructive transition-smooth",
              "data-ocid": `admin.settings.social_link.${i + 1}.delete_button`,
              "aria-label": `Remove ${link.platform}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Remove" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Remove" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6 6 18" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 6 12 12" })
                    ]
                  }
                )
              ]
            }
          )
        ]
      },
      `social-link-${link.platform}-${i}`
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Platform (e.g., Facebook)",
          value: newPlatform,
          onChange: (e) => setNewPlatform(e.target.value),
          className: "flex-1",
          "data-ocid": "admin.settings.social_platform_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "URL",
          value: newUrl,
          onChange: (e) => setNewUrl(e.target.value),
          className: "flex-[2]",
          "data-ocid": "admin.settings.social_url_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          size: "sm",
          onClick: addLink,
          "data-ocid": "admin.settings.add_social_button",
          children: "Add"
        }
      )
    ] })
  ] });
}
function SettingsManager() {
  const { data: settings, isLoading } = useSiteSettings();
  const updateSettings = useUpdateSiteSettings();
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const fileInputRef = reactExports.useRef(null);
  const [form, setForm] = reactExports.useState({
    footerText: "",
    contactInfo: { email: "", phone: "", address: "" },
    socialLinks: []
  });
  const [hasChanges, setHasChanges] = reactExports.useState(false);
  const initForm = (s) => {
    setForm({
      footerText: s.footerText,
      contactInfo: { ...s.contactInfo },
      socialLinks: [...s.socialLinks],
      bookingUrl: s.bookingUrl,
      logo: s.logo
    });
    setHasChanges(false);
  };
  const handleFileChange = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    await generatePreview(file);
    setHasChanges(true);
  };
  const handleSave = async () => {
    var _a, _b;
    let logo = form.logo;
    const file = (_b = (_a = fileInputRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (file) {
      const blob = await upload(file);
      if (blob) logo = blob;
    }
    await updateSettings.mutateAsync({
      ...form,
      logo
    });
    clearPreview();
    if (fileInputRef.current) fileInputRef.current.value = "";
    setHasChanges(false);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  if (settings && !hasChanges && form.footerText === "") {
    initForm(settings);
  }
  const updateField = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setHasChanges(true);
  };
  const updateContact = (key, value) => {
    setForm((f) => ({
      ...f,
      contactInfo: { ...f.contactInfo, [key]: value }
    }));
    setHasChanges(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Site Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage logo, contact info, footer text, and social links" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: preview,
                  alt: "Logo preview",
                  className: "w-20 h-20 object-contain rounded-lg bg-muted"
                }
              ) : form.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: form.logo.getDirectURL(),
                  alt: "Current logo",
                  className: "w-20 h-20 object-contain rounded-lg bg-muted"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-lg bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-6 text-muted-foreground/40" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "file",
                    accept: "image/*",
                    ref: fileInputRef,
                    onChange: handleFileChange,
                    "data-ocid": "admin.settings.logo_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Recommended: PNG with transparent background, 200x200px" })
              ] })
            ] }),
            isUploading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-primary transition-all",
                  style: { width: `${progress}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-center", children: [
                "Uploading... ",
                progress,
                "%"
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Contact Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "contact-phone",
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-muted-foreground" }),
                      "Phone"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-phone",
                    value: form.contactInfo.phone,
                    onChange: (e) => updateContact("phone", e.target.value),
                    placeholder: "+91 12345 67890",
                    "data-ocid": "admin.settings.phone_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "contact-whatsapp",
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4 text-muted-foreground" }),
                      "WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-whatsapp",
                    value: form.contactInfo.whatsapp ?? "",
                    onChange: (e) => updateContact("whatsapp", e.target.value),
                    placeholder: "+91 12345 67890",
                    "data-ocid": "admin.settings.whatsapp_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "contact-email",
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-muted-foreground" }),
                      "Email"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-email",
                    type: "email",
                    value: form.contactInfo.email,
                    onChange: (e) => updateContact("email", e.target.value),
                    placeholder: "hello@jeweloftheeast.com",
                    "data-ocid": "admin.settings.email_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-address", children: "Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "contact-address",
                    value: form.contactInfo.address,
                    onChange: (e) => updateContact("address", e.target.value),
                    rows: 2,
                    placeholder: "Full address...",
                    "data-ocid": "admin.settings.address_input"
                  }
                )
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Booking Engine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "booking-url",
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-4 text-muted-foreground" }),
                    "External Booking URL"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "booking-url",
                  value: form.bookingUrl ?? "",
                  onChange: (e) => updateField("bookingUrl", e.target.value || void 0),
                  placeholder: "https://booking.example.com",
                  "data-ocid": "admin.settings.booking_url_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Guests will be redirected to this URL for bookings" })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Footer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "footer-text", children: "Footer Text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "footer-text",
                  value: form.footerText,
                  onChange: (e) => updateField("footerText", e.target.value),
                  rows: 2,
                  placeholder: "© 2024 Jewel of the East Group. All rights reserved.",
                  "data-ocid": "admin.settings.footer_text_input"
                }
              )
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Social Links" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SocialLinkEditor,
              {
                links: form.socialLinks,
                onChange: (links) => updateField("socialLinks", links)
              }
            )
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleSave,
          disabled: updateSettings.isPending || !hasChanges && !preview,
          "data-ocid": "admin.settings.save_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-4 mr-2" }),
            "Save All Changes"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  SettingsManager as default
};
