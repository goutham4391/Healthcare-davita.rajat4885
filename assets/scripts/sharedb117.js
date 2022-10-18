'use strict';

/* General Recaptcha callback */
function recaptchaCallback(){
    const captchaResponse = grecaptcha.getResponse();

    if (captchaResponse.length > 0) {
        document.getElementById('btnSubmit').removeAttribute('disabled');
        if (document.getElementById('reg-ready'))
          {
            document.getElementById('reg-ready').value = 1;
          }
    }
}

/* Disable smooth scrolling in IE */
if(navigator.userAgent.match(/Trident\/7\./)) {
    document.body.addEventListener("mousewheel", function() {
      event.preventDefault();
      var wd = event.wheelDelta;
      var csp = window.pageYOffset;
      window.scrollTo(0, csp - wd);
    });
  }


  let mobile_menu = document.getElementsByClassName('header-main__main-nav-items');

  Array.from(mobile_menu, c => c.addEventListener('click', function(evt) {
    hj('tagRecording', ['mobile_menu_click']);
  }));
