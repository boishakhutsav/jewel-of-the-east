import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  type OldActor = {};

  type UserRole = {
    #admin;
    #user;
    #guest;
  };

  type NewActor = {
    var accessControlState : {
      var adminAssigned : Bool;
      userRoles : Map.Map<Principal, UserRole>;
    };
    var contentState : {
      var siteSettings : {
        logo : ?Storage.ExternalBlob;
        footerText : Text;
        socialLinks : [{ platform : Text; url : Text }];
        contactInfo : {
          phone : Text;
          whatsapp : ?Text;
          email : Text;
          address : Text;
        };
        bookingUrl : ?Text;
      };
      var heroSlides : List.List<{
        id : Nat;
        image : Storage.ExternalBlob;
        caption : ?Text;
        order : Nat;
      }>;
      var galleryImages : List.List<{
        id : Nat;
        image : Storage.ExternalBlob;
        caption : ?Text;
        category : ?Text;
        order : Nat;
      }>;
      var properties : List.List<{
        id : Nat;
        name : Text;
        description : Text;
        amenities : [Text];
        highlights : [Text];
        heroImage : ?Storage.ExternalBlob;
        bookingUrl : ?Text;
      }>;
      var roomTypes : List.List<{
        id : Nat;
        propertyId : Nat;
        name : Text;
        description : Text;
        thumbnail : ?Storage.ExternalBlob;
        pricePerNight : ?Text;
        capacity : ?Text;
        amenities : [Text];
      }>;
      var testimonials : List.List<{
        id : Nat;
        name : Text;
        location : ?Text;
        text : Text;
        rating : Nat;
        avatar : ?Storage.ExternalBlob;
        isActive : Bool;
      }>;
      var aboutUs : {
        title : Text;
        content : Text;
        mission : ?Text;
        vision : ?Text;
        teamImage : ?Storage.ExternalBlob;
      };
      var nextId : Nat;
    };
  };

  public func migration(old : OldActor) : NewActor {
    let emptySiteSettings = {
      logo = null : ?Storage.ExternalBlob;
      footerText = "";
      socialLinks = [] : [{ platform : Text; url : Text }];
      contactInfo = {
        phone = "";
        whatsapp = null : ?Text;
        email = "";
        address = "";
      };
      bookingUrl = null : ?Text;
    };
    let emptyHeroSlides = List.empty<{
      id : Nat;
      image : Storage.ExternalBlob;
      caption : ?Text;
      order : Nat;
    }>();
    let emptyGalleryImages = List.empty<{
      id : Nat;
      image : Storage.ExternalBlob;
      caption : ?Text;
      category : ?Text;
      order : Nat;
    }>();
    let emptyProperties = List.empty<{
      id : Nat;
      name : Text;
      description : Text;
      amenities : [Text];
      highlights : [Text];
      heroImage : ?Storage.ExternalBlob;
      bookingUrl : ?Text;
    }>();
    let emptyRoomTypes = List.empty<{
      id : Nat;
      propertyId : Nat;
      name : Text;
      description : Text;
      thumbnail : ?Storage.ExternalBlob;
      pricePerNight : ?Text;
      capacity : ?Text;
      amenities : [Text];
    }>();
    let emptyTestimonials = List.empty<{
      id : Nat;
      name : Text;
      location : ?Text;
      text : Text;
      rating : Nat;
      avatar : ?Storage.ExternalBlob;
      isActive : Bool;
    }>();
    let emptyAboutUs = {
      title = "";
      content = "";
      mission = null : ?Text;
      vision = null : ?Text;
      teamImage = null : ?Storage.ExternalBlob;
    };
    {
      var accessControlState = {
        var adminAssigned = false;
        userRoles = Map.empty<Principal, UserRole>();
      };
      var contentState = {
        var siteSettings = emptySiteSettings;
        var heroSlides = emptyHeroSlides;
        var galleryImages = emptyGalleryImages;
        var properties = emptyProperties;
        var roomTypes = emptyRoomTypes;
        var testimonials = emptyTestimonials;
        var aboutUs = emptyAboutUs;
        var nextId = 1;
      };
    };
  };
}
