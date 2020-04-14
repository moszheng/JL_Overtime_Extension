chrome.browserAction.onClicked.addListener(function(tab) 
{
    chrome.tabs.executeScript({file: "jquery-3.5.0.min.js"}, function(result) 
    {
        chrome.tabs.executeScript({file: "content.js"}, function(result) {});
    });
});
