define(function(require) {
  var $ = require("jquery");

  //Enter new trip.  Can be either visited or on wishlist.

  var visited = false;

  $("#visited").click(function() {
    visited = true;
  });

  $("#wish-list").click(function() {
    visited = false;
  });

  $("#add-location").click(function() {
    var newLocation = {
      name: $("#trip-name").val(),
      country: $("#country").val(),
      state: $("#state").val(),
      city: $("#city").val(),
      review: $("#review").val(),
      year: $("#year").val(),
      month: $("#month").val(),
      visited: visited
    };

    $.ajax({
      url: "https://nss-wayne-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
      })
    .done(function(newData) {
      location.reload();
    })
    .fail(function(xhr, status, error) {
      console.log(error);
    });
  });
});


