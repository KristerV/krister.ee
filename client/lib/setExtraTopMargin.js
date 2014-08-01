setExtraTopMargin = function() {
	Meteor.setTimeout(function(){
				var mainTop = $('.title h1').offset().top
				$('#extra-wrapper .content h1:first-child').css({'margin-top': mainTop})
			}, 1)
}