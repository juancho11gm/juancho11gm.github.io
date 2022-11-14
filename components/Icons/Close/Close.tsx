const Close = ({ width = 24, height = 24, ...restProps }) => (
	<svg
		className='text-gray-900 dark:text-white'
		width={width}
		height={height}
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		fill='none'
		{...restProps}
	>
		<path
			d='M6.758 17.243 12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export { Close };
