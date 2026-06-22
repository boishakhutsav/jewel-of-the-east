module {
  public func verifyAdmin(email : Text, password : Text) : Bool {
    let ADMIN_EMAIL = "boishakhutsav@gmail.com";
    let ADMIN_PASSWORD = "Jote2@26";
    email == ADMIN_EMAIL and password == ADMIN_PASSWORD
  };
}
