import React from 'react';

// import './SandboxLayout.css';


export const SandboxLayout = (props) => {

	return (
		<div>
			<div className="flex flex-dir-row flex-align-center bg-grey-10" style={{'height':'400px'}}>
				<div className="flex-align-self-start">
					<div className="text-white pad-lr-12 pad-tb-12 bg-grey-70 h-100 w-100 m-3">Farts</div>
				</div>
				<div className="flex-align-self-end">
					<div className="text-white pad-lr-12 pad-tb-12 bg-grey-50 h-100 w-100 m-3">Farts</div>
				</div>
			</div>
		</div>

	);
}
