import { Book } from '@components/Book/Book';
import { SectionTitle } from '@components/SectionTitle/SectionTitle';
import styles from './BooksGrid.module.css';

const BooksGrid = () => {
	return (
		<section className='my-8'>
			<SectionTitle text='Recommended Books.' />
			<p className='my-4 md:my-8'>Here you will find some books I suggest.</p>
			<div className='my-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
				<Book imageUrl='/assets/books/the-psychology-of-money.webp' />
				<Book imageUrl='/assets/books/atomic-habits.webp' />
				<Book imageUrl='/assets/books/never-split-the-difference.webp' />
				<Book imageUrl='/assets/books/lo-que-debes-saber-del-dinero.webp' />
			</div>
		</section>
	);
};

export { BooksGrid };
