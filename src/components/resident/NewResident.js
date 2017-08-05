import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';

const NewResident = ({
	residentName,
	onHandleInput,
	onHandleSubmit
}) => {
	return (
		<div>
			<Header textAlign="center">Add Resident</Header>
			<Form onSubmit={onHandleSubmit}>
				<Form.Input
					label="Name"
					placeholder="Resident's Name"
					name="residentName"
					value={residentName}
					onChange={onHandleInput}
				/>
			<Button type="submit" primary>Add Resident</Button>
			</Form>
		</div>
	)
}

export default NewResident;