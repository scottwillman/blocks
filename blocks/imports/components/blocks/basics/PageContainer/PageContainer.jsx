import React from 'react';

import './PageContainer.scss';

/**
*/
export const PageContainer = (props) => {
	return(
		<div className="page-container">
			{props.children}
		</div>
	);
}
