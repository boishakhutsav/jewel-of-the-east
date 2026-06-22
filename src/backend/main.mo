import Map "mo:core/Map";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import MixinViews "mo:caffeineai-data-viewer/MixinViews";
import ContentLib "lib/content";
import ContentMixin "mixins/content-api";
import AuthMixin "mixins/auth-api";

actor {
  include MixinObjectStorage();
  include MixinViews();

  let contentState : ContentLib.ContentState;
  include ContentMixin(contentState);
  include AuthMixin();
};
