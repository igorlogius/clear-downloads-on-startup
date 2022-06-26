/* global browser */

function onStartup() {
    browser.downloads.erase({});
}
browser.runtime.onStartup.addListener(onStartup);
browser.browserAction.onClicked.addListener(onStartup);

