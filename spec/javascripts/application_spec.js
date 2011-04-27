describe("BitlyShortener", function () {
  describe("on load", function () {
    it("should register commands for toolbar", function () {
      spyOn(safari.application, "addEventListener");
      shortener = new BitlyShortener();
      expect(safari.application.addEventListener).toHaveBeenCalledWith("command", shortener.toolbar, false);
    });
  });

  describe("BitlyShortener.toolbar", function () {
    it("should send message to injected for show bitly sidebar ", function () {
      spyOn(safari.application.activeBrowserWindow.activeTab.page, "dispatchMessage");
      shortener = new BitlyShortener();
      shortener.toolbar();
      expect(safari.application.activeBrowserWindow.activeTab.page.dispatchMessage).toHaveBeenCalledWith("showSidebar", true);
    });

  });
});
