import { useTheme } from 'next-themes';
import { Theme } from '@interfaces/theme';

const ThemeToggle = ({ width = 36, height = 36, onClickHandler }) => {
	const { theme } = useTheme();

	const MoonIcon = () => (
		<>
			{/* <circle
				cx='12'
				cy='12'
				r='10'
				stroke='currentColor'
				strokeWidth='1.5'
			></circle>
			<path
				d='M7.633 3.067A3.001 3.001 0 114.017 6.32M22 13.05a3.5 3.5 0 10-3 5.914'
				stroke='currentColor'
				strokeWidth='1.5'
			></path>
			<path
				d='M14.5 8.51l.01-.011M10 17a2 2 0 100-4 2 2 0 000 4z'
				stroke='currentColor'
				strokeWidth='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			></path> */}
		</>
	);

	const SunIcon = () => (
		<path
			d='M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1'
			stroke='currentColor'
			stroke-width='1.5'
			stroke-linecap='round'
			stroke-linejoin='round'
		></path>
	);

	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			className='p-2 rounded-md cursor-pointer text-gray-50 bg-gray-500'
			onClick={onClickHandler}
		>
			{theme === Theme.Dark ? <SunIcon /> : <MoonIcon />}
		</svg>
	);
};

export { ThemeToggle };
