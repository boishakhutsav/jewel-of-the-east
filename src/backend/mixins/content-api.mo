import Debug "mo:core/Debug";
import Runtime "mo:core/Runtime";
import Types "../types/content";
import ContentLib "../lib/content";
import AuthLib "../lib/auth";

mixin (
  contentState : ContentLib.ContentState,
) {
  // Site Settings
  public query func getSiteSettings() : async Types.SiteSettings {
    ContentLib.getSiteSettings(contentState);
  };

  public shared func setSiteSettings(settings : Types.SiteSettings, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update site settings");
    };
    ContentLib.setSiteSettings(contentState, settings);
  };

  // Hero Slides
  public query func getHeroSlides() : async [Types.HeroSlide] {
    ContentLib.getHeroSlides(contentState);
  };

  public shared func addHeroSlide(slide : Types.HeroSlide, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can add hero slides");
    };
    ContentLib.addHeroSlide(contentState, slide);
  };

  public shared func updateHeroSlide(slide : Types.HeroSlide, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update hero slides");
    };
    ContentLib.updateHeroSlide(contentState, slide);
  };

  public shared func removeHeroSlide(id : Nat, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can remove hero slides");
    };
    ContentLib.removeHeroSlide(contentState, id);
  };

  // Gallery Images
  public query func getGalleryImages() : async [Types.GalleryImage] {
    ContentLib.getGalleryImages(contentState);
  };

  public shared func addGalleryImage(image : Types.GalleryImage, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can add gallery images");
    };
    ContentLib.addGalleryImage(contentState, image);
  };

  public shared func updateGalleryImage(image : Types.GalleryImage, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update gallery images");
    };
    ContentLib.updateGalleryImage(contentState, image);
  };

  public shared func removeGalleryImage(id : Nat, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can remove gallery images");
    };
    ContentLib.removeGalleryImage(contentState, id);
  };

  // Property Gallery Images
  public query func getPropertyGalleryImages(propertyId : Text) : async [Types.PropertyGalleryImage] {
    ContentLib.getPropertyGalleryImages(contentState, propertyId);
  };

  public shared func addPropertyGalleryImage(image : Types.PropertyGalleryImage, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can add property gallery images");
    };
    let count = ContentLib.getPropertyGalleryImageCount(contentState, image.propertyId);
    if (count >= 12) {
      Runtime.trap("Maximum 12 images per property reached");
    };
    let newId = ContentLib.getNextId(contentState);
    let imageWithId = { image with id = newId };
    ContentLib.addPropertyGalleryImage(contentState, imageWithId);
  };

  public shared func removePropertyGalleryImage(id : Nat, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can remove property gallery images");
    };
    ContentLib.removePropertyGalleryImage(contentState, id);
  };

  // Properties
  public query func getProperties() : async [Types.Property] {
    ContentLib.getProperties(contentState);
  };

  public shared func addProperty(property : Types.Property, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can add properties");
    };
    let newId = ContentLib.getNextId(contentState);
    let propertyWithId = { property with id = newId };
    ContentLib.addProperty(contentState, propertyWithId);
  };

  public shared func updateProperty(property : Types.Property, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update properties");
    };
    ContentLib.updateProperty(contentState, property);
  };

  public shared func removeProperty(id : Nat, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can remove properties");
    };
    ContentLib.removeProperty(contentState, id);
  };

  // Room Types
  public query func getRoomTypes() : async [Types.RoomType] {
    ContentLib.getRoomTypes(contentState);
  };

  public query func getRoomTypesByProperty(propertyId : Nat) : async [Types.RoomType] {
    ContentLib.getRoomTypesByProperty(contentState, propertyId);
  };

  public shared func addRoomType(room : Types.RoomType, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can add room types");
    };
    ContentLib.addRoomType(contentState, room);
  };

  public shared func updateRoomType(room : Types.RoomType, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update room types");
    };
    ContentLib.updateRoomType(contentState, room);
  };

  public shared func removeRoomType(id : Nat, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can remove room types");
    };
    ContentLib.removeRoomType(contentState, id);
  };

  // Testimonials
  public query func getTestimonials() : async [Types.Testimonial] {
    ContentLib.getTestimonials(contentState);
  };

  public shared func getAllTestimonials(email : Text, password : Text) : async [Types.Testimonial] {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can view all testimonials");
    };
    ContentLib.getAllTestimonials(contentState);
  };

  public shared func addTestimonial(testimonial : Types.Testimonial, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can add testimonials");
    };
    ContentLib.addTestimonial(contentState, testimonial);
  };

  public shared func updateTestimonial(testimonial : Types.Testimonial, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update testimonials");
    };
    ContentLib.updateTestimonial(contentState, testimonial);
  };

  public shared func removeTestimonial(id : Nat, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can remove testimonials");
    };
    ContentLib.removeTestimonial(contentState, id);
  };

  // About Us
  public query func getAboutUs() : async Types.AboutUsContent {
    ContentLib.getAboutUs(contentState);
  };

  public shared func setAboutUs(content : Types.AboutUsContent, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update About Us");
    };
    ContentLib.setAboutUs(contentState, content);
  };

  // Policies
  public query func getPolicies() : async [Types.PolicyContent] {
    ContentLib.getPolicies(contentState);
  };

  public query func getPolicyBySlug(slug : Text) : async ?Types.PolicyContent {
    ContentLib.getPolicyBySlug(contentState, slug);
  };

  public shared func setPolicy(policy : Types.PolicyContent, email : Text, password : Text) : async () {
    if (not AuthLib.verifyAdmin(email, password)) {
      Runtime.trap("Unauthorized: Only admins can update policies");
    };
    ContentLib.setPolicy(contentState, policy);
  };

  // Utility
  public query func getNextId() : async Nat {
    ContentLib.getNextId(contentState);
  };
}
