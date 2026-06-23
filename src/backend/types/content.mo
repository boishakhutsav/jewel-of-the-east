import Storage "mo:caffeineai-object-storage/Storage";
import Debug "mo:core/Debug";

module {
  public type SiteSettings = {
    logo : ?Storage.ExternalBlob;
    footerText : Text;
    socialLinks : [SocialLink];
    contactInfo : ContactInfo;
    bookingUrl : ?Text;
  };

  public type SocialLink = {
    platform : Text;
    url : Text;
  };

  public type ContactInfo = {
    phone : Text;
    whatsapp : ?Text;
    email : Text;
    address : Text;
  };

  public type HeroSlide = {
    id : Nat;
    image : Storage.ExternalBlob;
    caption : ?Text;
    order : Nat;
  };

  public type PropertyGalleryImage = {
    id : Nat;
    propertyId : Text;
    image : Storage.ExternalBlob;
    caption : ?Text;
    order : Nat;
  };

  public type GalleryImage = {
    id : Nat;
    image : Storage.ExternalBlob;
    caption : ?Text;
    category : ?Text;
    order : Nat;
  };

  public type Property = {
    id : Nat;
    name : Text;
    description : Text;
    location : Text;
    amenities : [Text];
    highlights : [Text];
    heroImage : ?Storage.ExternalBlob;
    bookingUrl : ?Text;
  };

  public type RoomType = {
    id : Nat;
    propertyId : Nat;
    name : Text;
    description : Text;
    thumbnail : ?Storage.ExternalBlob;
    pricePerNight : ?Text;
    capacity : ?Text;
    amenities : [Text];
  };

  public type Testimonial = {
    id : Nat;
    name : Text;
    location : ?Text;
    text : Text;
    rating : Nat;
    avatar : ?Storage.ExternalBlob;
    isActive : Bool;
  };

  public type PolicyContent = {
    id : Nat;
    slug : Text;
    title : Text;
    body : Text;
    lastUpdated : Int;
  };

  public type AboutUsContent = {
    title : Text;
    content : Text;
    mission : ?Text;
    vision : ?Text;
    teamImage : ?Storage.ExternalBlob;
  };
}
