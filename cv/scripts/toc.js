$(window).on('hashchange',function(){
	refreshTOC()
});

// Change hash on scroll
$(document).scroll(_.throttle(function() {
	if (!window.initialScrollDone) return
	var winTop = $(this).scrollTop()
	var winHeight = $(window).height()
	var headers = $(':header:not(.toc)')

	// Find first visible
	var firstVisible;
	for (var i = 0; i < headers.length; i++) {
		var elem = $(headers[i])
		var top = elem.position().top
		if (!elem.children('a[id]').length)
			continue
		else if (top < winTop)
			firstVisible = elem;
		else
			break
	}

	// Change hash
	var topic = ''
	if (firstVisible) {
		topic = firstVisible.children("a").attr("id")
	}
	history.pushState(null, null, '#'+topic)
	refreshTOC()

}, 200));

var refreshTOC = function() {
	// Collapse menu
	$('.toc .active').removeClass('active')

	// Get hash from URL
	var placeholder = location.hash.slice(1);
	var link = $('.toc a[href="#'+placeholder+'"]')

	// Mark link and reveal parent ul's
	link.addClass('active').parents('ul:not(.toc > ul)').addClass('active')

	// Get link clicked and reveal menu under it (it's actually next to it)
	var nextUl = link.parent('li').next().addClass('active')

	// If no direct li's, reveal next ul's
	var children = nextUl.children()
	var isLi = false
	for (var i = 0; i < children.length; i++) {
		if (children[i].tagName === 'LI') {
			isLi = true;
			break;
		}
	}
	if (!isLi) {
		nextUl.children('ul').addClass('active')
	}
}