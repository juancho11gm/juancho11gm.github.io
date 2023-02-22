import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { HamburgerMenu } from '@components/Icons/HamburgerMenu/HamburgerMenu';
import { Close } from '@components/Icons/Close/Close';
import styles from './MobileMenu.module.css';

type NavLink = {
	href: string;
	text: string;
};

const NavLink = ({ href, text }: NavLink) => {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<li
			className={classNames(
				'py-2 border-b-2',
				isActive ? 'font-bold text-gray-900 dark:text-gray-50' : 'text-gray-400'
			)}
		>
			<Link href={href} className={classNames(styles.link, 'flex')}>
				<div className={styles.star}>✧</div>
				<span className={styles.text}>{text}</span>
			</Link>
		</li>
	);
};

const NavList = () => {
	return (
		<ul
			className={classNames(
				'visible md:hidden top-full w-full h-screen absolute bg-grey-50s pl-1 pt-8 bg-gray-50 dark:bg-gray-900 z-10 overflow-hidden'
			)}
		>
			<NavLink href='/' text='Home' />
			<NavLink href='/projects' text='Projects' />
			<NavLink href='/about' text='About' />
		</ul>
	);
};

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		if (isOpen) {
			setIsOpen(false);
			document.body.style.overflow = '';
		} else {
			setIsOpen(true);
			document.body.style.overflow = 'hidden';
		}
	}

	useEffect(() => {
		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	return (
		<>
			<button
				className={classNames(styles.menuButton, 'visible md:hidden')}
				onClick={toggleMenu}
				aria-label='Hamburger Menu'
			>
				<HamburgerMenu data-hide={isOpen} />
				<Close data-hide={!isOpen} />
			</button>
			{isOpen && <NavList />}
		</>
	);
};

export { MobileMenu };
