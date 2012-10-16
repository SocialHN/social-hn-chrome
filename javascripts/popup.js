$(document).ready(function() {
  chrome.extension.sendRequest({method: "getLocalStorage", key: "notice"}, function(response) {
    if (response.data != {})
      $('.notices').html(response.data);
  });
});