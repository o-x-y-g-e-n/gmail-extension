"use strict";

function addScript(src) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = chrome.extension.getURL(src);
    setTimeout(function(){
    (document.body).appendChild(script);
}, 10000);

}

addScript("dist/extension.js");

