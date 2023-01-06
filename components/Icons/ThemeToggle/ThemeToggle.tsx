import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { Theme } from '@interfaces/theme';
import { moveX } from '@lib/animations';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const x = theme === Theme.Dark ? '100%' : '0';
	const decorationRef = useRef<HTMLDivElement>(null);

	// Translate the decorator the first time without animation.
	useEffect(() => {
		if (decorationRef.current)
			decorationRef.current.style.transform = `translateX(${x})`;
	}, []);

	useEffect(() => {
		if (decorationRef?.current) moveX(decorationRef.current, x);
	}, [theme]);

	const MoonIcon = () => (
		<>
			<circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='0.98' />
			<path
				d='M7.633 3.067A3.001 3.001 0 114.017 6.32M22 13.05a3.5 3.5 0 10-3 5.914'
				stroke='currentColor'
				strokeWidth='0.98'
			/>
			<path
				d='M14.5 8.51l.01-.011M10 17a2 2 0 100-4 2 2 0 000 4z'
				stroke='currentColor'
				strokeWidth='0.98'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	);

	const SunIcon = () => (
		<path
			d='M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
	);

	const onClickHandler = () => {
		new Audio('/assets/sounds/switch.mp3').play();
		setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
	};

	return (
		<div
			className='dark:bg-gray-50 bg-purple-700 w-20 h-10 sm:w-24 sm:h-12 flex relative rounded-3xl'
			onClick={onClickHandler}
		>
			<div className='h-full w-1/2 absolute p-1' ref={decorationRef}>
				<div className='h-full w-full dark:bg-purple-700 bg-gray-50 rounded-3xl'></div>
			</div>
			<button className='flex items-center justify-center w-1/2 h-full z-10'>
				<svg
					width={18}
					height={18}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					className='text-gray-500'
				>
					<SunIcon />
				</svg>
			</button>
			<button className='flex items-center justify-center w-1/2 h-full z-10'>
				<svg
					width={18}
					height={18}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					className='text-gray-50'
				>
					<MoonIcon />
				</svg>
			</button>
		</div>
	);
};

export { ThemeToggle };
