import React from 'react';


import { FileUploadFormLayout, FileUploadInput } from '/imports/components/blocks/forms/Layouts/FileUploadFormLayout/FileUploadFormLayout.jsx';


export class FileUploadFormDemo extends React.Component {

	render() {

		return(
			<FileUploadFormLayout>
				<FileUploadInput />
			</FileUploadFormLayout>
		);
	}
}
