import React, { Component } from 'react';
import { Table, Modal, Button, Form } from 'semantic-ui-react';

class PayBill extends Component {

	render(){
		return(
		<Modal trigger={<Table.Cell selectable textAlign='center' content={this.props.billAmount} />} closeIcon='close'>
			<Modal.Header>
				Pay {this.props.billType} Bill
			</Modal.Header>
			<Modal.Content>
				<Form>
					<Form.Input label='Amount' placeholder='Amount' /> 
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button primary>Pay Bill</Button>
			</Modal.Actions>
		</Modal>
		)
	}
}

export default PayBill;