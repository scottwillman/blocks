import React from 'react';


import { Container } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';
import { FileInput } from '/imports/components/blocks/forms/FileInput/FileInput.jsx';


export const FileInputDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const demoContainer = {
		"marginTop": "1rem",
	}
	const codeBlockStyle = {
		"marginTop": "1rem",
	}

	return(
		<Container>
			<SectionHeading>File Input</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>Shares styling props with the button component. Imports the Button stylesheets.</Paragraph>
			<Paragraph><Tag flavor="orange-dark">TO DO</Tag> Allowable file types, show file size</Paragraph>

			<Container style={demoContainer}>
				<FileInput flavor="light" size="medium">Choose File</FileInput>
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { FileInput } from '/imports/components/blocks/forms/FileInput/FileInput.jsx';

					<FileInput flavor="default-1" size="medium">Choose File...</FileInput>
				`}</CodeBlock>
			</Container>

			<Heading style={{"marginTop":"2rem"}}>API</Heading>
			<Paragraph>getValue() -> <em>returns file object</em></Paragraph>

			<Heading style={{"marginTop":"2rem"}}>Implementation in Meteor</Heading>
			<Paragraph>meteor add ostrio:files</Paragraph>
			<CodeBlock language="jsx" style={codeBlockStyle}>{`
				## /lib/FileUpload.js

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
			`}</CodeBlock>

			<CodeBlock language="jsx" style={codeBlockStyle}>{`
				## Component methods

				handleFileChange(e) {
					e.preventDefault();

					if (e.target.files && e.target.files[0]) {
						const file = e.target.files[0];
						if (file) {
							this.setState({'file':file});
						}
					}
				}

				handleUpload(e) {

					const file = this.state.file;
					if (file) {
						const uploadInstance = Uploads.insert({
							file: file,
							streams: 'dynamic',
							chunkSize: 'dynamic',
						}, false);

						uploadInstance.on('start', function() {
							console.log('started!');

						});

						uploadInstance.on('end', function(error, fileObj) {
							if (error) {
								this.setState({'error':error.reason});
								console.log('Error: '+error.reason);
							} else {
								console.log('File '+fileObj.name+' successfully uploaded!');
							}
						});

						uploadInstance.start();
					}
				}
			`}</CodeBlock>
		</Container>
	);
}
