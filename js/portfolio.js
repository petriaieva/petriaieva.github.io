"use strict";
$(document).ready(function(){
    var i;
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
