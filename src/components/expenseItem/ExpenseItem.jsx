import React from 'react'

const ExpenseItem = ({ title, date, price }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '600px',
				background: '#4B4B4B',
				color: 'white',
                marginLeft:'400px'
			}}
		>
			<p>{date.toString()}</p>
			<h4>{title}</h4>
			<p>{price}</p>
		</div>
	)
}

export default ExpenseItem
