define(function(require) {
  var firebase = require("firebase");

  var myFirebaseRef = new Firebase("https://nss-wayne-trippin.firebaseio.com/");
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();
    console.log(trips);

  });
});