import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';
import { CardLayout, Card, CardBanner, CardHeading, CardParagraph } from '/imports/components/blocks/basics/Cards/Cards.jsx';

import { ToolBar, ToolBarContainer } from '/imports/components/blocks/basics/ToolBar/ToolBar.jsx';

import { Button, ButtonGroup } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';
import { Image } from '/imports/components/blocks/basics/Images/Images.jsx';

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
		"width": "250px",
	}
	const toolbarStyle = {
		"padding": ".2rem .25rem",
	}

	return(
		<Container>
			<SectionHeading>Cards <Tag color="blue">Themeable</Tag></SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph><Tag color="orange">Todo</Tag> Adjust flex properties of cards to align vertically</Paragraph>

			<Container style={demoContainer}>
				<CardLayout>
					<Card style={cardStyle}>
						<CardBanner>Card Heading</CardBanner>
						<CardParagraph>Overture, curtains, lights. This is it, the night of nights.</CardParagraph>
					</Card>

					<Card style={cardStyle}>
						<Image src="/images/test.jpg" responsive height="300px" />
						<CardBanner>Card Heading</CardBanner>
						{/* <CardParagraph>Overture, curtains, lights. This is it, the night of nights.</CardParagraph> */}
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

					<Card style={cardStyle}>
						<ToolBar size="small" style={toolbarStyle}>
							<ToolBarContainer side="left">
								<Button size="small">Left Button</Button>
							</ToolBarContainer>
							<ToolBarContainer side="right">
								<ButtonGroup>
									<Button size="small">Left</Button>
									<Button size="small">Center</Button>
									<Button size="small" flavor="default-2">Right</Button>
								</ButtonGroup>
							</ToolBarContainer>
						</ToolBar>
						<CardParagraph>Overture, curtains, lights. This is it, the night of nights. No more rehearsing and nursing a part, we know every part by heart! Overture, curtains, lights. This is it, you'll hit the heights. And oh, what heights we'll hit. On with the show this is it. Tonight what heights we'll hit, on with the show this is it!</CardParagraph>
					</Card>
				</CardLayout>
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
