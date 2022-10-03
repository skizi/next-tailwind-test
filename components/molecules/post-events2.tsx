import React, { useCallback, useRef } from 'react';
import axios from 'axios';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';

export const PostEvents2: React.FC = ({ handleSubmit }) => {
	const zipcodeRef = useRef<HTMLInputElement>(null);
	const addressRef = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				const address = await handleSubmit(zipcodeRef.current.value);
				addressRef.current.value = address;
			}}
		>
			<Input placeholder="郵便番号" ref={zipcodeRef} className="mr-2 mb-2" />
			<Button>GET</Button>
			<br />
			<Input type="text" readOnly="readonly" ref={addressRef} />
		</form>
	);
};
