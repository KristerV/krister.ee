Email = new Meteor.Collection('email')

if (Meteor.isServer) {

	Meteor.publish('email', function publishFunction(user) {
		return Email.find({user: user});
	});

	Email.allow({
		'insert': function(userId, doc) {
			return true;
		},
		'remove': function(userId, doc) {
			return true;
		},
	});
}
