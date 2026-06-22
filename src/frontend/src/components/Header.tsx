import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/hooks/useContent";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gangtok", href: "/hotels/jewel-himalayan-heights" },
  { label: "Lachung", href: "/hotels/jewel-kongchen-retreat" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { data: settings } = useSiteSettings();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B2B1B] border-b border-[#1a4a2e]/60 shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          data-ocid="header.logo_link"
        >
          {settings?.logo ? (
            <img
              src={settings.logo.getDirectURL()}
              alt="Jewel of the East"
              className="h-10 w-auto object-contain"
            />
          ) : (
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display text-lg font-bold">
                J
              </span>
            </div>
          )}
          <span className="font-display text-lg font-semibold text-[#FDFBF7] hidden sm:inline tracking-wide">
            Jewel of the East
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              data-ocid={`header.nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                isActive(item.href)
                  ? "text-[#c9a96e] bg-[#c9a96e]/10"
                  : "text-[#FDFBF7]/70 hover:text-[#FDFBF7] hover:bg-[#FDFBF7]/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {settings?.contactInfo?.phone && (
            <a
              href={`tel:${settings.contactInfo.phone}`}
              data-ocid="header.phone_link"
              className="flex items-center gap-2 text-sm text-[#c9a96e] hover:text-[#c9a96e]/80 transition-smooth"
            >
              <Phone className="size-4" />
              <span>{settings.contactInfo.phone}</span>
            </a>
          )}
        </div>

        <button
          type="button"
          data-ocid="header.mobile_menu_button"
          className="md:hidden p-2 rounded-md hover:bg-[#FDFBF7]/10 transition-smooth text-[#FDFBF7]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#1a4a2e]/60 bg-[#0B2B1B]">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                data-ocid={`header.mobile_nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? "text-[#c9a96e] bg-[#c9a96e]/10"
                    : "text-[#FDFBF7]/70 hover:text-[#FDFBF7] hover:bg-[#FDFBF7]/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t pt-3 mt-2 flex flex-col gap-2">
              {settings?.contactInfo?.phone && (
                <a
                  href={`tel:${settings.contactInfo.phone}`}
                  data-ocid="header.mobile_phone_link"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-[#c9a96e]"
                >
                  <Phone className="size-4" />
                  {settings.contactInfo.phone}
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
