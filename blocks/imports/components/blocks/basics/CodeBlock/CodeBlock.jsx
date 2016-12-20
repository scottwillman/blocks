import React from 'react';

import './prism/prism.js';
import './prism/prism.css';
import './CodeBlock.scss';

/**
@size: named size sm, md, lg
@isSubmit: boolean
@onClickHandler: function
@color: any valid css color identifier. For ex. rgb(0,0,0), #999999, red, etc.
*/
export class CodeBlock extends React.Component {

	trimInputCodeBlock() {
		const rawLines = this.props.children.split('\n');

		// Remove blank lines from the beginning
		let trimmedHead = [];
		let inCode = false;
		for (let i = 0; i < rawLines.length; i++) {
			if (!inCode) {
				if (rawLines[i].trim() === "") {
					continue;
				} else {
					inCode = true;
					trimmedHead.push(rawLines[i]);
				}
			} else {
				trimmedHead.push(rawLines[i]);
			}
		}

		// Remove blank lines from the end (same as above in reverse)
		let trimmedTail = [];
		inCode = false;
		for (let i = trimmedHead.length - 1; i >= 0; i--) {
			if (!inCode) {
				if (trimmedHead[i].trim() === "") {
					continue;
				} else {
					inCode = true;
					trimmedTail.push(trimmedHead[i]);
				}
			} else {
				trimmedTail.push(trimmedHead[i]);
			}
		}
		let paddedLines = trimmedTail.reverse();

		/**
		Find out if the source uses tabs or spaces

		The following methods base their decisions on the first line of the code.
		The assumption is that the first line shouldn't ever be indented.
		*/
		const tabsExp   = /^\t+/g;
		const spacesExp = /^\s+/g;
		let needsTrimming = false;

		let spaceType = null;
		if (tabsExp.test(paddedLines[0])) {
			needsTrimming = true;
			spaceType = "tabs";
		} else if (spacesExp.test(paddedLines[0])) {
			needsTrimming = true;
			spaceType = "spaces";
		}

		// Convert tabs to spaces (4 spaces per tab)
		if (spaceType == "tabs") {
			for (let i = 0; i < paddedLines.length; i++) {
				paddedLines[i] = paddedLines[i].replace(/\t/g, "    ");
			}
		}


		// Get the amount of padding from the first line to remove from all lines
		const spaces = paddedLines[0].match(/^\s+/);
		let paddingLength = 0;
		if (spaces) {
			paddingLength = spaces[0].length;
		}

		// Loop through again and remove that paddingLength from the head of each line
		// if it exists. The result will letf-justify the code.
		const paddingTest = new RegExp("^\\s{"+paddingLength+"}");
		let trimmedLines = [];
		for (let i = 0; i < paddedLines.length; i++) {
			if (paddingTest.test(paddedLines[i])) {
				trimmedLines.push(paddedLines[i].replace(paddingTest, ""));
			} else {
				trimmedLines.push(paddedLines[i]);
			}
		}

		return trimmedLines.join("\n");
	}

	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		let languageClass = "language-"+this.props.language;

		return(
			<pre className="code-block" style={this.props.style}>
				<code className={languageClass}>
					{this.trimInputCodeBlock()}
				</code>
			</pre>
		);
	}
}
