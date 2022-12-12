import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
	return (
		<h1 className='text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none my-12'>
			{children}
		</h1>
	);
};

export { PostTitle };
