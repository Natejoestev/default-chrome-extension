
chrome.runtime.onInstalled.addListener(() => {
  //when extention installed
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //inject foreground
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ["./foreground.js"]
        })
            .then(() => {
                console.log("injected");
            })
            .catch(err => console.log(err));
    }
});