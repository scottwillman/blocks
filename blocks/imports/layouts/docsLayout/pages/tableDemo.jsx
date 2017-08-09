import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Table } from '/imports/components/blocks/basics/Table/Table.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';


export const TableDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"marginTop": "1rem",
	}
	const demoContainerStyle = {
		"marginTop": "1rem",
	}
	const todoStyle = {
		"marginTop": ".5rem",
	}

	const tableHeaders = [
		{
			'title': 'Person',
			'key':   'name',
		}, {
			'title': 'Flavor',
			'key':   'flavor',
			'sortable': true,
		}, {
			'title': 'phone',
			'key':   'phone_number',
			'sortable': true,
		},
	];

	/*
	Table data is a list of objects representing rows.
	Each row is an object of keys pertaining to a header key.
	Each key is an object containing information about the cell.
	*/
	const tableData = [ // rows
		{ // cells
			'_rowData': { // this is a special reserved key!
				// 'flavor': 'table-flavor-light',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': '(none/default)',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2340',
				'dataType': 'phone_number',
			}
		}, { // cells
			'_rowData': { // this is a special reserved key!
				// 'flavor': 'table-flavor-light',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': '(none/default)',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2341',
				'dataType': 'phone_number',
			}
		}, { // cells
			'_rowData': { // this is a special reserved key!
				// 'flavor': 'table-flavor-light',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': '(none/default)',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2342',
				'dataType': 'phone_number',
			}
		}, { // cells
			'_rowData': { // this is a special reserved key!
				'flavor': 'table-flavor-dark',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': 'table-flavor-dark',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2343',
				'dataType': 'phone_number',
				// 'flavor': 'table-flavor-orange',
			}
		}, { // cells
			'_rowData': { // this is a special reserved key!
				'flavor': 'table-flavor-orange',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': 'table-flavor-orange',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2344',
				'dataType': 'phone_number',
			}
		}, { // cells
			'_rowData': { // this is a special reserved key!
				'flavor': 'table-flavor-red',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': 'table-flavor-red',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2345',
				'dataType': 'phone_number',
			}
		}, { // cells
			'_rowData': { // this is a special reserved key!
				'flavor': 'table-flavor-blue',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': 'table-flavor-blue',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2346',
				'dataType': 'phone_number',
			}
		}, { // cells
			'_rowData': { // this is a special reserved key!
				'flavor': 'table-flavor-green',
			},
			'name': {
				'data': 'me',
				'dataType': 'text',
			},
			'flavor': {
				'data': 'table-flavor-green',
				'dataType': 'text',
			},
			'phone_number': {
				'data': '000-213-2347',
				'dataType': 'phone_number',
			}
		}
	];

	return(
		<Container>
			<SectionHeading>Table</SectionHeading>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>A <em>Table</em> component is magical. It does <em>stuff</em>.</Paragraph>
			{/* <Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Add cell and row flavors for styling options.</Paragraph> */}
			{/* <Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Add sorting</Paragraph> */}
			<Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Add filtering</Paragraph>
			<Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Add row/cell onClick</Paragraph>
			<Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Add data types</Paragraph>
			<Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Make cells editable</Paragraph>
			<Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Make rows selectable</Paragraph>
			<Paragraph style={todoStyle}><Tag flavor="orange">TODO</Tag> Add line numbers</Paragraph>

			<Container style={demoContainerStyle}>
				<Table headers={tableHeaders} data={tableData} />
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Table } from '/imports/components/blocks/basics/Table/Table.jsx';

					const tableHeaders = [
						{
							'title': 'Person',
							'key':   'name',
						}, {
							'title': 'Flavor',
							'key':   'flavor',
							'sortable': true,
						}, {
							'title': 'phone',
							'key':   'phone_number',
							'sortable': true,
						},
					];

					/*
					Table data is a list of objects representing rows.
					Each row is an object of keys pertaining to a header key.
					Each key is an object containing information about the cell.
					*/
					const tableData = [ // rows
						{ // cells
							'name': {
								'data': 'me',
								'dataType': 'text',
							},
							'place': {
								'data': 'there',
								'dataType': 'text',
								'flavor': 'table-flavor-light',
							},
							'phone_number': {
								'data': '000-213-2345',
								'dataType': 'phone_number',
							}
						},
					];

					<Table headers={tableHeaders} data={tableData} />
				`}</CodeBlock>
			</Container>

		</Container>
	);
}
