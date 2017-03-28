var qazy = {};

// empty image
qazy.qazy_image = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

qazy.view_elements = [];

qazy.reveal = function(){
	for(var count = 0; count < qazy.view_elements.length; count++)
	{
		var offsetParentTop = 0;
		var temp = qazy.view_elements[count];
		do
		{
			if(!isNaN(temp.offsetTop))
			{
				offsetParentTop += temp.offsetTop;
			}
		}while(temp = temp.offsetParent)
		
		var pageYOffset = window.pageYOffset;
		var viewportHeight = window.innerHeight;
		
		var offsetParentLeft = 0;
		var temp = qazy.view_elements[count];
		do
		{
			if(!isNaN(temp.offsetLeft))
			{
				offsetParentLeft += temp.offsetLeft;
			}
		}while(temp = temp.offsetParent);
		
		var pageXOffset = window.pageXOffset;
		var viewportWidth = window.innerWidth;
		
		if(offsetParentTop > pageYOffset && offsetParentTop < pageYOffset + viewportHeight && offsetParentLeft > pageXOffset && offsetParentLeft < pageXOffset + viewportWidth)
		{
			qazy.view_elements[count].src = qazy.view_elements[count].getAttribute("data-qazy-src");
			/*console.log(qazy.view_elements[count].src);*/
			qazy.view_elements.splice(count, 1);
			count--;
		}
		else
		{
			/*console.log("offsetParentTop" + offsetParentTop + " pageYOffset" + pageYOffset + " viewportHeight" + window.innerHeight);*/
		}
	}
};
            
window.addEventListener("resize", qazy.reveal, false);
window.addEventListener("scroll", qazy.reveal, false);
            
//responsible for stopping img loading the image from server and also for displaying lazy loading image.
qazy.qazy_list_maker = function(){
	var elements = document.querySelectorAll("img:not([data-qazy='false'])");
	
	for(var count = 0; count < elements.length; count++)
	{
		qazy.view_elements.push(elements[count]);
		elements[count].setAttribute("data-qazy", "false");
		
		var source_url = elements[count].src;
		elements[count].setAttribute("data-qazy-src", source_url);
		
		elements[count].src = elements[count].getAttribute("data-qazy-placeholder") || qazy.qazy_image; 
	}
};
            
qazy.intervalObject = setInterval(function(){
	qazy.qazy_list_maker();
}, 50);

window.addEventListener("load", function() {
	clearInterval(qazy.intervalObject);
	qazy.qazy_list_maker();
	qazy.reveal();
}, false);