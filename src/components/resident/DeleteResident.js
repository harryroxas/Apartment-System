import React, { Component } from 'react';
import { Modal, Icon, Button } from 'semantic-ui-react';

class DeleteResident extends Component {
	
	handleDelete = () => {
		this.props.deleteResident(this.props.residentName);
	}

	render(){
		return(
		<Modal trigger={<Button circular size='mini' icon='close' />} closeIcon='close'>
			<Modal.Header>
				<Icon name='x' />Remove Resident
			</Modal.Header>
			<Modal.Content>
				Are you sure you want to remove this resident?
			</Modal.Content>
			<Modal.Actions>
				<Button negative onClick={this.handleDelete}>Delete</Button>
			</Modal.Actions>
		</Modal>
		)
	}
}

export default DeleteResident;