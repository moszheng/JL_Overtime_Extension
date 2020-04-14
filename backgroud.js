chrome.browserAction.onClicked.addListener(function(tab) 
{
    chrome.tabs.executeScript({file: "jquery-3.5.0.min.js"}, function(result) 
    {
        chrome.tabs.executeScript({file: "content.js"}, function(result) {});
    });
});

window.setInterval(function(){

    var refreshHours = new Date().getHours();
    var refreshMin = new Date().getMinutes();
    var refreshSec = new Date().getSeconds();

    var settingHours =0;
    var settingMin =0;
    var settingSec =0;

    //$(".col-md-8.col-sm-6").append(refreshHours+":"+refreshMin+":"+refreshSec);

    if(refreshHours==settingHours && refreshMin==settingMin && refreshSec==settingSec)
    {
        // 指定每天凌晨做的事情
    }

}, 1000);


//$(".PSC-HomeWidget.app").remove();