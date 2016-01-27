

define(function(require) {

  var $ = require("jquery");
  var firebase = require("firebase");

  $(document).on("click", ".review-button", function() {
    var btnId = $(this).attr('id');
    $("." + btnId).css("display", "block");
  });

  $(document).on("click", "#cancel-btn", function() {
    $(".review-entry").css("display", "none");
  });

  $(document).on("click", ".remove-list", function() {
    var delKey = $(this).attr("data-btn");
    var myFireBaseRef = new Firebase('https://nss-wayne-trippin.firebaseio.com/trips/' + delKey);
    myFireBaseRef.remove();
  });

  $("body").on("click", "#submit-review-btn", function() {

    // Add key to id so each one remains unique as Handlebars adds them to the page
    var key = $(this).attr("data-key");
    var year = $("#add-year" + key).val();
    var month = $("#add-month" + key).val();
    var review = $("#add-review" + key).val();
    
    var myFireBaseRef = new Firebase('https://nss-wayne-trippin.firebaseio.com/trips/' + key);
    myFireBaseRef.update({ year: year, month: month, review: review, visited: true });

    location.reload();
  });
});




  