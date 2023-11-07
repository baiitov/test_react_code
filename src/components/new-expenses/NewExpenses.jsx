import React, { useState } from 'react'
import Button from '../UI/Button'
import ExpenseForm from '../expenseForm/ExpenseForm'
const NewExpenses = ({addData}) => {
	const [isToggle, setIsToggle] = useState(false) // false
	

	function addExpense() {
		setIsToggle((prevState) => !prevState) // !false
	}


	console.log('render')
	return (
		<div>
			{!isToggle && (
				<Button onClick={addExpense} title='добавить новый расход' />
			)}

			{isToggle && <ExpenseForm addExpense={addExpense} addData={addData} />}
		</div>
	)
}

export default NewExpenses
