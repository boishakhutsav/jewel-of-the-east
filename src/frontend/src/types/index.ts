import type { PropertyGalleryImage } from "@/backend";
import type {
  AboutUsContent,
  ContactInfo,
  GalleryImage,
  HeroSlide,
  PolicyContent,
  Property,
  RoomType,
  SiteSettings,
  SocialLink,
  Testimonial,
} from "@/backend";

export type {
  AboutUsContent,
  ContactInfo,
  GalleryImage,
  HeroSlide,
  PolicyContent,
  Property,
  PropertyGalleryImage,
  RoomType,
  SiteSettings,
  SocialLink,
  Testimonial,
};

export interface PropertyInput {
  name: string;
  description: string;
  location: string;
  amenities: string[];
  highlights: string[];
  heroImage?: import("@/backend").ExternalBlob;
  bookingUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface AdminNavItem {
  label: string;
  href: string;
  icon: string;
}
