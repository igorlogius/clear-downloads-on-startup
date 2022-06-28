/* global browser */

async function onStartup() {
    try {
        const ids = await browser.downloads.erase({});
        console.debug('removed download history items', ids);
    }catch(e){
        console.error(e);
    }
}

browser.runtime.onStartup.addListener(onStartup);

