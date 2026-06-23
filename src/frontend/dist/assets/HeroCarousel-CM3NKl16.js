import { c as createLucideIcon, K as useBackendActor, F as useHeroSlides, N as useAddHeroSlide, Q as useUpdateHeroSlide, R as useRemoveHeroSlide, S as useImageUpload, T as useImagePreview, r as reactExports, j as jsxRuntimeExports, U as Dialog, V as DialogTrigger, B as Button, W as Plus, Y as DialogContent, Z as DialogHeader, _ as DialogTitle, D as Label, E as Input, $ as Upload, m as motion, C as Card, a as CardContent, s as ChevronUp, t as ChevronDown, a0 as Trash2 } from "./index-BUTaEtEs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode);
function HeroCarouselManager() {
  const { actor, isFetching, error: actorError } = useBackendActor();
  const { data: slides = [], isLoading } = useHeroSlides();
  const addSlide = useAddHeroSlide();
  const updateSlide = useUpdateHeroSlide();
  const removeSlide = useRemoveHeroSlide();
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const [caption, setCaption] = reactExports.useState("");
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const handleFileChange = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    await generatePreview(file);
  };
  const handleAdd = async () => {
    var _a, _b;
    const file = (_b = (_a = fileInputRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (!file) return;
    const blob = await upload(file);
    if (!blob) return;
    try {
      await addSlide.mutateAsync({
        id: BigInt(0),
        order: BigInt(slides.length),
        caption: caption || void 0,
        image: blob
      });
      setCaption("");
      clearPreview();
      if (fileInputRef.current) fileInputRef.current.value = "";
      setDialogOpen(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save slide";
      setError(message);
    }
  };
  const handleMove = async (index, direction) => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= slides.length) return;
    const updatedSlides = [...slides];
    const temp = updatedSlides[index];
    updatedSlides[index] = updatedSlides[newIndex];
    updatedSlides[newIndex] = temp;
    for (let i = 0; i < updatedSlides.length; i++) {
      await updateSlide.mutateAsync({
        ...updatedSlides[i],
        order: BigInt(i)
      });
    }
  };
  const handleRemove = async (id) => {
    if (!confirm("Are you sure you want to remove this slide?")) return;
    await removeSlide.mutateAsync(id);
  };
  if (isFetching) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  if (actorError || !actor) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Hero Carousel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage images that appear on the homepage hero section" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-destructive/10 border border-destructive/20 rounded-xl p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Backend Connection Error" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The admin dashboard cannot connect to the backend. This usually means the canister ID is missing." }),
          actorError && /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-background/50 rounded-lg p-3 text-xs overflow-auto whitespace-pre-wrap font-mono", children: actorError }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "What to check:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Ensure",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: "VITE_CANISTER_ID" }),
                " ",
                "is set in your",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: ".env" }),
                " file"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Run ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: "dfx deploy" }),
                " ",
                "to get the canister ID"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Restart the dev server after updating environment variables" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Check that the canister is running with",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: "dfx canister status backend" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Hero Carousel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage images that appear on the homepage hero section" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { "data-ocid": "admin.hero.add_button", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 mr-2" }),
          "Add Slide"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add Hero Slide" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hero-image", children: "Image" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "hero-image",
                  type: "file",
                  accept: "image/*",
                  ref: fileInputRef,
                  onChange: handleFileChange,
                  "data-ocid": "admin.hero.image_input"
                }
              ),
              preview && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: preview,
                  alt: "Preview",
                  className: "mt-2 rounded-lg max-h-40 object-cover"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hero-caption", children: "Caption (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "hero-caption",
                  value: caption,
                  onChange: (e) => setCaption(e.target.value),
                  placeholder: "Enter slide caption",
                  "data-ocid": "admin.hero.caption_input"
                }
              )
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
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleAdd,
                disabled: isUploading || !preview,
                className: "w-full",
                "data-ocid": "admin.hero.save_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-4 mr-2" }),
                  "Add Slide"
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    slides.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-muted/30 rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImageIcon, { className: "size-12 text-muted-foreground/30 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No hero slides yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add images to showcase on the homepage" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: slides.sort((a, b) => Number(a.order) - Number(b.order)).map((slide, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: slide.image.getDirectURL(),
              alt: slide.caption ?? "Hero image",
              className: "w-24 h-16 object-cover rounded-lg shrink-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: slide.caption ?? "No caption" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Order: ",
              Number(slide.order) + 1
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `admin.hero.move_up.${index + 1}`,
                onClick: () => handleMove(index, "up"),
                disabled: index === 0,
                className: "p-2 rounded-md hover:bg-muted disabled:opacity-30 transition-smooth",
                "aria-label": "Move up",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `admin.hero.move_down.${index + 1}`,
                onClick: () => handleMove(index, "down"),
                disabled: index === slides.length - 1,
                className: "p-2 rounded-md hover:bg-muted disabled:opacity-30 transition-smooth",
                "aria-label": "Move down",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `admin.hero.delete.${index + 1}`,
                onClick: () => handleRemove(slide.id),
                className: "p-2 rounded-md hover:bg-destructive/10 text-destructive transition-smooth",
                "aria-label": "Delete slide",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" })
              }
            )
          ] })
        ] }) })
      },
      slide.id.toString()
    )) })
  ] });
}
function ImageIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Image icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9", cy: "9", r: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
      ]
    }
  );
}
export {
  HeroCarouselManager as default
};
