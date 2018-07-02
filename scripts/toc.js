// Generate menu in HTML
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

// Use an array to cache heading locations
let headingsTop = []
setTimeout(updateHeadingOffsets, 1)        // Headings move right after first render
window.onresize = updateHeadingOffsets     // Headings move when resizing
updateHeadingOffsets()                     // We need the values in next section
function updateHeadingOffsets() {
    headingsTop = []
    allHeadings.forEach(h => headingsTop.push(h.offsetTop))
}

// Update on scroll
window.onscroll = function() {
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 60
    const activeElements = document.querySelectorAll('#tocMenu .active')
    activeElements.forEach(item => item.classList.remove('active'))

    for (var i = 0; i < headingsTop.length; i++) {
        if (scrollPosition > headingsTop[i] && (!headingsTop[i+1] || scrollPosition < headingsTop[i+1])) {
            const listItem = document.querySelectorAll(`#tocMenu li`)[i]
            listItem.classList.add('active')
            activateParent(listItem)
        }
    }
}
function activateParent(child) {
    const parent = child.parentElement
    if (parent) {
        parent.classList.add('active')
        activateParent(parent)
    }
}

// Scroll on click on a menu item
const menuElements = document.querySelectorAll('#tocMenu li')
const headings = document.querySelectorAll(`.rendered-content h1, .rendered-content h2, .rendered-content h3`)
menuElements.forEach((h, elIndex) => {
    h.addEventListener('click', e => {
        headings[elIndex].scrollIntoView()
    })
})
