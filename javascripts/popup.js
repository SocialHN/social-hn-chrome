$(document).ready(function() {
  var notice;
  var update_notice;

  chrome.extension.sendRequest({method: "getLocalStorage", key: "notice"}, function(response) {
    notice = response.data
  });

  chrome.extension.sendRequest({method: "getLocalStorage", key: "update_notice"}, function(response) {
    update_notice = response.data
  });

  if (notice.data != {} && update_notice == true)
    $('.notices').html(notice);
  else
    $('.notices').html();
});

