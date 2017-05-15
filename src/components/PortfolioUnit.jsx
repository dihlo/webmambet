import React from 'react';
import {Link, IndexLink} from 'react-router';

function PortfolioUnit(props) {
	return (
		<div>
			<a href={props.site_link}>
				<div className="PortfolioUnitBlock">
					<div className="PortfolioUnitImg"></div>	
					<p>{props.site_name}</p>				
				</div>
			</a>
		</div>
	);
}

export default PortfolioUnit;