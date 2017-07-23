import React from 'react';

import { Caret } from '../Caret/Caret.jsx';


/**
*/
export class Table extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			'sort_key': '',
			'sort_dir': '',
			'data': this.props.data,
		}


		const styles = StyleSheet.create({
			base: {
				// display: "inline-block",
				"vertical-align": "top",
			},
		});
		const themeStyles = StyleSheet.create(theme.cards.styles);





		this.rowDefaultClassName = 'table-flavor-light';

		this.tableClassNames = [
			'border-grey-90',
			'border-1',
		].join(' ');

		this.headerClassNames = [
			"pad-tb-14",
			"pad-lr-18",
			"font-weight-500",
			"text-capitalize",
			"border-b-grey-90",
			"border-b-1",
			'bg-grey-96',
			'text-left',
		].join(' ');

		this.rowClassNames = [
			'table-row',
		];

		this.cellClassNames = [
			"pad-tb-12",
			"pad-lr-18",
			"border-b-grey-90",
			"border-b-1",
			"text-color-inherit",
		];
	}

	_getRowClassNames(newClassNames=this.rowDefaultClassName) {

		if (Array.isArray(newClassNames)) {
			return this.rowClassNames.concat(newClassNames).join(' ');
		} else {
			if (newClassNames !== undefined) {
				return this.rowClassNames.join(' ') + " " + newClassNames;
			} else {
				return this.rowClassNames.join(' ');
			}
		}
	}

	_getCellClassNames(newClassNames) {
		if (Array.isArray(newClassNames)) {
			return this.cellClassNames.concat(newClassNames).join(' ');
		} else {
			if (newClassNames !== undefined) {
				return this.cellClassNames.join(' ') + " " + newClassNames;
			} else {
				return this.cellClassNames.join(' ');
			}
		}
	}



	__compare(a, b) {
		if (a[this.state.sort_key].data < b[this.state.sort_key].data) return -1;
		if (a[this.state.sort_key].data > b[this.state.sort_key].data) return 1;
		return 0;
	}

	sortData(e, key, direction) {
		e.preventDefault()

		this.setState({'sort_key':key, 'sort_dir': direction}, () => {
			let newData = this.state.data;
			newData.sort(this.__compare.bind(this));

			switch (this.state.sort_dir) {
				case "asc":
					this.setState({'data': newData});
					break;
				case "desc":
					this.setState({'data': newData.reverse()});
					break;
			}
		});
	}

	renderSortButton(key) {
		return(
			<div style={{'float':'right', 'marginLeft':'8px'}}>
				<Caret
					size="6px"
					className="hsl(0,0%,60%)"
					activeColor="red"
					direction="up"
					isActive={this.state.sort_key === key && this.state.sort_dir === "asc" ? true : false}
					onClickHandler={(e) => this.sortData(e, key, "asc")}
				/>
				<Caret
					size="6px"
					direction="down"
					isActive={this.state.sort_key === key && this.state.sort_dir === "desc" ? true : false}
					onClickHandler={(e) => this.sortData(e, key, "desc")} style={{'marginTop': '3px'}}
				/>
			</div>
		)
	}

	render() {

		return(
			<table className={this.tableClassNames} style={this.props.style}>
				<thead>
					<tr>
						{this.props.headers.map((header, idx) =>
							<th key={idx} className={this.headerClassNames}>
								<span>{header.title}</span>
								{header.sortable ? this.renderSortButton(header.key) : ''}
							</th>
						)}
					</tr>
				</thead>
				<tbody>
					{this.state.data.map((row, idx) => {
						return(
							<tr key={idx} className={this._getRowClassNames(row._rowData.flavor)}>
								{this.props.headers.map((header, idh) => {
									return(
										<td className={this._getCellClassNames(row[header.key].flavor)}
											key={idh}
										>
											{row[header.key].data}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
