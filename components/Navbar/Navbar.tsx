import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Container } from '@components/Container/Container';
import { MobileMenu } from '@components/MobileMenu/MobileMenu';
import { ThemeToggle } from '@components/Icons/ThemeToggle/ThemeToggle';

const NavLink = ({ href, text }) => {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<Link
			href={href}
			className={classNames(
				'hidden md:inline-block rounded-md sm:px-3 sm:py-2 hover:bg-gray-300  hover:dark:text-black',
				isActive ? 'font-bold text-gray-900 dark:text-gray-50' : 'text-gray-400'
			)}
		>
			<span>{text}</span>
		</Link>
	);
};

const Navbar = () => {
	return (
		<Container>
			<header className='relative flex justify-between items-center pt-8'>
				<nav className='flex items-center md:block'>
					<NavLink href='/' text='Home' />
					<NavLink href='/blog' text='Blog' />
					<NavLink href='/books' text='Books' />
					<NavLink href='/about' text='About' />
					<MobileMenu />
				</nav>
				<ThemeToggle />
			</header>
		</Container>
	);
};

export { Navbar };
