import React from 'react';

// import './Tags.scss';

/**
*/
export const Tag = (props) => {

	let classNames = [
		'font-size-12',
		'pad-tb-3',
		'pad-lr-8',
		'round-3',
		'margin-r-4',
		'font-weight-300',
	];

	switch (props.flavor) {
		case 'black':
			classNames = classNames.concat([
				'bg-black',
				'text-white',
			]);
			break;
		case 'grey':
			classNames = classNames.concat([
				'bg-grey-50',
				'text-white',
			]);
			break;
		case 'orange':
			classNames = classNames.concat([
				'bg-orange',
				'text-white',
			]);
			break;
		case 'red':
			classNames = classNames.concat([
				'bg-red',
				'text-white',
			]);
			break;
		case 'blue':
			classNames = classNames.concat([
				'bg-blue',
				'text-white',
			]);
			break;
		case 'green':
			classNames = classNames.concat([
				'bg-green',
				'text-white',
			]);
			break;
		default:
			classNames = classNames.concat([
				'border-grey-90',
				'bg-grey-93',
			]);
			break;
	}

	return(
		<span className={classNames.join(' ')} style={props.style}>
			{props.children}
		</span>
	);
}
