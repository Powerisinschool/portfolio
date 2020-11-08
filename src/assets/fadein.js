var fadedIn = false;
window.onscroll = function() {
    var elements = document.getElementsByClassName('fadero');
    for (let i = 0; i < elements.length; i++) {
        var element = elements[i];
        console.log(i);
        var elementHeight = element.clientHeight;
        animate(element, elementHeight);
        /*var offsetTopi = element.offsetTop;
        //var offsetBottomi = element.offsetBottom;
        if (window.pageYOffset >= offsetTopi && !fadedIn) {
            try {
                element.classList.remove("fade-out");
            } catch (no) {
                element.classList.remove("initial-fade");
            }
            element.classList.add("fade-in");
            fadedIn = true;
        } else if (window.pageYOffset <= offsetTopi) {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
            fadedIn = false;
        }*/
    }
}

// listen for scroll event and call animate function

// check if element is in view
function inView(element, elementHeight) {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;
    
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    
    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition >= ( elementPosition - windowHeight ) && scrollPosition <= (elementPosition + windowHeight)) {
        return true;
    }
    
    return false;
}

// animate element when it is in view
function animate(element, elementHeight) {
    // is element in view?
    if (inView(element, elementHeight)) {
        if (element.getAttribute('data-position') === 'left') {
            element.classList.remove('fade-out');
            element.classList.remove('initial-fade');
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-out');
            element.classList.remove('initial-fade');
            element.classList.add('fade-in-up');
        }
    } else {
        element.classList.remove('fade-in');
        element.classList.remove('fade-in-up');
        element.classList.add('fade-out');
    }
}
