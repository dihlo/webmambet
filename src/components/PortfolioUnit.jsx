import React from 'react';
import {Link, IndexLink} from 'react-router';

function PortfolioUnit(props) {
	return (
		<div className="PortfolioUnit">
			<a href={props.site_link}>
				<div className="PortfolioUnitBlock">
					<div className="rotate">
						<div className="DescriptionSite">
							<h3>{props.site_description_name}</h3>
							<p>{props.site_description_des}</p>
						</div>
						<div className="PortfolioUnitImg"></div>	
						<p className="SiteNamePreveiw">{props.site_name}</p>
					</div>					
				</div>
			</a>
		</div>
	);
}

export default PortfolioUnit;