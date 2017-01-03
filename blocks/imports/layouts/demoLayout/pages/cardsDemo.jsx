import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';
import { Card, CardBanner, CardHeading, CardParagraph } from '/imports/components/blocks/basics/Cards/Cards.jsx';


export const CardsDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const demoContainer = {
		"marginTop": "1rem",
		// "width": "350px",
	}
	const codeBlockStyle = {
		"marginTop": "1rem",
	}
	const cardStyle = {
		"width": "350px",
	}

	return(
		<Container>
			<SectionHeading>Cards</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>Stuff</Paragraph>
			<Paragraph><Tag flavor="orange-dark">TO DO</Tag></Paragraph>

			<Container style={demoContainer}>
				<Card style={cardStyle}>
					<CardBanner>
						<CardHeading>Card Heading</CardHeading>
					</CardBanner>
					<CardParagraph>Overture, curtains, lights. This is it, the night of nights. No more rehearsing and nursing a part, we know every part by heart! Overture, curtains, lights. This is it, you'll hit the heights. And oh, what heights we'll hit. On with the show this is it. Tonight what heights we'll hit, on with the show this is it!</CardParagraph>
				</Card>
				<Card style={cardStyle}>
					<CardBanner>
						<CardHeading>Card Heading</CardHeading>
					</CardBanner>
					<CardParagraph>Overture, curtains, lights. This is it, the night of nights.</CardParagraph>
				</Card>
				<Card style={cardStyle}>
					<CardBanner>
						<CardHeading>Card Heading</CardHeading>
					</CardBanner>
					<CardParagraph>Overture, curtains, lights. This is it, the night of nights. No more rehearsing and nursing a part, we know every part by heart! Overture, curtains, lights. This is it, you'll hit the heights. And oh, what heights we'll hit. On with the show this is it. Tonight what heights we'll hit, on with the show this is it!</CardParagraph>
					<CardBanner>
						<CardParagraph style={{"padding":"0px"}}>Card Footer</CardParagraph>
					</CardBanner>
				</Card>
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Card, CardBanner, CardHeading, CardParagraph } from '/imports/components/blocks/basics/Cards/Cards.jsx';

					const cardStyle = {
						"width": "300px",
					}

					<Card style={cardStyle}>
						<CardBanner>
							<CardHeading>Card Heading</CardHeading>
						</CardBanner>
						<CardParagraph>...</CardParagraph>
					</Card>
					<Card style={cardStyle}>
						<CardBanner>
							<CardHeading>Card Heading</CardHeading>
						</CardBanner>
						<CardParagraph>...</CardParagraph>
					</Card>
					<Card style={cardStyle}>
						<CardBanner>
							<CardHeading>Card Heading</CardHeading>
						</CardBanner>
						<CardParagraph>...</CardParagraph>
						<CardBanner>
							<CardParagraph style={{"padding":"0px"}}>Card Footer</CardParagraph>
						</CardBanner>
					</Card>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
