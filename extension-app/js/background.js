chrome.runtime.onInstalled.addListener(function () {
    chrome.windows.create({
        type: "popup",
        url: '../html/popup.html',
        width: 330,
        height: 555
    });
});