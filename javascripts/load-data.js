define(function(require) {

  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");
  // console.log(templates);

  var myFirebaseRef = new Firebase("https://nss-wayne-trippin.firebaseio.com/");
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();
    // console.log("trips", trips);

    var allTripsArray = [];

    for (var key in trips) {
      var tripsWithId = trips[key];
      tripsWithId.key = key;
      allTripsArray[allTripsArray.length] = tripsWithId;
    }
      // console.log("trips ID", tripsWithId);

    console.log("allTripsArray",allTripsArray);

    var tripsObject = {trips: allTripsArray};
    // console.log("trips Object", tripsObject);

    var wishTripsArray = [];

    for (i=0; i<tripsObject.trips.length; i++) {
      if (tripsObject.trips[i].visited === false) {
        wishTripsArray.push(tripsObject.trips[i]);
      }
    }
    // console.log("wish", wishTripsArray);

    var wishTripsObject = {trips: wishTripsArray};
    // console.log(wishTripsObject);

    var populateWishTemplate = templates.wishTpl(wishTripsObject);
    $("#wish-trips").html(populateWishTemplate);

    // $("body").on("click", "#add-review", function() {
    //   console.log("add review clicked");
    // }); 

    var beenTripsArray = [];

    for (i=0; i<tripsObject.trips.length; i++) {
      if (tripsObject.trips[i].visited === true) {
        beenTripsArray.push(tripsObject.trips[i]);
      }
    }
    // console.log(beenTripsArray);

    var beenTripsObject = {trips: beenTripsArray};
    // console.log(beenTripsObject);
    
    var populateTemplate = templates.tripTpl(beenTripsObject);
    $("#list-of-trips").html(populateTemplate);

    // $("body").on("click", "#modal-btn", function() {
    //   console.log("modal submit clicked");
    // });

    // $('#myModal').on('hidden.bs.modal', function () {
    // location.reload();
    // });

    // $('.collapse').collapse();
  
  });
});

