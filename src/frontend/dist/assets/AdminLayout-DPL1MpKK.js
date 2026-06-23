import { c as createLucideIcon, x as useLocation, y as useNavigate, z as useAuth, r as reactExports, j as jsxRuntimeExports, L as Link, I as Image, X, A as Menu, B as Button, D as Label, E as Input, O as Outlet } from "./index-BUTaEtEs.js";
import { I as Images, B as Building2, a as BedDouble, M as MessageSquareQuote, S as Settings } from "./settings-CUJomGGe.js";
import { F as FileText } from "./file-text-DyEU1EHV.js";
import { S as Shield } from "./shield-CRVKEkAD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode);
const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Hero Carousel", href: "/admin/hero", icon: Image },
  { label: "Gallery", href: "/admin/gallery", icon: Images },
  {
    label: "Property Gallery",
    href: "/admin/property-gallery",
    icon: Images
  },
  { label: "Properties", href: "/admin/properties", icon: Building2 },
  { label: "Room Types", href: "/admin/rooms", icon: BedDouble },
  {
    label: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquareQuote
  },
  { label: "About Us", href: "/admin/about", icon: FileText },
  { label: "Policies", href: "/admin/policies", icon: Shield },
  { label: "Settings", href: "/admin/settings", icon: Settings }
];
function AdminLayout() {
  var _a;
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, isLoading, login, logout, email } = useAuth();
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [loginEmail, setLoginEmail] = reactExports.useState("");
  const [loginPassword, setLoginPassword] = reactExports.useState("");
  const [loginError, setLoginError] = reactExports.useState("");
  const [isLoggingIn, setIsLoggingIn] = reactExports.useState(false);
  const isLoggedIn = isAdmin;
  const isAdminRoute = location.pathname !== "/admin";
  const handleLogin = async () => {
    setLoginError("");
    setIsLoggingIn(true);
    const success = await login(loginEmail, loginPassword);
    setIsLoggingIn(false);
    if (!success) {
      setLoginError("Invalid email or password");
    }
  };
  const handleLogout = () => {
    logout();
    setLoginEmail("");
    setLoginPassword("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex flex-col w-64 bg-card border-r shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "data-ocid": "admin.sidebar.logo_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-display font-bold", children: "J" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground", children: "Admin" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 p-3 space-y-1 overflow-y-auto", children: adminNavItems.map((item) => {
        const active = item.href === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(item.href);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.href,
            "data-ocid": `admin.sidebar.nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`,
            className: `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "size-4 shrink-0" }),
              item.label
            ]
          },
          item.href
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "admin.sidebar.back_button",
          onClick: () => navigate("/"),
          className: "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth w-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4 shrink-0" }),
            "Back to Site"
          ]
        }
      ) })
    ] }),
    sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
        onClick: () => setSidebarOpen(false),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSidebarOpen(false);
          }
        },
        role: "button",
        tabIndex: 0,
        "aria-label": "Close sidebar overlay"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: `fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform lg:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", onClick: () => setSidebarOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-display font-bold", children: "J" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground", children: "Admin" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSidebarOpen(false),
                className: "p-2 rounded-md hover:bg-muted",
                "aria-label": "Close sidebar",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "p-3 space-y-1", children: adminNavItems.map((item) => {
            const active = item.href === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(item.href);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: item.href,
                onClick: () => setSidebarOpen(false),
                className: `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "size-4 shrink-0" }),
                  item.label
                ]
              },
              item.href
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-14 bg-card border-b flex items-center justify-between px-4 lg:px-6 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "admin.mobile_menu_button",
              onClick: () => setSidebarOpen(true),
              className: "lg:hidden p-2 rounded-md hover:bg-muted",
              "aria-label": "Open sidebar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold text-foreground", children: ((_a = adminNavItems.find(
            (i) => i.href === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(i.href)
          )) == null ? void 0 : _a.label) ?? "Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground hidden sm:inline", children: email }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleLogout,
              "data-ocid": "admin.logout_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-4 mr-2" }),
                "Logout"
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: () => navigate("/admin"),
            "data-ocid": "admin.login_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-4 mr-2" }),
              "Login"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 lg:p-6 overflow-y-auto", children: !isLoggedIn && isAdminRoute ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center min-h-[50vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-12 text-muted-foreground/40 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-2", children: "Admin Access Required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Please log in with your admin credentials to access the dashboard." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "admin-email",
                type: "email",
                value: loginEmail,
                onChange: (e) => setLoginEmail(e.target.value),
                placeholder: "admin@example.com",
                "data-ocid": "admin.login_email_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "admin-password",
                type: "password",
                value: loginPassword,
                onChange: (e) => setLoginPassword(e.target.value),
                placeholder: "Enter password",
                "data-ocid": "admin.login_password_input",
                onKeyDown: (e) => {
                  if (e.key === "Enter") handleLogin();
                }
              }
            )
          ] }),
          loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: loginError }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleLogin,
              disabled: isLoggingIn,
              className: "w-full",
              "data-ocid": "admin.login_cta_button",
              children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" }),
                "Logging in..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-4 mr-2" }),
                "Login"
              ] })
            }
          )
        ] })
      ] }) }) : isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center min-h-[50vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading..." })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
export {
  AdminLayout as default
};
