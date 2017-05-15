import React from 'react';
import Header from "./Header";

function Contacts(props) {
	return (
		<div className="ContactsBG">
			<Header />
			<div className="ContactsContainer">
				<div className="ContactsEmail">e-mail: sale@webmambet.ru</div>
				<div className="ContactsPhone">телефон: +7 (962) 733 33 70</div>
			</div>			
		</div>
	);
}

export default Contacts;