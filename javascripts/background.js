chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getLocalStorage")
    sendResponse({data: localStorage[request.key]});
  else
    sendResponse({});
});

chrome.browserAction.setBadgeText({text: ''})

$(document).ready(function() {
  function configure_now() {
    if (localStorage.getItem('api_key'))
      return;

    $.getJSON('http://socialhn.r12.railsrumble.com/config/site', function(data) {
      if (data.current_user)
        localStorage["api_key"] = data.current_user.api_key;
      else
        chrome.tabs.create({url: "views/options.html"});
    });
  }

  function get_notices(){
    $.getJSON('http://socialhn.r12.railsrumble.com/config/site', function(data) {
      if (data.notice != 'null' && data.notice != localStorage.getItem('notice')){
        chrome.browserAction.setBadgeText({text: '1'})
        localStorage["notice"] = data.notice;
        localStorage["update_notice"] = true;
      }else{
        localStorage["update_notice"] = false;
      }
    });
  }

  configure_now();
  get_notices();
});