Template.body.events({
	'mouseover .project': function (e, tmpl) {
		var total = $('.project').length
		var index = $(e.currentTarget).index()
		var colorStep = 360 / total
		var color = Please.make_color({
			hue: colorStep * index,
			golden: false,
			saturation: .7,
			value: .6
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
		var buttonColor = $(e.currentTarget).css('color')
		$('#extra-wrapper').fadeIn(400).css({width: '100%', 'background-color': buttonColor})
		$('.close-extra-wrapper').fadeIn(400)
		$('.close-extra#color').css({fill: buttonColor})
		Session.set('projectDetails', e.currentTarget.id)
		setExtraTopMargin()
	},
	'click .close-extra': function(e, tmpl) {
		$('.close-extra-wrapper').fadeOut(400)
		$('#extra-wrapper').css({width: '0%', 'background-color': 'white'}).fadeOut(400)
	}
})

Template.body.helpers({
	projectDetails: function() {
		var tmpl = Session.get('projectDetails')
		if (isset(tmpl) && isset(Template[tmpl]))
			return Template[tmpl]
		else
			return null
	},
	image: function() {
		var tmpl = Session.get('projectDetails')
		if (isset(tmpl))
			return '/snapshots/' + tmpl + '.png'
	},
	imageStyle: function(){
		var tmpl = Session.get('projectDetails')
		if (tmpl == 'storytree')
			return '-webkit-border-top-left-radius: 17px; -webkit-border-top-right-radius: 17px; -moz-border-radius-topleft: 17px; -moz-border-radius-topright: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px;'
	}
})
