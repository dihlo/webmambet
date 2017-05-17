import React from 'react';
import Header from "./Header";
import PortfolioUnit from './PortfolioUnit';
import {Link, IndexLink} from 'react-router';

function Portfolio(props) {
	return (
		<div className="PortfolioBG">
			<Header />
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" site_description_name="крутой сайт" site_description_des="Что о сdasdasd asdasdasfgasdfad asfsadasdasfasdsada sfasdasffas dsadasdasайте"/>
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" site_description_name="крутой сайт" site_description_des="Что о сайте"/>
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" site_description_name="крутой сайт" site_description_des="Что о сайте"/>
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" site_description_name="крутой сайт" site_description_des="Что о сайте"/>
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" site_description_name="крутой сайт" site_description_des="Что о сайте"/>
		</div>	
	);
}

export default Portfolio;