import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);

	return {
		bind: {
			value: value,
			onChange: event => setValue(event.target.value)
		},
		clear: () => setValue(''),
		value: () => value
	}
}


const AddTodoItem = ({ onCreate }) => {
	const input = useInputValue('');
	//const [value, setValue] = useState('');
	function submitHandler(e) {
		e.preventDefault();
		if (input.value().trim()) {
			onCreate(input.value());
			input.clear();
			//setValue('');
		}
	}
	return (
		<form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
			{/* <input value={value} onChange={(e) => setValue(e.target.value)}/> */}
			<input {...input.bind}/>
			<button type="submit">Добавить задание</button>
		</form>
	);
};

AddTodoItem.propTypes = {
	onCreate: PropTypes.func.isRequired
}


export default AddTodoItem;