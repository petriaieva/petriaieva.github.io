$(function initNav() {
    var scroll = scroller();
      scroll.init();
    
        scroll.add({
        selector: "#js_nav",
        from: 170,
        className: "navigation_scrolled"
      });
   
  });