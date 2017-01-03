import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { Button, ButtonGroup } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';



export class ButtonDemo extends React.Component {

	demoOnClick(e) {
		e.preventDefault();
		console.log("Demo Output");
		alert("Demo Output");
	}

	render() {

		const headingStyle = {
			"marginTop": "1.5rem",
			"marginBottom": ".8rem",
		}
		const codeBlockStyle = {
			"marginTop": ".5rem",
		}

		return (
			<Container>
				{/* BUTTONS */}
				<SectionHeading>Buttons</SectionHeading>
				<Heading style={headingStyle}>Sizes</Heading>
				<Paragraph>All buttons come in large, medium (default), or small.</Paragraph>

				<Container>
					<Button flavor="default-1" size="large">Button Text</Button>
					<Button flavor="default-1" size="medium">Button Text</Button>
					<Button flavor="default-1" size="small">Button Text</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						import { Button } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';

						<Button flavor="default-1" size="large">Button Text</Button>
						<Button flavor="default-1" size="medium">Button Text</Button>
						<Button flavor="default-1" size="small">Button Text</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Styling</Heading>
				<Paragraph>Buttons come in different <em>flavors</em>. These determine the visual style.</Paragraph>
				<Container>
					<Button flavor="default-1">default-1</Button>
					<Button flavor="default-2">default-2</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<Button flavor="default-1">default-1</Button>
						<Button flavor="default-2">default-2</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Callbacks</Heading>
				<Paragraph>Pass a method to the onClickHandler property to catch when the button is clicked. </Paragraph>
				<Container>
					<Button onClickHandler={this.demoOnClick.bind(this)}>Button Text</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
							<Button flavor="default-1" onClickHandler={this.demoOnClick.bind(this)}>Button Text</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Submit Buttons</Heading>
				<Paragraph>Use the <em>isSubmit</em> property to specify this button should be a <em>submit</em> type button.</Paragraph>
				<Container>
					<Button isSubmit={true} onClickHandler={this.demoOnClick.bind(this)}>Submit</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
							<Button flavor="default-1" isSubmit={true} onClickHandler={this.demoOnClick.bind(this)}>Submit</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Button Groups</Heading>
				<Paragraph>Stuff buttons into a button group and it'll take care of mushing them together.</Paragraph>
				<Paragraph><Tag>TO DO</Tag>Would be cool to control button sizing from the <em>ButtonGroup</em> level.</Paragraph>
				<Container>
					<ButtonGroup>
						<Button>Button A</Button>
						<Button>Button B</Button>
						<Button>Button C</Button>
					</ButtonGroup>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<ButtonGroup>
							<Button>Button A</Button>
							<Button>Button B</Button>
							<Button>Button C</Button>
						</ButtonGroup>
					`}</CodeBlock>
				</Container>
			</Container>
		);
	}
}
