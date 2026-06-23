import { c as createLucideIcon, r as reactExports, f as useComposedRefs, h as useControllableState, j as jsxRuntimeExports, P as Primitive, b as composeEventHandlers, ah as usePrevious, ai as useSize, d as createContextScope, l as cn, n as useTestimonials, aj as useAddTestimonial, ak as useUpdateTestimonial, al as useRemoveTestimonial, U as Dialog, V as DialogTrigger, B as Button, W as Plus, Y as DialogContent, Z as DialogHeader, _ as DialogTitle, m as motion, C as Card, a as CardContent, a0 as Trash2, D as Label, E as Input, X } from "./index-DR0Be3dU.js";
import { T as Textarea } from "./textarea-C9Ukw41Y.js";
import { S as Star } from "./star-D2kfnEQ2.js";
import { S as SquarePen } from "./square-pen-ziOpfNRK.js";
import { S as Save } from "./save-B9o1_I_V.js";
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function TestimonialEditor({
  testimonial,
  onSave,
  onCancel
}) {
  const [name, setName] = reactExports.useState((testimonial == null ? void 0 : testimonial.name) ?? "");
  const [text, setText] = reactExports.useState((testimonial == null ? void 0 : testimonial.text) ?? "");
  const [location, setLocation] = reactExports.useState((testimonial == null ? void 0 : testimonial.location) ?? "");
  const [rating, setRating] = reactExports.useState(Number((testimonial == null ? void 0 : testimonial.rating) ?? 5));
  const [isActive, setIsActive] = reactExports.useState((testimonial == null ? void 0 : testimonial.isActive) ?? true);
  const handleSave = () => {
    onSave({
      id: (testimonial == null ? void 0 : testimonial.id) ?? BigInt(Date.now()),
      name,
      text,
      location: location || void 0,
      rating: BigInt(rating),
      isActive
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "t-name", children: "Guest Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "t-name",
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "e.g., Rahul Sharma",
          "data-ocid": "admin.testimonial.name_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "t-location", children: "Location (optional)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "t-location",
          value: location,
          onChange: (e) => setLocation(e.target.value),
          placeholder: "e.g., Mumbai, India",
          "data-ocid": "admin.testimonial.location_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "t-rating", children: "Rating (1-5)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "t-rating",
          type: "number",
          min: 1,
          max: 5,
          value: rating,
          onChange: (e) => setRating(Number(e.target.value)),
          "data-ocid": "admin.testimonial.rating_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "t-text", children: "Review Text" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          id: "t-text",
          value: text,
          onChange: (e) => setText(e.target.value),
          rows: 4,
          placeholder: "Share what the guest said...",
          "data-ocid": "admin.testimonial.text_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          id: "t-active",
          checked: isActive,
          onCheckedChange: setIsActive,
          "data-ocid": "admin.testimonial.active_switch"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "t-active", className: "cursor-pointer", children: "Active (shown on homepage)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: onCancel,
          "data-ocid": "admin.testimonial.cancel_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4 mr-2" }),
            "Cancel"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSave, "data-ocid": "admin.testimonial.save_button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-4 mr-2" }),
        "Save"
      ] })
    ] })
  ] });
}
function TestimonialsManager() {
  const { data: testimonials = [], isLoading } = useTestimonials();
  const addTestimonial = useAddTestimonial();
  const updateTestimonial = useUpdateTestimonial();
  const removeTestimonial = useRemoveTestimonial();
  const [editing, setEditing] = reactExports.useState(null);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const handleSave = async (t) => {
    if (editing) {
      await updateTestimonial.mutateAsync(t);
    } else {
      await addTestimonial.mutateAsync(t);
    }
    setEditing(null);
    setDialogOpen(false);
  };
  const handleRemove = async (id) => {
    if (!confirm("Are you sure you want to remove this testimonial?")) return;
    await removeTestimonial.mutateAsync(id);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage guest reviews and testimonials" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Dialog,
        {
          open: dialogOpen,
          onOpenChange: (open) => {
            setDialogOpen(open);
            if (!open) setEditing(null);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => setEditing(null),
                "data-ocid": "admin.testimonial.add_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 mr-2" }),
                  "Add Testimonial"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg max-h-[90vh] overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing ? "Edit Testimonial" : "Add Testimonial" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TestimonialEditor,
                {
                  testimonial: editing ?? void 0,
                  onSave: handleSave,
                  onCancel: () => {
                    setDialogOpen(false);
                    setEditing(null);
                  }
                }
              )
            ] })
          ]
        }
      )
    ] }),
    testimonials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-12 bg-muted/30 rounded-xl",
        "data-ocid": "admin.testimonial.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-12 text-muted-foreground/30 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No testimonials yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add guest reviews to showcase on the homepage" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-display font-bold text-sm", children: t.name.charAt(0).toUpperCase() }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: t.name }),
                t.location && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.location })
              ] })
            ] }),
            !t.isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground", children: "Inactive" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: Array.from({ length: 5 }).map((_, starIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: `size-3.5 ${starIdx < Number(t.rating) ? "text-warning fill-warning" : "text-muted-foreground/30"}`
            },
            `star-${starIdx}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground line-clamp-4 mb-4", children: [
            '"',
            t.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "flex-1",
                onClick: () => {
                  setEditing(t);
                  setDialogOpen(true);
                },
                "data-ocid": `admin.testimonial.${i + 1}.edit_button`,
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
                onClick: () => handleRemove(t.id),
                "data-ocid": `admin.testimonial.${i + 1}.delete_button`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-3.5" })
              }
            )
          ] })
        ] }) })
      },
      t.id.toString()
    )) })
  ] });
}
export {
  TestimonialsManager as default
};
