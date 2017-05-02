import React from 'react';

function Container(props) {
	return (
		<div className={props.main_section}>
			<div className={props.container_styles}>
				<h2>{props.menu_name}</h2>
			</div>
		</div>
	);
}

Container.propTypes = {
	container_styles: React.PropTypes.string
};

export default Container;