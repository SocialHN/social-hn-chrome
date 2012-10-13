$(document).ready(function() {
  var api_key;

  chrome.extension.sendRequest({method: "getLocalStorage", key: "api_key"}, function(response) {
    api_key = response.data;
  });

  $("a[id^=up_]").click(function() {
    var url_hn;
    var validRegEx = /^[a-zA-Z0-9]+$/;
    url_hn = $(this).parent().parent().parent().find('td.title a').attr("href");

    if (url_hn != undefined && api_key != undefined && api_key.match(validRegEx)){
      $.ajax({
        type: 'POST',
        url: 'http://socialhn.r12.railsrumble.com/bookmarks',
        data: {url: url_hn, api_key: api_key}
      });
    }
  });
});