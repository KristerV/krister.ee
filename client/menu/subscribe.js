Template.subscribe.events({
	'submit form[name=subscribe]': function(e, tmpl) {
		e.preventDefault()
		var data = getFormData('form[name=subscribe]')
		var sessionid = Meteor.default_connection._lastSessionId
		var _id = Email.insert({email: data.email, status: 'sending', sessionid: sessionid})
		Meteor.call('subscribe', data.email, _id)
		$('#submitSubscribe').removeClass('green').removeClass('red').addClass('orange')
		$('#submitSubscribe').prop('value', "Sending request...")
		Email.find(_id).observeChanges({
			changed: function(id, fields){ 
				if (fields.status == 'sent')
					$('#submitSubscribe').removeClass('orange').addClass('green').prop('value', "Subscription successful")
				else
					$('#submitSubscribe').removeClass('orange').removeClass('green').addClass('red').prop('value', 'Error: ' + fields.status)

			}
		});
	}
})