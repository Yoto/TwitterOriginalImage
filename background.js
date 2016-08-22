
function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = info.srcUrl.replace(":large","") + ":orig";

    // Create a new tab to display the image:orig.
    chrome.tabs.create({ url: url});
  };
};

chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('openContextMenuTitle'),
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});
