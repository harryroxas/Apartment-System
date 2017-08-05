import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';

const NewBill = ({
	type,
	month,
	amount,
	onHandleInput,
	onHandleSubmit
}) => {
	return (
		<div>
			<Header textAlign="center">Add Bill</Header>
			<Form onSubmit={onHandleSubmit}>
				<Form.Input
					label="Type"
					placeholder="Bill Type"
					name="type"
					value={type}
					onChange={onHandleInput}
				/>
				<Form.Select
					label="Month"
					placeholder="Month"
					options={months}
					name="month"
					value={month}
					onChange={onHandleInput}
				/>
				<Form.Input
					label="Amount"
					placeholder="Amount"
					name="amount"
					value={amount}
					onChange={onHandleInput}
				/>
			<Button type="submit" primary>Add Bill</Button>
			</Form>
		</div>
	)
}

const months = [
	{
		text: "January",
		value: "January"
	},

	{
		text: "February",
		value: "February"
	},

	{
		text: "March",
		value: "March"
	},

	{
		text: "April",
		value: "April"
	},

	{
		text: "May",
		value: "May"
	},

	{
		text: "June",
		value: "June"
	},

	{
		text: "July",
		value: "July"
	},

	{
		text: "August",
		value: "August"
	},

	{
		text: "September",
		value: "September"
	},

	{
		text: "October",
		value: "October"
	},

	{
		text: "November",
		value: "November"
	},

	{
		text: "December",
		value: "December"
	},
]

export default NewBill;