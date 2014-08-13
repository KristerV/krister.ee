Meteor.startup(function () {

	Meteor.methods({
		contactEmail: function (from, body, _id) {
			this.unblock();
			var subject = 'Krister.ee - email from ' + from;

			Meteor.http.post(process.env.MAILGUN_API_URL + '/' + process.env.MAILGUN_DOMAIN + '/messages', 
				{
					auth:"api:" + process.env.MAILGUN_API_KEY,
					params: {
						"from":"Krister.ee <info@krister.ee>",
						"to":['krister.viirsaar@gmail.com'],
						"h:Reply-To":from,
						"subject":subject,
						"html": body,
					}
				},
				function(error, result) {
					if(error){
						console.log("Error: " + error)
						Email.update(_id, {$set: {status: error.response.data.message}})
					} else {
						Email.update(_id, {$set: {status: 'sent'}})
					}
				}
			);
		},
		subscribe: function(email, _id) {
			this.unblock();
			var mailinglist = 'news@krister.ee'
			var apiURL = 'https://api.mailgun.net/v2/lists/' + mailinglist + '/members' 
			var options = {
				auth:"api:" + process.env.MAILGUN_API_KEY,
				params: {
					subscribed: true,
					address: email,
				}
			}
			var onResult = function(error, result) {
				if(error){ 
					console.log("Error: " + error)
					Email.update(_id, {$set: {status: error.response.data.message}})
				} else {
					Email.update(_id, {$set: {status: 'sent'}})
				}
			}

			Meteor.http.post(apiURL, options, onResult)
		},
	});
});
