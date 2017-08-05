import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import NewBill from './NewBill';

class NewBillContainer extends Component {
	constructor(){
		super();
		this.state = {
			type: '',
			month: '',
			amount: '',
			added: false
		}
	}

	onHandleInput = (e, {name, value}) => {
		this.setState({ [name]: value});
	}

	onHandleSubmit = e => {
		e.preventDefault();
		if(this.state.type !== '' && this.state.month !== '' && this.state.amount !== ''){
			this.props.addBill(this.state.type, this.state.month, parseInt(this.state.amount, 10));

			this.setState({
				type: '',
				month: '',
				amount: '',
				added: true
			})
		}
	}

	render() {
		return (
			<div>
				<NewBill
					type={this.state.type}
					month={this.state.month}
					amount={this.state.amount}
					onHandleInput={this.onHandleInput.bind(this)}
					onHandleSubmit={this.onHandleSubmit.bind(this)}
				/>
			{ 	this.state.added ? (
					<Message positive>
						<Message.Content>
							<Message.Header>New Bill Added!</Message.Header>
							Bill has been successfully added.
						</Message.Content>
					</Message>
				) : <div />
			}
			</div>
		)
	}
}

export default NewBillContainer;