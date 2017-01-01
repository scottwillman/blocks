import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';


Uploads = new FilesCollection({
	debug: true,
	storagePath: '/Users/scott/Documents', // Need to find a better place to put these!
	collectionName: 'Images', // Need to change this too
	allowClientCode: false, // Disallow remove files from Client
	onBeforeUpload: function (file) {
		// Allow upload files under 10MB, and only in png/jpg/jpeg formats
		if (file.size <= 1024*1024*10 && /png|jpg|jpeg/i.test(file.extension)) { // Allow csv files, etc.
			return true;
		} else {
			return 'Please upload image, with size equal or less than 10MB';
		}
	}
});


if (Meteor.isServer) {
	Uploads.denyClient();
	Meteor.publish('uploads.all', function () {
		return Uploads.find().cursor;
	});

} else {

	Meteor.subscribe('uploads.all');

}
