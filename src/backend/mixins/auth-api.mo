import AuthLib "../lib/auth";

mixin () {
  public shared func login(email : Text, password : Text) : async Bool {
    AuthLib.verifyAdmin(email, password);
  };

  public query func verifyAdmin(email : Text, password : Text) : async Bool {
    AuthLib.verifyAdmin(email, password);
  };
}
