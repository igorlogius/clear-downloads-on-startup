/* global browser */

async function removeDownloadsFromHistory() {
    (await browser.downloads.search({})).forEach( dl => {
        browser.history.deleteUrl({url: dl.url});
    });
    (await browser.history.search({text: ""})).filter ( h => /^https?:/.test(h.url)).forEach( hi => {
        browser.history.deleteUrl({url: hi.url});
    });
}

browser.runtime.onStartup.addListener(removeDownloadsFromHistory);
browser.browserAction.onClicked.addListener(removeDownloadsFromHistory);

