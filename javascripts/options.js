$(document).ready(function() {
  if (localStorage["api_key"] != undefined)
    $('#apiKey').val(localStorage["api_key"]);

  $("#save").click(function() {
    var apiKey = $('#apiKey').val();
    localStorage["api_key"] = apiKey;
  });
});