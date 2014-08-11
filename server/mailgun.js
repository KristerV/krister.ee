Meteor.startup(function () {

	Meteor.methods({
		contactEmail: function (from, body, _id) {

			this.unblock();
			console.log(body)

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
					if(error){ console.log("Error: " + error)}

					console.log(result);
					Email.update(_id, {$set: {status: 'sent'}})
				}
			);
		},
	});
});
