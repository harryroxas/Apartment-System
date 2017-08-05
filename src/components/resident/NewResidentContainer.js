import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import NewResident from './NewResident';

class NewResidentContainer extends Component {
	constructor(){
		super();
		this.state = {
			residentName: '',
			added: false
		}
	}

	onHandleInput = (e, {name, value}) => {
		this.setState({ [name]: value});
	}

	onHandleSubmit = e => {
		e.preventDefault();
		if(this.state.residentName !== '') {
			this.props.addResident(this.state.residentName);

			this.setState({
				residentName: '',
				added: true
			})
		}
	}

	render() {
		return (
			<div>
				<NewResident
					residentName={this.state.residentName}
					onHandleInput={this.onHandleInput.bind(this)}
					onHandleSubmit={this.onHandleSubmit.bind(this)}
				/>
			{ 	this.state.added ? (
					<Message positive>
						<Message.Content>
							<Message.Header>New Resident Added!</Message.Header>
							Resident has been successfully added.
						</Message.Content>
					</Message>
				) : <div />
			}
			</div>
		)
	}
}

export default NewResidentContainer;