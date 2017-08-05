import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import NewBillContainer from './NewBillContainer';

class AddBill extends Component {
	render(){
		return(
		<Modal trigger={<Button positive>Add Bill</Button>} closeIcon='close'>
			<Modal.Content>
				<NewBillContainer addBill={this.props.addBill} />
			</Modal.Content>
		</Modal>
		)
	}
}

export default AddBill;