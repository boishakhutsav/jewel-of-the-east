import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import {
  BedDouble,
  Building2,
  ChevronLeft,
  FileText,
  Image,
  Images,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  MessageSquareQuote,
  Settings,
  Shield,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Hero Carousel", href: "/admin/hero", icon: Image },
  { label: "Gallery", href: "/admin/gallery", icon: Images },
  {
    label: "Property Gallery",
    href: "/admin/property-gallery",
    icon: Images,
  },
  { label: "Properties", href: "/admin/properties", icon: Building2 },
  { label: "Room Types", href: "/admin/rooms", icon: BedDouble },
  {
    label: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  { label: "About Us", href: "/admin/about", icon: FileText },
  { label: "Policies", href: "/admin/policies", icon: Shield },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, isLoading, login, logout, email } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

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

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-card border-r shrink-0">
        <div className="p-4 border-b flex items-center gap-3">
          <Link to="/" data-ocid="admin.sidebar.logo_link">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">
                  J
                </span>
              </div>
              <span className="font-display font-semibold text-foreground">
                Admin
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {adminNavItems.map((item) => {
            const active =
              item.href === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                data-ocid={`admin.sidebar.nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t">
          <button
            type="button"
            data-ocid="admin.sidebar.back_button"
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth w-full"
          >
            <ChevronLeft className="size-4 shrink-0" />
            Back to Site
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSidebarOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">
                  J
                </span>
              </div>
              <span className="font-display font-semibold text-foreground">
                Admin
              </span>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Close sidebar"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="p-3 space-y-1">
          {adminNavItems.map((item) => {
            const active =
              item.href === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 bg-card border-b flex items-center justify-between px-4 lg:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="admin.mobile_menu_button"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              aria-label="Open sidebar"
            >
              <Menu className="size-5" />
            </button>
            <h1 className="font-display font-semibold text-foreground">
              {adminNavItems.find((i) =>
                i.href === "/admin"
                  ? location.pathname === "/admin"
                  : location.pathname.startsWith(i.href),
              )?.label ?? "Admin"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  {email}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  data-ocid="admin.logout_button"
                >
                  <LogOut className="size-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                onClick={() => navigate("/admin")}
                data-ocid="admin.login_button"
              >
                <LogIn className="size-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {!isLoggedIn && isAdminRoute ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
              <div className="text-center max-w-md w-full">
                <LogIn className="size-12 text-muted-foreground/40 mx-auto mb-4" />
                <h2 className="font-display text-xl font-bold text-foreground mb-2">
                  Admin Access Required
                </h2>
                <p className="text-muted-foreground mb-6">
                  Please log in with your admin credentials to access the
                  dashboard.
                </p>
                <div className="space-y-4 text-left">
                  <div>
                    <Label htmlFor="admin-email">Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="admin@example.com"
                      data-ocid="admin.login_email_input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="admin-password">Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter password"
                      data-ocid="admin.login_password_input"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleLogin();
                      }}
                    />
                  </div>
                  {loginError && (
                    <p className="text-sm text-destructive">{loginError}</p>
                  )}
                  <Button
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                    className="w-full"
                    data-ocid="admin.login_cta_button"
                  >
                    {isLoggingIn ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Logging in...
                      </>
                    ) : (
                      <>
                        <LogIn className="size-4 mr-2" />
                        Login
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ) : isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading...</p>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
}
