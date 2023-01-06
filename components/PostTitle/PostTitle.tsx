import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
	return (
		<h1 className='text-center text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none my-6 md:my-12'>
			{children}
		</h1>
	);
};

export { PostTitle };
