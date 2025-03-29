import { Container } from '@components/Container/Container';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type NavLink = {
	href: string;
	text: string;
};

const NavLink = ({ href, text }: NavLink) => {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<NavigationMenuItem key={href + text} className='list-none'>
			<NavigationMenuLink
				href={href}
				className={classNames(
					'mx-1 group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground',
					isActive && 'bg-muted'
				)}
			>
				{text}
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
};

const Navbar = () => {
	return (
		<Container>
			<header className='relative flex justify-between items-center pt-8'>
				<NavigationMenu className='items-center flex justify-center w-full sm:justify-start'>
					<NavLink href='/' text='Home' />
					<NavLink href='/projects' text='Projects' />
					<NavLink href='/about' text='About' />
				</NavigationMenu>
			</header>
		</Container>
	);
};

export { Navbar };
