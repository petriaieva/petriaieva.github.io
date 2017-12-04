"use strict";
function scroller() {
  // PRIVATE
  ////////////////////////////////////////////////////////////

  var didScroll = false;
  var events = [];
  var doc = document.documentElement;

  var isNumber = function (n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  };

  var scrollPosition = function () {
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  };

  var onScroll = function () {
    events.forEach(function scroller_forEach(event) {
      // call callback
      if(typeof event.callback !== "undefined") {
        event.callback();
      }
      
      // set or remove class
      if(typeof event.selector !== "undefined") {
        if (scrollPosition() > event.from && scrollPosition() < event.to) {
          event.selector.addClass(event.className)
        } else {
          event.selector.removeClass(event.className);
        }
      }
    });
  };

  // API FUNCTIONS
  ////////////////////////////////////////////////////////////

  // Function init()
  // Parameters:
  //   interval: interval (in ms) of checking scroll event
  var init = function (interval) {
    if (!isNumber(interval)) {
      interval = 250;
    }

    $(window).scroll(function () {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        didScroll = false;
        onScroll();
      }
    }, interval)
  };

  // Function add()
  // Parameters:
  //   object: js object with values
  //     selector:
  //     from:
  //     to:
  //     className:
  //     callback:
  var add = function (object) {
    var obj = {};

    //set selector
    if (object.selector && (typeof object.selector === "string")) {
      obj.selector = $(object.selector);
    }

    // set range
    if (typeof object.from === "number") {
      obj.from = object.from;
    } else {
      obj.from = Infinity;
    }

    if (typeof object.to === "number") {
      obj.to = object.to;
    } else {
      obj.to = Infinity;
    }

    // set class
    if (typeof object.className === "string") {
      obj.className = object.className;
    }

    // set callback
    if (typeof callback === "function") {
      obj.callback = object.callback
    }

    // Error checking
    // 1) callback or selector must be provided
    if (typeof obj.callback === "undefined" && obj.selector === "undefined") {
      console.log("Scroller Error: selector or callback must be provided");
      return 1;
    }

    // 2) when selector provided, className also must be provided and vice versa
    if (typeof obj.selector === "undefined" && obj.className !== "undefined") {
      console.log("Scroller Error: className must be provided");
      return 1;
    }

    if (typeof obj.selector !== "undefined" && obj.className === "undefined") {
      console.log("Scroller Error: selector must be provided");
      return 1;
    }

    // 3) callback must be a function
    if(typeof obj.callback !== "function" && typeof callback !== "undefined") {
      console.log("Scroller Error: callback must be a function");
      return 1;
    }

    // push obj to array
    events.push(obj);
  };

  return {
    init: init,
    add: add
  };
}

$(function initNav() {
    var scroll = scroller();
      scroll.init();
    
    
        scroll.add({
        selector: "#js_nav",
        from: 170,
        className: "navigation_scrolled"
      });
     
  });

$(document).ready(function(){
    var i, show = false;
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
     e.preventDefault();

    var target = this.hash,
     $target = $(target);

    $('html, body').stop().animate({
     'scrollTop': $target.offset().top
     }, 600, 'swing', function () {
     window.location.hash = target;
     });
     });
   
    new WOW().init();
    $(".nav_link").click(function(){
        $("#navbar-ex-collapse").removeClass("in");
    });
    $.fn.show_Text = function() {
      var string = this.text();
      return this.each(function(){
       var $this = $(this);
       $this.html(string.replace(/./g, '<span class="new">$&</span>'));
       $this.find('span.new').each(function(i, el){
        setTimeout(function(){ $(el).addClass('div_opacity'); }, 80 * i);
       });
       
          
      });
     };
    $.fn.hide_Text = function() {
        setTimeout(function(){ $(".new").removeClass('div_opacity');$(".new").removeClass('waiting'); }, 2000);
    };
    $.fn.animate_Text = function(str) {
        
        $(this).html(str);
        $(this).show_Text();
        $(this).hide_Text();
     
           
    };
   $('#example').animate_Text("landing pages");
        setTimeout(function(){ $('#example').animate_Text("corporative websites");},3000);
        setTimeout(function(){ $('#example').animate_Text("user interfaces");},6000);
    setInterval(function() {
        $('#example').animate_Text("landing pages");
        setTimeout(function(){ $('#example').animate_Text("corporative websites");},3000);
        setTimeout(function(){ $('#example').animate_Text("user interfaces");},6000);
     
            }, 9000); 
     
});
