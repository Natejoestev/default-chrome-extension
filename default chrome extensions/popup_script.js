
ext_ID = chrome.runtime.id;

var op_page_btn = document.getElementById("op-page-btn");
op_page_btn.href = "chrome-extension://"+ext_ID+"/options.html";