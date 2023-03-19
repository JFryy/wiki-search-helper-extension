
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      title: "Search Wikipedia for '%s'",
      contexts: ["selection"],
      id: "search-wikipedia",
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "search-wikipedia") {
      const text = info.selectionText;
      const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(text)}`;
      chrome.tabs.create({ url });
    }
  });
  