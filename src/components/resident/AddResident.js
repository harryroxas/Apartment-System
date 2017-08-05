import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import NewResidentContainer from './NewResidentContainer';

class AddResident extends Component {
	render(){
		return(
		<Modal trigger={<Button positive>Add Resident</Button>} closeIcon='close'>
			<Modal.Content>
				<NewResidentContainer addResident={this.props.addResident} />
			</Modal.Content>
		</Modal>
		)
	}
}

export default AddResident;