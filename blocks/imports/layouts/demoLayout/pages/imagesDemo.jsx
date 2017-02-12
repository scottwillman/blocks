import React from 'react';


import { Container } from '/imports/components/blocks/basics/Container/Container.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';
import { Image } from '/imports/components/blocks/basics/Images/Images.jsx';


export const ImagesDemo = (props) => {

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
	const paragraphStyle = {
		"marginTop": '12px',
	}

	return(
		<Container>
			<SectionHeading>Images</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph style={paragraphStyle}>An <em>Image</em> component can just be a plain image or it can be responive by adding the <em>responive</em> prop. If it is responsive, a height value must be supplied. Optionally, a width prop can also be specified. Otherwise, it will assume 100% width of it's parent.</Paragraph>
			<Paragraph style={paragraphStyle}><Tag flavor="orange">Todo</Tag> Look into using max-height and max-width attributes. See if there are issues with supplying them to the style prop or if there should be dedicated props.</Paragraph>

			<Container style={demoContainer}>
				<Image src="/images/test.jpg" style={{"borderRadius":"32px"}} />
				<Image src="/images/test.jpg" responsive height="200px" width="200px" style={{"borderRadius":"100px"}} />
				<Image src="/images/test.jpg" responsive height="200px" />
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Image } from '/imports/components/blocks/basics/Images/Images.jsx';

					<Container>
						<Image src="/images/test.jpg" style={{"borderRadius":"32px"}} />
						<Image src="/images/test.jpg" responsive height="200px" width="200px" style={{"borderRadius":"100px"}} />
						<Image src="/images/test.jpg" responsive height="300px" />
					</Container>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
