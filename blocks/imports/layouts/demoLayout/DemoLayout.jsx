import React from 'react';

import './DemoLayout.scss';

import { PageContainer } from '/imports/components/blocks/basics/PageContainer/PageContainer.jsx';
import { SectionHeading, Heading, Body } from '/imports/components/blocks/basics/Text/Text.jsx';
import { Button } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';



export class DemoLayout extends React.Component {

	demoOnClick(e) {
		e.preventDefault();
		console.log("Demo Output");
		alert("Demo Output");
	}

	render() {

		const sectionHeadingStyle = {
			"marginTop": "2.5rem",
		}
		const headingStyle = {
			"marginTop": "1.5rem",
			"marginBottom": ".8rem",
		}
		const codeBlockStyle = {
			"marginTop": ".5rem",
		}

		return (
			<PageContainer>

				{/* BUTTONS */}
				<SectionHeading style={sectionHeadingStyle}>Buttons</SectionHeading>
				<Heading style={headingStyle}>Sizes</Heading>
				<Body>All buttons come in small, medium (default), or large.</Body>

				<div>
					<Button flavor="default-1" size="large">Button Text</Button>
					<Button flavor="default-1" size="medium">Button Text</Button>
					<Button flavor="default-1" size="small">Button Text</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<Button flavor="default-1" size="large">Button Text</Button>
						<Button flavor="default-1" size="medium">Button Text</Button>
						<Button flavor="default-1" size="small">Button Text</Button>
					`}</CodeBlock>
				</div>
				<Heading style={headingStyle}>Styling</Heading>
				<Body>Buttons come in different <em>flavors</em>. These determine the visual style.</Body>
				<div>
					<Button flavor="default-1">Button Text</Button>
					<Button flavor="default-2">Button Text</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<Button flavor="default-1">Button Text</Button>
						<Button flavor="default-2">Button Text</Button>
					`}</CodeBlock>
				</div>
				<Heading style={headingStyle}>Callbacks</Heading>
				<Body>Pass a method to the onClickHandler property to catch when the button is clicked. </Body>
				<div>
					<Button flavor="default-1" onClickHandler={this.demoOnClick.bind(this)}>Button Text</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<Button flavor="default-1" onClickHandler={this.demoOnClick.bind(this)}>Button Text</Button>
					`}</CodeBlock>
				</div>

				{/* TYPOGRAPHY */}
				<SectionHeading style={sectionHeadingStyle}>Typography</SectionHeading>
				<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
				<Body>Some text goes here</Body>

				{/* CODEBLOCK */}
				<SectionHeading style={sectionHeadingStyle}>Code Block</SectionHeading>
				<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
				<Body>A Code Block is for displaying code samples on a page (like the examples on this page). Syntax highlighting is determined by
				the "language" property. Language options are listed below.</Body>
				<Body><b>Languages:</b> jsx, html, css, sass, json, python</Body>
				<Body><b>Note:</b> Code is left-trimmed based on the indentation
				of the first line. Blank lines are removed from the head and tail of the code.</Body>
				<div>
					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<CodeBlock language="jsx">{\`
							<div>
								<span>Some code here.</span>
							</div>
						\`}</CodeBlock>
					`}</CodeBlock>
				</div>
			</PageContainer>
		);
	}
}
