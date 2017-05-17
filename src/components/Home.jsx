import React from 'react';
import Container from './Container';
import {Link, IndexLink} from 'react-router';
function Home(props) {
	return (
		<div>
			<Link to="/Home">
				<Container container_styles="MainMenuSectionMain" 
				main_section="MainMenuSection" 
				menu_name="Web Mambet"
				webStudioLogoName="Веб студия"/>
			</Link>
			<Link to="/Portfolio">
				<Container container_styles="MainMenuSectionPortfolio" 
				main_section="MainMenuSection" 
				menu_name="Портфолио"/>
			</Link>
			<Link to="/Price">
			<Container container_styles="MainMenuSectionPrice" 
				main_section="MainMenuSection" 
				menu_name="Цены"/>
			</Link>
			<Link to="/Contacts">	
				<Container container_styles="MainMenuSectionContacts" 
				main_section="MainMenuSection" 
				menu_name="Контакты"/>
			</Link>	
		</div>
	);
}

export default Home;