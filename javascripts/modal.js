

define(function(require) {

  var $ = require("jquery");
  var firebase = require("firebase");


  $("body").on("click", "#modal-btn", function() {
    console.log("modal submit clicked");

    var year = $("#modal-year").val();
    var month = $("#modal-month").val();
    var review = $("#modal-review").val();
    var key = $("#took-trip-btn").attr("data-key");

    console.log(year, month, review, key);

    var myFireBaseRef = new Firebase('https://nss-wayne-trippin.firebaseio.com/trips' + key);

    // Modify the 'first' and 'last' children, but leave other data at fredNameRef unchanged
    myFireBaseRef.update({ year: year, month: month, review: review });

    // location.reload();
    
  });

  // $('#myModal').on('hidden.bs.modal', function () {
  // location.reload();
  // });


});




  