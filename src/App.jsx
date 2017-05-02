import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import './styles.css'
import Container from './components/Container';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: this.props.initialData
		};
	}

	render () {
		return ( 
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
		);		
	}
}

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));
