import Debug "mo:core/Debug";
import List "mo:core/List";
import Map "mo:core/Map";
import Storage "mo:caffeineai-object-storage/Storage";
import Types "../types/content";

module {
  public type ContentState = {
    var siteSettings : Types.SiteSettings;
    var heroSlides : List.List<Types.HeroSlide>;
    var galleryImages : List.List<Types.GalleryImage>;
    var properties : List.List<Types.Property>;
    var roomTypes : List.List<Types.RoomType>;
    var testimonials : List.List<Types.Testimonial>;
    var policies : List.List<Types.PolicyContent>;
    var aboutUs : Types.AboutUsContent;
    var nextId : Nat;
  };

  public func initState() : ContentState {
    {
      var siteSettings = {
        logo = null;
        footerText = "";
        socialLinks = [];
        contactInfo = {
          phone = "";
          whatsapp = null;
          email = "";
          address = "";
        };
        bookingUrl = null;
      };
      var heroSlides = List.empty<Types.HeroSlide>();
      var galleryImages = List.empty<Types.GalleryImage>();
      var properties = List.empty<Types.Property>();
      var roomTypes = List.empty<Types.RoomType>();
      var testimonials = List.empty<Types.Testimonial>();
      var aboutUs = {
        title = "";
        content = "";
        mission = null;
        vision = null;
        teamImage = null;
      };
      var policies = List.empty<Types.PolicyContent>();
      var nextId = 1;
    };
  };

  public func getSiteSettings(state : ContentState) : Types.SiteSettings {
    state.siteSettings;
  };

  public func setSiteSettings(state : ContentState, settings : Types.SiteSettings) {
    state.siteSettings := settings;
  };

  public func getHeroSlides(state : ContentState) : [Types.HeroSlide] {
    state.heroSlides.toArray();
  };

  public func addHeroSlide(state : ContentState, slide : Types.HeroSlide) {
    state.heroSlides.add(slide);
  };

  public func updateHeroSlide(state : ContentState, slide : Types.HeroSlide) {
    state.heroSlides.mapInPlace(
      func(s) {
        if (s.id == slide.id) { slide } else { s };
      }
    );
  };

  public func removeHeroSlide(state : ContentState, id : Nat) {
    let filtered = state.heroSlides.filter(func(s) { s.id != id });
    state.heroSlides := filtered;
  };

  public func getGalleryImages(state : ContentState) : [Types.GalleryImage] {
    state.galleryImages.toArray();
  };

  public func addGalleryImage(state : ContentState, image : Types.GalleryImage) {
    state.galleryImages.add(image);
  };

  public func updateGalleryImage(state : ContentState, image : Types.GalleryImage) {
    state.galleryImages.mapInPlace(
      func(img) {
        if (img.id == image.id) { image } else { img };
      }
    );
  };

  public func removeGalleryImage(state : ContentState, id : Nat) {
    let filtered = state.galleryImages.filter(func(img) { img.id != id });
    state.galleryImages := filtered;
  };

  public func getProperties(state : ContentState) : [Types.Property] {
    state.properties.toArray();
  };

  public func addProperty(state : ContentState, property : Types.Property) {
    state.properties.add(property);
  };

  public func updateProperty(state : ContentState, property : Types.Property) {
    state.properties.mapInPlace(
      func(p) {
        if (p.id == property.id) { property } else { p };
      }
    );
  };

  public func removeProperty(state : ContentState, id : Nat) {
    let filtered = state.properties.filter(func(p) { p.id != id });
    state.properties := filtered;
  };

  public func getRoomTypes(state : ContentState) : [Types.RoomType] {
    state.roomTypes.toArray();
  };

  public func getRoomTypesByProperty(state : ContentState, propertyId : Nat) : [Types.RoomType] {
    state.roomTypes.filter(func(r) { r.propertyId == propertyId }).toArray();
  };

  public func addRoomType(state : ContentState, room : Types.RoomType) {
    state.roomTypes.add(room);
  };

  public func updateRoomType(state : ContentState, room : Types.RoomType) {
    state.roomTypes.mapInPlace(
      func(r) {
        if (r.id == room.id) { room } else { r };
      }
    );
  };

  public func removeRoomType(state : ContentState, id : Nat) {
    let filtered = state.roomTypes.filter(func(r) { r.id != id });
    state.roomTypes := filtered;
  };

  public func getTestimonials(state : ContentState) : [Types.Testimonial] {
    state.testimonials.filter(func(t) { t.isActive }).toArray();
  };

  public func getAllTestimonials(state : ContentState) : [Types.Testimonial] {
    state.testimonials.toArray();
  };

  public func addTestimonial(state : ContentState, testimonial : Types.Testimonial) {
    state.testimonials.add(testimonial);
  };

  public func updateTestimonial(state : ContentState, testimonial : Types.Testimonial) {
    state.testimonials.mapInPlace(
      func(t) {
        if (t.id == testimonial.id) { testimonial } else { t };
      }
    );
  };

  public func removeTestimonial(state : ContentState, id : Nat) {
    let filtered = state.testimonials.filter(func(t) { t.id != id });
    state.testimonials := filtered;
  };

  public func getPolicies(state : ContentState) : [Types.PolicyContent] {
    state.policies.toArray();
  };

  public func getPolicyBySlug(state : ContentState, slug : Text) : ?Types.PolicyContent {
    state.policies.find(func(p) { p.slug == slug });
  };

  public func setPolicy(state : ContentState, policy : Types.PolicyContent) {
    let existing = state.policies.find(func(p) { p.slug == policy.slug });
    switch (existing) {
      case (?_) {
        state.policies.mapInPlace(
          func(p) {
            if (p.slug == policy.slug) { policy } else { p };
          }
        );
      };
      case (null) {
        state.policies.add(policy);
      };
    };
  };

  public func getAboutUs(state : ContentState) : Types.AboutUsContent {
    state.aboutUs;
  };

  public func setAboutUs(state : ContentState, content : Types.AboutUsContent) {
    state.aboutUs := content;
  };

  public func getNextId(state : ContentState) : Nat {
    let id = state.nextId;
    state.nextId += 1;
    id;
  };
}
