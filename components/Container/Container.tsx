type Props = {
	children?: React.ReactNode;
};

const Container = ({ children, ...restProps }: Props) => {
	return <div className='container mx-auto px-5'>{children}</div>;
};

export { Container };
