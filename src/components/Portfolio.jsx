import React from 'react';
import Header from "./Header";
import PortfolioUnit from './PortfolioUnit';
import {Link, IndexLink} from 'react-router';

function Portfolio(props) {
	return (
		<div className="PortfolioBG">
			<Header />
			<PortfolioUnit site_link="http://gurme14.ru/" site_name="gurme14.ru" site_description_name="Гурмэ" site_description_des="Сеть фирменных гастраномов с домашней кухней"/>
			<PortfolioUnit site_link="http://fitflakes.ru/" site_name="fitflakes.ru" site_description_name="FitFlakes" site_description_des="Производитель гранолы в г. Якутске"/>
			<PortfolioUnit site_link="http://news.iltumen.ru/" site_name="news.iltumen.ru" site_description_name="Газета Илтумэн" site_description_des="Сайт парламентской газеты"/>
			<PortfolioUnit site_link="http://yrokb.ru/" site_name="yrokb.ru" site_description_name="Офтальмологическая клиника" site_description_des="Якутская Республиканская офтальмологическая клиническая больница"/>
			<PortfolioUnit site_link="http://glaz14.ru/" site_name="glaz14.ru" site_description_name="Офтальмологическая кабинет" site_description_des=""/>
		</div>	
	);
}

export default Portfolio;