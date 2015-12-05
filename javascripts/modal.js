

define(function(require) {

  var $ = require("jquery");
  var firebase = require("firebase");

  $(document).on("click", ".review-button", function() {
    var btnId = $(this).attr('id');
    console.log(btnId);
    $("." + btnId).css("display", "block");
    console.log("took trip button clicked");
  });

  $(document).on("click", "#cancel-btn", function() {
    $(".review-entry").css("display", "none");
  });

  $(document).on("click", ".remove-list", function() {
    var delKey = $(this).attr("data-btn");
    console.log(delKey);
    var myFireBaseRef = new Firebase('https://nss-wayne-trippin.firebaseio.com/trips/' + delKey);
    myFireBaseRef.remove();
  });

  $("body").on("click", "#submit-review-btn", function() {
    console.log("submit clicked");

    var year = $("#add-year").val();
    var month = $("#add-month").val();
    var review = $("#add-review").val();
    var key = $(this).attr("data-key");

    console.log(year, month, review, key);

    var myFireBaseRef = new Firebase('https://nss-wayne-trippin.firebaseio.com/trips/' + key);
    console.log(myFireBaseRef);
    myFireBaseRef.update({ year: year, month: month, review: review, visited: true });

    location.reload();
  });
});




  