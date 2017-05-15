import React from 'react';
import Header from "./Header";
import PortfolioUnit from './PortfolioUnit';
import {Link, IndexLink} from 'react-router';

function Portfolio(props) {
	return (
		<div className="PortfolioBG">
			<Header />
			<div>Portfolio</div>
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" />
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" />
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" />
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" />
			<PortfolioUnit site_link="http://joker.ykt.ru/" site_name="joker.ykt.ru" />
		</div>	
	);
}

export default Portfolio;