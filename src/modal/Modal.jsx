import React from 'react';
import classes from './Modal.module.css';

export default class Modal extends React.Component {
	state = {
		isOpen: false
	}
	render() {
		return (
			<React.Fragment>
				<button onClick={() => this.setState({isOpen: true})}>Open modal</button>
				{this.state.isOpen && (<div className={classes.modal}>
					<div className={classes.modalBody}>
						<h1>Modal title</h1>
						<p>I`m modal</p>
						<button onClick={() => this.setState({isOpen: false})}>x</button>
					</div>
				</div>)}
			</React.Fragment>
		)
	}
}



// const Modal = () => {
// 	return (
// 		<div className={classes.modal}>
			
// 		</div>
// 	);
// };

// export default Modal;