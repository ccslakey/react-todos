// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
	// client side code

	Meteor.startup(function () {
		// Meteor.startup to render component on pageload

		React.render(<App />, document.getElementById("render-here"));
	});
}
