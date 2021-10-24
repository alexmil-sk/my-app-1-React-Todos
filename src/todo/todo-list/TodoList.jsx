import React from "react";
import PropTypes from 'prop-types';                               
import TodoListItem from "../todo-list-item/TodoListItem";

const styles = {
	ul: {
		listStyle: 'none',
		margin: 0,
		padding: 0
	}
}

function TodoList(props) {
	//debugger;
	return (
		<ul style={styles.ul}>
			
				{props.arr.map((item, idx) => {
					return (
						<TodoListItem
							item={item}
							key={item.id}
							idx={idx}
							onChangeCheckbox={props.onChangeCheckbox}
						/>
					)
				})}
		</ul>
	);
}

TodoList.propTypes = {
	arr: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChangeCheckbox: PropTypes.func.isRequired
}

export default TodoList;