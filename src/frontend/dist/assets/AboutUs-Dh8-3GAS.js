import { q as useAboutUs, am as useUpdateAboutUs, r as reactExports, j as jsxRuntimeExports, B as Button, m as motion, C as Card, a as CardContent, D as Label, E as Input } from "./index-BtlS8pqB.js";
import { T as Textarea } from "./textarea-DceS1r9a.js";
import { F as FileText } from "./file-text-C4WzTKKT.js";
import { S as Save } from "./save-B1PWQJC_.js";
function AboutUsManager() {
  const { data: aboutUs, isLoading } = useAboutUs();
  const updateAboutUs = useUpdateAboutUs();
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    title: "",
    content: "",
    mission: void 0,
    vision: void 0,
    teamImage: void 0
  });
  const startEditing = () => {
    if (aboutUs) {
      setForm({
        title: aboutUs.title,
        content: aboutUs.content,
        mission: aboutUs.mission,
        vision: aboutUs.vision,
        teamImage: aboutUs.teamImage
      });
    }
    setIsEditing(true);
  };
  const handleSave = async () => {
    await updateAboutUs.mutateAsync({
      title: form.title,
      content: form.content,
      mission: form.mission,
      vision: form.vision,
      teamImage: form.teamImage
    });
    setIsEditing(false);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Edit the About Us page content" })
      ] }),
      !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: startEditing, "data-ocid": "admin.about.edit_button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 mr-2" }),
        "Edit Content"
      ] })
    ] }),
    isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "about-title", children: "Page Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "about-title",
                value: form.title,
                onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
                placeholder: "e.g., About Jewel of the East",
                "data-ocid": "admin.about.title_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "about-content", children: "Main Content (HTML supported)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "about-content",
                value: form.content,
                onChange: (e) => setForm((f) => ({ ...f, content: e.target.value })),
                rows: 10,
                placeholder: "Enter the about us content...",
                "data-ocid": "admin.about.content_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "about-mission", children: "Mission (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "about-mission",
                value: form.mission ?? "",
                onChange: (e) => setForm((f) => ({ ...f, mission: e.target.value })),
                rows: 3,
                placeholder: "Our mission...",
                "data-ocid": "admin.about.mission_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "about-vision", children: "Vision (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "about-vision",
                value: form.vision ?? "",
                onChange: (e) => setForm((f) => ({ ...f, vision: e.target.value })),
                rows: 3,
                placeholder: "Our vision...",
                "data-ocid": "admin.about.vision_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setIsEditing(false),
                "data-ocid": "admin.about.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleSave,
                disabled: updateAboutUs.isPending,
                "data-ocid": "admin.about.save_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-4 mr-2" }),
                  "Save Changes"
                ]
              }
            )
          ] })
        ] }) })
      }
    ) : aboutUs ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold text-foreground", children: aboutUs.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "prose max-w-none text-muted-foreground",
                dangerouslySetInnerHTML: { __html: aboutUs.content }
              }
            )
          ] }),
          aboutUs.mission && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Mission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: aboutUs.mission })
          ] }),
          aboutUs.vision && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Vision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: aboutUs.vision })
          ] })
        ] }) })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-12 bg-muted/30 rounded-xl",
        "data-ocid": "admin.about.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-12 text-muted-foreground/30 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No About Us content yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Click Edit Content to add your about page" })
        ]
      }
    )
  ] });
}
export {
  AboutUsManager as default
};
