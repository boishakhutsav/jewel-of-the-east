import { J as useRoomTypes, H as useProperties, a9 as useAddRoomType, aa as useUpdateRoomType, ab as useRemoveRoomType, r as reactExports, j as jsxRuntimeExports, U as Dialog, V as DialogTrigger, B as Button, W as Plus, Y as DialogContent, Z as DialogHeader, _ as DialogTitle, m as motion, C as Card, M as MapPin, a as CardContent, a0 as Trash2, S as useImageUpload, T as useImagePreview, D as Label, ac as Select, ad as SelectTrigger, ae as SelectValue, af as SelectContent, ag as SelectItem, E as Input, X } from "./index-BtlS8pqB.js";
import { T as Textarea } from "./textarea-DceS1r9a.js";
import { S as SquarePen } from "./square-pen-hkRmVWsZ.js";
import { S as Save } from "./save-B1PWQJC_.js";
function RoomEditor({
  room,
  properties,
  onSave,
  onCancel
}) {
  const [name, setName] = reactExports.useState((room == null ? void 0 : room.name) ?? "");
  const [description, setDescription] = reactExports.useState((room == null ? void 0 : room.description) ?? "");
  const [price, setPrice] = reactExports.useState((room == null ? void 0 : room.pricePerNight) ?? "");
  const [capacity, setCapacity] = reactExports.useState((room == null ? void 0 : room.capacity) ?? "");
  const [propertyId, setPropertyId] = reactExports.useState(
    (room == null ? void 0 : room.propertyId.toString()) ?? ""
  );
  const [amenities, setAmenities] = reactExports.useState((room == null ? void 0 : room.amenities.join(", ")) ?? "");
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const fileInputRef = reactExports.useRef(null);
  const handleFileChange = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    await generatePreview(file);
  };
  const handleSave = async () => {
    var _a, _b;
    let thumbnail = room == null ? void 0 : room.thumbnail;
    const file = (_b = (_a = fileInputRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (file) {
      const blob = await upload(file);
      if (blob) thumbnail = blob;
    }
    onSave({
      id: (room == null ? void 0 : room.id) ?? BigInt(Date.now()),
      name,
      description,
      pricePerNight: price || void 0,
      capacity: capacity || void 0,
      propertyId: BigInt(propertyId),
      amenities: amenities.split(",").map((s) => s.trim()).filter(Boolean),
      thumbnail
    });
    clearPreview();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Property" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: propertyId, onValueChange: setPropertyId, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "admin.room.property_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select property" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: properties.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p.id.toString(), children: p.name }, p.id.toString())) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Room Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: name,
          onChange: (e) => setName(e.target.value),
          "data-ocid": "admin.room.name_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: description,
          onChange: (e) => setDescription(e.target.value),
          rows: 3,
          "data-ocid": "admin.room.description_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Price Per Night" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: price,
            onChange: (e) => setPrice(e.target.value),
            placeholder: "e.g., ₹3,500",
            "data-ocid": "admin.room.price_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Capacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: capacity,
            onChange: (e) => setCapacity(e.target.value),
            placeholder: "e.g., 2 Adults + 1 Child",
            "data-ocid": "admin.room.capacity_input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Amenities (comma-separated)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: amenities,
          onChange: (e) => setAmenities(e.target.value),
          placeholder: "TV, Heater, WiFi...",
          "data-ocid": "admin.room.amenities_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Thumbnail" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "file",
          accept: "image/*",
          ref: fileInputRef,
          onChange: handleFileChange,
          "data-ocid": "admin.room.image_input"
        }
      ),
      preview && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: preview,
          alt: "Preview",
          className: "mt-2 rounded-lg max-h-32 object-cover"
        }
      ),
      (room == null ? void 0 : room.thumbnail) && !preview && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: room.thumbnail.getDirectURL(),
          alt: room.name,
          className: "mt-2 rounded-lg max-h-32 object-cover"
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: onCancel,
          "data-ocid": "admin.room.cancel_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4 mr-2" }),
            "Cancel"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleSave,
          disabled: isUploading,
          "data-ocid": "admin.room.save_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-4 mr-2" }),
            "Save"
          ]
        }
      )
    ] })
  ] });
}
function RoomTypesManager() {
  const { data: rooms = [], isLoading: roomsLoading } = useRoomTypes();
  const { data: properties = [], isLoading: propsLoading } = useProperties();
  const addRoom = useAddRoomType();
  const updateRoom = useUpdateRoomType();
  const removeRoom = useRemoveRoomType();
  const [editingRoom, setEditingRoom] = reactExports.useState(null);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const handleSave = async (room) => {
    if (editingRoom) {
      await updateRoom.mutateAsync(room);
    } else {
      await addRoom.mutateAsync(room);
    }
    setEditingRoom(null);
    setDialogOpen(false);
  };
  const handleRemove = async (id) => {
    if (!confirm("Are you sure you want to remove this room type?")) return;
    await removeRoom.mutateAsync(id);
  };
  if (roomsLoading || propsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  const propertyMap = new Map(properties.map((p) => [p.id.toString(), p.name]));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Room Types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage room types, pricing, and descriptions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Dialog,
        {
          open: dialogOpen,
          onOpenChange: (open) => {
            setDialogOpen(open);
            if (!open) setEditingRoom(null);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => setEditingRoom(null),
                "data-ocid": "admin.room.add_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 mr-2" }),
                  "Add Room"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg max-h-[90vh] overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingRoom ? "Edit Room" : "Add Room" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RoomEditor,
                {
                  room: editingRoom ?? void 0,
                  properties,
                  onSave: handleSave,
                  onCancel: () => {
                    setDialogOpen(false);
                    setEditingRoom(null);
                  }
                }
              )
            ] })
          ]
        }
      )
    ] }),
    rooms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-muted/30 rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No room types yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add room types to display on property pages" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: rooms.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-40", children: room.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: room.thumbnail.getDirectURL(),
              alt: room.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-8 text-muted-foreground/30" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: room.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: propertyMap.get(room.propertyId.toString()) ?? "Unknown" })
              ] }),
              room.pricePerNight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: room.pricePerNight })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mb-3", children: room.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => {
                    setEditingRoom(room);
                    setDialogOpen(true);
                  },
                  "data-ocid": `admin.room.${i + 1}.edit_button`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-3.5 mr-1.5" }),
                    "Edit"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "text-destructive hover:bg-destructive/10",
                  onClick: () => handleRemove(room.id),
                  "data-ocid": `admin.room.${i + 1}.delete_button`,
                  "aria-label": "Delete room type",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-3.5" })
                }
              )
            ] })
          ] })
        ] })
      },
      room.id.toString()
    )) })
  ] });
}
export {
  RoomTypesManager as default
};
