import React from 'react';

type Props = React.ComponentProps<'input'>;

export const Input: React.FC = React.forwardRef(
	(
		{ type, min, max, placeholder, className, id, onChange, readOnly }: Props,
		ref
	) => {
		return (
			<input
				type={type}
				min={min}
				max={max}
				placeholder={placeholder}
				readOnly={readOnly}
				ref={ref}
				className={`border-solid border rounded-full border-gray-500 pl-4 py-1 ${className}`}
				id={id}
				onChange={onChange}
			/>
		);
	}
);
