import React, { useState } from 'react'
import Button from '../UI/Button'
import Form from '../UI/Form'
const ExpenseForm = ({ addExpense, addData }) => {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0)
	const [date, setDate] = useState(null)
	function priceChangeHandler(event) {
		setPrice(event.target.value)
	}
	function titleChangeHandler(event) {
		setTitle(event.target.value)
	}
	function dateChangeHandler(event) {
		setDate(event.target.value)
	}
	function cancelExpense(e) {
		e.preventDefault()
		addExpense()
	}
	const addExpenseItem = (e) => {
		e.preventDefault()
		let items = {
			title,
			price,
			date: new Date(date),
		}

		addData(items)
	}
	return (
		<form>
			<Form
				labelTitle='Заголовок'
				id='title'
				onChange={titleChangeHandler}
			/>
			<Form
				labelTitle='Количество'
				onChange={priceChangeHandler}
				type='number'
				id='price'
			/>
			<Form
				labelTitle='Датировать'
				onChange={dateChangeHandler}
				type='date'
				id='date'
			/>
			<Button  onClick={cancelExpense}>отмена</Button>
			<Button onClick={addExpenseItem}>Добавить расходы</Button>
		</form>
	)
}

export default ExpenseForm
