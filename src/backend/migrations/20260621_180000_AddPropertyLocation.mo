import List "mo:core/List";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  type OldActor = {
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
      var policies : List.List<{
        id : Nat;
        slug : Text;
        title : Text;
        body : Text;
        lastUpdated : Int;
      }>;
      var nextId : Nat;
    };
  };

  type NewActor = {
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
        location : Text;
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
      var policies : List.List<{
        id : Nat;
        slug : Text;
        title : Text;
        body : Text;
        lastUpdated : Int;
      }>;
      var nextId : Nat;
    };
  };

  public func migration(old : OldActor) : NewActor {
    let oldProperties = old.contentState.properties;
    let newProperties = oldProperties.map<{
      id : Nat;
      name : Text;
      description : Text;
      amenities : [Text];
      highlights : [Text];
      heroImage : ?Storage.ExternalBlob;
      bookingUrl : ?Text;
    }, {
      id : Nat;
      name : Text;
      description : Text;
      location : Text;
      amenities : [Text];
      highlights : [Text];
      heroImage : ?Storage.ExternalBlob;
      bookingUrl : ?Text;
    }>(
      func(p) {
        {
          p with
          location = "";
        };
      }
    );
    {
      var contentState = {
        var siteSettings = old.contentState.siteSettings;
        var heroSlides = old.contentState.heroSlides;
        var galleryImages = old.contentState.galleryImages;
        var properties = newProperties;
        var roomTypes = old.contentState.roomTypes;
        var testimonials = old.contentState.testimonials;
        var aboutUs = old.contentState.aboutUs;
        var policies = old.contentState.policies;
        var nextId = old.contentState.nextId;
      };
    };
  };
}
