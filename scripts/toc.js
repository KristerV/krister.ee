// Generate menu
const allHeadings = document.querySelectorAll('h1, h2, h3')
const menuDiv = document.querySelector('#tocMenu')
let lastHeadingNo = 0
let menuHTML = ''
allHeadings.forEach(h => {
    let currentHeadingNo = parseInt(h.tagName.slice(1))
    while (currentHeadingNo !== lastHeadingNo) {
        if (currentHeadingNo > lastHeadingNo) {
            menuHTML += '<ul>'
            lastHeadingNo++
        } else {
            menuHTML += '</ul>'
            lastHeadingNo--
        }
    }
    
    lastHeadingNo = currentHeadingNo
    menuHTML += `<li>${h.innerHTML}</li>`
})
menuDiv.innerHTML = menuHTML

// Update menu on scroll
let headingsTop = []
allHeadings.forEach(h => headingsTop.push(h.offsetTop))
window.onscroll = function() {
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop)
    const activeElements = document.querySelectorAll('#tocMenu .active')
    activeElements.forEach(item => item.classList.remove('active'))

    for (var i = 0; i < headingsTop.length; i++) {
        if (scrollPosition > headingsTop[i] && (!headingsTop[i+1] || scrollPosition < headingsTop[i+1])) {
            document.querySelectorAll(`#tocMenu li`)[i].classList.add('active')
        }
    }
}
// Scroll on click
const menuElements = document.querySelectorAll('#tocMenu li')
const headings = document.querySelectorAll(`.rendered-content h1, .rendered-content h2, .rendered-content h3`)
menuElements.forEach((h, elIndex) => {
    h.addEventListener('click', e => {
        headings[elIndex].scrollIntoView()
    })
})
