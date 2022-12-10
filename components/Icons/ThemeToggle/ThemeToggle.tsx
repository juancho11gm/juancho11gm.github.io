import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Theme } from '@interfaces/theme';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ width = 36, height = 36 }) => {
	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setIsDark(theme === Theme.Dark);
	}, [theme]);

	const MoonIcon = () => (
		<>
			<circle
				cx='12'
				cy='12'
				r='10'
				stroke='currentColor'
				strokeWidth='0.98'
				className={styles.moonIcon}
			/>
			<path
				d='M7.633 3.067A3.001 3.001 0 114.017 6.32M22 13.05a3.5 3.5 0 10-3 5.914'
				stroke='currentColor'
				strokeWidth='0.98'
				className={styles.moonIcon}
			/>
			<path
				d='M14.5 8.51l.01-.011M10 17a2 2 0 100-4 2 2 0 000 4z'
				stroke='currentColor'
				strokeWidth='0.98'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={styles.moonIcon}
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
			className={styles.sunIcon}
		></path>
	);

	const onClickHandler = () => {
		new Audio('/assets/sounds/switch.mp3').play();
		setTheme(isDark ? Theme.Light : Theme.Dark);
	};

	return (
		<button onClick={onClickHandler} aria-label='Theme'>
			<span className={isDark ? styles.moonIcon : styles.sunIcon}>
				<svg
					width={width}
					height={height}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					className='p-2 rounded-md cursor-pointer text-gray-50 bg-gray-500'
				>
					{isDark ? <SunIcon /> : <MoonIcon />}
				</svg>
			</span>
		</button>
	);
};

export { ThemeToggle };
