(function () {

  const tabs = {
    "tab-overview": "content-overview",
    "tab-details": "content-details",
    "tab-comments": "content-comments",
  };

  function activateTab(activeId) {

    Object.keys(tabs).forEach((tabId) => {

      const tabBtn = document.getElementById(tabId);
      const content = document.getElementById(tabs[tabId]);

      if (tabBtn && content) {
        if (tabId === activeId) {
          // التاب النشط
          tabBtn.style.backgroundColor = "transparent";
          tabBtn.style.color = "#15AC8B";
          content.style.display = "block";
        } else {
          // التابات غير النشطة
          tabBtn.style.backgroundColor = "transparent";
          tabBtn.style.color = "#fff";
          content.style.display = "none";
        }
      }

    });
  }

  // تشغيل التابات
  Object.keys(tabs).forEach((tabId) => {

    document
      .getElementById(tabId)
      .addEventListener("click", () => {
        activateTab(tabId);
      });

  });

  // التاب الافتراضي
  activateTab("tab-overview");

})();

// -------------------------
