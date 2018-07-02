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
const menuElements = document.querySelectorAll('#tocMenu *')
const headings = document.querySelectorAll(`.rendered-content h1, .rendered-content h2, .rendered-content h3`)
menuElements.forEach((h, elIndex) => {
    h.addEventListener('click', e => {
        headings[elIndex].scrollIntoView()
    })
})
