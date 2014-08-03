Template.contact.events({
	'submit form[name=contact]': function(e, tmpl) {
		e.preventDefault()
		var data = getFormData('form[name=contact]')
		data.body = data.body.replace(/\r?\n/g, '<br />')
		var sessionid = Meteor.default_connection._lastSessionId
		var _id = Email.insert({from: data.from, body: data.body, status: 'sending', sessionid: sessionid})
		Meteor.call('contactEmail', data.from, data.body, _id)
		$('#submitContact').removeClass('green').addClass('orange')
		$('#submitContact').prop('value', "Sending...")
		Email.find(_id).observeChanges({
			changed: function(id, fields){ 
				console.log(fields.status == 'sent')
				if (fields.status == 'sent')
					$('#submitContact').removeClass('orange').addClass('green').prop('value', "Sent. Thank you for your letter!")
				else
					$('#submitContact').removeClass('orange').removeClass('green').addClass('red').prop('value', 'Error: ' + fields.status)

			}
		});
	}
})