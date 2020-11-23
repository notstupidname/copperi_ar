(function() {

    "use strict"

    const arbuttons = document.querySelectorAll(".arbutton");
    for (const arbutton of arbuttons) {
        arbutton.addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            const arsrc = this.getAttribute('data-arsrc');
            console.log(arsrc);
            
            // check for AR support
            const a = document.createElement('a'),
                  supportsAR = a.relList.supports('ar') ? true : false;
            if (supportsAR) {
                // IPHONE
            } else {
                const anchor = document.createElement('a');
                const href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://ar.notstupid.name/assets/models/' + arsrc + '&mode=ar_only&resizable=false#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;'
                anchor.setAttribute('href', href);
                anchor.click();
            }
        }, false);
    }

})();