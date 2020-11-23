(function() {

    "use strict"

    const arbuttons = document.querySelectorAll(".arbutton");
    for (const arbutton of arbuttons) {
        arbutton.addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log("click");
            
        }, false);
    }

})();