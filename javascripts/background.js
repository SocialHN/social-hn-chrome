chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getLocalStorage")
    sendResponse({data: localStorage[request.key]});
  else
    sendResponse({});
});

function configure_now() {
  if (localStorage.getItem('api_key'))
    return;

  chrome.tabs.create({url: "views/options.html"});
}

configure_now()