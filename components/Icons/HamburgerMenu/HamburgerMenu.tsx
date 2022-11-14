const HamburgerMenu = ({ width = 24, height = 24, ...restProps }) => {
	return (
		<svg
			className='text-gray-900 dark:text-white'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			{...restProps}
		>
			<path
				d='M3 5h18M3 12h18M3 19h18'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export { HamburgerMenu };
