/* global browser */

function onStartup() {
    try {
        browser.browsingData.removeDownloads({});
    }catch(e){
        console.error(e);
    }
}

browser.runtime.onStartup.addListener(onStartup);

