import React from 'react';
import { Table } from 'semantic-ui-react';

import DeleteResident from './DeleteResident';
import PayBill from '../bill/PayBill';

const Resident = ({residentName, deleteResident, bills}) => {
	return(
		<Table.Row textAlign='left'>
			<Table.Cell>
				<DeleteResident deleteResident={deleteResident} residentName={residentName}/>{residentName}
			</Table.Cell>
			{
				bills.map((bill, index) => 
					<PayBill key={index} billType={bill.type} billAmount={bill.amount} />
				)
			}
		</Table.Row>
	)
}

export default Resident;