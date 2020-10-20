chrome.pageAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: './newTab.html' });
});
