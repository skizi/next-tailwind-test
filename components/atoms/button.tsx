type Props = React.ComponentProps<'input'>;

export const Button: React.FC = ({ onClick, children }: Props) => {
	return (
		<button
			className="bg-indigo-600 hover:bg-indigo-700 text-1xl rounded-md px-4 py-1 text-white"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
