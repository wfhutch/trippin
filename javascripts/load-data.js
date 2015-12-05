define(function(require) {

  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");

  // Gets all data from Firebase database
  var myFirebaseRef = new Firebase("https://nss-wayne-trippin.firebaseio.com/");
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    var allTripsArray = [];

    // Gets the specific unique data key defined by Firebase for each trip 
    for (var key in trips) {
      var tripsWithId = trips[key];
      tripsWithId.key = key;
      allTripsArray[allTripsArray.length] = tripsWithId;
    }

    var tripsObject = {trips: allTripsArray};

    var wishTripsArray = [];

    for (i=0; i<tripsObject.trips.length; i++) {
      if (tripsObject.trips[i].visited === false) {
        wishTripsArray.push(tripsObject.trips[i]);
      }
    }

    var wishTripsObject = {trips: wishTripsArray};

    // Puts trips not yet taken on page under "Where I'd Like To Go"
    var populateWishTemplate = templates.wishTpl(wishTripsObject);
    $("#wish-trips").html(populateWishTemplate);

    var beenTripsArray = [];

    for (i=0; i<tripsObject.trips.length; i++) {
      if (tripsObject.trips[i].visited === true) {
        beenTripsArray.push(tripsObject.trips[i]);
      }
    }

    var beenTripsObject = {trips: beenTripsArray};
    
    //puts trips on page already taken on page under "Where I've Been"
    var populateTemplate = templates.tripTpl(beenTripsObject);
    $("#list-of-trips").html(populateTemplate);
  });
});

