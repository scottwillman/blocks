import React from 'react';

import './Spreadsheet.scss';

/**
*/
export class Spreadsheet extends React.Component {

	render() {
		return(
			<table className="spreadsheet" style={this.props.style}>
				<thead>
					<tr>
						{this.props.columns.map((column, idx) =>
							<th key={idx}>{column}</th>
						)}
					</tr>
				</thead>
				<tbody>
					{this.props.data.map((row, rid) => {
						return(
							<tr key={rid}>
								{this.props.columns.map((column, cid) => <td key={cid}>{row[column]}</td>)}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
