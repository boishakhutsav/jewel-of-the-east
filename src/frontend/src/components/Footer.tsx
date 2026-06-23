import { useSiteSettings } from "@/hooks/useContent";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Booking & Refund Policy", href: "/booking-policy" },
  { label: "Admin", href: "/admin" },
];

const hotels = [
  {
    name: "Jewel Kongchen Retreat & Spa",
    location: "Lachung, Sikkim",
    tag: "Hotels in Lachung",
  },
  {
    name: "Jewel Himalayan Heights",
    location: "Gangtok, Sikkim",
    tag: "Hotels in Gangtok",
  },
];

const phoneNumbers = [
  { label: "+919831206897", href: "tel:+919831206897" },
  { label: "+918240293982", href: "tel:+918240293982" },
  { label: "+917602028800", href: "tel:+917602028800" },
];

export default function Footer() {
  const { data: settings } = useSiteSettings();
  const currentYear = new Date().getFullYear();

  const socialLinks = settings?.socialLinks ?? [];

  return (
    <footer className="bg-[#0B2B1B] border-t border-[#c9a96e]/20">
      {/* Brand Header */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#FDFBF7] tracking-tight">
            Jewel of the East
          </h2>
          <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.2em] uppercase">
            GROUP
          </span>
          <p className="text-sm text-[#FDFBF7]/70 leading-relaxed mt-3">
            Premium Boutique Hotels in Northeast India
          </p>
          {/* Decorative separator */}
          <div className="flex items-center gap-0 mt-5 max-w-xs mx-auto">
            <div className="h-px flex-1 bg-[#c9a96e]/30" />
            <div className="w-2 h-2 rounded-full bg-[#c9a96e] mx-2" />
            <div className="h-px flex-1 bg-[#c9a96e]/30" />
          </div>
        </div>
      </div>

      {/* Main Footer Content — 3 columns */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
          {/* Column 1: Our Hotels */}
          <div>
            <h3 className="text-[#c9a96e] text-sm font-semibold tracking-wider uppercase mb-5">
              Our Hotels
            </h3>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <div key={hotel.name}>
                  <p className="text-[#FDFBF7] text-sm font-medium">
                    {hotel.name}
                  </p>
                  <p className="text-[#FDFBF7]/60 text-xs">{hotel.location}</p>
                  <p className="text-[#c9a96e] text-xs font-semibold mt-0.5">
                    {hotel.tag}
                  </p>
                </div>
              ))}
              <p className="text-[#c9a96e] text-xs font-semibold mt-1">
                Hotels in Sikkim
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#c9a96e] text-sm font-semibold tracking-wider uppercase mb-5">
              Quick Links
            </h3>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid={`footer.quick_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  className="block text-sm text-[#FDFBF7]/70 hover:text-[#c9a96e] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-[#c9a96e] text-sm font-semibold tracking-wider uppercase mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-[#c9a96e] shrink-0 mt-0.5" />
                <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">
                  Jewel Himalayan Heights, PS Road, Diesel Power House Ward,
                  Gangtok 737101
                </p>
              </div>
              {/* Phone numbers */}
              <div className="space-y-1.5">
                {phoneNumbers.map((phone) => (
                  <a
                    key={phone.label}
                    href={phone.href}
                    data-ocid={`footer.phone.${phone.label}`}
                    className="flex items-center gap-3 text-sm text-[#FDFBF7]/70 hover:text-[#c9a96e] transition-colors duration-200"
                  >
                    <Phone className="size-4 text-[#c9a96e] shrink-0" />
                    {phone.label}
                  </a>
                ))}
              </div>
              {/* Email */}
              <a
                href="mailto:jote.gangtok@gmail.com"
                data-ocid="footer.email"
                className="flex items-center gap-3 text-sm text-[#FDFBF7]/70 hover:text-[#c9a96e] transition-colors duration-200"
              >
                <Mail className="size-4 text-[#c9a96e] shrink-0" />
                jote.gangtok@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Bar */}
      {socialLinks.length > 0 && (
        <div className="border-t border-[#c9a96e]/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={`social-${link.platform}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`footer.social.${link.platform.toLowerCase()}_link`}
                  className="text-sm text-[#FDFBF7]/70 hover:text-[#c9a96e] transition-colors duration-200"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="border-t border-[#c9a96e]/20 bg-[#071f14]">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#FDFBF7]/50">
            <p>
              &copy; {currentYear} Jewel of the East Group. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Erigeron Hospitality Pvt Ltd | PAN: AAFCE4960K | GSTIN:
              11AAFCE4960K1ZO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
