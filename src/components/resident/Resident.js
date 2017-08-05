import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

import DeleteResident from './DeleteResident';

const Resident = ({residentName, deleteResident, bills}) => {
	return(
		<Table.Row textAlign='left'>
			<Table.Cell>
				<DeleteResident deleteResident={deleteResident} residentName={residentName}/>{residentName}
			</Table.Cell>
			{
				bills.map((bill) => 
					<Table.Cell textAlign="center">
						{bill.amount}
					</Table.Cell>
				)
			}
		</Table.Row>
	)
}

export default Resident;