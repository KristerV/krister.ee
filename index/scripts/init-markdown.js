var elementScrolls = []
window.initialScrollDone = false;

function insertMarkdownToDocument(content) {
	var md = window.markdownit({
		breaks: true,
		linkify: true,
	})
		.use(markdownItTOC)
		.use(window.markdownItAttrs)
		.use(MarkdownItVideo, {})
		.use(window.markdownitContainer, "toc");
	var result = md.render(content);
	$('body').append(result);

	// Stuff that needs next render
	setTimeout(function(){

		// Highlight code - heavy calculation
		hljs.initHighlighting()

		// Scroll to position
		if (document.location.hash.length) {
			var scrollTop = $(document.location.hash).offset().top + $(window).scrollTop()
			window.scrollTo(0, scrollTop)
		}
		refreshTOC()
		initialScrollDone = true;
	}, 1);

}

// Get markdown file
$.get('index/content.md').done(insertMarkdownToDocument);
