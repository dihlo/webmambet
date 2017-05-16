import React from 'react';
import Header from "./Header";

function Price(props) {
	return (
		<div >
			<Header />
			<div className="tableBg">
				<table className="table">
				<col width="80%"/>
				<col width="20%"/>
					<tr>
						<td>Индивидуальный дизайн</td>
						<td>4000 р.</td>
					</tr>
					<tr>
						<td>Мобильная версия</td>
						<td>2000 р.</td>
					</tr>
					<tr>
						<td>Хостинг год</td>
						<td>от 2000 р.</td>
					</tr>
					<tr>
						<td>Доменное имя</td>
						<td>от 300 р.</td>
					</tr>
					<tr>
						<td>Тех. подержка год</td>
						<td>10 000 р.</td>
					</tr>
					<tr>
						<td>Сайт визитка</td>
						<td>10 000 р.</td>
					</tr>
					<tr>
						<td colSpan={2} className="tdText">Небольшой сайт содержащий информацию об<br/>
						организации, компании товарах или услуах, контакты,<br/>
						схема проезда формы обратной связи</td>
					</tr>
					<tr>
						<td>Корпоративный сайт</td>
						<td>25 000 р.</td>
					</tr>
					<tr>
						<td colSpan={2} className="tdText">Полноценный сайт содержащий информацию об <br/>
						новости, услуги, прайс-лист, реквизиты, контакты,<br/>
						схема проезда формы обратной связи<br/>
						система поиск и т.д.</td>
					</tr>
					<tr>
						<td>Корпоративный сайт</td>
						<td>25 000 р.</td>
					</tr>																				
				</table>
			</div>	
		</div>
	);
}

export default Price;