import React from 'react';

import './FixedColumnLayout.scss';

// import { PageContainer, Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';

// import { ButtonDemo } from './pages/buttonDemo.jsx';
// import { TypographyDemo } from './pages/typographyDemo.jsx';
// import { CodeBlockDemo } from './pages/codeBlockDemo.jsx';

// import { Link } from 'react-router';


export const FixedColumnLayout = (props) => {

	return (
		<div className="fixed-column-layout" style={props.style}>
			{props.children}
		</div>
	);
}

export const ElasticContent = (props) => {

	return (
		<div className="elastic-content" style={props.style}>
			{props.children}
		</div>
	);
}


/**
*/
export class FixedColumn extends React.Component {


	render() {

		if (this.props.style) {
			this.props.style.float = this.props.side;
		} else {
			this.props.style = {'float':this.props.side};
		}

		return(
			<div className="fixed-column" style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
}
