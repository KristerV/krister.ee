process.env['MAILGUN_API_KEY'] = "key-1talxhfv0icwp3725e5yjgf2jx0wp792";
process.env['MAILGUN_DOMAIN'] = "movieatmyplace.com";
process.env['MAILGUN_API_URL'] = "https://api.mailgun.net/v2";

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
