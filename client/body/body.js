Template.body.events({
	'mouseover .project': function (e, tmpl) {
		var total = $('.project').length
		var index = $(e.currentTarget).index()
		var colorStep = 360 / total
		var color = Please.make_color({
			hue: colorStep * index,
			golden: false,
			saturation: .7,
			value: .7
		})
		$(e.currentTarget).css({color: color})
	},
	'mouseleave .project': function (e, tmpl) {
		var total = $('.project').length
		var index = $(e.currentTarget).index()
		var colorStep = 360 / total
		$(e.currentTarget).css({color: 'none'})
	},
	'click .project': function (e, tmpl) {
		var mainTop = $('.title h1').offset().top
		var buttonColor = $(e.currentTarget).css('color')
		$('#extra-wrapper').css({width: '100%', 'background-color': buttonColor})
		$('.close-extra#first, .close-extra#third').css({fill: buttonColor})
		Session.set('projectDetails', e.currentTarget.id)
		Meteor.setTimeout(function(){
			$('#extra-wrapper .content h1:first-child').css({'margin-top': mainTop})
		}, 1)
	},
	'click .close-extra': function(e, tmpl) {
		$('.close-extra#first, .close-extra#third').css({fill: 'transparent'})
		$('#extra-wrapper').css({width: '0%', 'background-color': 'transparent'})
	}
})

Template.body.helpers({
	projectDetails: function() {
		var tmpl = Session.get('projectDetails')
		if (isset(tmpl) && isset(Template[tmpl]))
			return Template[tmpl]
		else
			return null
	}
})