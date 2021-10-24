import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import '../../index.css';

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid gray',
		borderRadius: '4px',
		marginBottom: '.5rem'
	},
	input: {
		marginRight: '1rem',
	}
}



const TodoListItem = ({ item, idx, onChangeCheckbox }) => {
	const { removeItem: removeItem } = useContext(Context);
	const classes = [];

	if (item.completed) {
		classes.push('done');
	}

	return (
		<li style={styles.li}>
			<span className={classes.join(' ')}>
				<input
					checked={item.completed}
					type="checkbox"
					style={styles.input}
					onChange={() => onChangeCheckbox(item.id)}
				/>
				<strong>{idx + 1}.</strong>
				&nbsp;
				{item.title}
			</span>
			<button
				className='rm'
				onClick={removeItem.bind(null, item.id)}
			>&times;
			</button>
		</li>
	);
};

export default TodoListItem;

TodoListItem.propTypes = {
	item: PropTypes.object.isRequired,
	idx: PropTypes.number,
	onChangeCheckbox: PropTypes.func.isRequired,
}