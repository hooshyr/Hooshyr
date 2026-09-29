'use client'

import { useState } from 'react'
import { ButtonGroupItem } from './button-group-item'

export const ButtonGroup = ({ className = '', items, onChange, defaultValue }) => {

	const [value, setValue] = useState(defaultValue ?? items?.[0]?.value)

	const handleChange = (newValue) => {
		setValue(newValue)
		onChange?.(newValue)
	}

	return (
		<div className="overflow-auto w-full">
			<div className={`flex flex-row w-full ${className}`}>
				{items?.map((item) => (
					<ButtonGroupItem key={item.value} onClick={() => handleChange(item.value)} active={value === item.value}>
						{item.label}
					</ButtonGroupItem>
				))}
			</div>
		</div>
	)
}
