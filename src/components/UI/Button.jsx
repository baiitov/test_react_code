import React from 'react'

const Button = ({ title, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			style={{
				padding: '20px',
				backgroundColor: '#4A026B',
				color: 'white',
				border: 'none',
			}}
		>
			{children}
		</button>
	)
}

export default Button
