let headingsTop = []

// Generate menu
const allHeadings = document.querySelectorAll('h1, h2, h3')
const menuDiv = document.querySelector('#tocMenu')
allHeadings.forEach(h => {
    headingsTop.push(h.offsetTop)
    menuDiv.appendChild(h.cloneNode(true))
})

// Update menu on scroll
window.onscroll = function() {
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 60
    const activeElements = document.querySelectorAll('#tocMenu .active')
    activeElements.forEach(item => item.classList.remove('active'))

    for (var i = 0; i < headingsTop.length; i++) {
        if (scrollPosition > headingsTop[i] && (!headingsTop[i + 1] || scrollPosition < headingsTop[i+1])) {
            document.querySelector(`#tocMenu *:nth-child(${i+1})`).classList.add('active')
        }
    }
}

// Scroll on click



/*
(function () {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };
})();
*/