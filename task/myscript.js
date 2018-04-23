(function() {
    "use strict";
    
    //load font
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&subset=latin-ext');
    document.head.appendChild(link);
    
    //load styles
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = `
    /* Styles overlay */
    #prefix999_overlay {
        display:none;
        background: #000000;
        bottom: 0;
        left: 0;
        opacity: 0.40;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1000;
        filter:progid:DXImageTransform.Microsoft.Alpha(opacity=40);
    }
    /* Styles popup */
    #prefix999_popup {
        display:none;
        font-size:16px;
        position:fixed; 
        background-color: #fff;
        border-radius: 5px;
        width:400px;
        bottom:5%; 
        right:5%;
        z-index:1000; 
        overflow:visible;
        color: black;
        font-family: "Roboto Slab", sans-serif; 
        border: 1px solid #ccc; }
    #prefix999_popup .header {
        background: #F3F3F3;
        padding:10px 0 10px 20px;
        position: relative;
        border-radius: 5px;
    }
    #prefix999_popup .div_prefix999_img {
        float:left;
        padding: 0 10px 10px;
    }
    #prefix999_img {
        width: 45px;
        border-radius:50%;
    }
    #prefix999_popup .div_prefix999_name {
        margin-right: 34px;
    }
    #prefix999_name {
        font-size: 14px; 
        font-weight: 700;
    }
    #prefix999_title {
        font-size: 12px;
    }
    #prefix999_popup .prefix999_close_black{
        position: absolute;
        right: 2%;
        top: 25%;
        cursor: pointer;
    }
    #prefix999_popup_inner {
        padding:20px;
    }
    /* Styles button close */
    #prefix999_popup .prefix999_close {
        border-radius: 50%;
        font-size: 24px;
        height: 40px;
        margin: auto;
        min-width: 40px;
        width: 40px;
        padding: 0;
        overflow: hidden;
        background: #0073c7;
        box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24);
        position: fixed;
        line-height: normal;
        color: white;
        bottom:5%;
        right:5%;
        transform: translate(10px, 10px);
        cursor: pointer;
    }
    #prefix999_popup .prefix999_close_inner {
        position: absolute;
        top: 15%;
        left: 30%;


    }
    /* Styles button after close */
    .prefix999_closed {
        border-radius: 50%;
        height: 56px;
        margin: auto;
        min-width: 56px;
        width: 56px;
        padding: 0;
        overflow: hidden;
        background: #0073c7;
        position: fixed;
        line-height: normal;
        color: white;
        bottom:2%;
        right:2%;
        cursor: pointer;
    }
    .prefix999_closed .prefix999_closed_inner {
        position: absolute;

        left: -15%;

    }
    .prefix999_closed_inner_img {
        width: 75px;
        border-radius:50%;
}


`;
    document.getElementsByTagName("head")[0].appendChild(css);
    
    // Load the JQuery
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        
        //Load data from server
        $.getJSON( "my.json", function( data ) {
            var image, name, title, message;
            image = data.messages[0]['image'];
            name = data.messages[0]['name'];
            title = data.messages[0]['title'];
            message = data.messages[0]['message'];
            $("#prefix999_img").attr('src', image);
            $("#prefix999_name").html(name);
            $("#prefix999_title").html(title);
            $("#prefix999_message").html(message);
            
            // Display a blackout
            $("#prefix999_overlay").show(); 
            
            // Display popup
            $("#prefix999_popup").show();
        });    


        // Create Popup  
        var popup = `
    <div id='prefix999_overlay'></div>
    <div id='prefix999_popup'>
        <div class='header'>
            <div class='div_prefix999_img' >
                <img id='prefix999_img'  src=''>
            </div>
            <div class='div_prefix999_name' >
                <span id='prefix999_name' ></span>
                <br>
                <span id='prefix999_title' ></span>
            </div>
            <div class='prefix999_close_black'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAVklEQVR4AWMYKMCPKYIpcJOhB0Wkn+EGprJehv9ADFcC5HVjs7APKNGHVwlcsh+hBI8yiBLKFEEt6gGSPXiVIHyKVwnCp5iBeQOqBKHpOlCUyGihPwAAp0MlcG/LtTAAAAAASUVORK5CYII='>
            </div>
        </div>
        <div id='prefix999_popup_inner'>
            <span id='prefix999_message'></span>
            <span class='prefix999_close'><span class='prefix999_close_inner'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAWklEQVQoz8XRwQ3AIAiFYTdw8KqMp53m92BiSiDYU8sRvwQfpPRPkY8dMjdFdYRhWQXqg8DlDWxAC8l+lJBsFpNXaA2igE5qiE3qEp1UL3PonyB0Z+fnQ31UE4erYTQUfMVzAAAAAElFTkSuQmCC'></span></span>
        </div>
    </div>`;
        $("body").append(popup);

        // Close and hide popup and show another icon
        $("#prefix999_popup .prefix999_close, #prefix999_popup .prefix999_close_black").click(function() {

            $("#prefix999_overlay").hide();
            $("#prefix999_popup").hide();
            var popup_after = `
                <span class='prefix999_closed'>
                    <span class='prefix999_closed_inner'>
                        <img class='prefix999_closed_inner_img'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA4CAYAAAC1+AWFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNC0xOVQxMzozMzoxNSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDQtMTlUMTM6MzU6MTMrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDQtMTlUMTM6MzU6MTMrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M2YxMWRjZTUtYWNlYS1hNjRlLTlhYjItZWNkNmU0MGI5NGU4IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NjFiY2UwZTItNzM1Zi01NTRiLWEyNjAtMDU4Y2Q2NDRhMWQzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDI3ODdjODAtNjRjMi03NDQ3LWI4MjItMDJkNTNlZGVjODFmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Mjc4N2M4MC02NGMyLTc0NDctYjgyMi0wMmQ1M2VkZWM4MWYiIHN0RXZ0OndoZW49IjIwMTgtMDQtMTlUMTM6MzM6MTUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmMTFkY2U1LWFjZWEtYTY0ZS05YWIyLWVjZDZlNDBiOTRlOCIgc3RFdnQ6d2hlbj0iMjAxOC0wNC0xOVQxMzozNToxMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5VubTiAAAFOElEQVR42u2cW2yURRTHZxvQB3zQhBdiePCFFyNRjDERikKsYkIb7wJWoKCSQkFa6CJFmiZAhCImGHwQU5REDQ9GipRed7cXtrts6Q16ozd7r7DFdetiL5T27znz7X50sY2lddf0cyY5+fab78wk89tzzpwzm2+FaZejhsRL0qNkUmE+NcL/AUr+UbwMq1OBmJJ0MqxuBWJK0q1gKVgKloKlYClYCpaCpWApWArWvyK7WZzaVcGaRJI0SCLZAfFhEcR2O0zJTgVrYosiMHsuQWwqxCPvF2HOBwSMrSs0wP4DWLtnIPfOYyarej0XL6dXwTcyhm8c1yHiCFhiaShcMoyw/N82L2RastNOUqrPJz4mi3otD8/tK4Nv6A64VbT7INbbyB0vhsK6wgTLTAvbWgKxzgLx7jRkbYEca0oqRQS5nWmfS/Y9TvA6vcMS1HW6PsP9FLvY4manG9I3LLaVYCF9TsvqwLHiXhzI70J6Yc+U5IitB8dLenG2zoMVX9RAxBP0WCsepRjV6hmUoLxkWctS6At5M09a3OwM8BQ3BFkDL+6nqj7MpJU3evHwDnLFdwrwUKwFZa39sp8dcNWnlRAxORDmkKYPIYbFVkXxg3erS50+feHDY8C2rxvw9tEqJPzQhPiMBsSfmlh2nL6GuJP1mMtuvN6KB8gts8rd+lybv6qXoGSMCl3aECZYbA1xhchv8gZZyqmiXpiWZ0JEZ0NstE0ez9ZatOfxxeRm+TjjvKHPsfe7Zs2iQg8qvLCcHT7cGR1DurUbbt9tuVh2TfFGroxpHLTlgs3jhO9TXHIXFKuzccLSpYNKv9BOfTkyhoUBVHhhlXffkoucT/ErkVww0D47T4uOIetK0vImmZWPH89xLzoHqWda9DHf2n8lyBTMKQmdQ7AeZD0jwWLL4haZVg6xLBMZtCsGmvn7JglESzOcd688nvoTMq7pumfL3JrLbizEwkQHjhZ0YQEnp1tLjBOzAgE+8nAVxKu5mPtWPmy1Hh3CmhM1mltxCcO1nlkDFXPsiq7javZi3jrKud6zQmwphr3egzbPMASlEdKVDQfrQIW2OJL5tOhKf/8gxbOVaZdl+SJSy+iah+f3U3Z+e1Q+r78xgAU0j4izyd31WdLl1ugekPci4aJBYVFJYiIQnAo8RjGngUBw6xsYofKFAvryc1hKZYz71ojsb+4bxKIEu8zX5DjaHZcQUG5N9ExsLjIyLKu2sL0umXUvpnLo90GtvqsivcX07GqXtiF4qX8JnyyQpQnSl8UzwXrykzIdpMFh2bQAHjg5oBj24qFKjN6TtTO+laxPz017xukzrP3/B1gHqTTZYAtavMylCMimL2uDYMUev6qBSnHdhUvjeL6nUi8bH9ZSWqRYU6Adu/Cz7Xbt+IU/v3IByacbMUR6W07WyXvxER/R+PVYh8dRZv8EFczGhEW7lcsfg57eSWlB1HmthOEUICB8z+UNlz8Mk6+xlon1VmVhEeVV3H65OWQ8y3L5LcvV7sO52t9ga/HC2hwsttZ+5NL1x+qbyOP7lv6/69C4n+s8cLT9Ieer7v3TIHkWn2hyuUIWkZbZhlC0w9kdcncVuxwG+HWHrYvqvQiq4yIPViD68yuIOlKNl9KnL1Ekqymzf+FQBSL4Vx0+bp71pw76sbJTOwTk83FKLKUlzFQ4fm2wynn52DqoAJ/VsJIc+rYfdAQzU5HphzMcoNTP9wqWgqVgKVgKlhIFS8FSsBQsBUvBUqJgKVghhqVe+72P137VC+X38UK5+quCKf5VwV9b/JrUxuFE0QAAAABJRU5ErkJggg=='>
                    </span>
                </span>`;
            $("body").append(popup_after);
        });

    };

    document.getElementsByTagName("head")[0].appendChild(script);

})();
