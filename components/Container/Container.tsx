type Props = {
	children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
	return <div className='container max-w-5xl px-5 m-auto'>{children}</div>;
};

export { Container };
