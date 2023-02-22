interface SectionTitleProps {
	text: string;
	level?: string | number;
}

const SectionTitle = ({ text, level = '1' }: SectionTitleProps) => {
	const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
	return (
		<HeadingTag className='text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8'>
			{text}
		</HeadingTag>
	);
};

export { SectionTitle };
