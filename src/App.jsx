import React from 'react';
import {Link, IndexLink} from 'react-router';
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
			<div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
				<main>
					{this.props.children}
				</main>
			</div>
		);		
	}
}

export default App;
/*ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));*/
