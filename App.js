import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './context'


function App() {
	const [todos, setTodos] = React.useState([
		{id:1, completed: false, title: 'buy brad'},
		{id:2, completed: true, title: 'buy orange'},
		{id:3, completed: false, title: 'buy milk'}
	])

function toggleTodo(id) {
	setTodos(
		todos.map(todo => {
			if (todo.id === id){ 1
				todo.completed = !todo.completed
			}
			return todo
		})
	)
}

function removeTodo(id){
	setTodos(todos.filter(todo => todo.id !==id))
}

function addTodo(title){
	setTodos(todos.concat([{
		title,
		id: Date.now(),
		completed:false
	}]))
}

return (
	<Context.Provider value={{removeTodo}}>
	  	<div className="wrapper">
	      	<h1> React Tutorial </h1>
	      	<AddTodo onCreate={addTodo}/>
	      	{todos.lenght ? (
	      		<TodoList todos={todos} onToggle={toggleTodo} />
	      	) : (
	      	)}
	  	</div>
	<Context.Provider/>
  )  
}

export default App
