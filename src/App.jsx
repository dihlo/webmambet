import React from 'react';

import Container from './components/Container';
class App extends React.Component {
	render () {
		/*return ( 
			<main>
				{this.state.todos.map( function (todo) {
					return (
						<div>
							<Container container_styles={todo.section[0]} main_section={todo.main} menu_name={todo.menuNames[0]}/>
							<Container container_styles={todo.section[1]} main_section={todo.main} menu_name={todo.menuNames[1]}/>
							<Container container_styles={todo.section[2]} main_section={todo.main} menu_name={todo.menuNames[2]}/>
							<Container container_styles={todo.section[3]} main_section={todo.main} menu_name={todo.menuNames[3]}/>
						</div>


					);
				})}
			</main>
		);*/
		return ( 
			<main>
				<Container container_styles="MainMenuSectionMain" main_section="MainMenuSection" menu_name="Главная"/>
				<Container container_styles="MainMenuSectionPortfolio" main_section="MainMenuSection" menu_name="Портфолио"/>
				<Container container_styles="MainMenuSectionPrice" main_section="MainMenuSection" menu_name="Цены"/>
				<Container container_styles="MainMenuSectionContacts" main_section="MainMenuSection" menu_name="Контакты"/>
			</main>
		);		
	}
}

export default App;
/*ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));*/
