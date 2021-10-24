import React, {useEffect} from "react";
import TodoList from './todo/todo-list/TodoList.jsx';
import Context from "./context.jsx";
//import AddTodoItem from "./todo/AddTodoItem/AddTodoItem.jsx";
import Loader from "./Loader.jsx";
import Modal from "./modal/Modal.jsx";

const AddTodoItem = React.lazy(() => new Promise(resolve => {
	setTimeout(() => {
		resolve(import("./todo/AddTodoItem/AddTodoItem.jsx"))
	}, 3000)
}))
	

function App() {

	const [arr, setArr] = React.useState([]);
	const [loader, setLoader] = React.useState(true);

	useEffect(() => {
		fetch('https://my-json-server.typicode.com/typicode/demo/posts?_limit=10')
			.then(response => response.json())
			.then(db => {
				setTimeout(() => {
					setArr(db);
					setLoader(false);
				}, 2000)
			})
	}, [])

	function onChangeCheckbox(id) {
		setArr(
			arr.map(item => {
				if (item.id === id) {
					item.completed = !item.completed
				}
				return item;
			})
		)
	}

	function removeItem(id) {
		setArr(
			arr.filter(item => item.id !== id)
		)
	}

	function createItem(title) {
		setArr(
			arr.concat([{
				title: title,
				id: Date.now(),
				completed: false
			}])
		)

	}

	return (
		<Context.Provider value={{ removeItem: removeItem}}>
			<div className="wrapper">
				<h1
					style={{ textAlign: 'center', color: 'blue' }}
				>React tutorial
				</h1>
				<Modal />
				<React.Suspense fallback={<p>Loading...</p>}>
					<AddTodoItem onCreate={createItem} />
				</React.Suspense>
				{loader && <Loader />}
				{arr.length ?
					<TodoList
						arr={arr}
						onChangeCheckbox={onChangeCheckbox}
					/> : (
						loader ? '' : <h1 style={{ color: 'red' }}>Список пуст</h1>
					)
				}
			</div>
		</Context.Provider>
	);
}

export default App;
