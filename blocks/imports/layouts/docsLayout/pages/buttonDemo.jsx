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
			"marginTop": "12px",
			"marginBottom": ".8rem",
		}
		const codeBlockStyle = {
			"marginTop": ".5rem",
		}
		const buttonStyle = {
			"marginRight": "12px",
		}
		const demoContainer = {
			"marginTop": "12px",
		}
		const buttonGroupStyle = {
			"marginRight": "12px",
		}

		return (
			<Container>

				<SectionHeading>Buttons</SectionHeading>
				<Heading style={headingStyle}>Sizes</Heading>
				<Paragraph>All buttons come in large, medium (default), or small.</Paragraph>

				<Container style={demoContainer}>
					<Button size="small" style={buttonStyle}>Small Button</Button>
					<Button size="medium" style={buttonStyle}>Medium Button</Button>
					<Button size="large" style={buttonStyle}>Large Button</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						import { Button } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';

						<Button size="small">Small Button</Button>
						<Button size="medium">Medium Button</Button>
						<Button size="large">Large Button</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Styling</Heading>
				<Paragraph>Buttons come in different <em>colors</em>. These determine the visual style.</Paragraph>
				<Container style={demoContainer}>
					<Button style={buttonStyle}>Light</Button>
					<Button flavor="grey" style={buttonStyle}>Grey</Button>
					<Button flavor="orange" style={buttonStyle}>Orange</Button>
					<Button flavor="blue" style={buttonStyle}>Blue</Button>
					<Button flavor="red" style={buttonStyle}>Red</Button>
					<Button flavor="green" style={buttonStyle}>Green</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<Button>Light</Button>
						<Button flavor="grey">Grey</Button>
						<Button flavor="orange">Orange</Button>
						<Button flavor="blue">Blue</Button>
						<Button flavor="red">Red</Button>
						<Button flavor="green">Green</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Callbacks</Heading>
				<Paragraph>Pass a method to the onClickHandler property to catch when the button is clicked. </Paragraph>
				<Container style={demoContainer}>
					<Button color="blue" onClickHandler={this.demoOnClick.bind(this)}>Button Text</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
							<Button color="light" onClickHandler={this.demoOnClick.bind(this)}>Button Text</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Submit Buttons</Heading>
				<Paragraph>Use the <em>isSubmit</em> property to specify this button should be a <em>submit</em> type button.</Paragraph>
				<Container style={demoContainer}>
					<Button color="blue" isSubmit={true} onClickHandler={this.demoOnClick.bind(this)}>Submit</Button>

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
							<Button color="light" isSubmit={true} onClickHandler={this.demoOnClick.bind(this)}>Submit</Button>
					`}</CodeBlock>
				</Container>

				<Heading style={headingStyle}>Button Groups</Heading>
				<Paragraph>Stuff buttons into a button group and it'll take care of mushing them together.</Paragraph>
				<Paragraph><Tag color="orange">TO DO</Tag>Would be cool to control button sizing from the <em>ButtonGroup</em> level.</Paragraph>
				<Container style={demoContainer}>
					{/* <ButtonGroup style={buttonGroupStyle}>
						<Button>Button A</Button>
						<Button>Button B</Button>
						<Button>Button C</Button>
					</ButtonGroup> */}

					{/* <ButtonGroup style={buttonGroupStyle}>
						<Button size="small" color="dark">Button A</Button>
						<Button size="small" color="dark">Button B</Button>
						<Button size="small" color="dark">Button C</Button>
					</ButtonGroup> */}

					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						<ButtonGroup>
							<Button>Button A</Button>
							<Button>Button B</Button>
							<Button>Button C</Button>
						</ButtonGroup>

						<ButtonGroup>
							<Button size="small" color="dark">Button A</Button>
							<Button size="small" color="dark">Button B</Button>
							<Button size="small" color="dark">Button C</Button>
						</ButtonGroup>
					`}</CodeBlock>
				</Container>
			</Container>
		);
	}
}
