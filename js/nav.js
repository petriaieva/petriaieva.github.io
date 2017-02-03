$(function initNav() {
    var scroll = scroller();
      scroll.init();
      scroll.add({
        selector: "#js_nav",
        from: 200,
        className: "nav_scrolled"
      });
  });