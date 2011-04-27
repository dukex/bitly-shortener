var BitlyShortener;
BitlyShortener = (function() {
  function BitlyShortener() {
    safari.application.addEventListener("command", this.toolbar, false);
  }

  BitlyShortener.prototype.toolbar = function () {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("showSidebar", true);
  };

  return BitlyShortener;
})();
