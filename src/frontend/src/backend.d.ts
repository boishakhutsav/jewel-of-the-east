import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface PolicyContent {
    id: bigint;
    title: string;
    body: string;
    slug: string;
    lastUpdated: bigint;
}
export interface SocialLink {
    url: string;
    platform: string;
}
export interface RoomType {
    id: bigint;
    thumbnail?: ExternalBlob;
    pricePerNight?: string;
    name: string;
    description: string;
    propertyId: bigint;
    amenities: Array<string>;
    capacity?: string;
}
export interface HeroSlide {
    id: bigint;
    order: bigint;
    caption?: string;
    image: ExternalBlob;
}
export interface AboutUsContent {
    title: string;
    content: string;
    mission?: string;
    teamImage?: ExternalBlob;
    vision?: string;
}
export interface Property {
    id: bigint;
    name: string;
    description: string;
    amenities: Array<string>;
    highlights: Array<string>;
    heroImage?: ExternalBlob;
    bookingUrl?: string;
    location: string;
}
export interface SiteSettings {
    contactInfo: ContactInfo;
    socialLinks: Array<SocialLink>;
    logo?: ExternalBlob;
    bookingUrl?: string;
    footerText: string;
}
export interface GalleryImage {
    id: bigint;
    order: bigint;
    caption?: string;
    category?: string;
    image: ExternalBlob;
}
export interface ContactInfo {
    whatsapp?: string;
    email: string;
    address: string;
    phone: string;
}
export interface Testimonial {
    id: bigint;
    name: string;
    text: string;
    isActive: boolean;
    rating: bigint;
    location?: string;
    avatar?: ExternalBlob;
}
export interface backendInterface {
    addGalleryImage(image: GalleryImage, email: string, password: string): Promise<void>;
    addHeroSlide(slide: HeroSlide, email: string, password: string): Promise<void>;
    addProperty(property: Property, email: string, password: string): Promise<void>;
    addRoomType(room: RoomType, email: string, password: string): Promise<void>;
    addTestimonial(testimonial: Testimonial, email: string, password: string): Promise<void>;
    getAboutUs(): Promise<AboutUsContent>;
    getAllTestimonials(email: string, password: string): Promise<Array<Testimonial>>;
    getGalleryImages(): Promise<Array<GalleryImage>>;
    getHeroSlides(): Promise<Array<HeroSlide>>;
    getNextId(): Promise<bigint>;
    getPolicies(): Promise<Array<PolicyContent>>;
    getPolicyBySlug(slug: string): Promise<PolicyContent | null>;
    getProperties(): Promise<Array<Property>>;
    getRoomTypes(): Promise<Array<RoomType>>;
    getRoomTypesByProperty(propertyId: bigint): Promise<Array<RoomType>>;
    getSiteSettings(): Promise<SiteSettings>;
    getTestimonials(): Promise<Array<Testimonial>>;
    login(email: string, password: string): Promise<boolean>;
    removeGalleryImage(id: bigint, email: string, password: string): Promise<void>;
    removeHeroSlide(id: bigint, email: string, password: string): Promise<void>;
    removeProperty(id: bigint, email: string, password: string): Promise<void>;
    removeRoomType(id: bigint, email: string, password: string): Promise<void>;
    removeTestimonial(id: bigint, email: string, password: string): Promise<void>;
    setAboutUs(content: AboutUsContent, email: string, password: string): Promise<void>;
    setPolicy(policy: PolicyContent, email: string, password: string): Promise<void>;
    setSiteSettings(settings: SiteSettings, email: string, password: string): Promise<void>;
    updateGalleryImage(image: GalleryImage, email: string, password: string): Promise<void>;
    updateHeroSlide(slide: HeroSlide, email: string, password: string): Promise<void>;
    updateProperty(property: Property, email: string, password: string): Promise<void>;
    updateRoomType(room: RoomType, email: string, password: string): Promise<void>;
    updateTestimonial(testimonial: Testimonial, email: string, password: string): Promise<void>;
    verifyAdmin(email: string, password: string): Promise<boolean>;
}
