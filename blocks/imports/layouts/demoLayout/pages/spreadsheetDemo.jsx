import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Spreadsheet } from '/imports/components/blocks/basics/Spreadsheet/Spreadsheet.jsx';



export const SpreadsheetDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"marginTop": ".5rem",
	}
	const demoContainerStyle = {
		"marginTop": "1rem",
	}

	const spreadsheetColumns = ['name','place','phone number'];
	const spreadsheetData = [
		{'name':'here','place':'there','phone number':'000'},
		{'name':'here','place':'there','phone number':'111'},
	];

	return(
		<Container>
			<SectionHeading>Spreadsheet</SectionHeading>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>A <em>Spreadsheet</em> component is magical.</Paragraph>
			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Spreadsheet } from '/imports/components/blocks/basics/Spreadsheet/Spreadsheet.jsx';

					const spreadsheetColumns = ['name', 'place', 'phone number'];
					const spreadsheetData = [
						{'name':'here', 'place':'there', 'phone number':'000'},
						{'name':'here', 'place':'there', 'phone number':'111'},
					];

					<Spreadsheet columns={spreadsheetColumns} data={spreadsheetData} />
				`}</CodeBlock>
			</Container>

			<Container style={demoContainerStyle}>
				<Spreadsheet columns={spreadsheetColumns} data={spreadsheetData} />
			</Container>

		</Container>
	);
}
