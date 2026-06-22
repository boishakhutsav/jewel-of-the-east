import { i as useGalleryImages, q as useAddGalleryImage, s as useRemoveGalleryImage, r as reactExports, j as jsxRuntimeExports } from "./index-DmFk9ZaG.js";
import { B as Button } from "./button-CA-Lfrbi.js";
import { C as Card, a as CardContent } from "./card-B72j3Qsx.js";
import { D as Dialog, a as DialogTrigger, P as Plus, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-cGEQ3h8F.js";
import { L as Label, I as Input } from "./label-CyHNEkhg.js";
import { u as useImageUpload, a as useImagePreview } from "./useImages-DEBfPXQm.js";
import { U as Upload } from "./upload-O7F_5fmh.js";
import { I as Image } from "./image-DhDqIqFm.js";
import { m as motion } from "./proxy-BYN7GoPn.js";
import { T as Trash2 } from "./trash-2-B7bHzX5o.js";
import "./utils-2v2HxlWs.js";
import "./index-BaQSoExA.js";
function GalleryManager() {
  const { data: images = [], isLoading } = useGalleryImages();
  const addImage = useAddGalleryImage();
  const removeImage = useRemoveGalleryImage();
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const [caption, setCaption] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("");
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const handleFileChange = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    await generatePreview(file);
  };
  const [_error, setError] = reactExports.useState(null);
  const handleAdd = async () => {
    var _a, _b;
    setError(null);
    const file = (_b = (_a = fileInputRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (!file) {
      setError("Please select an image file.");
      return;
    }
    const blob = await upload(file);
    if (!blob) {
      setError("Image upload failed. Please try again.");
      return;
    }
    try {
      await addImage.mutateAsync({
        id: BigInt(0),
        order: BigInt(images.length),
        caption: caption || void 0,
        category: category || void 0,
        image: blob
      });
      setCaption("");
      setCategory("");
      clearPreview();
      if (fileInputRef.current) fileInputRef.current.value = "";
      setDialogOpen(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save gallery image."
      );
    }
  };
  const handleRemove = async (id) => {
    if (!confirm("Are you sure you want to remove this image?")) return;
    await removeImage.mutateAsync(id);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Photo Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage images displayed in the gallery section" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { "data-ocid": "admin.gallery.add_button", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 mr-2" }),
          "Add Image"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add Gallery Image" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "gallery-image", children: "Image" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "gallery-image",
                  type: "file",
                  accept: "image/*",
                  ref: fileInputRef,
                  onChange: handleFileChange,
                  "data-ocid": "admin.gallery.image_input"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "gallery-caption", children: "Caption (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "gallery-caption",
                  value: caption,
                  onChange: (e) => setCaption(e.target.value),
                  placeholder: "Enter image caption",
                  "data-ocid": "admin.gallery.caption_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "gallery-category", children: "Category (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "gallery-category",
                  value: category,
                  onChange: (e) => setCategory(e.target.value),
                  placeholder: "e.g., Gangtok, Lachung, Rooms",
                  "data-ocid": "admin.gallery.category_input"
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleAdd,
                disabled: isUploading || !preview,
                className: "w-full",
                "data-ocid": "admin.gallery.save_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-4 mr-2" }),
                  "Add Image"
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    images.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-muted/30 rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "size-12 text-muted-foreground/30 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No gallery images yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add images to showcase your properties" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: img.image.getDirectURL(),
                alt: img.caption ?? "Gallery image",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `admin.gallery.delete.${i + 1}`,
                onClick: () => handleRemove(img.id),
                className: "absolute top-2 right-2 p-2 rounded-full bg-destructive/90 text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity",
                "aria-label": "Delete image",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: img.caption ?? "Untitled" }),
            img.category && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: img.category })
          ] })
        ] })
      },
      img.id.toString()
    )) })
  ] });
}
export {
  GalleryManager as default
};
