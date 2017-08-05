import React, { Component } from 'react';
import { Grid, Menu, Table, Header } from 'semantic-ui-react';

import AddResident from './resident/AddResident';
import AddBill from './bill/AddBill';
import Resident from './resident/Resident';

class Overview extends Component {
	render(){
		return (
			<Grid centered container style={{marginTop:52}}>
				<Menu borderless fluid>
					<Menu.Item position="left">
						<AddResident addResident={this.props.addResident} />
					</Menu.Item>
						<Header>Apartment System</Header>
					<Menu.Item position="right">
						<AddBill addBill={this.props.addBill} />
					</Menu.Item>
				</Menu>
				<Grid.Row>
					<Table textAlign="center" celled unstackable>
						<Table.Header>
							<Table.Row>
							<Table.HeaderCell />
							{
								this.props.bills.map((bill, index) =>
										<Table.HeaderCell key={index}>
											{bill.type} ({bill.month}) <br />P{bill.amount}
										</Table.HeaderCell>
								)
							}
							</Table.Row>
						</Table.Header>
						<Table.Body>
								{
									this.props.residents.map((resident, index) =>
										<Resident key={index} residentName={resident.name} deleteResident={this.props.deleteResident} bills={this.props.bills}/>
									)
								}
						</Table.Body>
					</Table>
				</Grid.Row>
			</Grid>
		)
	}
}

export default Overview;